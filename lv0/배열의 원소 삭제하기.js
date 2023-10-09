// 정수 배열 arr과 delete_list가 있습니다. 
// arr의 원소 중 delete_list의 원소를 모두 삭제하고 
// 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.
// arr :[293, 1000, 395, 678, 94] , delete_list	 :[94, 777, 104, 1000, 1, 12] , result :[293, 395, 678]

function solution(arrr, del) {
    let newArr = [];

    const tb = del.forEach(element => {
        
        if(arrr.indexOf(element)!==-1){
            console.log(arrr.indexOf(element));

            newArr = arrr.filter(el=>el!==element);
            arrr= newArr;
        }
        else{
            newArr = arrr;
        }
        
    });
    
    return newArr;
}

solution();

// 다른 사람들의 풀이
function solution(arr, delete_list) {
    return arr.filter((n) => !delete_list.includes(n));
}