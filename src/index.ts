import { WriteAudioUc } from "./application/AudioBuilder/WriteAudioUc.js";
import { ReadAudioUc } from "./application/AudioBuilder/ReadAudioUc.js";
import { AudioBuilderService } from "./infrastructure/AudioBuilderService.js";
import { AudioToolsService } from "./infrastructure/AudioToolsService.js";
import { DiscrectFourierTransformUc } from "./application/AudioTools/DiscrectFourierTransformUc.js";

// =========================
// Domain exports (public API)
// =========================
export * from "./domain/entities/AudioBufferEntity.js";
export * from "./domain/entities/AudioInfoEntity.js";
export * from "./domain/entities/AudioSignalEntity.js";

// =========================
// Composition Root
// =========================
const writeAudioUc = new WriteAudioUc();
const readAudioUc = new ReadAudioUc();

const dftUc = new DiscrectFourierTransformUc();

const audioService = new AudioBuilderService(
  writeAudioUc,
  readAudioUc
);

const audioToolsService = new AudioToolsService(dftUc);

// =========================
// Public API (named exports)
// =========================
export const readAudio = audioService.readAudio.bind(audioService);
export const writeAudio = audioService.createWav.bind(audioService);

export const dft = audioToolsService.dft.bind(audioToolsService);