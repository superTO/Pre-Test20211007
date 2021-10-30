class listedNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.length = 0;
        this.top = null;
    }
    isEmpty() {
        return this.top === null;
    }
    push(value) {
        ++this.length;
        if (this.isEmpty()) {
            this.top = new listedNode(value);
        }
        else {
            const node = new listedNode(value);
            node.next = this.top;
            this.top = node;
        }
    }
    pop() {
        --this.length;
        const result = this.top;
        this.top = this.top.next;
        return result.data;
    }
    size() {
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
myStack.push(1);
console.log(myStack);
myStack.push(2);
console.log(myStack);
myStack.push(3);
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
console.log(myStack.size());
