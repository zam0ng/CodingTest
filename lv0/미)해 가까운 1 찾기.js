// 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 
// 정수 idx가 주어졌을 때, idx와 크거나 같으면 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.
// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
// [1, 0, 0, 1, 0, 0]	4	-1
function solution(arr,idx) {

    let answer = 0;
    arr.forEach((el,index) => {
        
        if(index >= idx && answer==0){
            
            if(el==1)
            answer = index;
        }
    }); 

    return answer !==0 ? answer : -1;
}

// 다른 사람들의 풀이

function solution(arr, idx) {
    var answer = -1; // 초기값을 -1로 설정하여 1을 찾지 못한 경우에 대비
  
    for (let i = idx; i < arr.length; i++) { // idx 이후의 요소만 검사
      if (arr[i] == 1) {
        answer = i; // 1을 찾으면 해당 인덱스를 저장하고 루프 종료
        break;
      }
    }
  
    return answer;
}

function solution(arr, idx) {
    return arr.indexOf(1, idx);
}

