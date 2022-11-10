class NewItem {
    constructor(item) {
        this.item = item
        this.nextItem = null;
    }
}

class paperStack {
    constructor() {
        this.firstP = null
        this.latestP = null
        this.size = 0
    }

    add(val) {
        var newEntry = new NewItem(val)
        if (!this.firstP) {
            this.firstP = newEntry
            this.latestP = newEntry
        }else{
            var tmp = this.firstP
            this.firstP = newEntry
            this.firstP.nextItem = tmp
        }
        return ++this.size
    }

    remove(){
        if(!this.firstP){return null}

        if(this.firstP === this.latestP){
            this.latestP = null
        }
        var tmp = this.firstP
        this.latestP = this.firstP
        this.size--
        return tmp.item
    }
}

const newStack = new paperStack();

newStack.add('money');

newStack.add('tress');

console.log(newStack.remove());