// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
// 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

function change() {
    let str = "aBcDeFg";
    let newstr = "";
    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {
            newstr += str[i].toLowerCase();
        } else {
            newstr += str[i].toUpperCase();
        }
    }
    console.log(newstr);
}
change();