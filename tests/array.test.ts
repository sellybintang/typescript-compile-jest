// Penggunaan array juga harus dideklarasikan apabila value berbentuk array

describe ('array', function(){
    it('is array ', function(){
        const nama_penduduk :string[]= ["Selly","Fajar", "Ajeng"]
        const nama_penduduk1 :Array<string>= ["Selly","Fajar", "Ajeng"]
        const umur_penduduk :number[]= [20,20,20]
        const hapus_penduduk :boolean[]=[false,true, false]
        console.info(nama_penduduk[0])
        console.info(nama_penduduk1[1])
        console.info(umur_penduduk[2])
        console.info(hapus_penduduk[1])
    })

    it ('is readOnlyArray', function(){
        const data_nama :ReadonlyArray<string>= ["Selly", "Bintang"]
        const data_umur :ReadonlyArray<number>= [20,21]
        // jika penulisan console menjadi satu maka hasil akan tergabung
        console.info(data_nama[0],data_umur[1])
    })

    it('its tuple', function(){
        const data_nama :readonly[string,number,boolean]=["Selly", 20, true]
        console.info(data_nama[1],data_nama[2],data_nama[0])

    })
})