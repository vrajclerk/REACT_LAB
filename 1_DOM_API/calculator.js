function Calculator(op){
    var v1=parseInt(document.getElementById("num1").value);
    var v2=parseInt(document.getElementById("num2").value);

    var count;
    switch(op){

        case "add":
            console.log("add");
            count=v1+v2;
            break;
        case "sub":
            count=v1-v2;

            break;  
        case "mul":
            count=v1*v2;
            break;  
        case "div":
            count=v1/v2;

            break;  
    }
    document.getElementById("result").value=count;
}