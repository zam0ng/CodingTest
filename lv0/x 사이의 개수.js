// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 
// 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(str) {
    var answer = [];
    let ta = str.split("x");

    for (let i = 0; i < ta.length; i++) {
        
        answer.push(ta[i].length);
    }
    return answer;
}
solution();

// 다른 사람들의 풀이
function solution(myString) {
    return myString.split('x').map(v => v.length);
}