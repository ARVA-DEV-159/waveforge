export * from "./domain/entities/AudioBufferEntity.js";
export * from "./domain/entities/AudioInfoEntity.js";
export declare const readAudio: (path: string) => Promise<import("./domain/entities/AudioBufferEntity.js").AudioBufferEntity[]>;
export declare const writeAudio: (buffers: import("./domain/entities/AudioBufferEntity.js").AudioBufferEntity[], data: import("./domain/entities/AudioInfoEntity.js").AudioInfoEntity) => Promise<void>;
//# sourceMappingURL=index.d.ts.map