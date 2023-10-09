// 정수 리스트 num_list와 정수 n이 주어질 때, 
// n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
    let answer = [...num_list];
    return answer.splice(n-1,answer.length);
}

// slice와 splice 의 차이

const originalArray = [1, 2, 3, 4, 5];

// slice를 사용하여 새 배열 생성
const slicedArray = originalArray.slice(1, 4); // 인덱스 1부터 3까지의 요소
console.log("잘린 배열:", slicedArray); // 출력: [2, 3, 4]

// splice를 사용하여 원본 배열 수정
const splicedArray = originalArray.splice(1, 3, 6, 7); // 인덱스 1부터 3개의 요소 제거하고 6과 7 삽입
console.log("잘라낸 배열:", splicedArray); // 출력: [2, 3, 4] (제거된 요소)
console.log("수정된 원본 배열:", originalArray); // 출력: [1, 6, 7, 5]
