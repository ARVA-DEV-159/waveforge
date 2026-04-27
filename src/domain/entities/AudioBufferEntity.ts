import { AudioSignal } from "./AudioSignalEntity.js";

export interface AudioBuffer {
    samples: AudioSignal;
    sampleRate: number;
    channels?: number;
    size?: number;
    timeDuration?: number;
}