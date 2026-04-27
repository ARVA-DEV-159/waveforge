import { WriteAudioUc } from "./application/AudioBuilder/WriteAudioUc.js";
import { ReadAudioUc } from "./application/AudioBuilder/ReadAudioUc.js";
import { AudioBuilderService } from "./infrastructure/AudioBuilderService.js";
import { AudioToolsService } from "./infrastructure/AudioToolsService.js";
import { DiscreteFourierTransformUc } from "./application/AudioTools/DiscreteFourierTransformUc.js";
import { SplitSignalUc } from "./application/AudioTools/SplitSignalUc.js";

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

const dftUc = new DiscreteFourierTransformUc();
const split = new SplitSignalUc();

const audioService = new AudioBuilderService(
  writeAudioUc,
  readAudioUc
);

const audioToolsService = new AudioToolsService(dftUc, split);

// =========================
// Public API (named exports)
// =========================
export const readAudio = audioService.readAudio.bind(audioService);
export const writeAudio = audioService.createWav.bind(audioService);

export const dft = audioToolsService.dft.bind(audioToolsService);
export const splitAudio = audioToolsService.splitSignal.bind(audioToolsService);