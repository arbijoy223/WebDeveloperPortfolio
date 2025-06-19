
function calculateVAT(price) {
    if (isNaN(price) || typeof price !== "number") {
        return "Invalid";
    }
    else if(price>=0){
        return (price*7.5)/100;
    }
    else return ('Invalid');
  
}


function validContact(contact) {
   
    if (typeof contact !== "string") {
        return "Invalid";
    }

    if (contact.includes(" ")) {
        return false;
    }

    if (contact.length === 11 && contact[0]=='0' && contact[1]=='1') {

        for (let i = 0; i < contact.length; i++) {
            if (i<0 && i>9) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}




function  willSuccess( marks ) {
    if (Array.isArray(marks)) {
    let p=0,f=0;
    for(let i=0;i<marks.length;i++){
        if(marks[i]<50){
            f++;
        }
        else p++;
    }
    if(p>f){
        return true;
    }
    else return false;
}
else return ("Invalid");
}





function validProposal( person1,person2 ) {
   
if(typeof person1 === 'object' && typeof person2 === 'object' ){
    let agegap= Math.abs(person1.age-person2.age);
   
   if( person1.gender!== person2.gender && agegap<=7){
    return true;
   }
   else return false;
}
else return ("Invalid");

}


function  calculateSleepTime( times ) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    
    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid";
        }
    }

   let sum=0;
for(const val of times){
    sum+=val;
}
let hour = Math.floor(sum / 3600);
    let minute = Math.floor((sum % 3600) / 60);
    let second = sum % 60;

    return { hour, minute, second };
}


