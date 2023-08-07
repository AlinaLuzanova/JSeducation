//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function multiply (a,b){
    return a-b;
}
arr = [1, 2, 3, 4]
mult_arr = arr.sort(multiply)
result=''
res_mult = 1;
for (let i = 0; i<arr.length; i++){
    if (i ===0 ){
        result=`${mult_arr[i]}`
    } else{
        result = `${result}*${mult_arr[i]}`}
    res_mult = res_mult*mult_arr[i]
}
console.log(result)
console.log(res_mult)

//Given an array of integers your solution should find the smallest integer.
//
// For example:
//
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
function  min(arr){
    return Math.min(...arr)
}
console.log(min([34, -345, -1, 100]))

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example (Input -> Output):
//
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

n = 8
res = 0
for (let i = 1; i<=n; i++){
    res +=i
}
console.log(res)
