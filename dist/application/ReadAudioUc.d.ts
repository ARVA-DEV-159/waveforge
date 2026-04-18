import type { AudioBufferEntity } from "../domain/entities/AudioBufferEntity.js";
export declare class ReadAudioUc {
    private decoder;
    execute(path: string): Promise<AudioBufferEntity[]>;
    private splitStereo;
    private splitBySeconds;
}
//# sourceMappingURL=ReadAudioUc.d.ts.map