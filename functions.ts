
function getArrayComplement(arr:number[]) {
    const keyEntries = Object.fromEntries(arr.map( (num, index) => [num, true] ))

    const complementArray:number[] = []
    for (let index = 1; index < arr.length+1; index++) {
        const notInArrayItem = keyEntries[index]
        if(!Boolean(notInArrayItem))
            complementArray.push(index)
    }
    return complementArray  
}

function getArrayIndexes(target:number, nums:number[]): number[]{
    const numMap: Map<number, number> = new Map();

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const complement = target - element;
        const prevIndex = numMap.get(complement)!
        if (numMap.has(complement) && prevIndex !== index) {
            return [prevIndex, index];
        }
        numMap.set(element, index);
    }
    return []

}
export {getArrayComplement, getArrayIndexes}
