import { spawn } from "child_process";
import ffmpegPath from "ffmpeg-static";
export class AudioEncoder {
    static encode(samples, originalSampleRate, targetSampleRate, channels, output) {
        return new Promise((resolve, reject) => {
            const ffmpeg = spawn(ffmpegPath, [
                "-y",
                "-f", "s16le",
                "-ar", originalSampleRate.toString(),
                "-ac", channels.toString(),
                "-i", "pipe:0",
                "-ar", targetSampleRate.toString(),
                output
            ]);
            ffmpeg.stdin.on("error", reject);
            ffmpeg.on("error", reject);
            const buffer = Buffer.alloc(samples.length * 2);
            for (let i = 0; i < samples.length; i++) {
                const s = Math.max(-1, Math.min(1, samples[i]));
                buffer.writeInt16LE(s * 0x7fff, i * 2);
            }
            ffmpeg.stdin.write(buffer, () => {
                ffmpeg.stdin.end();
            });
            ffmpeg.on("close", () => resolve());
        });
    }
}
