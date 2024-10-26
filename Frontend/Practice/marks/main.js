let sum=()=>{
    let x=Number(document.getElementById("ip1").value)
    let y=Number(document.getElementById("ip2").value)
    let z=x+y
    let op=document.getElementById("result")
if(z<35){
    op.innerHTML="fail";
}
else if(z>=35 && z<=50){
    op.innerHTML="Just pass";
}
else if(z>=51 && z<=75){
    op.innerHTML="Average";
}
else if(z>=76 && z==100){
    op.innerHTML="Excellent";
}
}