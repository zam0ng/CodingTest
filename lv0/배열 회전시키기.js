// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.


function solution(numbers, direction) {
    let temp =[];
    let ta,tb ;
    if(direction =="right"){

        while(numbers.length > 1){

            ta = numbers.shift();
            temp.push(ta);
            ta = "";
        }
        const rightshift = [...numbers, ...temp];
        return rightshift;
    }  
    else{

        tb = numbers.shift();
        numbers.push(tb);
        return numbers;
    }  
}

// solution([1, 2, 3, 4],"right")
solution([4, 455, 6, 4, -1, 45, 6],"left")

//  velog 정리
// arr.shift() : arr 배열의 맨 앞을 제거
// arr.unshift(1,2) : arr 배열 앞에 1,2 요소 추가
