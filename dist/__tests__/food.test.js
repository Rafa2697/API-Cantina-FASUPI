"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_controller_1 = require("../controllers/food.controller");
describe("Teste para food.controller", () => {
    test("testar função getFoods", async () => {
        const req = {
            params: {},
            body: {}
        };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await (0, food_controller_1.getFoods)(req, res);
        expect(res.json).toHaveBeenCalled();
    });
    test("testar função createFood", async () => {
        const req = {
            params: {},
            body: {}
        };
        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await (0, food_controller_1.createFood)(req, res);
        expect(res.json).toHaveBeenCalled();
    });
});
//# sourceMappingURL=food.test.js.map