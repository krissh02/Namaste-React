import { sum } from "../sum";

test("Sum calculate to the function of sum",()=>{

    const result = sum(3,4);

    expect(result).toBe(7)
})