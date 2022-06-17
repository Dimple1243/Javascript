let a=require("readline-sync");
const Day=a.question("enter the day ");
const Meal=a.question("enter the time; ");
switch(Day){
    case'Monday':
        switch(Meal){
            case'breakfast':
                console.log("poha");
                break;
            case'lunch':
                console.log("dal roti");
                break;
            case'snacks':
                console.log("bhel");
                break;
            case'dinner':
                console.log("dal rice");
                break;
            default:
                console.log("invalid meal ");
                break;
        }
        break;
    case 'tuesday':
        switch(Meal){
            case'breakfast':
                console.log("oats");
                break;
            case'lunch':
                console.log("puri sabji");
                break;
            case'snacks':
                console.log('kadha');
                break;
            case'dinner':
                console.log("roti sabji");
                break;
            default:
                console.log('invalid meal ')
        }
        break;
    case'wednesday':
        switch(Meal){
            case'breakfast':
                console.log("noodles");
                break;
            case'lunch':
                console.log('rajma rice');
                break;
            case'snacks':
                console.log('chips');
                break;
            case'dinner':
                console.log('chicken biryani');
                break;
            default:
                console.log('invalid meal');
                break;
        }
        break;
    case'thursday':
        switch(Meal){
            case'breakfast':
                console.log('maggie');
                break;
            case'lunch':
                console.log('aloo parathe');
                break;
            case'snacks':
                console.log('kheer');
                break;
            case'dinner':
                console.log('biryani');
                break;
            default:
                console.log('invalid meal');
                break;
        }
        break;
    case'friday':
        switch(Meal){
            case'breakfast':
                console.log('sabudana');
                break;
            case'lunch':
                console.log('egg curry');
                break;
            case'snacks':
                console.log('tang');
                break;
            case'dinner':
                console.log('shai paneer');
                break;
            default:
                console.log('invalid menu');
                break;
        }
        break;
    case'saturday':
        switch(Meal){
            case'breakfast':
                console.log('sandwich');
                break;
            case'lunch':
                console.log('fried rice');
                break;
            case'snacks':
                console.log('orange');
                break;
            case'dinner':
                console.log('daal baati');
                break;
            default:
                console.log('invalid meal');
                break;
        }
        break;
    case'sunday':
        switch(Meal){
            case'breakfast':
                console.log('idli sambhar');
                break;
            case'lunch':
                console.log('cheese kofta');
                break;
            case'snacks':
                console.log('ice-cream');
                break;
            case'dinner':
                console.log('dal fry');
                break;
            default:
                console.log('invalid meal');
                break;
        }
        break;
}       


