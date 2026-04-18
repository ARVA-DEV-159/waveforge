export class AudioBuilderService {
    constructor(writeAudioUc, readAudioUc) {
        this.writeAudioUc = writeAudioUc;
        this.readAudioUc = readAudioUc;
    }
    async readAudio(path) {
        return await this.readAudioUc.execute(path);
    }
    async createWav(buffers, data) {
        await this.writeAudioUc.execute(buffers, data);
    }
}
