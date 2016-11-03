export class ItemType {

    public id: string;
    public icon: URL;

    constructor(id: string, iconUrl: string) {
        this.id = id;
        this.icon = new URL(iconUrl);
    }
}

export class ItemSlot {

    public name: string;
    public type: ItemType;

    constructor(type: ItemType, name?: string) {        
        this.type = type;
        this.name = name || type.id;
    }
}

export class Item {

    public id: string;
    public name: string;
    public type: ItemType;

    constructor(id: string, name: string, type: ItemType) {
        this.id = id;
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

export const ITEM_SLOTS = {
    HELM: new ItemSlot(ITEM_TYPES.HELM),
    NECK: new ItemSlot(ITEM_TYPES.NECK),
    CHEST: new ItemSlot(ITEM_TYPES.CHEST),
    GLOVES: new ItemSlot(ITEM_TYPES.GLOVES),
    BRACERS: new ItemSlot(ITEM_TYPES.BRACERS),
    SHOULDERS: new ItemSlot(ITEM_TYPES.SHOULDERS),
    CLOAK: new ItemSlot(ITEM_TYPES.CLOAK),
    BELT: new ItemSlot(ITEM_TYPES.BELT),
    BOOTS: new ItemSlot(ITEM_TYPES.BOOTS),
    PANTS: new ItemSlot(ITEM_TYPES.PANTS),
    WEAPON: new ItemSlot(ITEM_TYPES.WEAPON),
    OFF_HAND: new ItemSlot(ITEM_TYPES.OFF_HAND),
    TRINKET1: new ItemSlot(ITEM_TYPES.TRINKET, 'Trinket One'),
    TRINKET2: new ItemSlot(ITEM_TYPES.TRINKET, 'Trinket Two'),
    RING1: new ItemSlot(ITEM_TYPES.RING, 'Ring One'),
    RING2: new ItemSlot(ITEM_TYPES.RING, 'Ring Two')
}