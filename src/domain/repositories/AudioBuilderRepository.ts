import { AudioBufferEntity } from "../entities/AudioBufferEntity.js";
import { AudioInfoEntity } from "../entities/AudioInfoEntity.js";

export interface AudioBuilderRepository {
    createWav(buffers: AudioBufferEntity[], data: AudioInfoEntity): Promise<void>;
    readAudio(path: string): Promise<AudioBufferEntity[]>
}