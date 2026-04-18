import { AudioInfoEntity } from "../domain/entities/AudioInfoEntity.js";
import { AudioBufferEntity } from "../domain/entities/AudioBufferEntity.js";
export declare class WriteAudioUc {
    execute(buffers: AudioBufferEntity[], data: AudioInfoEntity): Promise<void>;
    private processBuffers;
}
//# sourceMappingURL=WriteAudioUc.d.ts.map