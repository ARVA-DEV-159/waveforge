import { DiscrectFourierTransformUc } from "../application/AudioTools/DiscrectFourierTransformUc.js";
import { AudioSignal } from "../domain/entities/AudioSignalEntity.js";
import { AudioSpectrum } from "../domain/entities/AudioSpectrumEntity.js";
import { AudioToolsRepository } from "../domain/repositories/AudioToolsRepository.js";

export class AudioToolsService implements AudioToolsRepository {
    constructor(
        private dftUc: DiscrectFourierTransformUc
    ) {}
    
    public dft(signal: AudioSignal, sampleRate: number = 44100): AudioSpectrum[] {
        return this.dftUc.execute(signal, sampleRate);
    }
}