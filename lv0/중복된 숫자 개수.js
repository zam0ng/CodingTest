//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
//array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

function solution(array,n) {
    let cnt =0;

    while (array.indexOf(n)!=-1) {
        
        const ta = array.indexOf(n)
        array.splice(ta,1);
        cnt++;
    }

    return cnt;
}

solution();

// 다른 사람들의 풀이

function solution(array, n) {
    return array.filter(v=>v===n).length;
}