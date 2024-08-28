const frm=document.querySelector("form");
const results=document.createElement("div");
const button=document.querySelector("button");
frm.addEventListener("submit",function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    results.className="results";
    button.insertAdjacentElement('afterend', results);
    if(height===""||height<=0||isNaN(height)){
       results.innerHTML="<p style='display:block'>You Entered Invalid Height as a Input</p>"
        
    }
    else if(weight===""||weight<=0||isNaN(weight)){ 
       results.innerHTML="<p style='display:block'>You Entered Invalid Height as a Input</p>"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<p> BMI = ${bmi}</p>`;
    }
})
