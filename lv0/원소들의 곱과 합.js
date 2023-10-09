// 정수가 담긴 리스트 num_list가 주어질 때, 
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 
// 크면 0을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    var answer = 0 ;
    let ta = num_list[0];
    let tb = num_list[0];
    for(i=1 ; i < num_list.length ; i++){
        
        ta = ta * num_list[i];
        tb = tb + num_list[i];
    }
    if(ta <(tb*tb)) answer=1;
    else answer=0;

    return answer;
}


