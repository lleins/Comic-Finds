
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


function GoToSignInPageCreateAcc() {
    document.cookie = "data=CreateAcc";
    window.location.href = "Sign.html";
}

function GoToSignInPage() {
    window.location.href = "Sign.html";
}


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
        Top_Navbar.style.top = '-200px';
        Main_Navbar.style.top = '-120px';
        Bottom_Navbar.style.top = '-50px';
    }
    else if (currentScrollY < prevScrollY) {
        if (scrollTop > solidThreshold) {
            Top_Navbar.style.top = '-50px';
            Main_Navbar.style.top = '0px';
            Bottom_Navbar.style.top = '92px';
        } else if (scrollTop <= solidThreshold) {
            Account.style.display = "flex";
            WatchList.style.display = "flex";
            Top_Navbar.style.top = '0px';
            Main_Navbar.style.top = '44px';
            Bottom_Navbar.style.top = '140px';
        }
    }
    prevScrollY = currentScrollY;
});


//Navigation Bar Scroll Effect---------------------------------------------------------




//Random Side Image---------------------------------------------------------

function generateRandomNumber() {
    return Math.floor(Math.random() * 5); // Generates a random integer between 0 and 4
}

function ChangeBackground() {
    const ImageToChange = document.getElementById("Actual_Sign_Img");

    const Img_List = [];
    Img_List.push("Images/SignImg.jpg");
    Img_List.push("Images/SignImg2.jpg");
    Img_List.push("Images/SignImg3.jpg");
    Img_List.push("Images/SignImg4.jpg");
    Img_List.push("Images/SignImg5.jpg");

    const number = generateRandomNumber();

    ImageToChange.src = Img_List[number]

}
ChangeBackground();
//Random Side Image---------------------------------------------------------





//Switch between Sign In and Create Account----------------------------------------------


function SignInStyle() {
    const Sign = document.getElementById("SignIn");
    const Create = document.getElementById("CreateAccount");

    const SignInContainer = document.getElementById("SignInContainerSecondary");
    const SignInContainer_Style = getComputedStyle(SignInContainer);

    const CreateAccContainer = document.getElementById("CreateAccContainerSecondary");
    const CreateAccContainer_Style = getComputedStyle(CreateAccContainer);
    SignInContainer.style.display = "block";
    CreateAccContainer.style.display = "none";
    Sign.style.borderBottom = "4px solid rgb(255, 66, 66)";
    Create.style.borderBottom = "4px solid rgb(250, 250, 250)";
}


function CreateAccStyle() {
    const Sign = document.getElementById("SignIn");
    const Create = document.getElementById("CreateAccount");

    const SignInContainer = document.getElementById("SignInContainerSecondary");
    const SignInContainer_Style = getComputedStyle(SignInContainer);

    const CreateAccContainer = document.getElementById("CreateAccContainerSecondary");
    const CreateAccContainer_Style = getComputedStyle(CreateAccContainer);
    SignInContainer.style.display = "none";
    CreateAccContainer.style.display = "block";
    Sign.style.borderBottom = "4px solid rgb(250, 250, 250)";
    Create.style.borderBottom = "4px solid rgb(255, 66, 66)";

}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();

}


function CreateAccountCookie() {
    const HomeNewsCookie = getCookie('data');

    const Sign = document.getElementById("SignIn");
    const Create = document.getElementById("CreateAccount");
    const SignInContainer = document.getElementById("SignInContainerSecondary");
    const CreateAccContainer = document.getElementById("CreateAccContainerSecondary");
    if (HomeNewsCookie == "CreateAcc") {
        SignInContainer.style.display = "none";
        CreateAccContainer.style.display = "block";
        Sign.style.borderBottom = "4px solid rgb(250, 250, 250)";
        Create.style.borderBottom = "4px solid rgb(255, 66, 66)";
    } else if (HomeNewsCookie == "none") {

    }
    document.cookie = "data=none";
}


CreateAccountCookie();
//Switch between Sign In and Create Account----------------------------------------------

//Clear cookies---------------------------------------------------

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

//Clear cookies---------------------------------------------------
