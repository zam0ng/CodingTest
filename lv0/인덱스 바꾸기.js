// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
// "hello"	1	2	"hlelo"
function solution(str, n1, n2) {
    var answer = '';
    
    for (let i = 0; i < str.length; i++) {
        
        if(i == n1){
            answer += str[n2];
        }
        else if( i == n2){
            answer += str[n1];
        }
        else{
            answer += str[i];
        }
    }

    return answer;
}

solution();

// 다른 사람들의 풀이

function solution(my_string, num1, num2) {
  const str = [...my_string];

  [str[num1], str[num2]] = [str[num2], str[num1]];

  return str.join('');
}