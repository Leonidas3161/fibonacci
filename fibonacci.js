const n = 8;

function fibo(n){
    if(n==0) return 0;

    let a=0;
    let b=1;
    let c;

    for(let i=2; i<=n; i++){
        c=a+b;
        a=b;
        b=c;
    }
    return b;


}
 console.log(fibo(n));