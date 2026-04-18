import { spawn } from "child_process"
import ffmpegPath from "ffmpeg-static"

export class AudioDecoder {

    decode(path: string): Promise<{
        audioData: Buffer
        sampleRate: number
        channels: number
    }> {

        return new Promise((resolve, reject) => {

            const ffmpeg = spawn(ffmpegPath! as any, [

                "-i", path,

                "-f", "s16le",
                "-acodec", "pcm_s16le",

                "-ac", "2",
                "-ar", "44100",

                "pipe:1"
            ])

            const chunks: Buffer[] = []

            ffmpeg.stdout.on("data", chunk => {
                chunks.push(chunk)
            })

            ffmpeg.stderr.on("data", () => { })

            ffmpeg.on("close", () => {

                const audioData = Buffer.concat(chunks)

                resolve({
                    audioData,
                    sampleRate: 44100,
                    channels: 2
                })
            })

            ffmpeg.on("error", reject)
        })
    }
}