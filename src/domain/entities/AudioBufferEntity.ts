export interface AudioBuffer {
    samples: [number[], number[]];
    sampleRate: number;
    channels?: number;
    size?: number;
    timeDuration?: number;
}