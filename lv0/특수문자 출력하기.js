
function solution() {
    console.log(String.raw`!@#$%^&*(\'"<>?:;`)
    console.log(`!@#$%^&*(\'"<>?:;`)
}

solution();

// velog
// " \ " 는 String.raw 메서드를 사용하지않으면 
// " \ " 를 이스케이프 문자로 해석하여 정상적으로 출력하지 못한다.