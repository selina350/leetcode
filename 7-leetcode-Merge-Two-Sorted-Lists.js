//[1,2,4],[1,3,4]=>[1,1,2,3,4,4]
//[],[]=>[]
//[],[0]=>[0]
class ListNode {
  constructor(val = null, next) {
    this.val = val;
    this.next = (next === undefined ? null : next);
  }
}

const mergeTwoSortedLists = (list1, list2) => {
  let newList = null;

  while (list1 || list2) {
    if (list1 !== null && list2 !== null && (list1.val <= list2.val)) {
      newList = new ListNode(list1.val, newList);
      list1 = list1.next;
    } else if(list1 !== null && list2 !== null && (list1.val > list2.val)){
      newList = new ListNode(list2.val, newList);
      list2 = list2.next;
    } else if(list1 === null){
      newList = new ListNode(list2.val, newList);
      list2 = list2.next;
    } else if(list2 === null){
      newList = new ListNode(list1.val, newList);
      list1 = list1.next;
    }
  }
  return newList;
};

let l1 = new ListNode(4);
l1 = new ListNode(2, l1);
l1 = new ListNode(1, l1);

let l2 = new ListNode(4);
l2 = new ListNode(3, l2);
l2 = new ListNode(1, l2);

let result = mergeTwoSortedLists(l1, l2)

while(result){
  console.log(result.val)
  result = result.next
}

// let l3 = new ListNode(0)
//
// let l4 = new ListNode()
// console.log(mergeTwoSortedLists(l3,l4))
