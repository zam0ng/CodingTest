// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. 
// myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 
// pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

function solution(myString, pat) {
    var answer = 0;
  
    let myArr = [...myString];
    // let mytest = my.replace("AB","C");
    // console.log(mytest);

    myArr.forEach((el,index) => {

        if(el=="A") myArr[index]= "B";
        else myArr[index] = "A";
    });
    let myjoin = myArr.join("");
    let ta = myjoin.replace(pat,"a")
    let tb = [...ta];
    tb.forEach(el => {
        if(el =="a") return answer =1;
    });

    return answer;
}

// 다른사람들이 많이 풀이한 방법 

function solution(myString, pat) {
    return [...myString].map((s) => s === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}

function solution(myString, pat) {
    return myString.split("").map( el=> {return (el==="A")? "B" : "A"}).join("").includes(pat) ? 1 : 0
}
