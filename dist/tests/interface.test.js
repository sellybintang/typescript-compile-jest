describe("enum", function () {
    it("should enum", function () {
        const process = {
            id: "1",
            name: "Selly",
            age: 22,
            nib: "3432732",
            npwp: "34894"
        };
        process.id = "4";
        // tidak bisa dirubah karena menggunakan tipe readonly
        // process.nib="34343333"
        console.info(process);
    });
    it("should support function interface", function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 4)).toBe(6);
        console.info(add(6, 7));
    });
    it('should add employee', function () {
        const person = {
            id: "1",
            name: "John",
            age: 2
        };
        const people = {
            id: "1",
            name: "John",
            age: 2,
            address: "Banyuwangi"
        };
        console.info(person, people);
    });
    it('should supprt to typeScript', function () {
        function sayHello(name) {
            return name = `Hello${name}`;
        }
        console.info(sayHello('Selly'));
        function sayHello1(name) {
            console.info(`Hello 1 ${name}`);
        }
        sayHello1("Selly");
    });
});
export {};
