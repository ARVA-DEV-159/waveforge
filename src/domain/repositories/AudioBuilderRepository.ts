import { AudioBuffer } from "../entities/AudioBufferEntity.js";
import { AudioInfo } from "../entities/AudioInfoEntity.js";

export interface AudioBuilderRepository {
    createWav(buffers: AudioBuffer[], data: AudioInfo): Promise<void>;
    readAudio(path: string): Promise<AudioBuffer[]>
}