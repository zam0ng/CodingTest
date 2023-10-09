// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 
// 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 
// 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
// 3	4	[true, false, false, true, true]	result :37
function solution(a, d, included) {
    var answer = 0;
    let arr=[a];
    
    for (let i = 0; i < included.length-1; i++) {
        
        arr.push(arr[i]+d);
    }

    included.forEach((element,index) => {
        
        if(element==true){
            answer += arr[index];
        }
    });
    return answer;
}

solution(3,4,[true, false, false, true, true])

// 다른 사람들의 풀이

function solution(a, d, included) {
    // acc : 초기값 , flag : included 요소 순환 값 , i : index 값
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}