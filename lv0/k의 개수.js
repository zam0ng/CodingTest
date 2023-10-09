// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
// 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.
// 1	13	1	6
function solution(i, j, k) {
    var answer = 0;
    for (let index = i; index <= j; index++) {
        let str = `${index}`.split("");
        str.forEach(element => {
            
            if(element==`${k}`) answer++;
        });
    }
    return answer;
}
solution(1,13,1)

// 다른 사람들의 풀이
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}