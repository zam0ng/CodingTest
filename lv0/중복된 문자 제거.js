// 문자열 my_string이 매개변수로 주어집니다. 
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
// "people"	"peol"
function solution(my_string) {
    var answer = [];
    let bool =true;
        
        while (bool) {
            
            let ta = my_string.slice(0,1);

            if(!answer.includes(ta)) {
                answer.push(ta);
            }

            my_string = my_string.slice(1);

            if(my_string.length==0){
                bool = false;
            }
        }

    return answer.join("");
}

solution("people");

// 다른 사람들의 풀이 velog

function solution(my_string) {
    return [...new Set(my_string)].join('');
}

//new Set 생성자 함수는 배열 또는 이터러블 객체를 받아 중복을 제거시키고 고유한 값만 포함한 Set을 생성.
// ex ) my_string이 "hello"인 경우:
// new Set(my_string)은 Set { 'h', 'e', 'l', 'o' }를 반환