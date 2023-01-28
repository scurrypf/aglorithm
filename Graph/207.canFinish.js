// 207. 课程表
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，
// 其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//本题思路时将课程作为节点，依赖作为边，从而构造出图的数据解构
//然后判断图中是否有环，如果有环，则说明具有循环依赖，则返回false
var canFinish = function(numCourses, prerequisites) {
    //构造图函数
    const buidGraph = function(numCourses,prerequisites){
        let graph = new Array(numCourses).fill(0).map(()=>new Array());
        for(let v of prerequisites){
            let from = v[1],to = v[0];
            graph[from].push(to);
        }
        return graph;
    }
    const traverse = (graph,s)=>{
        if(onPath[s] === true){
            hasCycle = true;
            return;
        }
        if(hasCycle || visited[s])return;
        visited[s] = true;
        onPath[s] = true;
        for(let neighbor of graph[s]){
            traverse(graph,neighbor);
        }
        onPath[s] = false;
    }
    let graph = buidGraph(numCourses,prerequisites);
    let visited = new Array(numCourses).fill(false);
    let onPath = new Array(numCourses).fill(false);
    let hasCycle = false;
    for(let i = 0;i < numCourses ; i++){
        traverse(graph,i);
    }
    return !hasCycle;
}

const numCourses = 2, prerequisites = [[1,0],[0,1]];
console.log(canFinish(numCourses,prerequisites));

// 输入：numCourses = 2, prerequisites = [[1,0]]
// 输出：true
// 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
// 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
// 输出：false
// 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。