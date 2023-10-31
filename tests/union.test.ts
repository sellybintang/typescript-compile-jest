describe ('Union', function(){
    it('should union type', function(){
        let data_person : string|number|Boolean=
        "Selly"
        console.info(data_person)
        data_person=true
        console.info(data_person)
        data_person=44
        console.info(data_person)       
    })

    it ('should union condition',   function(){
        function person(value: number|string|boolean){
            if (typeof value === 'string'){
                return value.toUpperCase()
            
            }else if(typeof value === 'number'){
                return value +3
            }else{
                return !value
            }
        }
       expect (person("Selly")).toBe("SELLY")
       expect(person(100)).toBe(103)
       expect(person(true)).toBe(false)
       console.info(person("Bintang"))
    })
})