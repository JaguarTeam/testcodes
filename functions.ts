
function getArrayComplement(arr:[]) {
    const maxN = arr.length;
    const cleanArray =  arr//[...new Set(arr)]
    const keyEntries = Object.fromEntries(cleanArray.map( (num, index) => [num, true] ))

    const complementArray:number[] = []
    for (let index = 1; index < maxN+1; index++) {
        const current = index
        const notInArrayItem = keyEntries[current]
        if(!Boolean(notInArrayItem))
            complementArray.push(current)
    }
    return complementArray  
}

function getArrayIndexes(target:number, nums:number[]): number[]{
    const output = []
    const numMap: Map<number, number> = new Map();

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const complement = target - element;
        const prevIndex = numMap.get(complement)
        if (numMap.has(complement) && prevIndex !== index) {
            return [numMap.get(complement)!, index];
        }
        numMap.set(element, index);
    }
    return output

}
export {getArrayComplement, getArrayIndexes}
