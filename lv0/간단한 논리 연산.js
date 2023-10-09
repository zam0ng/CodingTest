// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 
// 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
// (x1 ∨ x2) ∧ (x3 ∨ x4)

// false	true	true	true	true
// true	false	false	false	false

// x	y	x ∨ y	x ∧ y
// T	T	   T	   T 
// T	F	   T	   F
// F	T	   T	   F
// F	F	   F	   F

// x ∨ y => 하나라도 T면 T => OR연산자
// x ∧ y => 둘다 T여야 T => AND연산자


function solution(x1, x2, x3, x4) {
    var answer = true;
    let W = x1 == true ? x2 == true ? true : true : x2 == true ? true : false;
    let M = x3 == true ? x4 == true ? true : true : x4 == true ? true : false;

    return answer = W == true ? M == true ? true : false : M == true ? false : false;
}

solution(false,true,true,true)

// 다른 사람들의 풀이

function solution(x1, x2, x3, x4) {
    return (x1||x2) && (x3||x4)
}