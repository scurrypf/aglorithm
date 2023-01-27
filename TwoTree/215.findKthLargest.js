// 215. 数组中的第K个最大元素
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//通过快速排序可以找到第i个小的元素，然后当i=n-k时，即可得出第k大的元素
var findKthLargest = function(nums, k) {
    const swap = function(nums,i,j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    const shuttle = (nums)=>{
        let n = nums.length;
        for(let i = 0 ; i < n ; i++){
            let r = i + Math.floor(Math.random()*(n - i));
            swap(nums,i,r);
        }
    }
    const part = (nums,start,end)=>{
        let p = nums[start];
        let i = start + 1;
        let j = end;
        while(i <= j){
            while(i < end && nums[i] <= p){
                i++;
            }
            while(j > start && nums[j] > p){
                j--;
            }
            if(i >= j){
                break;
            }
            swap(nums,i,j);
        }
        swap(nums,start,j);
        return j;
    }
        shuttle(nums);
        let start = 0,end = nums.length - 1;
        k = nums.length - k;
        while(start <= end){
            let i = part(nums,start,end);
            if(i > k){
                end = i -1;
            }else if(i < k){
                start = i + 1
            }else{
                return nums[i];
            }
        }
        return -1;
}

const nums = [3,2,3,1,2,4,5,5,6], k = 4;
console.log(findKthLargest(nums,k));

// 输入: [3,2,1,5,6,4], k = 2
// 输出: 5
// 输入: [3,2,3,1,2,4,5,5,6], k = 4
// 输出: 4