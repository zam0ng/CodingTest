// 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(mystr, m) {
    let newstr = [];
    var answer = '';

    mystr.split("").forEach(el => {
        console.log(el);
        
        for (let index = 0; index < m; index++) {
            newstr.push(el);
        }
    });

    answer = newstr.join("");
    return answer;
}

solution();

// 다른 사람들이 많이 푼 방법

function solution(my_string, n) {
    return my_string.split('').map(str => str.repeat(n)).join('');
}