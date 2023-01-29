// 886. 可能的二分法
// 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。
// 每个人都可能不喜欢其他人，那么他们不应该属于同一组。
// 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] 
// 表示不允许将编号为 ai 和  bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
//本题先将邻接表存储转为图，然后进行二分图判定
var possibleBipartition = function(n, dislikes) {
    const buidGraph = (n, dislikes)=>{
        //因为编号从1开始
        let graph = new Array(n + 1).fill(0).map(()=>new Array());
        for(let v of dislikes){
            //转换为无向图
            let from = v[0],to = v[1];
            graph[from].push(to);
            graph[to].push(from);
        }
        return graph;
    }
    const traverse = (graph,s) =>{
        if(!isTwo)return;
        visited[s] = true;
        for(let neighbor of graph[s]){
            if(visited[neighbor]){
                if(color[neighbor] === color[s]){
                    isTwo = false;
                    return;
                }
            }else{
                    color[neighbor] = !color[s];
                    traverse(graph,neighbor);
            }
        }
    }   
    let visited = new Array(n+1).fill(false);
    let color = new Array(n+1).fill(false),isTwo = true;
    let graph = buidGraph(n,dislikes);
    for(let i = 1 ; i< n +1; i++){
        if(!visited[i])
        traverse(graph,i);
    }
    return isTwo;
}

const n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]];
console.log(possibleBipartition(n,dislikes));

// 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
// 输出：true
// 解释：group1 [1,4], group2 [2,3]
// 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
// 输出：false
// 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
// 输出：false