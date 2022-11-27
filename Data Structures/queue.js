//Node to add
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.firstQ = null
    this.endQ = null
    this.size = 0
  }
  //method takes in a value to add to the top of the stack.
  add(val) {
    //call to the Node class to create an object with the value and next value in the stack
    let newItem = new Node(val)
    /**
     *
     * @param {*value to add} val
     * @returns last item added
     */
    if (!this.firstQ) {
      this.firstQ = newItem
      this.endQ = this.firstQ
    } else {
      let tmp = this.endQ
      this.endQ = newItem
      this.firstQ.next = tmp
      this.firstQ.next.next = this.endQ
    }
    this.size++
    return this.endQ
  }
  /**
   * removes value from front of queue.
   * returns new first element
   */

  remove() {
    if (this.size === 0) {
      throw new Error('There is nothing to remove. Add something first.')
    }
    this.firstQ = this.firstQ.next
    this.size--
    return this.firstQ
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
      const tmp = this.firstQ

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

let q = new Queue()
q.add(10)
q.add(20)
q.add('a')
q.remove()
q.find(10)

console.log(q)
