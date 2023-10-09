// 문자열 myString이 주어집니다. 
// "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.
// 단, 빈 문자열은 반환할 배열에 넣지 않습니다.

function solution(str) {
    let answer = str.split("x").filter(el=>el !=="").sort();;
    return answer;
}

solution();

// velog 정리 
// sort(); -> 알파벳 순으로 정리해줌