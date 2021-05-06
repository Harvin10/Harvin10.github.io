//helper function
    //input array of last visited and return nearby node
    let ScanningNearby = (current, grid) => {
        let nearby = [];
        for(let i = 0; i < current.length; i++) {
            let fourSide = [
                { 
                    y: current[i].y + 1, 
                    x: current[i].x
                },
                {
                    y: current[i].y, 
                    x: current[i].x - 1
                },
                {
                    y: current[i].y - 1, 
                    x: current[i].x
                },
                {
                    y: current[i].y, 
                    x: current[i].x + 1
                }
            ]
            nearby.push(...fourSide);
        }
        nearby = nearby.filter((item) => {
            return (item.x >= 0 && item.x < grid[0].length) && (item.y >= 0 && item.y < grid.length)
        }).filter((item) => {
            return !grid[item.y][item.x].isVisited;
        })
        return nearby;
    }

export async function BFSalgo(grid, nodes, Y, End, current, time) {
    let nearby = ScanningNearby(current, grid);
    for(let i = 0; i < nearby.length; i++) {
        if(!grid[nearby[i].y][nearby[i].x].isVisited) {
            await new Promise((resolve) => setTimeout(resolve, time));
            nodes[(grid[0].length * nearby[i].y) + nearby[i].x].style.backgroundColor = "yellow";
            grid[nearby[i].y][nearby[i].x].isVisited = true; 
            if(grid[nearby[i].y][nearby[i].x] === grid[Y][End]) {
                await new Promise((resolve) => setTimeout(resolve, time));
                for(let i = 0; i < nearby.length; i++) {
                    nodes[(grid[0].length * nearby[i].y) + nearby[i].x].style.backgroundColor = "lime";
                }
                nodes[(grid[0].length * nearby[i].y) + nearby[i].x].style.backgroundColor = "red";
                return [nearby[i].y, nearby[i].x];
            }
        }   
    }
    await new Promise((resolve) => setTimeout(resolve, time));
    for(let i = 0; i < nearby.length; i++) {
        nodes[(grid[0].length * nearby[i].y) + nearby[i].x].style.backgroundColor = "lime";
    }
    return await this.BFSalgo(grid, nodes, Y, End, nearby, time);
}
