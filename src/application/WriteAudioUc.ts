import { AudioInfoEntity } from "../domain/entities/AudioInfoEntity.js";
import { AudioBufferEntity } from "../domain/entities/AudioBufferEntity.js";
import path from "path";
import { AudioUtils } from "../utils/AudioUtils.js";
import { AudioEncoder } from "../utils/AudioEncoder.js";

export class WriteAudioUc {

    public async execute(
        buffers: AudioBufferEntity[],
        data: AudioInfoEntity
    ) {

        const output = path.join(
            data.path,
            `${data.name}.${data.format ?? "wav"}`
        )

        await this.processBuffers(buffers, output, data.sampleRate ?? 44100);
    }

    private async processBuffers(
        buffers: AudioBufferEntity[],
        output: string,
        targetSampleRate: number = buffers[0].sampleRate
    ) {

        const merged = AudioUtils.mergeBuffer(buffers)
        const interleaved = AudioUtils.interleave(merged)

        const originalSampleRate = buffers[0].sampleRate
        const channels = buffers[0].channels ?? 2

        await AudioEncoder.encode(
            interleaved,
            originalSampleRate,
            targetSampleRate,
            channels,
            output
        )
    }
}