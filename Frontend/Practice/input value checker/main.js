function btn()
{
    // let array =[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9];
    // let a=Math.floor(Math.random(array));
    let a=document.getElementById("input1").value;
    let b= document.getElementById("input2").value;
    let c= document.getElementById("check");
    if(a==b){
        c.innerHTML="Entered Captcha is correct";
    }
    else{
        c.innerHTML="Entered Captcha is incorrect";
    }
}