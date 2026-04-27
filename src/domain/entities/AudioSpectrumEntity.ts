export interface AudioSpectrum {
    left: Spectrum;
    right: Spectrum;
}

export interface Spectrum {
    frequency: number;
    magnitude: number;
}