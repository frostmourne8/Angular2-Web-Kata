export class Identifier<T> {
    constructor (idStr: string) {}
}

export class Character {

    public id: Identifier<Character>;
    public name: string;
    public server: string;

    constructor(id: string, name: string, server: string) {
        this.id = new Identifier(id);
        this.name = name;
        this.server = server;
    }
}

export class ItemType {

    public id: Identifier<ItemType>;
    public icon: URL;

    constructor(id: string, iconUrl: string) {
        this.id = new Identifier(id);
        this.icon = new URL(iconUrl);
    }
}

export class Item {

    public id: Identifier<Item>;
    public name: string;
    public type: ItemType;

    constructor(id: string, name: string, type: ItemType) {
        this.id = new Identifier(id);
        this.name = name;
        this.type = type;
    }
}

export const ITEM_TYPES = {    
    HELM: new ItemType('Helm', 'images/items/helm.png'),
    NECK: new ItemType('Neck', 'images/items/amulet.png'),
    CHEST: new ItemType('Chest', 'images/items/chest.png'),
    GLOVES: new ItemType('Gloves', 'images/items/gloves.png'),
    BRACERS: new ItemType('Bracers', 'images/items/bracers.png'),
    SHOULDERS: new ItemType('Shoulders', 'images/items/shoulders.png'),
    CLOAK: new ItemType('Cloak', 'images/items/cloak.png'),
    BELT: new ItemType('Belt', 'images/items/belt.png'),
    BOOTS: new ItemType('Boots', 'images/items/boots.png'),
    PANTS: new ItemType('Pants', 'images/items/pants.png'),
    WEAPON: new ItemType('Weapon', 'images/items/weapon.png'),
    OFF_HAND: new ItemType('OffHand', 'images/items/shield.png'),
    TRINKET: new ItemType('Trinket', 'images/items/trinket.png'),
    RING: new ItemType('Ring', 'images/items/ring.png')
};