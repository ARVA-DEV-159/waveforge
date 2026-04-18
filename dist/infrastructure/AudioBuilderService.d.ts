import { WriteAudioUc } from "../application/WriteAudioUc.js";
import { ReadAudioUc } from "../application/ReadAudioUc.js";
import { AudioBufferEntity } from "../domain/entities/AudioBufferEntity.js";
import { AudioInfoEntity } from "../domain/entities/AudioInfoEntity.js";
import { AudioBuilderRepository } from "../domain/repositories/AudioBuilderRepository.js";
export declare class AudioBuilderService implements AudioBuilderRepository {
    private writeAudioUc;
    private readAudioUc;
    constructor(writeAudioUc: WriteAudioUc, readAudioUc: ReadAudioUc);
    readAudio(path: string): Promise<AudioBufferEntity[]>;
    createWav(buffers: AudioBufferEntity[], data: AudioInfoEntity): Promise<void>;
}
//# sourceMappingURL=AudioBuilderService.d.ts.map