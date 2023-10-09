// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.
//  정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
function solution() {
    const n =3;
    let i =0;
    let star = ""
    while (i < n) {
        star +="*"
        i++;
    }   
}
solution();

// 다른 사람들의 풀이

for (let i = 1; i <= +input[0]; i++) {
    console.log('*'.repeat(i));
}