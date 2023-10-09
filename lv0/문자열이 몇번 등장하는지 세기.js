// 문자열 myString과 pat이 주어집니다. 
// myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.
// "banana"	"ana"	2
// "aaaa"	"aa"	3
function solution(myString, pat) {
    var answer = 0;
    let newstr ="";
    for (let index = 0; index <= myString.length- pat.length; index++) {

        newstr += myString[index];
        for (let j = index +1; j < pat.length +index; j++) {
            
            newstr += myString[j]
        }
        console.log(newstr);
        if(newstr == pat) answer++;
        newstr = "";
    }
    console.log(answer);
    return answer;
}

solution("banana","ana")
solution("aaaa","aa")

// 다른 사람들의 풀이

function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i <= myString.length - pat.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) {
            count++;
        }
    }

    return count;
}