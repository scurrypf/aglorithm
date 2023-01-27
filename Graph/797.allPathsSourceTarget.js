// 797. 所有可能的路径
// 给你一个有 n 个节点的 有向无环图（DAG），
// 请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
//  graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [],path = [];
    const traverse = function(s,path){
        path.push(s);
        if(s === graph.length -1){
            res.push(path.concat());
            path.pop();
            return;
        }
        for(let v of graph[s]){
            traverse(v,path)
        }
        path.pop();
    }
        traverse(0,path)
    return res;
}

const graph = [[1,2],[3],[3],[]];
console.log(allPathsSourceTarget(graph));

// 输入：graph = [[1,2],[3],[3],[]]
// 输出：[[0,1,3],[0,2,3]]
// 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3