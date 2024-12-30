//WAP to print prime numbers in a range
// for(i=2;i<=50;i++){
//     let count=0;
//     for(j=1;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count == 2){
//         console.log(`${i}`);
//     }
// }

//WAP print the following pattern using nested loops:
// 1
// 22
// 333
// 4444
// 55555

// for(i=1;i<=5;i++){
//     let str="";
//     for(j=1;j<=i;j++){
//         str+=i;
//     }
//     console.log(str);
    
// }

// Create a nested array and access all elements by using for in loop

// let arr=[[1,5],[5,6],[7,8],[30,45]];
// for(i in arr){
//     for(j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
        
    
//     }
// }
//1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2
// 1

// for(i=5;i>=1;i--){
//         let str="";
//         for(j=1;j<=i;j++){
//             str+=j;
//         }
//         console.log(str);
        
//     }

// ***
// **
// *
// **
// *

// for(i=3;i>=1;i--){
//         let str="";
//         for(j=1;j<=i;j++){
//             str+='*';
//         }
//         console.log(str);
        
//     }
//     for(i=2;i>=1;i--){
//         let str="";
//         for(j=1;j<=i;j++){
//             str+='*';
//         }
//         console.log(str);
        
//     }


// # # # # # # 
// # # # # # #
// # # # # # #
// # # # # # #
// # # # # # #
// # # # # # #

// for(i=1;i<=5;i++){
//             let str="";
//             for(j=1;j<=5;j++){
//                 str+='#';
//             }
//             console.log(str);
            
//         }

//Sort the array and replace elements in an odd position with  *

// let arr=[10,15,5,8,11];
// let arr1 = arr.sort((a,b)=>a-b);
// for (i=0;i<arr1.length;i++){
//     if (arr[i]%2 !=0){
//         arr1[i]='*'
//     }
// }
// console.log(arr1);

//Write a JavaScript program that prints the Fibonacci sequence up to the 20th term using a for loop.
// let n1=0,n2=1;
// console.log(`${n1} ${n2}`);

// for (let i = 3; i <= 20; i++) {
//     let next = n1 + n2;
//     console.log(next);
//     n1 = n2;
//     n2 = next;
// }

//Array Operations: Write a program to:
// Add a new element to the end of the array.
// Remove the first element of the array.
// Print the updated array.

// let arr=[1,2,3,4,5];
// arr.push(7);
// arr.shift(1);
// console.log(arr);

