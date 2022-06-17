const a=require("readline-sync");
console.log("welcome to hdfc bank","insert the card")
let card=a.question("choose card type:/rupay/visa/master/");
if (card=="rupay" ||"visa" || "master"){
    let language=a.question("choose your language:/english/hindi/");
    if (language== "english" || "hindi" || "marathi"){
        let options=a.question("select prefer option:/withdrwal/check balance/change pin/");
        if (options=="withdrwal" ||"check balance" || "change pin"){
            let pin=a.questionInt("enter your pin");
            if (pin<9999){
                let amount=a.questionInt("enter the amount");
                if (amount>500 && amount<10000){
                    let reciept=a.questionInt("would yu like to take recipt:/yes/no");
                    if (reciept=="yes" || "no"){
                    }else{
                        console.log("please choose the yes or no");
                    }
                }else{
                   console.log("please enter the amount availble");
                }
            }else{
                console.log("please enter correct pin");
            }
        }else{
            console.log("please select prefer option")
        }
    }else{
        console.log("please select your suitable language");
    }
}else{
    console.log("please choose type of card");
}