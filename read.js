#!/usr/bin/env node
// const recast = require("recast");

// recast.run( function(ast, printSource){
//     printSource(ast)
// })

// recast.run(function(ast, printSource) {
//     // recast.visit将AST对象内的节点进行逐个遍历。
//     recast.visit(ast, {
//         visitExpressionStatement: function({node}) {
//           console.log(node)
//           return false
//         }
//     });
// })

// 换一种写法
// #!/usr/bin/env node
// const recast  = require('recast')

// recast.run(function(ast, printSource) {
//   recast.visit(ast, {
//       visitExpressionStatement: function(path) {
//         const node = path.node
//         printSource(node)
//         this.traverse(path)
//       }
//     })
// });

// const recast = require("recast");
// const TNT = recast.types.namedTypes

// recast.run(function(ast, printSource) {
//   recast.visit(ast, {
//       visitExpressionStatement: function(path) {
//         const node = path.value
//         // 判断是否为ExpressionStatement，正确则输出一行字。
//         if(TNT.ExpressionStatement.check(node)){
//           console.log('这是一个ExpressionStatement')
//         }
//         this.traverse(path);
//       }
//     });
// });

const recast = require("recast");
const TNT = recast.types.namedTypes

recast.run(function(ast, printSource) {
  recast.visit(ast, {
      visitExpressionStatement: function(path) {
        const node = path.node
        // 判断是否为ExpressionStatement，正确不输出，错误则全局报错
        TNT.ExpressionStatement.assert(node)
        this.traverse(path);
      }
    });
});