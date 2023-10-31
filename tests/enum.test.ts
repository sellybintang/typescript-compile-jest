import { Role, Roles } from "../src/enum"
import { product } from '../src/type-alias';

describe("enum",function() {
    it("should enum",function(){
        const process : product={
            id:"1",
            name:"Selly",
            price:Role.Admin,

        }
        console.info (process)
    })
})