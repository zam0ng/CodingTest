// 정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 
// 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.
// 만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.
// [2021, 12, 28]	[2021, 12, 29]	1
function solution(date1, date2) {
    if(date1[0]<date2[0]) return 1;

    else if(date1[0]>date2[0]) return 0;

    else{
        if(date1[1]<date2[1]) return 1;

        else if(date1[1]> date2[1]) return -0;

        else{

            if(date1[2]< date2[2]) return 1;

            else if(date1[2]> date2[2]) return 0;

            else return 0;
        }
    }
    
}

// solution([2021, 12, 28],[2021, 12, 29])
// console.log(solution([2021, 12, 31], [2022, 1, 1]))
console.log(solution([2010, 2, 10], [2009 ,12, 10]))
console.log(solution([2010, 12, 10], [2010 ,2, 10]))

// 다른 사람들의 풀이

const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0
