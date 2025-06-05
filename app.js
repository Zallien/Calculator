
const monitor = document.getElementById("monitor")
let setdisplay1 = ""
let setdisplay2 = ""
let operator = ''
let calcstate = 'normalcalculation'

const calcbutton = document.querySelector(".calculate")

function displayinmonitor(num){

    let state = calcstate

    if(state == 'normalcalculation'){

        if(operator == "" || operator.length == 0){
            setdisplay1 += num
            monitor.value = setdisplay1
        }
        else{
            setdisplay2 += num
            monitor.value = setdisplay2
        }
    }
    else if(state == 'Multicalculation'){
        setdisplay1 = num
        setdisplay2 = ''
        monitor.value = setdisplay1
        calcstate = 'normalcalculation'
    }

    console.log(setdisplay1)
    console.log(setdisplay2)
    console.log(operator)
}

function setoperator(op){

    let state = calcstate

    if(state == 'normalcalculation'){
        operator = op
    }
    else{

        operator = op
        setdisplay2 = ''
        calcstate = 'normalcalculation'
    }


    
    
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


        calcstate = 'Multicalculation'
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
    calcstate = 'normalcalculation'
}

calcbutton.addEventListener('click', ()=>{
    calculate(setdisplay1, operator, setdisplay2)
})