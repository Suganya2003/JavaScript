let Suganya ={
    Weight:44,
    Height:5.3,
    gym_days: function(){
        console.log("monday\ntuesday\nwednesday\nthursday\nfriday\nsaturday");
    },
    gym_food: function(a){
       let time=a;
       switch(time){
        case 6:
            console.log("milk");
            break;
        case 7:
            console.log("Two Omblate"); 
            break;
            case 8:
                console.log("break");
                break;
            case 9:
                console.log("banana"); 
                break;
                case 10:
                    console.log("apple");
                    break;
                case 11:
                    console.log("bread"); 
                    break;
                    case 12:
                        console.log("lunch");
                        break;
                    case 4:
                        console.log("nuts"); 
                        break;
       }
    }
}
for(let key in Suganya){
    console.log(key,Suganya[key]);
    
}
Suganya.gym_days();
Suganya.gym_food(10);