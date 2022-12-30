// 239. 滑动窗口最大值
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回 滑动窗口中的最大值 。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let window = new newQueue(),res = [];
    for(let i=0;i<nums.length;i++){
        if(i<k-1){
            window.push(nums[i]);
        }else{
            window.push(nums[i]);
            res.push(window.getMax());
            window.pop(nums[i-k+1]);
        }
    }
    return res;
}
class newQueue{
    constructor(){
        this.queue = [];
    }
    push(val){
        while(this.queue.length!==0 && val>this.queue[this.queue.length-1]){
            this.queue.pop();
        }
        this.queue.push(val);
    }
    getMax(){
        return this.queue[0];
    }
    pop(n){
        if(this.queue[0]===n){
            this.queue.shift();
        }
    }
}

const nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums,k));

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7