import {getFoods, createFood} from '../controllers/food.controller'

describe ("Teste para food.controller", () => {
    test("testar função getFoods", async () => {
        const req = {
            params: {},
            body: {}
        } as any

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        } as any

       await getFoods(req, res)

        expect(res.json).toHaveBeenCalled()
    })
    test("testar função createFood", async () => {
        const req = {
            params: {},
            body: {}
        } as any

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        } as any

       await createFood(req, res)

        expect(res.json).toHaveBeenCalled()
    })
})


