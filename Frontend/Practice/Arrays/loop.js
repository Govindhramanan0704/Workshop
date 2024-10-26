let a=[1,2,3,4,5,6,7,8,9,10]
for(let b =0;b<a.length;b++){
    if(a[b]%2==0){
        console.log("Even numbers:")
        console.log(a[b])
    }
    if(a[b]%2!=0){
        console.log("Odd numbers:")
        console.log(a[b])
    }
}