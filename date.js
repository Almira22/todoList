exports.getDate=function (){
    let today= new Date();
        
    let options ={
        day:"numeric",
        weekday:"long",
        month:"long"
    };



    let day = today.toLocaleDateString("en-US",options);
    return day;
}

//If you have another module, use the object property to declare the other one like so

exports.getDay=function (){
    let today= new Date();
        
    let options ={
        weekday:"long",
        
    };



    let day = today.toLocaleDateString("en-US",options);
    return day;
}

