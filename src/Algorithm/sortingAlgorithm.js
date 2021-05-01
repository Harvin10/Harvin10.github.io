//helper
    //change all bars color
    function colorAll(bars, color) {
        for(let i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = color;
        }
    }

export let state = {
    break: false
}

//bubbleSort
export async function BubbleSort(array, bars, time) {
    try {
        let swapped = false;
        for(let j = 0; j < array.length; j++) {
            if(state.break) break;
            swapped = false;
            for(let i = 0; i < array.length - j - 1; i++) {
                if(state.break) break;
                await new Promise((resolve) => setTimeout(resolve, time));
                bars[i].style.backgroundColor = "yellow";
                bars[i + 1].style.backgroundColor = "yellow";
                if(array[i] > array[i + 1]) {
                    if(state.break) break;
                    await new Promise((resolve) => setTimeout(resolve, time));
                    bars[i].style.backgroundColor = "red";
                    bars[i + 1].style.backgroundColor = "red";
                    bars[i].style.height = `${array[i + 1]}px`;
                    bars[i + 1].style.height = `${array[i]}px`; 
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    swapped = true;
                }
                if(state.break) break;
                await new Promise((resolve) => setTimeout(resolve, time));
                bars[i].style.backgroundColor = "#78BCC4";
                bars[i + 1].style.backgroundColor = "#78BCC4";
            }
            bars[array.length - j - 1].style.backgroundColor = "lime";
            if(!swapped) {
                break;
            }
        }
        if(!state.break) {
            colorAll(bars, "lime");
            await new Promise((resolve) => setTimeout(resolve, time));
        }
    colorAll(bars, "#78BCC4");
    } catch(err) {

    }
    return array;
}

//selectionSort
export async function SelectionSort(array, bars, time) {
    try {
        for(let i = 0; i < array.length; i++) {
            if(state.break) break;
            await new Promise((resolve) => setTimeout(resolve, time));
            let minimum = i;
            bars[minimum].style.backgroundColor = "red";
            for(let j = i + 1; j < array.length; j++) {
                if(state.break) break;
                await new Promise((resolve) => setTimeout(resolve, time));
                bars[j].style.backgroundColor = "yellow";
                if(array[j] < array[minimum]) {
                    if(state.break) break;
                    await new Promise((resolve) => setTimeout(resolve, time));
                    let before = minimum;
                    minimum = j;
                    bars[minimum].style.backgroundColor = "red";
                    bars[before].style.backgroundColor = "#78BCC4";
                } else {
                    if(state.break) break;
                    await new Promise((resolve) => setTimeout(resolve, time));
                    bars[j].style.backgroundColor = "#78BCC4";
                }
            }
            if(state.break) break;
            await new Promise((resolve) => setTimeout(resolve, time));
            bars[i].style.backgroundColor = "lime";
            bars[i].style.height = `${array[minimum]}px`;
            bars[minimum].style.height = `${array[i]}px`;
            let temp = array[i];
            array[i] = array[minimum];
            array[minimum] = temp;
            if(state.break) break;
            await new Promise((resolve) => setTimeout(resolve, time));
            bars[i].style.backgroundColor = "lime";
            if(minimum !== i) bars[minimum].style.backgroundColor = "#78BCC4";
        }
        if(!state.break) {
            colorAll(bars, "lime");
            await new Promise((resolve) => setTimeout(resolve, time));
        }        
        colorAll(bars, "#78BCC4");
    } catch(err) {

    }
    return array
}

//mergeSort
    //call mergeSort and reset color
    export async function MergeSort(array, bars, time) {
        let answer = await MergeSortAlgorithm(array, bars, time);
        await new Promise((resolve) => setTimeout(resolve, time));
        colorAll(bars, "#78BCC4");
        return answer;
    }

    //algorithm
    async function MergeSortAlgorithm(array, bars, time) {
        if(array.length === 1) {
            bars[0].style.backgroundColor = "yellow";
            await new Promise((resolve) => setTimeout(resolve, time));
            bars[0].style.backgroundColor = "lime";
            return array;
        } else {
            let l = 0;
            let m = Math.floor(array.length / 2);
            let bars1 = bars.slice(l, m);
            let bars2 = bars.slice(m);
            let sortedArray1 = await MergeSortAlgorithm(array.slice(l, m), bars1, time);
            let sortedArray2 = await MergeSortAlgorithm(array.slice(m), bars2, time);
            let answer = await merge(sortedArray1, sortedArray2);

            let i = 0, j = 0;
            while(i < sortedArray1.length || j < sortedArray2.length) {
                await new Promise((resolve) => setTimeout(resolve, time));
                if(i < sortedArray1.length) {
                    bars1[i].style.backgroundColor = "yellow";
                    i++;
                }
                if(j < sortedArray2.length) {
                    bars2[j].style.backgroundColor = "yellow";
                    j++;
                }
            }
            await new Promise((resolve) => setTimeout(resolve, time * 2));
            for(let i = 0; i < bars.length; i++) {
                bars[i].style.backgroundColor = "red";
            }
            await new Promise((resolve) => setTimeout(resolve, time));
            let pushfirst = 0, pushsecond = 0;
            for(let current = 0; current < answer.length; current++) {
                await new Promise((resolve) => setTimeout(resolve, time));
                bars[current].style.backgroundColor = "lime";
                bars[current].style.height = `${answer[current]}px`;
                if(sortedArray1[pushfirst] < sortedArray2[pushsecond]) {
                    pushfirst++;
                } else {
                    pushsecond++;
                }
                for(let z = 0; z < sortedArray1.length - pushfirst; z++) {
                    if(current + z + 1 < answer.length) {
                        bars[current + z + 1].style.height = `${sortedArray1[pushfirst + z]}px`;
                    }
                }
            }
            return answer;
        }
    }

    //merge 2 sorted array into signle sorted array
    async function merge(arr1, arr2) {
        let i = 0, j = 0;
        let array = [];
        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] <= arr2[j]) {
                array.push(arr1[i]);
                i++;
            } else {
                array.push(arr2[j]);
                j++;
            }
        }
        return [...array, ...arr1.slice(i), ...arr2.slice(j)];
    }

//quickSort
    //call quickSort and reset color
    export async function QuickSort(array, bars, time) {
        let answer = await QuickSortAlgorithm(array, bars, time);
        await new Promise((resolve) => setTimeout(resolve, time));
        colorAll(bars, "#78BCC4");
        return answer;
    }

    //reset color for finished array
    async function newArrayQuickSort(array, bars, time) {
        let answer = await QuickSortAlgorithm(array, bars, time);
        await new Promise((resolve) => setTimeout(resolve, time));
        colorAll(bars, "lime");
        return answer;
    }

    //algorithm
    async function QuickSortAlgorithm(array, bars, time) {
        if(array.length <= 1) {
            if(array.length !== 0) {            
                bars[0].style.backgroundColor = "yellow";
                await new Promise((resolve) => setTimeout(resolve, time));
                bars[0].style.backgroundColor = "lime";
            }
            return array;
        } else {
            let pivot = array.length - 1;
            await new Promise((resolve) => setTimeout(resolve, time));
            bars[pivot].style.backgroundColor = "black";
            let latest = -1;
            for(let current = 0; current < pivot; current++) {
                await new Promise((resolve) => setTimeout(resolve, time));
                bars[current].style.backgroundColor = "yellow";
                if(array[current] < array[pivot]) {
                    await new Promise((resolve) => setTimeout(resolve, time));
                    latest++;
                    let temp = array[latest];
                    array[latest] = array[current];
                    array[current] = temp;
                    bars[latest].style.backgroundColor = "red";
                    bars[current].style.backgroundColor = "red";
                    bars[latest].style.height = `${array[latest]}px`;
                    bars[current].style.height = `${array[current]}px`;
                    await new Promise((resolve) => setTimeout(resolve, time));
                    bars[latest].style.backgroundColor = "lime";
                    bars[current].style.backgroundColor = "yellow";
                    if(current === latest) {
                        bars[current].style.backgroundColor = "lime";
                    }
                } 
            }
            let temp = array[pivot];
            array[pivot] = array[latest + 1];
            array[latest + 1] = temp;
            await new Promise((resolve) => setTimeout(resolve, time));
            bars[pivot].style.height = `${array[pivot]}px`;
            bars[latest + 1].style.height = `${array[latest + 1]}px`;
            await new Promise((resolve) => setTimeout(resolve, time * 2));
            for(let i = 0; i < bars.length; i++) {
                bars[i].style.backgroundColor = "#78BCC4";
            }
            pivot = latest + 1;
            bars[pivot].style.backgroundColor = "gray";

            let sortedArray1 = await newArrayQuickSort(array.slice(0, pivot), bars.slice(0, pivot), time);
            let sortedArray2 = await newArrayQuickSort(array.slice(pivot + 1), bars.slice(pivot + 1), time);
            let answer = [...sortedArray1, array[pivot], ...sortedArray2];
            return answer;
        }
    }