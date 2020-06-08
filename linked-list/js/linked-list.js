class SGLinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    static $_generateNode() {
        return {
            data: null,
            next: null
        };
    }

    set count(count) {
        return this.count = count;
    }

    get count() {
        return this.count;
    }

    getAllNodes() {

    }

    peek(pos) {

    }

    search(value) {

    }

    printAllNodeValues() {

    }

    isCircular() {

    }
}

module.exports.SGLinkedList = SGLinkedList;