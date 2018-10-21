import { MuseClient, channelNames } from 'muse-js';

export default class Mind {

  constructor() {
    this.muse = new MuseClient();
  }

  async connect() {
    await this.muse.connect();
    await this.muse.start();

    let lastTime = Date.now();

    this.muse.eegReadings.subscribe(r => {
      const { samples } = r;
      const currentTime = Date.now();

      if (currentTime - lastTime > 3000) {
        this.setState({ confirmed: false });
        return lastTime = currentTime;
      }

      if (Math.max(...samples.map(n => Math.abs(n))) > 500) {
        this.setState({ confirmed: true });
      }
    });
  }
}