import { AudioBufferEntity } from "../domain/entities/AudioBufferEntity.js";
export declare class AudioUtils {
    constructor();
    static mergeBuffer(buffers: AudioBufferEntity[]): [number[], number[]];
    static interleave(samples: [number[], number[]]): Float32Array;
}
//# sourceMappingURL=AudioUtils.d.ts.map