export type Film={
    id:number;
    attributes:Attribute;
}

export interface Attribute{
    title:string;
    released : Date;
    director:string;
    poster:Poster
}

export interface Poster{
    data:Data;
}

interface Data{
    attributes:Attributes;
}

interface Attributes{
    
    url:string;
    width: number;
    height: number;
}