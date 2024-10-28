export class Pokemon {
    id: string = "";
    name: string = "";
    url: string = "";
}

export class PokemonDetailled extends Pokemon {
    height: number = 0;
    weight: number = 0;
    abilities: Ability[] = [];
    sprites: Sprites = {
        M_back: "",
        M_front: "",
        M_back_shiny: "",
        M_front_shiny: "",
        F_back: "",
        F_front: "",
        F_back_shiny: "",
        F_front_shiny: ""
    }
}

interface Sprites {
    M_back: string,
    M_front: string,
    M_back_shiny: string,
    M_front_shiny: string,
    F_back: string,
    F_front: string,
    F_back_shiny: string,
    F_front_shiny: string
}

interface AbilityInfo {
    name: string;
    url: string;
}

export class Ability {
    ability: AbilityInfo = {name: "", url: ""}
    slot: number = 0;
    is_hidden: boolean = false;
}

export const POKEMON_LIST_PLACEHOLDER: Pokemon[] = [
    {
        id: "1",
        name: "toto",
        url: "undefined"
    },
    {
        id: "2",
        name: "titi",
        url: "undefined"
    },
    {
        id: "3",
        name: "tata",
        url: "undefined"
    },
    {
        id: "4",
        name: "tutu",
        url: "undefined"
    },
    {
        id: "5",
        name: "tyty",
        url: "undefined"
    },
] 