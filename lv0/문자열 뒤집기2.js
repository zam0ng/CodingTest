// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, 
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
// "Progra21Sremm3"	6	12	"ProgrammerS123"
function solution(my_string, s, e) {
    var answer = '';
    const str1= my_string.split("").splice(0,s).join("");
    const str2= my_string.split("").splice(s,e-s+1).reverse().join("")
    const str3= my_string.split("").splice(e+1,my_string.length).join("");
    return answer= str1+str2+str3;
}

solution("Progra21Sremm3",6,12)