import { AudioSignal } from "../../domain/entities/AudioSignalEntity.js";
import { AudioSpectrum } from "../../domain/entities/AudioSpectrumEntity.js";

export class DiscrectFourierTransformUc {
    constructor() {}

    public execute(signal: AudioSignal, sampleRate: number): AudioSpectrum[] {
        const N = signal.left.length;
        const result: AudioSpectrum[] = [];

        const half = Math.floor(N / 2);

        for (let k = 0; k < half; k++) {
            let lReal = 0;
            let lImag = 0;
            
            let rReal = 0;
            let rImag = 0;

            for (let n = 0; n < N; n++) {
                const angle = (2 * Math.PI * k * n) / N;

                lReal += signal.left[n] * Math.cos(angle);
                lImag -= signal.left[n] * Math.sin(angle);

                rReal += signal.right[n] * Math.cos(angle);
                rImag -= signal.right[n] * Math.sin(angle);
            }

            const lMagnitude = (2 / N) * Math.sqrt(lReal * lReal + lImag * lImag);
            const rMagnitude = (2 / N) * Math.sqrt(rReal * rReal + rImag * rImag);

            const frequency = (k * sampleRate) / N;

            result.push({
                left: {
                    frequency,
                    magnitude: lMagnitude
                },
                right: {
                    frequency,
                    magnitude: rMagnitude
                }
            });
        }

        return result;
    }
}