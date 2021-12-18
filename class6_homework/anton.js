// function pal(num) {
//     let rev_num = 0;
//     debugger;
//     while (num > 0) {
//         rev_num = rev_num * 10 + (num % 10);
//         num = (num / 10) | 0;
//     }
//     return rev_num;
// }

// let num = Number(prompt("enter number"))
// let rev_num = pal(num)
// if(rev_num == num){
//     alert("true")
// }
// else{
//     alert("false")
// }
 

// function mail(tak) {
//     let shtru = tak.indexOf("@");
//     let dot = tak.indexOf(".");


//     if (tak.length < 5 || dot < shtru || shtru == -1) {
//         return false;
//     }

//     if(!(tak.charAt(shtru-1) >= 'A' && tak.charAt(shtru-1) <= 'Z') || !(tak.charAt(shtru-1) >= 'a' && tak.charAt(shtru-1) <= 'z')) {
//         return false;
//     }
//     if(!(tak.charAt(shtru+1) >= 'A' && tak.charAt(shtru+1) <= 'Z') || !(tak.charAt(shtru+1) >= 'a' && tak.charAt(shtru+1) <= 'z')) {
//         return false;
//     }
//     if (!(tak.charAt(shtru + 1) >= 0 && tak.charAt(shtru + 1) <=9)) {
//         return false;

//     }

//     for (let i = 0; i < tak.length; i++) {
        
//         if (i > dot && tak.charAt(i) > "0" && tak.charAt(i) < "9") {
//             return false;

//         } if (i > dot && !(tak.charAt(dot + 1 ) >= "A" && tak.charAt(dot + 1) <= "z" && tak.charAt(dot + 2) >= "A" && tak.charAt(dot + 2) <= "z"))  {
//             return false;

//         }
//     }
//     return true;
// }

// tak = prompt("write mail");
// alert(mail(tak));


function daate(date, num) {
    let day;
    let month;
    let year;
    let firstDot = date.indexOf('.');
    let secondDot = date.indexOf('.', firstDot+1)
    
    day = Number(date.slice(0, firstDot));
    month = Number(date.slice(firstDot+1, secondDot));
    year = Number(date.slice(secondDot+1));

    day += num;
    while(day > 30) {
        day -= 30;
        month++;
    }

    while(month > 12){
        month -=12
        year++
    }

    return day + "." + month + "." + year

}
date = (prompt("write date"))
num = Number(prompt("add days"))
alert(daate(date , num))
