// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
//  [3, 76, 24]	[3, 1, 2]

function solution(emergency) {
    var answer = [];
    let data = [...emergency].sort((a,b)=>a-b);
    let data3 = [...emergency];
    let count = 1;
    while (data.length > 0) {
        let data2 = data.pop();
        let index = data3.indexOf(data2);
        emergency[index] = count;
        count++;
    }
    console.log(emergency);

    return emergency;
}

// 다른 사람들의 풀이

function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}

solution([3,4,1,2,5]);
// solution([3, 76, 24]);