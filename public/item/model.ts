export class ItemType {

    public id: string;

    constructor(id: string) {
        this.id = id;
    }
}

export class ItemSlot {

    public id: string;
    public type: ItemType;

    constructor(type: ItemType, id?: string) {        
        this.type = type;
        this.id = id || type.id;
    }
}

export class ItemIdentifier {
    
    public id: string;
    public name: string;
    public type: ItemType;

    constructor(id: string, name: string, type: ItemType) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

export class Item {

    public id: string;
    public name: string;
    public type: ItemType;
    public details: any; //Might add some typing on this if I start consuming it directly

    constructor(identifier: ItemIdentifier, details: any) {
        this.id = identifier.id;
        this.name = identifier.name;
        this.type = identifier.type;
        this.details = details;
    }
}

export const ITEM_TYPES = {    
    HELM: new ItemType('Helm'),
    NECK: new ItemType('Neck'),
    CHEST: new ItemType('Chest'),
    GLOVES: new ItemType('Gloves'),
    BRACERS: new ItemType('Bracers'),
    SHOULDERS: new ItemType('Shoulders'),
    CLOAK: new ItemType('Cloak'),
    BELT: new ItemType('Belt'),
    BOOTS: new ItemType('Boots'),
    PANTS: new ItemType('Pants'),
    WEAPON: new ItemType('Weapon'),
    OFF_HAND: new ItemType('OffHand'),
    TRINKET: new ItemType('Trinket'),
    RING: new ItemType('Ring')
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
    TRINKET1: new ItemSlot(ITEM_TYPES.TRINKET, 'Trinket_One'),
    TRINKET2: new ItemSlot(ITEM_TYPES.TRINKET, 'Trinket_Two'),
    RING1: new ItemSlot(ITEM_TYPES.RING, 'Ring_One'),
    RING2: new ItemSlot(ITEM_TYPES.RING, 'Ring_Two')
}