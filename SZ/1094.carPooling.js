// 1094. 拼车
// 车上最初有 capacity 个空座位。车只能向一个方向行驶（也就是说，不允许掉头或改变方向）
// 给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 
// 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。
// 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。
// /**
//  * @param {number[][]} trips
//  * @param {number} capacity
//  * @return {boolean}
//  */
//差分数组
var carPooling = function(trips, capacity) {
    let diff=[],n=0,sum=[];
    for(let i=0;i<trips.length;i++){//遍历出最后也就是最大的位置，用于为diff[]初始化
        if(trips[i][2]>n){
            n=trips[i][2];
        }
    }
    diff=new Array(n).fill(0);
    for(let i=0;i<trips.length;i++){//为diff[]差分赋值
        diff[trips[i][1]]+=trips[i][0];
        diff[trips[i][2]]-=trips[i][0];
    }
    sum=new Array(diff.length).fill(0);
    sum[0]=diff[0];
    for(let i=1;i<diff.length;i++){//算出每一段路的乘客数量
        sum[i]=sum[i-1]+diff[i];
    }
    for(let i=0;i<sum.length;i++){
        if(sum[i]>capacity){//如果有位置乘客数量>capacity，则输出false
            return false;
        }
    }
    return true;
}

const trips = [[2,1,5],[3,3,7]], capacity = 5;
console.log(carPooling(trips,capacity));

// 输入：trips = [[2,1,5],[3,3,7]], capacity = 4
// 输出：false
// 输入：trips = [[2,1,5],[3,3,7]], capacity = 5
// 输出：true