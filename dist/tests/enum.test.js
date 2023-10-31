import { Role } from "../src/enum";
describe("enum", function () {
    it("should enum", function () {
        const process = {
            id: "1",
            name: "Selly",
            price: Role.Admin,
        };
        console.info(process);
    });
});
