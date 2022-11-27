//Node to add
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.topStack = null
    this.btmmStack = null
    this.size = 0
  }
  //method takes in a value to add to the top of the stack.
  add(val) {
    //call to the Node class to create an object with the value and next value in the stack
    let newItem = new Node(val)
    /*
    the below condition evaluates to true. To achieve putting new items
    to the stack, it gets handled in the else..
    top of stack becomes latest value, bottom becomes initial value
    return the value added with the next value
    */
    if (!this.topStack) {
      this.topStack = newItem
      this.btmmStack = newItem
    } else {
      let tmp = this.topStack
      this.topStack = newItem
      this.btmmStack = this.btmmStack
      this.topStack.next = tmp
    }
    this.size++
    return this.topStack
  }
  /*
  removes value passed in. If the value is not at the top, an error 
  is thrown
  If you want to remove a value but there is nothing to remove, an error is thrown
  */
  remove() {
    /*
    removes top element / last element added and returns that element
    */
    if (this.size === 0) {
      throw new Error('There is nothing to remove. Add something first.')
    }
    let tmp = this.topStack.val
    this.topStack = this.topStack.next
    this.size--
    return tmp
  }
  /**
   *
   * @param {*search value} val
   * @returns 1 if value is found
   * loops through top object element by making an iterator
   */
  find(val) {
    try {
      if (this.size === 0) {
        throw new Error('There is nothing to find. Add something first.')
      }
    } catch (e) {
      return e
    }
    try {
      const tmp = this.topStack

      tmp[Symbol.iterator] = function* () {
        yield tmp
      }
      let arr = [{ ...tmp }]
      function check(currV, next) {
        let found = 0

        if (currV == val) {
          // console.log('found')
          found++
          console.log('Found? 1 for Yes, 0 for no\nAnswer: ', found)
          return found
        } else {
          // console.log(next.next)
          currV = next.val
          if (next.next == null && currV !== val) {
            throw new Error('Value not found')
          }
          next = next.next
        }
        return check(currV, next)
      }

      check(arr[0].val, arr[0].next)
    } catch (e) {
      console.log(e)
    }
  }
}

let stk = new Stack()
stk.add(10)
stk.add(20)
stk.add(30)
