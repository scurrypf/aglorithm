// 560. 和为 K 的子数组
// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
var subarraySum = function(nums, k) {
//第一种解法————遍历每一种前缀和,但该解法需要双重for循环，时间复杂度过高
    // let sum=[],n=0;
    // sum=new Array(nums.length+1).fill(0);
    // for(let i=0;i<nums.length;i++){
    //     sum[i+1]=sum[i]+nums[i];
    // }
    // for(let i=sum.length-1;i>0;i--){
    //     for(let j=0;j<i;j++){
    //         if(sum[i]-sum[j]===k){
    //             n++;
    //         }
    //     }
    // }
    // return n;
//第二种解法，采用Map存储前缀和
    const map=new Map();//key用于存储值，value用于存储该值出现的次数
    map.set(0,1);//添加一个0
    let n=0,preSum=0;
    for(let i=0;i<nums.length;i++){
        preSum+=nums[i];//累加nums
        if(map.has(preSum-k)){  //如果现在的前缀和-之前的前缀和（包括0）===k，则将之前的前缀和的次数加上
            n+=map.get(preSum-k);
        }
        if(map.has(preSum)){
            map.set(preSum,map.get(preSum)+1);//如果之前出现了该前缀和，则value次数+1
        }else{
            map.set(preSum,1);//如果之前未出现该前缀和，则将其添加进map
        }
    }
    return n;
};
const nums=[1,2,3], k = 3
console,console.log(subarraySum(nums,k));

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 输入：nums = [1,2,3], k = 3
// 输出：2
