// 정수 배열 arr이 매개변수로 주어집니다. 
// arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. 
// arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.
// [1, 2, 3, 4, 5, 6]	[1, 2, 3, 4, 5, 6, 0, 0]
// [58, 172, 746, 89]	[58, 172, 746, 89]

function solution(arr) {
    const leng  = arr.length;
    let mok = parseInt(leng/2);
    let num = 0;
    console.log(mok);
    if(mok % 2 == 0 && mok !=0){

        while(mok>1){
            
           mok = parseInt(mok / 2) ;

           if(mok % 2 !== 0 && mok >1){
            console.log("아님2");

            while(2**num<leng){
                num++;
            }
            let cha = 2**num - leng;
            console.log("num",cha);
            for (let index = 0; index < cha; index++) {
                arr.push(0);
            }
        console.log(arr);

            return (arr);
           }

           else{
            console.log("맞음");
             console.log(arr);

            return (arr);
           }
        }

        console.log(mok);
    }
    else if(mok % 2 !== 0){
        console.log("아님")
        console.log(leng)

        while(2**num<leng){
            num++;
        }
        let cha = 2**num - leng;
        console.log("num",cha);
        for (let index = 0; index < cha; index++) {
            arr.push(0);
        }
        console.log(arr);

        return (arr);
    }
    else{
        console.log("맞음24");
        console.log(arr);
        return(arr);
    }
}

// solution([1, 2, 3, 4, 5, 6,1, 2, 3, 4,1, 2, 3, 4, 5, 6,1, 2, 3, 4])
// solution([58, 172])
solution([58])