// 剑指 Offer II 058. 日程表
// 请实现一个 MyCalendar 类来存放你的日程安排。如果要添加的时间内没有其他安排，则可以存储这个新的日程安排。
// MyCalendar 有一个 book(int start, int end)方法。它意味着在 start 到 end 时间内增加一个日程安排，
// 注意，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，  start <= x < end。
// 当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生重复预订。
// 每次调用 MyCalendar.book方法时，如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 true。
// 否则，返回 false 并且不要将该日程安排添加到日历中。
// 请按照以下步骤调用 MyCalendar 类: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)。
var MyCalendar = function() {
    this.cal = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let id = getIndex(start);
    if((this.cal[id - 1] && start < this.cal[id - 1][1]) || (this.cal[id] && end > this.cal[id][0])){
        return false;
    }
    this.cal.splice(id, 0, [start, end]);
    return true;
};
// 取出start应该在的index
MyCalendar.prototype.getIndex = function(start){
    let left = 0, right = this.cal.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(this.cal[mid][0] === start){
            return mid;
        }else if(this.cal[mid][0] > start){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

// 输入:
// ["MyCalendar","book","book","book"]
// [[],[10,20],[15,25],[20,30]]
// 输出: [null,true,false,true]
// 解释: 
// MyCalendar myCalendar = new MyCalendar();
// MyCalendar.book(10, 20); // returns true 
// MyCalendar.book(15, 25); // returns false ，第二个日程安排不能添加到日历中，因为时间 15 已经被第一个日程安排预定了
// MyCalendar.book(20, 30); // returns true ，第三个日程安排可以添加到日历中，因为第一个日程安排并不包含时间 20 