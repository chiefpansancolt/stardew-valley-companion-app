
export default class DefaultTracking {
  constructor(farmName, playerName, uniqueName) {
    this.farmName = farmName;
    this.playerName = playerName;
    this.uniqueName = uniqueName;
  }

  baseOutput() {
    const p = {
      uniqueName: this.uniqueName,
      playerName: this.playerName,
      farmName: this.farmName,
      fileVersion: 1.5,
      minerals: {},
      artifacts: {},
    };

    return JSON.stringify(p);
  }

  main() {
    const p = {
      playthroughs: [
        {
          farmName: this.farmName,
          playerName: this.playerName,
          uniqueName: this.uniqueName,
        },
      ],
    };

    return JSON.stringify(p);
  }

  mainAdd(existing) {
    const p = JSON.parse(existing);
    const a = {
      farmName: this.farmName,
      playerName: this.playerName,
      uniqueName: this.uniqueName,
    };
    p.playthroughs.push(a);
    return JSON.stringify(p);
  }

  remove(existing) {
    let i = 0;
    const p = JSON.parse(existing);
    for (let index = 0; index < p.playthroughs.length; index++) {
      if (p.playthroughs[index].uniqueName == this.uniqueName) {
        i = index;
      }
    }
    p.playthroughs.splice(i);
    return JSON.stringify(p);
  }
}
