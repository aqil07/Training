class NewItem {
    constructor(item) {
        this.item = item
        this.nextItem = null;
    }
}

class paperStack {
    constructor() {
        this.btmStack = null
        this.topStack = null
        this.size = 0
    }

    add(val) {
        var newEntry = new NewItem(val)
        if (!this.btmStack) {
            this.btmStack = newEntry
            this.topStack = newEntry
        }else{
            var tmp = this.topStack
            this.topStack = newEntry
            this.topStack.nextItem = tmp
        }
        console.log('t',this.topStack);
        console.log('b',this.btmStack);
        return ++this.size
    }

    remove(){
        if(!this.topStack){return null}

        if(this.topStack === this.btmStack){
            this.btmStack = null
        }
        var tmp = this.topStack
        this.btmStack = this.topStack
        this.size--
        return tmp.item
    }

    move(){
        if(!this.btmStack){return null}

        if(this.btmStack === this.topStack){
            return 'Only one piece in the stack'
        }

        var tmp = this.topStack
        // console.log(tmp);
        // this.btmStack = this.topStack
        // this.topStack = tmp
        // return this.btmStack
    }
}

const newStack = new paperStack();

newStack.add('money');

newStack.add('tress');

newStack.add('tress3');
newStack.move()
// console.log(newStack.remove());