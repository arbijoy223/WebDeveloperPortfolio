function oddavg(numbers){
    let sum=0,nmbr=0;
for(const val of numbers){
   
    if(val%2!==0 ){
        // console.log(val);
     sum+=val;
     nmbr++;
    }
    
}
return sum/nmbr;
}

const numbers=[3,6,4,1,9];

// console.log(oddavg(numbers));

function norepeat(name){
const unique= [];
for(const item of name){
    if(unique.includes(item)===false){
        unique.push(item);
    }
}
return unique;

}
name=['bijoy','ar','ar','rahman','bijoy','ar','ar','rahman'];
// console.log(norepeat(name));

function add(a,b,add){
    return a+b;
}
  
function sub(a,b,sub){
    return a-b;
}

function mul (a,b,mul){
    return a*b;
}
  
function cal(a,b,op){
    if(op==='add'){
        console.log(add (a,b));
    }
    else if(op==='mul'){
        console.log(mul(a,b));
    }
    else console.log (sub(a,b));
}

console.log (cal(10,7,'mul'));

// function shojib(){
//     console.log ("shojib is a play boy")
// }
// shojib();