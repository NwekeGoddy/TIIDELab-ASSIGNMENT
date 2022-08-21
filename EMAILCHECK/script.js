function ValidateEmail(inputText)
// {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if(inputText.value.match(mailformat)){

//         alert(`${printAsterick(inputText.value.length)}`);
//         document.form1.text1.focus();
//         return true;
//     }
//     else{
//     alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//     }
// }

// function printAsterick (num){
//   let str = "";
//   for(let i = 0; i < 20; i++){
//       str += "*"
//   }
//   return str;
// }

// function toCamelCase(str) {
//     // Lower cases the string
//     return str.toLowerCase()
//       // Replaces any - or _ characters with a space 
//       .replace( /[-_*%]+/g, ' ')
//       // Removes any non alphanumeric characters 
//       .replace( /[^\w\s]/g, '')
//       // Uppercases the first character in each group immediately following a space 
//       // (delimited by spaces) 
//       .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
//       // Removes spaces 
//       .replace( / /g, '' );
//   }

//   var largArr = new Array();
//     var arr = new Array(93, 17, 56, 91, 98,
//             33, 9, 38, 55, 78, 29, 81, 60);
 
//     findLargest3();
 
//     function findLargest3() {
//         arr.sort((a, b) => a < b ?
//             1 : a > b ? -1 : 0);
 
//         console.log(arr[0]);
//         console.log(arr[1]);
//         console.log(arr[2]);
 
//         console.log(arr.slice(0, 3));
//     }


//     function evaluate(unknown, k) {
//         if (unknown === 'x') return k;
//         const known = `${k}`
//         if (unknown.length !== known.length) return null;
//         for (let i in known) {
//           if(known[i] !== unknown[i]) return known[i]
//         }
//         return null;
//       }
//       const Oposite = {
//         '+': (a, b) => { return a - b },
//         '-': (a, b) => { return a + b },
//         '*': (a, b) => { return a / b },
//         '/': (a, b) => { return a * b },
//       }
//       const Onward = {
//         '+': (a, b) => { return a - b },
//         '-': (a, b) => { return b - a },
//         '*': (a, b) => { return a / b },
//         '/': (a, b) => { return b / a },
//       }
//       const Normal = {
//         '+': (a, b) => { return a + b },
//         '-': (a, b) => { return a - b },
//         '*': (a, b) => { return a * b },
//         '/': (a, b) => { return a / b },
//       }
      
//       function MissingDigit(str) { 
//         const blocks = str.split(' ')
//         // if 1st operator contains x
//         if (blocks[0].includes('x')) {
//           return evaluate(blocks[0],
//             Oposite[blocks[1]](
//               parseInt(blocks[4]), 
//               parseInt(blocks[2])
//             )
//           )
//         }
//         // if 2nd operator contains x
//         if (blocks[2].includes('x')) {
//           return evaluate(blocks[2],
//             Onward[blocks[1]](
//               parseInt(blocks[4]), 
//               parseInt(blocks[0])
//             )
//           )
//         }
      
//         return evaluate(blocks[4],
//           Normal[blocks[1]](
//             parseInt(blocks[0]),
//             parseInt(blocks[2])
//           )
//         )
      
//       }
         
//       // keep this function call here 
//       console.log(MissingDigit(readline()));




//       function TreeConstructor(strArr) { 


//         let parents={};
//         let children={};
       
       
//        for(let i=0; i<strArr.length; i++){
           
//            let pair = strArr[i].replace(/[()]/g,"").split(",");
           
//            let child = pair[0];
//            let parent = pair[1];
           
//            if(parents[parent]){
//               parents[parent].push(child);
//            }else{
//             parents[parent]=[child];
//            }
           
//            if(parents[parent].length > 2){
//              return false;
//            }
           
//            if(children[child]){
//             return false;
//            } else {
//               children[child]=parent;
//            }
           
           
//        }
       
//        return true;
       
       
//        }

//        function so(arr) {

//         k = arr[0];
//         //Perform the operations k times
//          for(let i = 0; i < k; i++){
//              arr.push(arr.shift());
//          }    
//          return arr;
//      }

//    so([3,2,1,6], 3)

