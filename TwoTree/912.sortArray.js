// 912. 排序数组
// 给你一个整数数组 nums，请你将该数组升序排列。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //冒泡排序
    // for(let i = 0;i<nums.length;i++){
    //     for(let j = i;j<nums.length;j++){
    //         if(nums[j] < nums[i]){
    //             let t =nums[j];
    //             nums[j] = nums[i];
    //             nums[i] = t;
    //         }
    //     }
    // }
    // return nums;
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
    //快速排序
    //交换两个数
    const swap = (nums,i,j)=>{
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    //洗牌算法，用于将数组随机打乱
    const shuttle = (nums)=>{
        let n = nums.length;
        for(let i = 0 ; i < n ; i++){
            let r = i + Math.floor(Math.random()*(n - i));
            swap(nums,i,r);
        }
    }
    //切分，将一个数放在其在这个数组中正确的位置(左边的都比他小，右边的都比他大)
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
    const sort = (nums,start,end)=>{
        if(start > end)return;
        let i = part(nums,start,end);
        sort(nums,start,i - 1);
        sort(nums,i + 1,end);
    }
    shuttle(nums);
    sort(nums,0,nums.length - 1);
    return nums
}

const nums = [5,2,3,1];
console.log(sortArray(nums));
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]
