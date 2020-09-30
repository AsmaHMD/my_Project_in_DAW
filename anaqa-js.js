
/*-------------صفحة تسجيل الدخول---------------------*/
var btn_1=document.getElementById("btn_1");
var btn_2=document.getElementById("btn_2");
document.getElementById("log").style.display= "none";
btn_1.style.backgroundImage = "linear-gradient(to left , #111 , #ee8f8f)";
btn_1.style.color = "rgb(5, 160, 160)";

btn_2.addEventListener("click", ()=>{
    btn_2.style.backgroundImage = "linear-gradient(to left , #111 , #ee8f8f)";
    btn_2.style.color = "rgb(5, 160, 160)";
    btn_1.style.backgroundImage = "linear-gradient(to left , #111 ,rgb(5, 160, 160))";
    btn_1.style.color = "#ee8f8f";
    document.getElementById("log").style.display= "block";
    document.getElementById("registre").style.display= "none";

});
btn_1.addEventListener("click", ()=>{
    btn_1.style.backgroundImage = "linear-gradient(to left , #111 , #ee8f8f)";
    btn_1.style.color = "rgb(5, 160, 160)";
    btn_2.style.backgroundImage = "linear-gradient(to left , #111 ,rgb(5, 160, 160))";
    btn_2.style.color = "#ee8f8f";
    document.getElementById("log").style.display= "none";
    document.getElementById("registre").style.display= "block" ;

});
function error_msg(input)
{
    if (input.value == ''){
        input.setCustomValidity('رجاء قم بتعبئة البيانات');
    }else if (input.validity.typeMismatch){
        input.setCustomValidity('بيانات غير صالحة');
    }else{ 
        input.setCustomValidity('');
    }
    return true;   
}
//تبقى لي حفظ البيانات

/*-----الصفحة الرئيسية--------------*/


