 // 定义类
 class MinHeap {
    // 初始化data 是数组
    constructor(data){
        this.data = data || [];
    }

    // 获取data 长度
    size(){
        return this.data.length;
    }

    // 获取最小值，因为是升序长度为k数组所以第一个的元素肯定是第K大的
    peek(){
        return this.size() === 0 ? null : this.data[0];
    }

    //比较元素大小
    compare(a,b){
        return a-b;
    }

    //添加操作
    push(node){
        this.data.push(node);
        //传入最新添加的元素与该元素在数组的下标 进行向上调整
        this.changeUp(node,this.size() - 1);
    }

    //向上调整的方法
    changeUp(node,i){
        let index = i;

        while( index > 0){
            //寻找父节点的下标
            let paretIndex = (index - 1) >>> 1;
            //获取父节点的值
            let parent = this.data[paretIndex];
            //当前节点与父节点比较
            if(this.compare(node,parent) < 0){  
                //当前节点小与父节点，则进行节点的交换
                this.swap(index,paretIndex);
                //交换结束后，由于该节点已经移动到了父节点的位置，所以将父节点的位置继续往上比较调整
                index = paretIndex;
            }else{
                break;
            }
        }
    }

    // 删除元素
    pop(){
        // 如果数组还存在元素
        if(this.size() !== 0){
            //弹出数组最后一个元素
            let last = this.data.pop();
            //将堆顶替换成最后一个元素
            this.data[0] = last;
            //进行向下调整
            this.changeDown(last,0)
        }
        return null
    }

    //向下调整的方法
    changeDown(node,i){
        let index = i;
        let length  = this.size();
        //因为比较的永远是一半的节点，所以只需要需取一半的长度即可
        let halfLen = length >>> 1;
        while(index < halfLen){
            // 获取左子节点，与右子节点的值
            let leftIndex = (index+1) * 2 - 1,left = this.data[leftIndex];
            let rightIndex = leftIndex + 1,right = this.data[rightIndex];

            if(this.compare(left,node) < 0){
                // 如果左子节点的值小于父节点的值 
                if(rightIndex < length && this.compare(right,left) < 0){
                    //左子节点的值大于右节点的值  交换右节点
                    this.swap(rightIndex,index)
                    index = rightIndex
                }else{
                    //左子节点的值小于右节点的值  交换左节点
                    this.swap(leftIndex,index)
                    index = leftIndex
                }
            }else if(rightIndex < length && this.compare(right,node) < 0){
                // 因为上面已经做了左子节点跟父节点的判断，所以右子节点小于父节点的时候 左节点肯定是大于右节点的 可以直接进行交换
                this.swap(rightIndex,index)
                index = rightIndex
            }else{
                // 父节点最小跳出循环
                break;
            }
        }
    }

    //交换元素
    swap(i,j){
        [this.data[i],this.data[j]] = [this.data[j],this.data[i]];
    }
}
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new MinHeap()
    //依次添加保证堆的长度与有序性
    for(let node of nums){
        this.add(node)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.push(val);
    //维护堆的大小一直为k个 超出k个就进行删除操作
    if(this.heap.size() > this.k){
        this.heap.pop()
    }
    return this.heap.peek()
};
