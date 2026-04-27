import { AudioSignal } from "../entities/AudioSignalEntity.js";
import { AudioSpectrum } from "../entities/AudioSpectrumEntity.js";

export interface AudioToolsRepository {
    dft(signal: AudioSignal, sampleRate: number): AudioSpectrum[];
    splitSignal(signal: AudioSignal, chunkSize: number): AudioSignal[];
}