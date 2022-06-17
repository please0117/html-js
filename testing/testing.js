var button_press = 0;
var message = document.querySelector(".message");
var press = document.querySelector(".press");

const btn = document.querySelector('button');
btn.onclick = function(){
    button_press++;
    
    press.textContent = "you just pressed " + button_press + " times!";
    if(button_press >= 200){
        message.textContent = "STOP";
        message.style.color = "red";
        message.style.fontWeight = "900";
        message.style.fontSize = "30px";
        message.style.textAlign = "center";
        btn.disabled = "true";
    }
    else if(button_press >= 100){
        message.textContent = "OK, you need to stop";
        if(button_press == 100){
            const btn2 = document.createElement('button');
            btn2.textContent = "reset"
            btn2.onclick = function(){
                button_press = 0;
                message.textContent = "";
                press.textContent = "";
                this.remove()
                btn.disabled = "false";
            }
            document.body.appendChild(btn2);
        }   
    }
    else if(button_press >= 50){
        message.textContent = "Button is tired, stop and do your job";
    }
    else if (button_press >= 10){
        message.textContent = "is this fun?";
    }    
}

