// 문자열 my_string이 매개변수로 주어집니다. 
// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
// "aAb1B2cC34oOp"	37
function solution(my_string) {
    return my_string.split("").map(el => Number(el)).join("").replaceAll("NaN","a").split("a").filter(el=> el!=="").reduce((a,b)=>(a+Number(b)),0);
}

solution("aAb1B2cC34oOp");

