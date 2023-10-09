// 문자열 before와 after가 매개변수로 주어질 때, 
// before의 순서를 바꾸어 after를 만들 수 있으면 1을, 
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
// "olleh"	"hello"	1
// "allpe"	"apple"	0

function solution(before, after) {
    const beforesplit= before.split("");
    const aftersplit= after.split("");
    for (let i = before.length-1; i >= 0; i--) {
        
        let bool = aftersplit.indexOf(beforesplit[i]);

        if(bool !==-1){
        aftersplit.splice(bool,1);
        }
        
    }
    return aftersplit.length ==0 ? 1 : 0;
}

solution("olleh","hello")
// solution("allpe","apple")

// 다른 사람들의 풀이
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}