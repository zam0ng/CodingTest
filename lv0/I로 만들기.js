// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(str) {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i]<"l"){
    
            console.log(str[i])
            newstr += "l"
        }
        else{
            newstr += str[i];
        }
    }
    return newstr;
}

solution();