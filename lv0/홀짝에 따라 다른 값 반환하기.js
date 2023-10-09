// 양의 정수 n이 매개변수로 주어질 때, 
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.\
// 7->	16(1+3+5+7)
// 10 -> 220(2*2 + 4*4 + 6*6 + 8*8 + 10*10 : 4+16+36+64+100)

function solution(n) {
    let sum =0;    
        for (let i = 1; i <= n; i++) {
            if(n%2==0 && i%2==0){
                console.log(i);
                sum += i*i
            }
            else if(n%2==1 && i%2==1){
                sum += i
            }
        }
    return sum;
}
solution();