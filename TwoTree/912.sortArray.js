// 912. 排序数组
// 给你一个整数数组 nums，请你将该数组升序排列。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //冒泡排序
    for(let i = 0;i<nums.length;i++){
        for(let j = i;j<nums.length;j++){
            if(nums[j] < nums[i]){
                let t =nums[j];
                nums[j] = nums[i];
                nums[i] = t;
            }
        }
    }
    return nums;
    //归并排序
    // let temp = new Array(nums.length);
    // const sort = function(nums,start,end){
    //     if(start === end)return;
    //     let mid = Math.floor((start + end)/2);
    //     sort(nums,start,mid);
    //     sort(nums,mid + 1,end);
    //     merge(nums,start,mid,end); 
    // }
    // const merge = (nums,start,mid,end)=>{
    //     for(let i = start ; i <= end ; i++){
    //         temp[i] = nums[i];
    //     }
    //     let i = start,j = mid + 1;
    //     for(let a = start ; a <= end ; a++){
    //         if(i === mid + 1){
    //             nums[a] = temp[j++];
    //         }else if(j === end + 1){
    //             nums[a] = temp[i++];
    //         }else if(temp[i] > temp[j]){
    //             nums[a] = temp[j++];
    //         }else{
    //             nums[a] = temp[i++];
    //         }
    //     }
    // }
    // sort(nums,0,nums.length - 1);
    // return nums;
}

const nums = [5,2,3,1];
console.log(sortArray(nums));
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
