// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
// 10	5  => 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
function solution(n) {
    let cnt =0;
    let result =0;
    for (let i = 1; i <= n; i++) {
        cnt=0;
        for (let j = 1; j <= i; j++) {
            
            if(i % j ==0){

                cnt++;
                console.log("i " + i , "j " + j);
            }
        }
        if(cnt >=3){
            result++;
        }
    }
    return result;
}

solution(10);