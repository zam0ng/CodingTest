// n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, 
// arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
// 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]
// [[5, 192, 33], [192, 72, 95], [33, 95, 999]]
function solution(ar) {
    var answer = 0;
    let newarr = [...ar];

    for (let i = 0; i < ar.length; i++) {
        
        for (let j = 0; j < ar[0].length; j++) {
            if(ar[i][j]== newarr[j][i]){
                newarr[i][j] = "";
                newarr[j][i] = "";
            }
        }
    }
    const ta = [].concat(...newarr).filter(el => el!=="");

    return answer = ta.length ===0 ? 1 : 0;
}
solution();

// 다른 사람들의 풀이

function solution(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] !== arr[j][i]){
                return 0;
            }
        }
    }
    return 1;
}