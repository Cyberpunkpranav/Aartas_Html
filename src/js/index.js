let userinput=$('#userinput');
let passinput=$('#passinput');
let topassword = $('#next');
let submitbutton = $('#submit');
let userbox  = $('#userbox');

function process(){
    userinput.css('display','none');
    topassword.css('display','none');
    passinput.css('display','flex');
    submitbutton.css('display','flex');
}

document.addEventListener('keypress',function(e){
if(e.key === "Enter" && topassword[0].style.display === "flex" ){
    process();
}
})

$('#userbox')[0].addEventListener('input',()=>{
    const remainingwords = userbox[0].value.length;
    if(remainingwords > 1){
        topassword.css('display','flex');
    }else if(remainingwords == 0){
        topassword.css('display','none');
    }
 });

function back(){
    userinput.fadeIn();
    passinput.css('display','none'); 
    submitbutton.css('display','none');
    topassword.css('display','flex');
}

function passvisibility() {
    if (passwordbox.type === "password") {
      passwordbox.type = "text";
    } else {
        passwordbox.type = "password";
    }
  }
