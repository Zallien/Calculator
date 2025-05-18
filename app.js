
const monitor = document.getElementById("monitor")
let setdisplay1 = ""
let setdisplay2 = ""
let operator = ''

const calcbutton = document.querySelector(".calculate")

function displayinmonitor(num){

    if(operator == "" || operator.length == 0){
        setdisplay1 += num
        monitor.value = setdisplay1
    }
    else{
        setdisplay2 += num
        monitor.value = setdisplay2
    }
    
    console.log(setdisplay1)
    console.log(setdisplay2)
    console.log(operator)

}

function setoperator(op){
    operator = op
}

function calculate(e1,op,e2){
    let answer = ''

    if(setdisplay1 != "" && setdisplay2 != "" && operator != ''){
        switch (op){
        case '+':
            answer = Number(e1) + Number(e2)
            break;
        case '-':
            answer = Number(e1) - Number(e2)
            break;
        case '*':
            answer = Number(e1) * Number(e2)
            break;
        case '/':
            answer = Number(e1) / Number(e2)
            break;
        }

        setdisplay1 = ""
        setdisplay2 = ""
        operator = ''
        setdisplay1 = answer
        monitor.value = setdisplay1
        console.log(setdisplay1)
        console.log(setdisplay2)
        console.log(operator)
    }

}

function cancel(){
    setdisplay1 = ""
    setdisplay2 = ""
    operator = ''
    monitor.value = "0"
}

calcbutton.addEventListener('click', ()=>{
    calculate(setdisplay1, operator, setdisplay2)
})