// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
// "123"	6
function solution(number) {
    var answer = (number).split("");
    const ta = answer.map(el => Number(el));
    const sum = ta.reduce((a,b) => a+b,0);
    const rest = sum % 9;
    return rest;
}

// solution("123");
solution("78720646226947352489");

//velog
// reduce((a,b) => a+b,0);
// a 는 초기값 뒤에 0으로 초기화 해서 0 으로 시작
// b 는 배열을 순회중인 값
