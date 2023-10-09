// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// a: 9	, b:91	->  result : 991

function solution(a, b) {
    var answer =""

    let strA = a.toString();
    let strB = b.toString();
    if(parseInt(strA + strB) > parseInt(strB + strA)){
        answer = parseInt(strA + strB);
    }
    else if(parseInt(strA + strB) == parseInt(strB + strA)){

        answer = parseInt(strA + strB);
    }
    else{
        answer = parseInt(strB + strA)
    }
    return answer;
}
// 다른 사람들의 풀이
// velog
// Math.max는 주어진 숫자중에 가장 큰 숫자를 반환
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}