// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. 
// num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
// 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
// [1, 2, 3, 4, 5, 6, 7, 8]	 ,2  / result :	[[1, 2], [3, 4], [5, 6], [7, 8]]
// [100, 95, 2, 4, 5, 6, 18, 33, 948],	3	/ result :[[100, 95, 2], [4, 5, 6], [18, 33, 948]]
function solution(num_list, n) {
    var answer = [];
    let ta=[];
    let j=0;
    for (let i = 0; i < num_list.length; i+=n) {
        console.log("i " +i);
        while (j<n) {
            ta.push(num_list[i+j])
            j++;
        }
            
        answer.push(ta);
        ta=[];
        j=0;
    }
    return answer;

}

// solution([1, 2, 3, 4, 5, 6, 7, 8],2)
solution([100, 95, 2, 4, 5, 6, 18, 33, 948],3)

// 다른 사람들의 풀이
function solution(num_list, n) {
    var answer = [];
    // num_list.length가 비어지면 루프 종료됨.
    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}