function check2pwd() {  
    if(input1.value != input2.value) {  
        alert("两次输入密码不一致！")
        input1.value = "";  
        input2.value = "";  
    }
}