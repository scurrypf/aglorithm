// 剑指 Offer II 037. 小行星碰撞
// 给定一个整数数组 asteroids，表示在同一行的小行星。
// 对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。
// 每一颗小行星以相同的速度移动。
// 找出碰撞后剩下的所有小行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。
// 如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let res = [];
    res.push(asteroids[0])
    for(let i = 1; i < asteroids.length; i++){
        let c = 1;
        while(asteroids[i] * res[res.length - 1] < 0 && res[res.length - 1] > 0){
            if(Math.abs(asteroids[i]) > Math.abs(res[res.length - 1])){
                res.pop();
            }else if(Math.abs(asteroids[i]) === Math.abs(res[res.length - 1])){
                res.pop();
                c = 0;
                break;
            }else{
                c = 0;
                break;
            }
        }
        if(c !== 0)res.push(asteroids[i])
    }
    return res;
}

const asteroids = [5,10,-5];
console.log(asteroidCollision(asteroids));
// 输入：asteroids = [5,10,-5]
// 输出：[5,10]
// 解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。