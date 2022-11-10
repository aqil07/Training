//STACK
// --------------------//

//class for Node creation 
class Node {
    //2 props per node:
    //val & pointer to next
    constructor(val) {
        this.val = val
        this.next = null
    }
}

//create class per stack
class Stack {
    //three props
    //first node, last node and size of stack
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    //method to add values to stack
    push(val) {

        //create new instace of hte Node with the value entered
        var newNode = new Node(val);

        //if its not null, 
        /*
        reassign top of the stack to the newNode instance
        so first and last value get props from Node 
        with current and next values
         */
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        }
        /**
         * store the latest Obj value - 1 of the stack to tmp
         * tmp contains Node curr and next value props
         * --------------------------------------------
         *reassign top of the stack to the newNode instance
            so first value get props from Node 
            with current and next values 
        */
        /*
        store the next value in the stack from tmp's 
        previous assignment        
        */
        else {
            var tmp = this.first
            this.first = newNode
            this.first.next = tmp
        }

        return ++this.size
        // console.log('first',this.last);
    }
    //remove from stack
    pop() {
        //if nothing retun null
        if (!this.first) return null;
        //stores the lastest value entered
        var tmp = this.first
        //if lastest value and lastest - 1 value match
        //last value becomes null
        if (this.first === this.last) {
            this.last = null
        }

        // reassign the top of the stack
        this.first = this.first.next

        //decrease stack size
        this.size--
        // return value removed
        return tmp.val

    }
}

const test = new Stack;

test.push('Me')

test.push('NextMe')

test.push('me3')
test.pop()

console.log(test);