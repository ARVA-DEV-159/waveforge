import { AudioBuffer } from "../domain/entities/AudioBufferEntity.js"

export class AudioUtils {
    constructor() { }

    public static mergeBuffer(buffers: AudioBuffer[]): [number[], number[]] {
        const left: number[] = []
        const right: number[] = []

        for (const buff of buffers) {
            left.push(...buff.samples[0])
            right.push(...buff.samples[1])
        }

        return [left, right]
    }

    static interleave(samples: [number[], number[]]): Float32Array {

        const left = samples[0]
        const right = samples[1]

        const length = Math.max(left.length, right.length)

        const interleaved = new Float32Array(length * 2)

        let index = 0

        for (let i = 0; i < length; i++) {

            interleaved[index++] = left[i] ?? 0
            interleaved[index++] = right[i] ?? 0
        }

        return interleaved
    }
}