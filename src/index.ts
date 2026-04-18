import { WriteAudioUc } from "./application/WriteAudioUc.js";
import { ReadAudioUc } from "./application/ReadAudioUc.js";
import { AudioBuilderService } from "./infrastructure/AudioBuilderService.js";

// =========================
// Domain exports (public API)
// =========================
export * from "./domain/entities/AudioBufferEntity.js";
export * from "./domain/entities/AudioInfoEntity.js";

// =========================
// Composition Root
// =========================
const writeAudioUc = new WriteAudioUc();
const readAudioUc = new ReadAudioUc();

const audioService = new AudioBuilderService(
  writeAudioUc,
  readAudioUc
);

// =========================
// Public API (named exports)
// =========================
export const readAudio = audioService.readAudio.bind(audioService);
export const writeAudio = audioService.createWav.bind(audioService);