// 정수 배열 array가 매개변수로 주어질 때, 
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// [1, 8, 3]	[8, 1]
function solution(arr) {
    var answer = [];

    const ta = Math.max(...arr);
    answer.push(ta);

    arr.forEach((el,index) => {
        
        if(el==ta){
            answer.push(index);
        }
    });

    return answer;
}
solution();

// 다른 사람들의 풀이

function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}