// 문자열 s가 매개변수로 주어집니다. 
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
// "abcabcadc"	"d"
// "abdc"	"abcd"
// "hello"	"eho"

function solution(s) {
    var answer = '';
    let cnt = 0 ;
    s.split("").forEach(element => {
        s = s.replaceAll(element," ");
        let newArr = s.split("");

        newArr.forEach(el => {
            if(el==" ") cnt++;
        });
        console.log("cnt",cnt);
        if(cnt==1){
            console.log("여기들옴11111?");
            
            answer +=element;
            cnt = 0;
            newArr = newArr.filter(el => el !=" ");
        }
        else{
            console.log("여기들옴?");
            cnt = 0;
            newArr = newArr.filter(el => el !=" ");
        }
        console.log(newArr)
        s=newArr.join("");
    });
    console.log(answer.split("").sort().join(""));
    return answer.split("").sort().join("");
}

// solution("abcabcadc","d")
// solution("abdc","abcd")
solution("hello","eho")

// 다른 사람들의 풀이
// 해석해야함.
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}