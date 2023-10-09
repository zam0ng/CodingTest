// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
// [1, 2, -3, 4, -5]	15
function solution(arr) {
    arr = arr.sort((a,b)=>(a-b));
    console.log(arr);
    
    return Math.max(arr[0]*arr[1],arr[arr.length-1]*arr[arr.length-2])
    // if(arr[0]*arr[1]>0 && arr[0]*arr[1]>=arr[arr.length-1]*arr[arr.length-2]) return arr[0]*arr[1];
    // else return arr[arr.length-1]*arr[arr.length-2];
}

solution();