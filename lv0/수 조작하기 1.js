//정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
// 0	"wsdawsdassw"	-1
function solution(n, control) {
    let splitct = control.split("");
    splitct.forEach(el => {
        
        switch (el) {
            case "w":
                n+=1;
                break;
            case "s":
                n-=1;
                break;
            case "d":
                n+=10;
                break;
            case "a":
                n-=10;
                break;
        }
    });
    var answer = n;
    return answer;
}

// 다른사람들이 많이 풀이한 방법

function solution(n, control) {
    
    
    // 구조분해할당
    const ta = {w:1,s:-1,d:10,a:-10};
    
    // 문자열인 control 을 스프레드연산자로 배열로 전환
    // reduce 함수를 이용해 누산기
    // p : 초기값(a)과 계산이 누적되는 값 , c: 나머지값(b,c,d,e,f);
    // 마지막엔 누산된 p 의 값과  n 이 합쳐진 값이 return 됨.

    return [...control].reduce((p, c)=>p+ta[c],n);

}
