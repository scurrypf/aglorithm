// 303. 区域和检索 - 数组不可变
// 给定一个整数数组  nums，处理以下类型的多个查询:
// 计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right
// 实现 NumArray 类：
// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和 ，
// 包含 left 和 right 两点（也就是 nums[left] + nums[left + 1] + ... + nums[right] )

//  @param {number[]} nums
var NumArray = function(nums) {
    this.sum=[];//声明一个sum数组用于储存前缀和
    this.sum=new Array(nums.length+1).fill(0);//初始化sum数组并赋值为0
    for(let i=1;i<=nums.length;i++){
        this.sum[i]=this.sum[i-1]+nums[i-1];//为sum数组赋值
    }
};
// @param {number} left 
// @param {number} right
// @return {number}
NumArray.prototype.sumRange = function(left, right) {
    return this.sum[right+1]-this.sum[left];//sum[i]不包含nuns[i],所以right+1
};
const nums=new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(nums.sumRange(0,2));
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// 输入：
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// 输出：
// [null, 1, -1, -3]
// 解释：
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
