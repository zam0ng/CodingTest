// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(mystr) {
    
    var answer = '';
    const ta = mystr.split("");
    const newstr = [];
    ta.forEach(el=>{
        if(el=="a"|| el=="e"|| el=="i"|| el=="o"|| el=="u"){

            newstr.push("");
        }
        else newstr.push(el);
    })
    answer = newstr.join("");
    return answer;
}

solution();

//다른 사람들의 풀이

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}