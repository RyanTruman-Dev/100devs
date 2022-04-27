//Create an array of movie titles. Loop through the array and add each element to the h2.
let letsEffingGo = [" jurrassic park", " the patriot", " independence day"]

// letsEffingGo.forEach((item, i) => {
//   document.querySelector('h2').innerText += letsEffingGo[i]
// })
for(let i = 0; i < letsEffingGo; i++){
  document.querySelector('h2').innerText += letsEffingGo[i]
}


//Create an array of numbers. Loop through the array add three to each number and replace the old number.
let nums = [1,2,3,4,5]
nums.forEach((nums, i) => {
  nums[i] = nums + 3
});
console.log(nums)

// for(let i = 0; i < numArray.length; i++){
//
// }

//Find the average of all the numbers from question two

let sum = 0
for (let i = 0; i<nums.length;i++){
  sum += nums[i]
}
console.log(sum / nums.length)
