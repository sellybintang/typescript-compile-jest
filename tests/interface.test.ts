import { Product, employee, employee2 } from "../src/interface"

describe("enum",function() {
    it("should enum",function(){
        const process :Product ={
            id:"1",
            name:"Selly",
            age:22,
            nib:"3432732",
            npwp:"34894"

        }
        process.id="4"
        // tidak bisa dirubah karena menggunakan tipe readonly
        // process.nib="34343333"
        console.info (process)
    })

    it("should support function interface", function(){
        interface addProduct{
            (value1:number, value2:number):number
        }
            const add :addProduct=(value1:number, value2:number):number =>{
                return value1 + value2;
            }
        
            expect (add(2,4)).toBe (6)
            console.info(add(6,7))
    })

    it ('should add employee', function(){
        const person :employee={
            id:"1",
            name:"John",
            age:2
        }
        const people :employee2={
            id:"1",
            name:"John",
            age:2,
            address:"Banyuwangi"
        }
        console.info(person, people)
    })

    it('should supprt to typeScript', function(){
        function sayHello(name:string):string {
            return name=`Hello${name}`
        }
        console.info(sayHello('Selly'))

        function sayHello1(name:string):void {
            console.info(`Hello 1 ${name}`)
        }
        sayHello1("Selly")
    })


})