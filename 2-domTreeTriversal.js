//use json to simulate a dom tree structure.
//a html element should have a name, i.e. <div> name should be div
//each html element should be an object in json
//the children of that html ele is an array value of a key called children

// 1, write a json example
//2, write a function to return a boolean, find an ele by name, if found return true
// <html>
//  <div>
//    <h1></h1>
//    <ul>
//      <li>test1</li>
//      <li>test2</li>
//    </ul>
//  </div>
// </html>
const htmlFile = {
  'name': 'html',
  'children': [
    {
      'name': 'div',
      'children': [
        {
          'name': 'h1',
          'children': [],
        },
        {
          'name': 'ul',
          'children': [
            {
              'name': 'li',
              'innerHTML': 'test1',
            },
            {
              'name': 'li',
              'innerHTML': 'test2',
            },
          ],
        },
      ],
    },
  ],
};

//recursive
// const isHtml = (htmlFile, eleName) => {
//
//   if (!htmlFile.name) {
//     return false;
//   }
//   if (htmlFile.name === eleName) {
//     return true;
//   }
//
//   let isFound = false;
//   if(htmlFile.children){
//     htmlFile.children.forEach(html => {
//       if (isHtml(html, eleName)) {
//         isFound = true;
//       }
//     });
//   }
//
//   return isFound;
//
// };

//triversal
//bfs queue FIFO
// function bfs(root){
//   // enqueue the root
//   let queue = [root], out = [];
//   // since we need all the nodes at a particular level we will need to iterate and push all the children in the queue
//   while(queue.length){
//     let size = queue.length;
//     let levelNodes = [];
//     while(size){
//       // dequeue the  element
//       let node = queue.shift();
//       levelNodes.push(node.value);
//
//       // gather all the children of node dequeued and enqueue them(left/right nodes)
//       node.left && queue.push(node.left);
//       node.right && queue.push(node.right);
//       size--;
//     }
//     out.push(levelNodes);
//   }
//   return out;
// }
// let root = new Node(10);
// root.left =  new Node(20);
// root.right =  new Node(30);
// root.left.left =  new Node(40);
// root.left.right =  new Node(50);
// root.right.left =  new Node(60);
// root.right.right =  new Node(70);
// const isHtml = (htmlFile, eleName) => {
//   let queue = [htmlFile];
//   let result = false;
//   while (queue.length) {
//     const ele = queue.shift();
//     //Traverscial
//     if (Array.isArray(ele.children)) {
//       ele.children.forEach(subElement => {
//         queue.push(subElement);
//       });
//     }
//     //do work
//     console.log(ele.name)
//     if (ele.name === eleName) {
//       result = true;
//     }
//
//
//   }
//   return result;
//
// };
const isHtml = (htmlFile, eleName) => {
    let queue = [htmlFile]
    let res = false
    while(queue.length){
      let element = queue.shift()
      console.log((element.name))
      if(element.name === eleName){
        res = true
      }
      if(element.children){
        element.children.forEach(subEle=>{
          queue.push(subEle)
        })
      }
    }
    return res

}

console.log(isHtml(htmlFile, 'div'));
console.log(isHtml(htmlFile, 'test'));