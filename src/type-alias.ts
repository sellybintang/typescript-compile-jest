export type Category = {
    id:string|number
    name:string
}

export type product = {
    id:string 
    name:string
    price:number
    // ? untuk tanda optional atau sunnah
    category?:Category
}