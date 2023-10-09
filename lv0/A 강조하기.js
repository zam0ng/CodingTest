// 문자열 myString이 주어집니다.
// myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, 
// "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

// "abstract algebra" -> AbstrAct AlgebrA"
// "PrOgRaMmErS" -> "progrAmmers"
function solution(str) {
    var answer = '';
    let newstr ="";

    // let str = "abstract algebra";

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);

        if(str[i]=='a'){
            newstr += str[i].toUpperCase();
        }
        else if(str[i]!=="A"){
            newstr += str[i].toLowerCase();
        }
        else{
            newstr += str[i];
        }
    }

    return newstr;
}

solution();

// 다른 사람들의 풀이

function solution(myString) {
    return myString.toLowerCase().replaceAll("a","A") ;
}