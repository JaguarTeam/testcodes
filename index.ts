import {getArrayIndexes, getArrayComplement} from "./functions"

import assert from "assert"


assert.deepEqual(getArrayIndexes(13, [1, 2, 3, 4, 5, 6, 7, 8]), [5,6])

assert.deepEqual(getArrayComplement([4,3,2,7,8,2,3,1]), [5,6]);
