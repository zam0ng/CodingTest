// 문자열 binomial이 매개변수로 주어집니다. 
// binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 
// 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

function solution(binomial) {
    const ta = binomial.split(" ");
    console.log(ta);

    switch (ta[1]) {
        case "+":
            return Number(ta[0])+Number(ta[2]);
        case "-":
            return Number(ta[0])-Number(ta[2]);
            
        case "*":
            return Number(ta[0])*Number(ta[2]);
            
        default:
            break;
    }
}

solution("43 + 12") // result : 55

// velog 정리
// eval : 문자로 표현 된 JavaScript 코드를 실행하는 함수
function solution(binomial) {
    return (eval(binomial))
}