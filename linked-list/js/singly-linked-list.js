const { SGLinkedList } = require('./linked-list');

class SGSinglyLinkedList extends SGLinkedList {
    constructor() {
        super(...arguments);
    }

    add(node, pos = null) {
        if (!node)
            return false;

        if (this.head === null) {
            this.head = node;
            return true;
        }

        let currNode = this.head;
        let currPos = 0;
        while (currNode !== null) {
            if (currNode.next === null || (pos !== null && (currPos + 1) === pos && pos <= this.count)) {
                currNode.next = node;
                this.count = this.count + 1;
                return this.head;
            }

            currNode = currNode.next;
            currPos++;
        }

        return this.head;
    }

    delete(node = null, pos = null) {
        if (this.count === 0)
            return false;

        let currNode = this.head;
        let currPos = 0;
        while (currNode !== null) {
            if ((node === null && pos === null && (this.count - 2) === currPos) ||
                (node !== null && currNode.next === node) ||
                (pos !== null && (currPos + 1) === pos)) {
                currNode.next = null;
                this.count = this.count - 1;
                return this.head;
            }

            currNode = currNode.next;
            currPos++;
        }
    }

    deleteAt(pos) {
        return this.delete(null, pos);
    }

    sort() {

    }

    reverse() {

    }
}

module.exports.SGSinglyLinkedList = SGSinglyLinkedList;