export interface Product {
    id:string
    name:string
    age:number
    readonly nib:string
    readonly npwp:string
}
// sama saja dengan tyoe namun ini lebih kompleks saja namun ketika dicompile dia akan kosong karena penggunaan interface hanya untuk typesript

// extends melanjutkan atau copas isi atribut tanpa merequest ulang

export interface employee {
    id: string;
    name: string;
    age: number;
}

export interface employee2 extends employee {
    address: string;
}