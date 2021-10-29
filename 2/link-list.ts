class listedNode<T>{
    data: T;
    next: listedNode<T>;
    constructor(data: T, next = null){
        this.data = data;
        this.next = next;
    }
}

interface lietedStack<T> {
    isEmpty(): boolean;
    push(value: T): void;
    pop(): T;
    size(): number;
}

class Stack<T> implements lietedStack<T> {
    private length: number;
    private top: listedNode<T>;
    constructor(){
        this.length = 0;
        this.top = null;
    }

    public isEmpty(): boolean{
        return this.top === null;
    }

    public push(value: T): void{
        ++this.length;
        if(this.isEmpty()){
            this.top = new listedNode<T>(value);
        } else {
            const node = new listedNode<T>(value);
            node.next = this.top;
            this.top = node;
        }
    }

    public pop(): T{
        --this.length;
        const result = this.top;
        this.top = this.top.next;

        return result.data;
    }

    public size(): number{
        return this.length;
    }

}

// const myStack2: lietedStack<number> = {
//     isEmpty: (): boolean => true,
//     push: (value: number): void => {

//     },
//     pop: (): number => {
//         return 1
//     },
//     size: (): number => 1
// }

const myStack = new Stack();
console.log(myStack);
myStack.push(1)
console.log(myStack);
myStack.push(2)
console.log(myStack);
myStack.push(3)
console.log(myStack);
myStack.pop()
console.log(myStack);
myStack.pop()
console.log(myStack);
console.log(myStack.size());
