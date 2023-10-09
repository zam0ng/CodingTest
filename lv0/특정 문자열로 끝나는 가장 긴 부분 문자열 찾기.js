// 문자열 myString과 pat가 주어집니다. 
// myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
// "AbCdEFG"	"dE"	"AbCdE"
// "AAAAaaaa"	"a"	"AAAAaaaa"
function solution(myString, pat) {
    let answer = 0;
    const ta = myString.replaceAll(pat," ").split("")
    
    for (let i = ta.length-1; i >= 0; i--) {

        if(ta[i]==" " && answer==0){
            answer = i;
        }
    }
    let tb = ta.slice(0,answer+1)
    tb.forEach((el,idx) => {
        if(el == " "){
            tb[idx] = pat;
        }
    });
    return tb.join("");
}

// solution("AbCdEFG","dE")
solution("AAAAaaaa","a")

// 다른 사람들의 풀이
// velog lastIndexOf : indexOf 가 앞에서부터 검색할 값을 찾는다면 lastIndexOf는 끝에서부터 찾기 시작.
function solution(myString, pat) {
    return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}