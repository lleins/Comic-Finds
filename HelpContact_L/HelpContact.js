
//Loading Page Animation---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const loadingContainer = document.querySelector(".loading-container");
    loadingContainer.style.display = "flex"; // Show the loading page
});

// After your content is loaded (e.g., inside a window.onload event)
window.onload = () => {
    const loadingContainer = document.querySelector(".loading-container");
    loadingContainer.style.display = "none"; // Hide the loading page
};



//Loading Page Animation---------------------------------------------------------





//Navigation Bar Scroll Effect---------------------------------------------------------


let prevScrollY = window.scrollY;
const Top_Navbar = document.getElementById('NavigationBarTop');
const Main_Navbar = document.getElementById('NavigationBarMain');
const Bottom_Navbar = document.getElementById('NavigationBarBottom');
const WatchList = document.getElementById('WatchList2');
const Account = document.getElementById('Account2');

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var solidThreshold = 50; 

    if (currentScrollY > prevScrollY) {
        Account.style.display = "none";
        WatchList.style.display = "none";
        Top_Navbar.style.top='-200px';
        Main_Navbar.style.top =  '-120px';
        Bottom_Navbar.style.top =  '-50px';
    } 
    else if(currentScrollY < prevScrollY){
        if (scrollTop > solidThreshold) {
            Top_Navbar.style.top='-50px';
            Main_Navbar.style.top =  '0px';
            Bottom_Navbar.style.top =  '92px';
        }else if(scrollTop <= solidThreshold){
            Account.style.display = "flex";
            WatchList.style.display = "flex";
            Top_Navbar.style.top='0px';
            Main_Navbar.style.top =  '44px';
            Bottom_Navbar.style.top =  '140px';
        }
    }
    prevScrollY = currentScrollY; 
});


//Navigation Bar Scroll Effect---------------------------------------------------------




//Listener for Input box---------------------------------------------------------
/*
const screenWidth = window.innerWidth;

//Name Input
const input_Name = document.getElementById("Name_Input");
const Text_Name = document.getElementById("Click_Name");

input_Name.addEventListener("focus", function() {
    input_Name.style.paddingTop = "15px";
    input_Name.style.height = "50px";
    if (screenWidth <= 1000){
        input_Name.style.top = "200px";
    } else{
        input_Name.style.top = "300px";
    }
    input_Name.placeholder = "";
    Text_Name.style.display = "flex";
 
   
});

input_Name.addEventListener("blur", function() {
    input_Name.style.paddingTop = "0px";
    input_Name.style.height = "35px";
    if (screenWidth <= 1000){
        input_Name.style.top = "200px";
    } else{
        input_Name.style.top = "300px";
    }
    input_Name.placeholder = "Name";
    Text_Name.style.display = "none";
});
//Name Input


//Email Input
const Input_Email = document.getElementById("Email_Input");
const Text_Email = document.getElementById("Click_Email");

Input_Email.addEventListener("focus", function() {
    Input_Email.style.paddingTop = "15px";
    Input_Email.style.height = "50px";
    if (screenWidth <= 1000){
        Input_Email.style.top = "200px";
    } else{
        Input_Email.style.top = "300px";
    }
    Input_Email.placeholder = "";
    Text_Email.style.display = "flex";
 
   
});

Input_Email.addEventListener("blur", function() {
    Input_Email.style.paddingTop = "0px";
    Input_Email.style.height = "35px";
    Input_Email.placeholder = "Email";
    if (screenWidth <= 1000){
        Input_Email.style.top = "200px";
    } else{
        Input_Email.style.top = "300px";
    }
    Text_Email.style.display = "none";

});
//Email Input




//Text Area Box
const Input_Question = document.getElementById("Problem_Text");
const Text_Question= document.getElementById("Click_Question");

Input_Question.addEventListener("focus", function() {
    Input_Question.style.paddingTop = "15px";
    Input_Question.style.height = "165px";
    if (screenWidth <= 1000){
        Input_Question.style.top = "200px";
    } else{
        Input_Question.style.top = "300px";
    }
   
    Input_Question.placeholder = "";
    Text_Question.style.display = "flex";
 
   
});

Input_Question.addEventListener("blur", function() {
    Input_Question.style.paddingTop = "0px";
    Input_Question.style.height = "150px";
    if (screenWidth <= 1000){
        Input_Question.style.top = "200px";
    } else{
        Input_Question.style.top = "300px";
    }
  
    Input_Question.placeholder = "Question or Concern";
    Text_Question.style.display = "none";
});
//Text Area Box
*/
//Listener for Input box---------------------------------------------------------




function GoToSignInPageCreateAcc(){
    document.cookie = "data=CreateAcc";
    window.location.href = "Sign.html";
}

function GoToSignInPage(){
    window.location.href = "Sign.html";
}