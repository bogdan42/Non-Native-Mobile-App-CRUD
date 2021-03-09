export class Bookmark{
    public id: number;
    public name: string;
    public description: string;
    public url: string;
    public type: string;
    public rating: number;

    constructor(id: number, name: string, description: string, url: string, type: string, rating: number){
        this.id = id;
        this.name = name;
        this.url = url;
        this.description = description;
        this.type = type;
        this.rating= rating;
    }

}
