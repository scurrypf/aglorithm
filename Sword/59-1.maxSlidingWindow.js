// 剑指 Offer 59 - I. 滑动窗口的最大值
// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [], ans = new newQueue();
    for(let i = 0; i < nums.length; i++){
        if(i < k - 1){
            ans.push(nums[i]);
        }else{
            ans.push(nums[i]);
            res.push(ans.getMax());
            ans.pop(nums[i - k + 1]);
        }
    }
    return res;
};

class newQueue{
    constructor(){
        this.queue = [];
    }
    push(val){
        while(this.queue.length && val > this.queue[this.queue.length - 1]){
            this.queue.pop();
        }
        this.queue.push(val);
    }
    getMax(){
        return this.queue[0];
    }
    pop(val){
        if(val === this.queue[0]){
            this.queue.shift();
        }
    }
}

const nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums, k));
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 
// 解释: 

//   滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7