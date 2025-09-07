import { ListNode, mergeTwoLists } from '../code/21.merge-two-sorted-lists';

function createList(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const list1 = createList([1, 2, 4]);
const list2 = createList([1, 3, 4]);
const result = mergeTwoLists(list1, list2);
console.log(listToArray(result));

const list3 = createList([]);
const list4 = createList([]);
const result2 = mergeTwoLists(list3, list4);
console.log(listToArray(result2));

const list5 = createList([]);
const list6 = createList([0]);
const result3 = mergeTwoLists(list5, list6);
console.log(listToArray(result3));