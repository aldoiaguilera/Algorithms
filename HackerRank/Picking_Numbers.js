// function pickingNumbers(a) {

//     // answer array
//     let subArraySizes = [];
    
//     // Iterate to penultimate number
//     for(var i = 0; i < a.length - 1; i++) {
//         // Restart subarray length at 1
//         let subArraySize = 1; 
        
//         // Save starting location of subarray
//         let startingLocation = i;
//         for(var j = 1; j < a.length; j++) {
//             // Check if difference is less than or equal to one
//             if(Math.abs(a[i] - a[j]) <= 1) {
//                 // Add to subarray size
//                 subArraySize++;
//                 // Set i equal to j
//                 i = j;
//             }
//             // else {
//             //     break;
//             // }
//         }
        
//         i = startingLocation + 1;
//         subArraySizes.push(subArraySize);
//     }
//     subArraySizes.sort((a,b) => a-b);
//     console.log(subArraySizes);
//     return subArraySizes.pop();
// }

// function pickingNumbers(a) {
//     a = a.map(Number);
//     a.sort(function(a,b) {return a-b;});
//     var longest = -1;
    
//     for (var i = 0; i < a.length-1; i++) {
//         var sum = 1;
//         var j = i+1;
//         while (j < a.length && a[j] <= a[i]+1) {
//             sum++;
//             j++;
//         }
//         if (sum > longest) longest = sum;
//     }
//     console.log(longest);
// }

let array = [4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 
4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4];


pickingNumbers(array);