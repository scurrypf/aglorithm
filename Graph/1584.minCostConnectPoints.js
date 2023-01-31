// 1584. 连接所有点的最小费用
// 给你一个points 数组，表示 2D 平面上的一些点，其中 points[i] = [xi, yi] 。
// 连接点 [xi, yi] 和点 [xj, yj] 的费用为它们之间的 曼哈顿距离 ：|xi - xj| + |yi - yj| ，其中 |val| 表示 val 的绝对值。
// 请你返回将所有点连接的最小总费用。只有任意两点之间 有且仅有 一条简单路径时，才认为所有点都已连接。
/**
 * @param {number[][]} points
 * @return {number}
 */
//方法一——Kruskal + 并查集
var minCostConnectPoints = function(points) {
    let n = points.length;
    let ans = new Array();
    for(let i = 0 ; i < n ; i++){
        for(let j = i + 1 ; j < n ; j++){
            let xi = points[i][0],yi = points[i][1];
            let xj = points[j][0],yj = points[j][1];
            ans.push([i,j,Math.abs(xi - xj) + Math.abs(yi - yj)])
        }
    }
    ans.sort((a,b)=>a[2] - b[2]);
    let mst = 0;
    let uf = new UF(n);
    for(let v of ans){
        //如果已经连通，再连接则成环，所以跳过
        if(uf.isConnected(v[0],v[1])){
            continue;
        }
        mst +=v[2];
        uf.union(v[0],v[1])
    }
    return mst;
}
class UF{
    constructor(n){
        this.count = n;
        this.parent = new Array(n);
        for(let i = 0 ; i < n ; i++){
            this.parent[i] = i;
        }
    }
    find(x){
        while(this.parent[x] !== x){
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x]
        }
        return x;
    }
    union(p,q){
        let up = this.find(p);
        let uq = this.find(q);
        if(up === uq)return;
        this.parent[up] = uq;
        this.count--;
    }
    isConnected(p,q){
        let up = this.find(p);
        let uq = this.find(q);
        return up === uq;
    }
    count(){
        return this.count;
    }
}

const points = [[-1000000,-1000000],[1000000,1000000]];
console.log(minCostConnectPoints(points));

// 输入：points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// 输出：20
// 输入：points = [[3,12],[-2,5],[-4,1]]
// 输出：18
// 输入：points = [[0,0],[1,1],[1,0],[-1,1]]
// 输出：4
// 输入：points = [[-1000000,-1000000],[1000000,1000000]]
// 输出：4000000