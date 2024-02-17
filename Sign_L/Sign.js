
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

    const create_account_email = document.getElementById("InputEmailCreate");
    const create_account_pass = document.getElementById("InputPassSign_Create");

    create_account_email.value = "";
    create_account_pass.value = "";

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

    const sign_account_email = document.getElementById("InputEmailSign");
    const sign_account_pass = document.getElementById("InputPassSign");

    const SignInContainer = document.getElementById("SignInContainerSecondary");
    const SignInContainer_Style = getComputedStyle(SignInContainer);

    const CreateAccContainer = document.getElementById("CreateAccContainerSecondary");
    const CreateAccContainer_Style = getComputedStyle(CreateAccContainer);

    sign_account_email.value = "";
    sign_account_pass.value = "";

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
    localStorage.removeItem(name);
}

function setJwtCookie(name, jwt, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = date.toUTCString();
    console.log("Setting cookie:", name, jwt, expires);
    localStorage.setItem(name, jwt);
}

function getJwtCookie(name) {
    return localStorage.getItem(name);
}
function formatDateAsZeroes() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); // Get day with leading zero
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Get month with leading zero
    const year = today.getFullYear().toString(); // Get full year

    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
}

//Usage
//setJwtCookie('username', 'john_doe', 1);
//const cookieName = getJwtCookie('john_doe');
//console.log('Cookie Name:', cookieName);

//deleteCookie('username');

function Create_Account_Server() {

    const success_Notif = document.getElementById("");
    const fail_Notif = document.getElementById("");

    const emailFeild = document.getElementById("InputEmailCreate");
    const emailData_c = emailFeild.value;

    const passFeild = document.getElementById("InputPassSign_Create");
    const passData_c = passFeild.value;

    const checkBox = document.getElementById("TermsBox");
    const checkBox_Value = checkBox.checked;

    const checkBox_newsletter = document.getElementById("SubscribeBox");
    const checkBox_newsletter_Value = checkBox_newsletter.checked;

    const TermsText = document.getElementById("Terms");

    const Sign_In_Container = document.getElementById("SignInContainer");
    const Loader_Container = document.getElementById("Sign_Loader_Container");

    if (emailData_c === "" && passData_c === "" && checkBox_Value === false) { //All feilds empty
        emailFeild.style.border = "2px solid rgb(255, 66, 66)";
        passFeild.style.border = "2px solid rgb(255, 66, 66)";
        TermsText.style.color = "rgb(255, 66, 66)";
        setTimeout(function () {
            emailFeild.style.border = "2px solid rgb(230, 230, 230)";
            passFeild.style.border = "2px solid rgb(230, 230, 230)";
            TermsText.style.color = "rgb(120, 120, 120)";
        }, 4000);
    } else if (emailData_c !== "" && passData_c === "" && checkBox_Value === false) { //pasword and terms feilds empty
        passFeild.style.border = "2px solid rgb(255, 66, 66)";
        TermsText.style.color = "rgb(255, 66, 66)";
        setTimeout(function () {
            passFeild.style.border = "2px solid rgb(230, 230, 230)";
            TermsText.style.color = "rgb(120, 120, 120)";
        }, 4000);
    } else if (emailData_c === "" && passData_c !== "" && checkBox_Value === false) { //email and terms feilds empty
        emailFeild.style.border = "2px solid rgb(255, 66, 66)";
        TermsText.style.color = "rgb(255, 66, 66)";
        setTimeout(function () {
            emailFeild.style.border = "2px solid rgb(230, 230, 230)";
            TermsText.style.color = "rgb(120, 120, 120)";
        }, 4000);
    } else if (emailData_c === "" && passData_c === "" && checkBox_Value === true) { //pasword and email feilds empty
        emailFeild.style.border = "2px solid rgb(255, 66, 66)";
        passFeild.style.border = "2px solid rgb(255, 66, 66)";
        setTimeout(function () {
            emailFeild.style.border = "2px solid rgb(230, 230, 230)";
            passFeild.style.border = "2px solid rgb(230, 230, 230)";
        }, 4000);
    } else if (emailData_c !== "" && passData_c !== "" && checkBox_Value === false) { //terms feild empty
        TermsText.style.color = "rgb(255, 66, 66)";
        setTimeout(function () {
            TermsText.style.color = "rgb(120, 120, 120)";
        }, 4000);
    } else if (emailData_c !== "" && passData_c === "" && checkBox_Value === true) { //pasword feild empty
        passFeild.style.border = "2px solid rgb(255, 66, 66)";
        setTimeout(function () {
            passFeild.style.border = "2px solid rgb(230, 230, 230)";
        }, 4000);
    } else if (emailData_c === "" && passData_c !== "" && checkBox_Value === true) { //email feild empty
        emailFeild.style.border = "2px solid rgb(255, 66, 66)";
        setTimeout(function () {
            emailFeild.style.border = "2px solid rgb(230, 230, 230)";
        }, 4000);
    } else if (emailData_c !== "" && passData_c !== "" && checkBox_Value === true) { //All feild filled
        const formattedDate = formatDateAsZeroes();
        Sign_In_Container.style.filter = "brightness(50%)";
        Loader_Container.style.display = "block";
        fetch('http://localhost:4000/api/create_account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email_create: emailData_c, password_create: passData_c, date_create: formattedDate, news_create: checkBox_newsletter_Value.toString() }),
        })
            .then(response => {
                if (response.ok) {
                    console.log("From Sign React: Request sent"); //Sent to express server
                    return response.json();
                } else {
                    console.log("From Sign React: Request failed"); //Failed to send
                    Sign_In_Container.style.filter = "brightness(100%)";
                    Loader_Container.style.display = "none";
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                if (data.message === 1) { //Created account successful
                    console.log("account created from sign.js");
                    Sign_In_Container.style.filter = "brightness(100%)";
                    Loader_Container.style.display = "none";
                    //console.log("Login Token before cookie: ", data.token);
                    Account_1_Call();
                    const login_token_data = data.token;
                    setJwtCookie("Login_Token", login_token_data, 1);
                    //console.log("All cookies:", document.cookie);
                    //console.log("Retrieved Test_Cookie:", getJwtCookie("Test_Cookie"));
                    Sign_In_Container.style.filter = "brightness(50%)";
                    Loader_Container.style.display = "block";
                    setTimeout(function () {
                        Sign_In_Container.style.filter = "brightness(100%)";
                        Loader_Container.style.display = "none";
                        window.location.href = 'Home.html';
                    }, 4000);
                } else if (data.message === 0) { //Create account failed
                    Sign_In_Container.style.filter = "brightness(100%)";
                    Loader_Container.style.display = "none";
                    Account_0_Call();
                    console.log("account created -failed- from sign.js");
                } else if (data.message === 3) { //Create account failed - Email already associated with another account
                    Sign_In_Container.style.filter = "brightness(100%)";
                    Loader_Container.style.display = "none";
                    Account_3_Call();
                    console.log("account created -failed 2- from sign.js");
                }
            })
            .catch(error => { //catch error with response
                Account_0_Call();
                Sign_In_Container.style.filter = "brightness(100%)";
                Loader_Container.style.display = "none";
            });
    }
}


function Login_Server() {

    const success_Notif = document.getElementById("");
    const fail_Notif = document.getElementById("");

    const emailFeild = document.getElementById("InputEmailSign");
    const emailData = emailFeild.value;

    const passFeild = document.getElementById("InputPassSign");
    const passData = passFeild.value;

    const Sign_In_Container = document.getElementById("SignInContainer");
    const Loader_Container = document.getElementById("Sign_Loader_Container");

    if (emailData === "" && passData === "") { //both feilds empty
        emailFeild.style.border = "2px solid rgb(255, 66, 66)";
        passFeild.style.border = "2px solid rgb(255, 66, 66)";
        setTimeout(function () {
            emailFeild.style.border = "2px solid rgb(230, 230, 230)";
            passFeild.style.border = "2px solid rgb(230, 230, 230)";
        }, 4000);
    } else if (emailData !== "" && passData === "") { //pass feild empty
        passFeild.style.border = "2px solid rgb(255, 66, 66)";
        setTimeout(function () {
            passFeild.style.border = "2px solid rgb(230, 230, 230)";
        }, 4000);
    } else if (emailData === "" && passData !== "") { //email feild empty
        emailFeild.style.border = "2px solid rgb(255, 66, 66)";
        setTimeout(function () {
            emailFeild.style.border = "2px solid rgb(230, 230, 230)";
        }, 4000);
    } else if (emailData !== "" && passData !== "") { //both feilds filled
        Sign_In_Container.style.filter = "brightness(50%)";
        Loader_Container.style.display = "block";
        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: emailData, password: passData }),
        })
            .then(response => {
                if (response.ok) {
                    console.log("From Sign: Request sent"); //Sent to server
                    return response.json();
                } else {
                    console.log("From Sign: Request failed"); //Failed to send server
                    Sign_In_Container.style.filter = "brightness(100%)";
                    Loader_Container.style.display = "none";
                    Login_0_Call();
                    return response.json();
                }
            })
            .then(data => {
                if (data.success === 1) { //Login successful
                    const login_token = data.token;
                    Login_1_Call();
                    setJwtCookie("Login_Token", login_token, 1);
                    console.log("Retrieved Login_Token Login:", getJwtCookie("Login_Token"));
                    Sign_In_Container.style.filter = "brightness(100%)";
                    Loader_Container.style.display = "none";
                    Sign_In_Container.style.filter = "brightness(50%)";
                    Loader_Container.style.display = "block";
                    setTimeout(function () {
                        Sign_In_Container.style.filter = "brightness(100%)";
                        Loader_Container.style.display = "none";
                        window.location.href = 'Home.html';
                    }, 4000);
                } else if (data.success === 0) { //Login failed
                    Sign_In_Container.style.filter = "brightness(100%)";
                    Loader_Container.style.display = "none";
                }
            })
            .catch(error => { //catch error with response
                Login_0_Call();
                Sign_In_Container.style.filter = "brightness(100%)";
                Loader_Container.style.display = "none";
            });
    }



}



const Create_Acc_Btn = document.getElementById("CreateButton");
if (Create_Acc_Btn) {
    Create_Acc_Btn.addEventListener("click", () => {  //Listens for Create Account Button click
        Create_Account_Server();
    });
}

const Sign_Btn = document.getElementById("SignInButton");
if (Sign_Btn) {
    Sign_Btn.addEventListener("click", () => {  //Listens for Sign In Button click
        Login_Server();
    });
}



function Account_1_Call() {
    const success = document.getElementById("Account_1");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Account_1_Close() {
    const success = document.getElementById("Account_1");
    success.style.left = "-355px";
}




function Account_0_Call() {
    const fail = document.getElementById("Account_0");
    fail.style.left = "20px";
    setTimeout(function () {
        fail.style.left = "-355px";
    }, 4000);
}

function Account_0_Close() {
    const fail = document.getElementById("Account_0");
    fail.style.left = "-355px";
}





function Account_3_Call() {
    const fail = document.getElementById("Account_3");
    fail.style.left = "20px";
    setTimeout(function () {
        fail.style.left = "-355px";
    }, 4000);
}


function Account_3_Close() {
    const fail = document.getElementById("Account_3");
    fail.style.left = "-355px";
}








function Login_1_Call() {
    const success = document.getElementById("Login_1");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Login_1_Close() {
    const success = document.getElementById("Login_1");
    success.style.left = "-355px";
}



function Login_0_Call() {
    const success = document.getElementById("Login_0");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Login_0_Close() {
    const success = document.getElementById("Login_0");
    success.style.left = "-355px";
}




function handleKeyPress_sign(event) {

    if (event.key === 'Enter') {
        Login_Server();
    }
}

function handleKeyPress_createAccount(event) {

    if (event.key === 'Enter') {
        Create_Account_Server();
    }
}

