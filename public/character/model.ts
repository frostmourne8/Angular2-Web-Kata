export class Character {

    public id: string;
    public name: string;
    public server: string;

    constructor(id: string, name: string, server: string) {
        this.id = id;
        this.name = name;
        this.server = server;
    }
}