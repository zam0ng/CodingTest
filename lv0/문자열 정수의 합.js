// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 
// 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_str) {
    var sum = 0;
    let splitstr = num_str.split("");
    for (let i = 0; i < splitstr.length; i++) {
        
        sum += parseInt(splitstr[i]);
    }
    return sum;
}
