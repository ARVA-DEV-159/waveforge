import { AudioSignal } from "../../domain/entities/AudioSignalEntity.js";

export class SplitSignalUc {
    public execute(signal: AudioSignal, chunkSize: number) {
        const chunks: AudioSignal[] = [];

        for (let i = 0; i < signal.left.length; i += chunkSize) {
            const leftChunk = signal.left.slice(i, i + chunkSize);
            const rightChunk = signal.right.slice(i, i + chunkSize);
            
            if (
                leftChunk.length === chunkSize &&
                rightChunk.length === chunkSize
            ) {
                chunks.push({
                    left: leftChunk,
                    right: rightChunk
                });
            }
        }

        return chunks;
    }
}