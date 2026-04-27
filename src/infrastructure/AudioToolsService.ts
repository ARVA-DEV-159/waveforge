import { DiscreteFourierTransformUc } from "../application/AudioTools/DiscreteFourierTransformUc.js";
import { SplitSignalUc } from "../application/AudioTools/SplitSignalUc.js";
import { AudioSignal } from "../domain/entities/AudioSignalEntity.js";
import { AudioSpectrum } from "../domain/entities/AudioSpectrumEntity.js";
import { AudioToolsRepository } from "../domain/repositories/AudioToolsRepository.js";

export class AudioToolsService implements AudioToolsRepository {
    constructor(
        private dftUc: DiscreteFourierTransformUc,
        private splitSignalUc: SplitSignalUc
    ) { }

    public dft(signal: AudioSignal, sampleRate: number = 44100): AudioSpectrum[] {
        return this.dftUc.execute(signal, sampleRate);
    }

    public splitSignal(signal: AudioSignal, chunkSize: number): AudioSignal[] {
        return this.splitSignalUc.execute(signal, chunkSize);
    }
}