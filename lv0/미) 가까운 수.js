// 정수 배열 array와 정수 n이 매개변수로 주어질 때, 
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
// [3, 10, 28]	20	28
function solution(array, n) {
    let temp = Math.abs(array[0]-n);
    let num = array[0];
    console.log(temp,num)
    array.forEach((element) => {

        if(temp > Math.abs(element - n)){
            console.log(element);
            num = element            
        }
        else if(temp == Math.abs(element - n)){

            if(num > element) {
                num =element;
            }
            else num = num;
        }
    });
    const idx = array.indexOf(num);
    console.log(array[idx])
    return array[idx];
}

// solution([3, 10, 28],20) // 28 
solution([12, 3, 4, 10, 13], 11); // 10