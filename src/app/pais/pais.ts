export class Pais {
    id: number;
    name: string;
    formation_year: number;
    official_language: number;
    capital: string;
    description: string;
    flag: string;

    public constructor(id: number, name: string, formation_year: number, official_language: number, capital: string, description: string, flag: string,){
        this.id = id;
        this.name = name;
        this.formation_year = formation_year;
        this.official_language = official_language;
        this.capital = capital;
        this.description = description;
        this.flag = flag
    }
}
