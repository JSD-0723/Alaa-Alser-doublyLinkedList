const DoublyLinkedList = require('./doublyLinkedList');

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);

console.log(doublyLinkedList)

console.log(doublyLinkedList.pop());

doublyLinkedList.unshift(0);
console.log(doublyLinkedList.shift());

console.log(doublyLinkedList.get(1));

console.log(doublyLinkedList.set(1, 10));

console.log(doublyLinkedList.insert(1, 5));

console.log(doublyLinkedList.remove(1));
