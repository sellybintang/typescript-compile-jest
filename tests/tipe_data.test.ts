// pada ts yang bersifat sensitif tipe data harus dideklasikan dan value harus sesuai dengan tipe data yang dideklarasikan

describe ('tipeData', function(){
    it('should be declare', function (){
        const name:string = 'Selly Bintang'
        const age:number = 21
        // tidak bisa number karena akan terbaca menjadi bilangan oktal atau bilangan berbasis 8, maka dari itu diganti string
        const telp:string="087575843"
        const isVip:boolean = true
        console.info(name)
        console.info(age)
        console.info(telp)
        console.info(isVip)
    })
    
})