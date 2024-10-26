import React from 'react';
import ReactDOM from 'react-dom/client';
let a=<p>Hi Muthu, how are you?</p>
      
let abc=()=>{
    return(
        <div>
           <p> hi govindh!!!</p>
        </div>
    )}
    let b=ReactDOM.createRoot(document.getElementById ("hi"))
b.render(<abc/>)
b.render(a)


