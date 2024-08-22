/*
* identify and return pairs of indices whose elements sum up to a specific * target
*/

function findTwoSum(nums, target) {
    const results = [];
    for(let i = 0 ; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                results.push([nums.indexOf(nums[i]), nums.indexOf(nums[j])]);
            }         
        }
    }
    return results;
}

const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

const twoSumResults = findTwoSum(nums,target).map(pair => `(${pair[0]},${pair[1]})`).join(',');
console.log(twoSumResults);
