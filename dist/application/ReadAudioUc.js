import { AudioDecoder } from "../utils/AudioDecoder.js";
export class ReadAudioUc {
    constructor() {
        this.decoder = new AudioDecoder();
    }
    async execute(path) {
        const { audioData, sampleRate, channels } = await this.decoder.decode(path);
        const { left, right } = this.splitStereo(audioData, channels);
        return this.splitBySeconds(left, right, sampleRate, channels);
    }
    splitStereo(buffer, channels) {
        const samples = new Int16Array(buffer.buffer, buffer.byteOffset, buffer.length / 2);
        const totalSamples = samples.length / channels;
        const left = new Float32Array(totalSamples);
        const right = new Float32Array(totalSamples);
        for (let i = 0, j = 0; i < samples.length; i += channels, j++) {
            left[j] = samples[i] / 32768;
            right[j] = samples[i + 1] / 32768;
        }
        return { left, right };
    }
    splitBySeconds(left, right, sampleRate, channels) {
        const samplesPerSecond = sampleRate;
        const result = [];
        const totalSamples = left.length;
        for (let i = 0; i < totalSamples; i += samplesPerSecond) {
            const leftChunk = left.slice(i, i + samplesPerSecond);
            const rightChunk = right.slice(i, i + samplesPerSecond);
            result.push({
                samples: [
                    Array.from(leftChunk),
                    Array.from(rightChunk)
                ],
                sampleRate,
                channels,
                size: leftChunk.length,
                timeDuration: leftChunk.length / sampleRate
            });
        }
        return result;
    }
}
