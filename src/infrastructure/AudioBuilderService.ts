import { WriteAudioUc } from "../application/WriteAudioUc.js";
import { ReadAudioUc } from "../application/ReadAudioUc.js";
import { AudioBuffer } from "../domain/entities/AudioBufferEntity.js";
import { AudioInfo } from "../domain/entities/AudioInfoEntity.js";
import { AudioBuilderRepository } from "../domain/repositories/AudioBuilderRepository.js";

export class AudioBuilderService implements AudioBuilderRepository{
    constructor(
        private writeAudioUc: WriteAudioUc,
        private readAudioUc: ReadAudioUc
    ) {}
   
    public async readAudio(path: string): Promise<AudioBuffer[]> {
        return await this.readAudioUc.execute(path);
    }

    public async createWav(buffers: AudioBuffer[], data: AudioInfo): Promise<void> {
        await this.writeAudioUc.execute(buffers, data);
    }
}