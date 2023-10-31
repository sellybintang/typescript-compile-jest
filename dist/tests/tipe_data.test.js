"use strict";
// pada ts yang bersifat sensitif tipe data harus dideklasikan dan value harus sesuai dengan tipe data yang dideklarasikan
describe('tipeData', function () {
    it('should be declare', function () {
        const name = 'Selly Bintang';
        const age = 21;
        // tidak bisa number karena akan terbaca menjadi bilangan oktal atau bilangan berbasis 8, maka dari itu diganti string
        const telp = "087575843";
        const isVip = true;
        console.info(name);
        console.info(age);
        console.info(telp);
        console.info(isVip);
    });
});
