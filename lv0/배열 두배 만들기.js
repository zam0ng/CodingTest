//정수 배열 numbers가 매개변수로 주어집니다. 
//numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

var number = [1, 2, 3, 4, 5]	;

for(var i=0; i<number.length; i++){
    number[i] = number[i]*2;
}

return number;