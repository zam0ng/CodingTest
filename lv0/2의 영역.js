// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, arr에 2가 없는 경우 [-1]을 return 합니다.
// [1, 2, 1, 4, 5, 2, 9]	[2, 1, 4, 5, 2]
// [1, 2, 1]	[2]
// [1, 1, 1]	[-1]
// [1, 2, 1, 2, 1, 10, 2, 1]	[2, 1, 2, 1, 10, 2]


function solution(arr) {
    let a = arr.lastIndexOf(2);
    let b = arr.indexOf(2);
    console.log(b,a);
    if(a == -1 && b == -1){
        return [-1];
    }
    const newArr = arr.slice(b,a+1);
    return newArr;
}

solution([1, 2, 1, 4, 5, 2, 9]);
solution([1, 2, 1]);
solution([1, 1, 1]);
solution([1, 2, 1, 2, 1, 10, 2, 1]);