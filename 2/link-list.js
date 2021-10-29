var listedNode = /** @class */ (function () {
    function listedNode(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return listedNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.length = 0;
        this.top = null;
    }
    Stack.prototype.isEmpty = function () {
        return this.top === null;
    };
    Stack.prototype.push = function (value) {
        ++this.length;
        if (this.isEmpty()) {
            this.top = new listedNode(value);
        }
        else {
            var node = new listedNode(value);
            node.next = this.top;
            this.top = node;
        }
    };
    Stack.prototype.pop = function () {
        --this.length;
        var result = this.top;
        this.top = this.top.next;
        return result.data;
    };
    Stack.prototype.size = function () {
        return this.length;
    };
    return Stack;
}());
// const myStack2: lietedStack<number> = {
//     isEmpty: (): boolean => true,
//     push: (value: number): void => {
//     },
//     pop: (): number => {
//         return 1
//     },
//     size: (): number => 1
// }
var myStack = new Stack();
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
