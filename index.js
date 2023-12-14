 let enter=document.querySelectorAll("button");

 let disp=document.querySelector(".display");

 let val=enter.length;
 for(let i=0;i<val;i++)
 {
   enter[i].addEventListener('click',function(event){

 
     
     
     if(this.innerText==="=" && disp.innerText!=='')
     {
        disp.innerText=eval(disp.innerText);
     }

     else if(this.innerText==="AC"||this.innerText==="C")
     {
      disp.innerText='';
     }

     else if((this.innerText==="%"|| this.innerText==="/" ||
     this.innerText==="*"|| this.innerText==="+"|| this.innerText==="-"||this.innerText==="=") && disp.innerText==='')
     {
        
        {
          disp.innerHTML='';
        }
     }

     else{
       disp.innerText=disp.innerText.concat(`${this.innerText}`);
      console.log(disp.innerText);
     }
   })
   
 }

