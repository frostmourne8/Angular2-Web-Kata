import { Character, Item, ItemType } from 'app/model';

export class WishList {

    private items: Map<ItemType, Item>;
    private collected: Map<ItemType, boolean>;

    constructor(private character: Character) {
        this.items = new Map<ItemType, Item>();
        this.collected = new Map<ItemType, boolean>();
    }

    public addItem(item: Item) {
        this.items.set(item.type, item);
    }

    public itemForType(type: ItemType): Item {
        return this.items.get(type);
    }

    public setCollected(type: ItemType, collected: boolean) {
        this.collected.set(type, collected);
    }

    public isCollected(type: ItemType): boolean {
        return this.collected.get(type);
    }
}