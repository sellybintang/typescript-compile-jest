"use strict";
describe('null_undifined', function () {
    it('should it to typescript', function () {
        function null_undefined(name) {
            if (name) {
                return `Hello ${name}`;
            }
            else if (undefined) {
                return "Hello undefined";
            }
            else {
                return "Hello null";
            }
        }
        const sel = null_undefined("Selly");
        console.info(sel);
        console.info(null);
        console.info(undefined);
    });
});
