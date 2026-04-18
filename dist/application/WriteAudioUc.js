import path from "path";
import { AudioUtils } from "../utils/AudioUtils.js";
import { AudioEncoder } from "../utils/AudioEncoder.js";
export class WriteAudioUc {
    async execute(buffers, data) {
        const output = path.join(data.path, `${data.name}.${data.format ?? "wav"}`);
        await this.processBuffers(buffers, output, data.sampleRate ?? 44100);
    }
    async processBuffers(buffers, output, targetSampleRate = buffers[0].sampleRate) {
        const merged = AudioUtils.mergeBuffer(buffers);
        const interleaved = AudioUtils.interleave(merged);
        const originalSampleRate = buffers[0].sampleRate;
        const channels = buffers[0].channels ?? 2;
        await AudioEncoder.encode(interleaved, originalSampleRate, targetSampleRate, channels, output);
    }
}
