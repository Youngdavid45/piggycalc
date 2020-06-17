const days = document.querySelector("#days");
const amount = document.querySelector("#amount");
const percent = document.querySelector("#percent");
const naira = document.querySelector("#naira");
const msg = document.querySelector("#msg");


const oneMonth = 0.06;
const twoMonths = 0.08;
const threeMonth = 0.1;
const fourMonths = 0.13;

function interestCalc(){
    d = days.value;
    a = amount.value;
    percent.value = "";
    naira.value = "";


    if (d >= 1 || d != 0){
        percent.innerHTML = d / (oneMonth * a);
        naira.innerHTML = (d / (oneMonth * a))* 10;
    } else if (d >= 32 || d <= 61){
        percent.innerHTML = d / (twoMonth * a);
        naira.innerHTML = (d / (twoMonth * a))* 10;
    } else if (d >= 62 || d <= 91){
        percent.innerHTML = d / (threeMonth * a);
        naira.innerHTML = (d / (threeMonth * a))* 10;
    } else if (d >= 92 || d <= 121){
        percent.innerHTML = d / (fourMonth * a);
        naira.innerHTML = (d / (fourMonth * a))* 10;
    } else {
        msg.innerHTML = "Invalid input, try again";
    }
    // switch(d, a) {
    //     case d >= 1 || d != 0:
    //         percent.value = d / (oneMonth * a);
    //         naira.value = (d / (oneMonth * a))* 10;
    //         break;
    //     case d >= 32 || d <= 61:
    //         percent.value = d / (twoMonth * a);
    //         naira.value = (d / (twoMonth * a))* 10;
    //         break;
    //     case d >= 62 || d <= 91:
    //         percent.value = d / (threeMonth * a);
    //         naira.value = (d / (threeMonth * a))* 10;
    //         break;
    //     case d >= 92 || d <= 121:
    //         percent.value = d / (fourMonth * a);
    //         naira.value = (d / (fourMonth * a))* 10;
    //         break;
    //     default:
    //         msg.innerHTML = "Invalid input, try again";
    // }
}