import { MuseClient, channelNames } from 'muse-js';

class Mind {

  constructor() {
    this.muse = new MuseClient();
    this.state = false;
  }

  connect = () => {
    return new Promise((resolve) => {
      return this.muse.connect()
      .then(() => this.muse.start())
      .then(() => {
        let lastTime = Date.now();

        this.muse.eegReadings.subscribe(r => {
          resolve();

          const { samples } = r;
          const currentTime = Date.now();

          if (currentTime - lastTime > 3000) {
            this.state = false;
            return lastTime = currentTime;
          }

          if (Math.max(...samples.map(n => Math.abs(n))) > 500) {
            this.state = true;
          }
        });
      });
    });
  };

}

export default new Mind();