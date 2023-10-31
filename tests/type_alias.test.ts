import { Category, product } from '../src/type-alias';

describe('type_alias', function () {
    it('should type alias', function () {
        const typeAlias:Category={
            id:"1",
            name:"Selly"
        }
        const product:product={
            id:"1",
            name:"Bintang",
            category:typeAlias,
            price:1090349
        }
    // tidak bisa karena di tipe alias tidak ada jadi tidak bisa ditambah
        // product.description ="test"
        console.info(product)
        console.info(typeAlias)
    })
   
})