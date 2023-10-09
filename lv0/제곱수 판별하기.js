// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 
// 정수 n이 매개변수로 주어질 때,
// n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    var answer = 0;
    let cnt = 0;
    for (let index = 1; index < n; index++) {
        
        if(index*index ==n){
            cnt++;
        }
    }

    return cnt ? 1:2;
}

// 다른 사람들의 풀이
// ⭐ Math.sqrt(n) 는 n의 제곱근을 반환한다 ex) n이 9라면 , 3을 반환한다.  10이라면 3.xxxx를 반환한다.
// Number.isInteger 를 통해 정수인지 판별.
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

solution();