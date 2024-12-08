function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

function combineArraysSafe<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

// This will result in a type error
// const combinedArray = combineArrays(arr1, arr2);

// Solution 1: Type Guard
function isNumber(item: any): item is number {
  return typeof item === 'number';
}

function combineArraysWithGuard(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
    return [...arr1, ...arr2];
}

const combinedArrayWithGuard = combineArraysWithGuard(arr1 as (number | string)[], arr2 as (number | string)[]);

// Solution 2: Type assertion (less safe)
const combinedArrayWithAssertion = combineArrays(arr1 as any, arr2 as any) as (number | string)[];

// Solution 3:  Using concat (safer for heterogeneous arrays)
const combinedArraySafe = combineArraysSafe(arr1, arr2);
console.log(combinedArraySafe); //Output: [1,2,3,"a","b","c"]