import { Item } from 'app/model';

export class Boss {
    constructor(public name: string, public items: Array<Item>, public image: URL) {}
}

export class Raid {
    constructor(public name: string, public bosses: Array<Boss>, public image: URL) {}
}

export class RaidRun {

    private currentBossIndex: number;
    private collectedItems: Array<Item>;

    constructor(public raid: Raid) {
        this.currentBossIndex = 0;
        this.collectedItems = [];
    }

    public currentBoss(): Boss {
        return this.raid.bosses[this.currentBossIndex];
    }

    public nextBoss() {
        this.currentBossIndex++;
    }

    public addCollectedItem(item: Item) {
        this.collectedItems.push(item);
    }
}