// 정수로 이루어진 리스트 num_list가 주어집니다. 
// num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
// [12, 4, 15, 46, 38, 1, 14]	-> [1, 4, 12, 14, 15]


function solution(num_list){

    let newArr=[];
    const ta = num_list.sort(function(a,b){
        return a-b;
    });

    console.log(ta);
    for (let i = 0; i < 5; i++) {
        newArr.push(ta[i]);
    }
    
    return newArr;
}
// 다른 사람들의 풀이
// velog
function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(0, 5);
}
solution();