//检验密码是否符合要求
function check2pwd() {  
    if(input1.value != input2.value) {  
        alert("两次输入密码不一致！")
        input1.value = "";  
        input2.value = "";  
    }
    if(input1.value.length > 16 || input1.value.length < 6){
        alert("密码长度不符合要求！(6-16位字符)")
        input1.value = "";  
        input2.value = "";  
    }
}



// 当框框加载完成之后调用设置省份
window.onload = setProvince;
 
// 获取省市县/区的select选择框对象
var province = document.getElementsByTagName("select")[0];
 
// 设置省份
function setProvince() {
    // 遍历省份数组, provinceArr在city.js中
    for (var i = 0; i < provinceArr.length; i++){
        // 创建省份option选项
        var opt = document.createElement("option");
        opt.innerHTML = provinceArr[i];     // 设置option文本显示内容
        province.appendChild(opt);          // 追加城市到下拉框
    }
}

