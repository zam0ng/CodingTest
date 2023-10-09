// 정수 start_num와 end_num가 주어질 때, 
// start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start, end_num) {
    let answer =[start];
    let ta = answer.length;
    while(answer[ta-1] !=end_num ){
        answer.push(answer[ta-1]-1);
        ta = answer.length;
    }
     
    return answer;
}
