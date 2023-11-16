
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





//Menu for Mobile---------------------------------------------------------

function Mobile_Menu(){
    const Side_Buttons_Mobile = document.getElementById('Side_Buttons_Mobile');
    
    Side_Buttons_Mobile.style.transition = ".1s ease";
    Side_Buttons_Mobile.style.left = "5%";
}

function Mobile_Menu_Close(){
    const Side_Buttons_Mobile = document.getElementById('Side_Buttons_Mobile');

    Side_Buttons_Mobile.style.transition = ".1s ease";
    Side_Buttons_Mobile.style.left = "-200px";
}

//Menu for Mobile---------------------------------------------------------


//Function for account clicking Menu---------------------------------------------------------


function Side_Button_Account(Clicked, a, b, c, d, Clicked2, a2, b2, c2, d2, Clicked3, a3, b3, c3, d3){
    const Click = document.getElementById(Clicked); 
    const a_button = document.getElementById(a); 
    const b_button = document.getElementById(b); 
    const c_button = document.getElementById(c); 
    const d_button = document.getElementById(d); 

    const Click_Container = document.getElementById(Clicked2); 
    const a2_Container = document.getElementById(a2); 
    const b2_Container = document.getElementById(b2); 
    const c2_Container = document.getElementById(c2); 
    const d2_Container = document.getElementById(d2);

    const Click_Img = document.getElementById(Clicked3); 
    const a3_Img = document.getElementById(a3); 
    const b3_Img = document.getElementById(b3); 
    const c3_Img = document.getElementById(c3); 
    const d3_Img = document.getElementById(d3);

    Click.style.backgroundColor = "rgb(255, 66, 66)";
    Click.style.color = "white";
    Click.style.transform = ".1s ease";
    Click_Container.style.display = "block";
    Click_Img.style.filter = "invert(100%)";

    a_button.style.backgroundColor = "rgb(240, 240, 240)";
    a_button.style.color = "rgb(70, 70, 70)";
    a_button.style.transform = ".1s ease";
    a2_Container.style.display = "none";
    a3_Img.style.filter = "invert(10%)";

    b_button.style.backgroundColor = "rgb(240, 240, 240)";
    b_button.style.color = "rgb(70, 70, 70)";
    b_button.style.transform = ".1s ease";
    b2_Container.style.display = "none";
    b3_Img.style.filter = "invert(10%)";

    c_button.style.backgroundColor = "rgb(240, 240, 240)";
    c_button.style.color = "rgb(70, 70, 70)";
    c_button.style.transform = ".1s ease";
    c2_Container.style.display = "none";
    c3_Img.style.filter = "invert(10%)";

    d_button.style.backgroundColor = "rgb(240, 240, 240)";
    d_button.style.color = "rgb(70, 70, 70)";
    d_button.style.transform = ".1s ease";
    d2_Container.style.display = "none";
    d3_Img.style.filter = "invert(10%)";
}

function Side_Button_Account_Mobile(Clicked, a, b, c, d, Clicked2, a2, b2, c2, d2, Clicked3, a3, b3, c3, d3){
    const Click = document.getElementById(Clicked); 
    const a_button = document.getElementById(a); 
    const b_button = document.getElementById(b); 
    const c_button = document.getElementById(c); 
    const d_button = document.getElementById(d); 

    const Click_Container = document.getElementById(Clicked2); 
    const a2_Container = document.getElementById(a2); 
    const b2_Container = document.getElementById(b2); 
    const c2_Container = document.getElementById(c2); 
    const d2_Container = document.getElementById(d2);

    const Click_Img = document.getElementById(Clicked3); 
    const a3_Img = document.getElementById(a3); 
    const b3_Img = document.getElementById(b3); 
    const c3_Img = document.getElementById(c3); 
    const d3_Img = document.getElementById(d3);

    Click.style.backgroundColor = "rgb(255, 66, 66)";
    Click.style.color = "white";
    Click.style.transform = ".1s ease";
    Click_Container.style.display = "block";
    Click_Img.style.filter = "invert(100%)";

    a_button.style.backgroundColor = "rgb(255, 255, 255)";
    a_button.style.color = "rgb(70, 70, 70)";
    a_button.style.transform = ".1s ease";
    a2_Container.style.display = "none";
    a3_Img.style.filter = "invert(10%)";

    b_button.style.backgroundColor = "rgb(255, 255, 255)";
    b_button.style.color = "rgb(70, 70, 70)";
    b_button.style.transform = ".1s ease";
    b2_Container.style.display = "none";
    b3_Img.style.filter = "invert(10%)";

    c_button.style.backgroundColor = "rgb(255, 255, 255)";
    c_button.style.color = "rgb(70, 70, 70)";
    c_button.style.transform = ".1s ease";
    c2_Container.style.display = "none";
    c3_Img.style.filter = "invert(10%)";

    d_button.style.backgroundColor = "rgb(255, 255, 255)";
    d_button.style.color = "rgb(70, 70, 70)";
    d_button.style.transform = ".1s ease";
    d2_Container.style.display = "none";
    d3_Img.style.filter = "invert(10%)";
}



//Function for account clicking Menu---------------------------------------------------------



//Function for deleting account---------------------------------------------------------



function Confirm_Delete_Acc(){
    const Blur_Delete_Container = document.getElementById("Blur_DeleteAccount");
    const Confirm_Delete_Account = document.getElementById("Confirm_Delete");
    Blur_Delete_Container.style.filter = "blur(3px)";
    Confirm_Delete_Account.style.display = "block";

}

function Cancel_Delete_Acc(){
    const Blur_Delete_Container = document.getElementById("Blur_DeleteAccount");
    const Confirm_Delete_Account = document.getElementById("Confirm_Delete");
    Blur_Delete_Container.style.filter = "blur(0px)";
    Confirm_Delete_Account.style.display = "none";
    
}
//Function for deleting account---------------------------------------------------------
