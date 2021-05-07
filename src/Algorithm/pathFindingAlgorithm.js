//helper function
    //input array of last visited and return nearby node
    let ScanningNearby = (current, grid) => {
        let nearby = [];
        for(let i = 0; i < current.length; i++) {
            let x = current[i].x;
            let y = current[i].y;
            let foursides = [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]];
            for(let j = 0; j < 4; j++) {
                if(foursides[j][0] >= 0 && foursides[j][0] < grid.length && foursides[j][1] >= 0 && foursides[j][1] < grid[0].length) {
                    if(!grid[foursides[j][0]][foursides[j][1]].isVisited && !grid[foursides[j][0]][foursides[j][1]].isWall) {
                        nearby.push(grid[foursides[j][0]][foursides[j][1]]);
                        grid[foursides[j][0]][foursides[j][1]].prev = grid[x][y]
                    }
                }
                // switch(j) {
                //     case 0: {
                //         if(y >= 0 && y < grid[0].length && x + 1 >= 0 && x + 1 < grid.length) {
                //             if(!grid[x + 1][y].isVisited) {
                //                 nearby.push(grid[x + 1][y]);
                //                 grid[x + 1][y].prev = grid[x][y]
                //             }
                //         }
                //         break;
                //     }
                //     case 1: {
                //         if(y + 1 >= 0 && y + 1 < grid[0].length && x >= 0 && x < grid.length)
                //             if(!grid[x][y + 1].isVisited) {
                //                 nearby.push(grid[x][y + 1]);
                //                 grid[x][y + 1].prev = grid[x][y]
                //             }
                //         break;
                //     }
                //     case 2: {
                //         if(y >= 0 && y < grid[0].length && x - 1 >= 0 && x - 1 < grid.length)
                //             if(!grid[x - 1][y].isVisited) {
                //                 nearby.push(grid[x - 1][y]);
                //                 grid[x - 1][y].prev = grid[x][y]
                //             }
                //         break;
                //     }
                //     case 3: {
                //         if(y - 1 >= 0 && y - 1 < grid[0].length && x >= 0 && x < grid.length)
                //             if(!grid[x][y - 1].isVisited) {
                //                 nearby.push(grid[x][y - 1]);
                //                 grid[x][y - 1].prev = grid[x][y]
                //             }
                //         break;
                //     }
                // } 
            }
        }
        return nearby;
    }

export async function BFSalgo(grid, nodes, Y, End, current, time) {
    let nearby = ScanningNearby(current, grid);
    if(nearby === current) {
        console.log("Failed");
        return "failed";
    }
    for(let i = 0; i < nearby.length; i++) {
        if(!nearby[i].isVisited) {
            await new Promise((resolve) => setTimeout(resolve, time));
            nodes[(grid[0].length * nearby[i].x) + nearby[i].y].style.backgroundColor = "yellow";
            nearby[i].isVisited = true; 
            if(nearby[i] === grid[Y][End]) {
                await new Promise((resolve) => setTimeout(resolve, time));
                for(let i = 0; i < nearby.length; i++) {
                    if(nearby[i].isVisited)
                        nodes[(grid[0].length * nearby[i].x) + nearby[i].y].style.backgroundColor = "lime";
                }
                nodes[(grid[0].length * nearby[i].x) + nearby[i].y].style.backgroundColor = "red";
                return nearby[i];
            }
        }   
    }
    await new Promise((resolve) => setTimeout(resolve, time));
    for(let i = 0; i < nearby.length; i++) {
        nodes[(grid[0].length * nearby[i].x) + nearby[i].y].style.backgroundColor = "lime";
    }
    return await this.BFSalgo(grid, nodes, Y, End, nearby, time);
}

export async function backtracking(lastNode, nodes, grid, time) {
    let path = [];
    while(lastNode.prev !== null) {
        path.push(lastNode.prev)
        lastNode = lastNode.prev
    }
    path.pop()
    for(let i = path.length - 1; i >= 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, time));
        nodes[(grid[0].length * path[i].x) + path[i].y].style.backgroundColor = "yellow";
    }
}