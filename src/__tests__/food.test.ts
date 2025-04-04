

function sum(a:number, b:number){
    return a + b;
}

describe ("teste inicial", () => {
    it("Primeiro teste unitario", () => {
        const firstArgument = 1;
        const secondArgument = 2;

        let result = sum(firstArgument, secondArgument);
        expect(result).toBe(firstArgument + secondArgument);
    })
    it("segundo teste unitario", () => {
        const firstArgument = 1;
        const secondArgument = 2;

        let result = sum(firstArgument, secondArgument);
        expect(result).toBe(firstArgument + secondArgument + 1);
    })
})


