//Stack
class Stack {
    constructor() {
        this.data = [];
    }

    push(e) {
        this.data.push(e);
    }

    pop() {
        return this.data.pop();
    }
    static fromArray(arr) {
        const s = new Stack();
        s.data = arr.slice();
        return s;
    }
}

//Deque
class Deque extends Stack {
    pushLeft(e) {
        this.data.unshift(e);
    }

    popLeft() {
        return this.data.shift();
    }
}

