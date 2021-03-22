/**
 * https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/
 * */

function backtracking(
  nums: number[],
  visited: boolean[],
  target: number,
  rest: number,
  k: number,
): boolean {
  if (k === 0) {
    return true
  }

  // eslint-disable-next-line no-undef
  const failedRecord = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    if (visited[i] || failedRecord.has(nums[i])) continue
    visited[i] = true

    const newRest = rest - nums[i]
    if (newRest > 0 && backtracking(nums, visited, target, k, newRest)) {
      return true
    }

    if (newRest === 0 && backtracking(nums, visited, target, target, k - 1)) {
      return true
    }

    visited[i] = false
    failedRecord.add(nums[i])
    if (newRest < 0) break
  }

  return false
}

function canPartitionKSubsets(nums: number[], k: number): boolean {
  const visited = new Array(nums.length).fill(false)
  const sumVal = nums.reduce((pre, cur) => pre + cur, 0)

  if (k > nums.length) return false
  if (sumVal % k != 0) return false

  return backtracking(nums, visited, sumVal / k, sumVal / k, k)
}

test('should return true when the subset can be partition into equal subset', () => {
  expect(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)).toBeTruthy()
  expect(
    canPartitionKSubsets([4, 5, 3, 2, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 2], 13),
  ).toBeTruthy()
})

// class Solution {

//   public boolean canPartitionKSubsets(int[] nums, int k) {
//       int sum = 0;

//       if(k==0)
//           return true;

//       if(nums.length < k)
//           return false;

//       for(int num: nums){
//           sum += num;
//       }

//       if(sum % k != 0)
//           return false;

//       boolean[] used = new boolean[nums.length];
//       return util(nums, used, sum/k, 0, k, 0);

//   }

//   public boolean util(int[] nums, boolean[] used, int sum, int curSum, int k, int st){

// //base condition, only one partition is remaining, therefore no need to recurse further
//       if(k==1)
//           return true;

//   /**if the current partition equals the sum,
//   recursively carry on the procedure for the remaining partitions **/

//       if(curSum == sum)
//           return util(nums, used, sum, 0, k-1, 0);

//   /**for every element apply backtracking by
//   including the element in the current partition and then excluding it **/

//       for(int i=st; i<nums.length; i++){
//           if(!used[i] && curSum + nums[i] <= sum){
//               used[i] = true;
//               if(util(nums, used, sum, curSum + nums[i], k, i+1))
//                   return true;

//               used[i] = false;
//           }
//       }
//       return false; // if no partitions could be formed.
//   }
// }
