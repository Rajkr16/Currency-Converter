let first=document.querySelector("#first");
let firstval=document.querySelector("#firstval");
let second=document.querySelector("#second");
let secondval=document.querySelector("#secondval");
let para=document.querySelector(".para");

updateRate()
 function updateRate(){
    console.log("changed");
     fetch(`https://v6.exchangerate-api.com/v6/dc26f9dad0d6f72113da4dc7/latest/${first.value}`)
     .then((res)=>{
        res.json().then((data)=>{
            // console.log(data);
            let rate=data.conversion_rates[second.value];            
            console.log(rate);

            para.innerText=`1 ${first.value} = ${rate} ${second.value}`

            secondval.value=(firstval.value*rate).toFixed(2);

        })
        // console.log(res);
    })
}

first.addEventListener("change",updateRate)

firstval.addEventListener("input",updateRate)

second.addEventListener("change",updateRate)

secondval.addEventListener("change",updateRate)