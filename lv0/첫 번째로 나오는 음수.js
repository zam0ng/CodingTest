// 정수 리스트 num_list가 주어질 때, 
// 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 
// 음수가 없다면 -1을 return합니다.

function solution(num_list) {
    var answer = -1;
    let bool =false;
    num_list.forEach((el,index) => {
        
        if(el <0 && bool == false){
            bool = true
            return answer = index;
        }
    });
    return answer;
}



// 다른사람들이 많이 푼 방법

function solution(num_list) {
    // findIndex 로 num 이 음수이면 해당 인덱스를 반환하고, num 이 음수가 없으면 인덱스를 찾지 못해 -1 을 반환한다.
    return num_list.findIndex((num) => num < 0);
}