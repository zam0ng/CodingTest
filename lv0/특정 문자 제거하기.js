// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(mystr, lette) {
    const newstr =[];
    var answer = '';

    mystr.split("").forEach((el)=>{

        if(el !==lette){
            newstr.push(el);
        }
    })
    answer = newstr.join("");
    return answer;
}

solution();

// 다른 사람들의 풀이
function solution(my_string, letter) {
    return my_string.replaceAll(letter, '');
}

function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}