import { expect, test } from "bun:test";
import {getArrayIndexes, getArrayComplement} from "./functions"
import {dataset1, dataset2} from "./dataset"  
  
dataset1.forEach(({input, output}) => {
    test(`get the array complement from a given array - input: ${input}, output: ${output}`, () => {
        expect(getArrayComplement(input)).toStrictEqual(output);
    });

});

dataset2.forEach(({input, target, output}) => {
    test(`get indexes from array that add up to get the target input -  input: ${input}, target: ${target}, output: ${output}`,()=>{
        expect(getArrayIndexes(target, input)).toStrictEqual(output)
    })
});