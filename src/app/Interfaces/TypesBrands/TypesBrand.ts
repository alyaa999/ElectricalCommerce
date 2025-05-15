export interface Brand {
    id: number;
    name: string;
}

export interface BrandToSend {
    name: string;
}

export interface Type {
    id: number;
    name: string;
    image: string;
}


export interface TypeToSend {
    name: string;
    picture: File;
}