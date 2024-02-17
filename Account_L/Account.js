
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




//Logout Notifs----------------------------------------------------------------------------------

function Logout_1_Call() {
    const success = document.getElementById("Logout_1");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Logout_1_Close() {
    const success = document.getElementById("Logout_1");
    success.style.left = "-355px";
}


function Logout_0_Call() {
    const success = document.getElementById("Logout_0");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Logout_0_Close() {
    const success = document.getElementById("Logout_0");
    success.style.left = "-355px";
}


function Logout_prompt_Call() {
    const success = document.getElementById("Login_prompt");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Logout_prompt_Close() {
    const success = document.getElementById("Login_prompt");
    success.style.left = "-355px";
}


function Delete_Fail_Call() {
    const success = document.getElementById("Delete_Failed");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Delete_Fail_Call_Close() {
    const success = document.getElementById("Delete_Failed");
    success.style.left = "-355px";
}

//Logout Notifs----------------------------------------------------------------------------------


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





//Menu for Mobile---------------------------------------------------------

function Mobile_Menu() {
    const Side_Buttons_Mobile = document.getElementById('Side_Buttons_Mobile');

    Side_Buttons_Mobile.style.transition = ".1s ease";
    Side_Buttons_Mobile.style.left = "5%";
}

function Mobile_Menu_Close() {
    const Side_Buttons_Mobile = document.getElementById('Side_Buttons_Mobile');

    Side_Buttons_Mobile.style.transition = ".1s ease";
    Side_Buttons_Mobile.style.left = "-200px";
}

//Menu for Mobile---------------------------------------------------------


//Function for account clicking Menu---------------------------------------------------------


function Side_Button_Account(Clicked, a, b, c, d, Clicked2, a2, b2, c2, d2, Clicked3, a3, b3, c3, d3) {
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

function Side_Button_Account_Mobile(Clicked, a, b, c, d, Clicked2, a2, b2, c2, d2, Clicked3, a3, b3, c3, d3) {
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



function Confirm_Delete_Acc() {
    const Blur_Delete_Container = document.getElementById("Blur_DeleteAccount");
    const Confirm_Delete_Account = document.getElementById("Confirm_Delete");
    Blur_Delete_Container.style.filter = "blur(3px)";
    Confirm_Delete_Account.style.display = "block";

}

function Cancel_Delete_Acc() {
    const Blur_Delete_Container = document.getElementById("Blur_DeleteAccount");
    const Confirm_Delete_Account = document.getElementById("Confirm_Delete");
    Blur_Delete_Container.style.filter = "blur(0px)";
    Confirm_Delete_Account.style.display = "none";

}
//Function for deleting account---------------------------------------------------------



//Notifs--------------------------------------------------------------------------------


function Logout_Account() {

    const Logout_Loader = document.getElementById("Logout_Loader");

    deleteCookie("Login_Token");
    Logout_1_Call();
    Logout_Loader.style.display = "block";
    setTimeout(function () {
        Logout_Loader.style.display = "none";
        window.location.href = 'Home.html';
    }, 4000);
}

function Logout_1_Call() {
    const success = document.getElementById("Logout_1");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Logout_1_Close() {
    const success = document.getElementById("Logout_1");
    success.style.left = "-355px";
}



function Logout_0_Call() {
    const success = document.getElementById("Logout_0");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Logout_0_Close() {
    const success = document.getElementById("Logout_0");
    success.style.left = "-355px";
}


function Newsletter_Unsubbed_Call() {
    const success = document.getElementById("Newsletter_unsubbed");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Newsletter_Unsubbed_Call_Close() {
    const success = document.getElementById("Newsletter_unsubbed");
    success.style.left = "-355px";
}

function Newsletter_subbed_Call() {
    const success = document.getElementById("Newsletter_subbed");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Newsletter_subbed_Call_Close() {
    const success = document.getElementById("Newsletter_subbed");
    success.style.left = "-355px";
}
//Notifs--------------------------------------------------------------------------------



//Change windows--------------------------------------------------------------------------------

function GoToAccountPage() {
    const Logn_cookie = getJwtCookie("Login_Token");

    if (Logn_cookie === null) {
        Logout_prompt_Call();
    } else if (Logn_cookie !== null) {
        window.location.href = "Account.html";
    }
}

function GoToContactPage() {
    window.location.href = "HelpContact.html";

}

function GoToWatchListPage() {
    const Logn_cookie = getJwtCookie("Login_Token");

    if (Logn_cookie === null) {
        Logout_prompt_Call();
    } else if (Logn_cookie !== null) {
        window.location.href = "Watchlist.html";
    }

}


//Change windows--------------------------------------------------------------------------------






//Cookies--------------------------------------------------------------------------------

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
//Cookies--------------------------------------------------------------------------------




function Account_Server_Info() {
    const Email_field = document.getElementById("Actual_Email");
    const Date_Field = document.getElementById("Actual_Date");

    Email_field.textContent = "Loading...";
    Date_Field.textContent = "Loading...";

    const email_cookie = getJwtCookie("Login_Token");

    fetch('http://localhost:4000/api/Account_Info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email_cookie, }),
    })
        .then(response => {
            if (response.ok) {
                console.log("From Sign: Request sent"); //Sent to server
                return response.json();
            } else {
                console.log("From Sign: Request failed"); //Failed to send server

                return response.json();
            }
        })
        .then(data => {
            if (data.success === 1) {

                Email_field.textContent = data.email;
                Date_Field.textContent = data.date;

            } else if (data.success === 0) {
                console.log("Did not succeed");
            }
        })
        .catch(error => { //catch error with response

        });
}



Account_Server_Info();




function check_watchlist() {
    const title = document.getElementById("Title");
    const watchlist_number_1 = document.getElementById("Actual_Comics_Watchlisted");
    const watchlist_number_2 = document.getElementById("Actual_Comic_Watch");
    const email_cookie = getJwtCookie("Login_Token");

    fetch('http://localhost:4000/api/Account_Info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email_cookie, }),
    })
        .then(response => {
            if (response.ok) {

                return response.json();
            } else {

                throw new Error('Failed to send request to Account_Info');
            }
        })
        .then(accountData => {
            if (accountData.success === 1) { //get_comics-------------------------------------
                fetch('http://localhost:4000/api/get_saved_comics', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: accountData.email })
                })
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Failed to fetch saved comics');
                        }
                    })
                    .then(savedComicsData => {
                        if (savedComicsData.message === 1) { //success

                            const length = savedComicsData.existingUsers.length;
                            watchlist_number_1.textContent = length;
                            watchlist_number_2.textContent = length;
                        } else if (savedComicsData.message === 0) { //fail
                            title.textContent = "Watchlist is empty";
                            console.log("0");
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching saved comics:', error.message);
                    });
            } else if (accountData.success === 0) { //get_comics---------------------------------
                console.log("Did not succeed");
            }
        })
        .catch(error => { //catch error with response
            console.error('Error sending request to Account_Info:', error.message);
        });
}

check_watchlist();




function check_newsletter_sub() {
    const sub_true_btn = document.getElementById("Edit_Newsletter_True");
    const sub_false_btn = document.getElementById("Edit_Newsletter_False");
    const email_cookie = getJwtCookie("Login_Token");

    fetch('http://localhost:4000/api/Account_Info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email_cookie, }),
    })
        .then(response => {
            if (response.ok) {

                return response.json();
            } else {

                throw new Error('Failed to send request to Account_Info');
            }
        })
        .then(accountData => {
            if (accountData.success === 1) { //remove_comics-------------------------------------
                fetch('http://localhost:4000/api/check_newsletter_sub', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: accountData.email })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok.');
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.message === 1) { //Subscribed to newsleter
                            sub_true_btn.style.display = "block";

                        } else if (data.message === 0) { //Not subscribed to newsleter
                            sub_false_btn.style.display = "block";
                        }
                    })
                    .catch(error => {
                        console.error('There was a problem with your fetch operation:', error);
                    });
            } else if (accountData.success === 0) { //remove_comics---------------------------------
                console.log("Did not succeed");
            }
        })
        .catch(error => { //catch error with response
            console.error('Error sending request to Account_Info:', error.message);
        });

}

check_newsletter_sub();




function unsub_sub_from_newsletter(value) {

    const email_cookie = getJwtCookie("Login_Token");

    fetch('http://localhost:4000/api/Account_Info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email_cookie, }),
    })
        .then(response => {
            if (response.ok) {

                return response.json();
            } else {

                throw new Error('Failed to send request to Account_Info');
            }
        })
        .then(accountData => {
            if (accountData.success === 1) { //remove_comics-------------------------------------
                fetch('http://localhost:4000/api/change_newsletter_sub', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: accountData.email, newValue: value })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to update newsletter subscription');
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.message === 1) {
                            setJwtCookie("changed_newsletter", data.value, 1);
                            setJwtCookie("account_newsletter");
                            window.location.reload();
                        } else if (data.message === 0) {

                        } else if (data.message === 3) {

                        }
                    })
                    .catch(error => {
                        console.error('Error updating newsletter subscription:', error.message);
                    });
            } else if (accountData.success === 0) { //remove_comics---------------------------------
                console.log("Did not succeed");
            }
        })
        .catch(error => { //catch error with response
            console.error('Error sending request to Account_Info:', error.message);
        });
}



function check_changed_news_sub() {
    const cookie_check = getJwtCookie("changed_newsletter");

    if (cookie_check === null) {

    } else if (cookie_check !== null) {
        if (cookie_check === "false") {
            Newsletter_Unsubbed_Call();
            deleteCookie("changed_newsletter");

        } else if (cookie_check === "true") {
            Newsletter_subbed_Call();
            deleteCookie("changed_newsletter");
        }
    }
}
check_changed_news_sub();



function check_newsletter_redirect() {

    const check_cookie = getJwtCookie("account_newsletter");
    if (check_cookie === null) {

    } else if (check_cookie !== null) {
        Side_Button_Account_Mobile("News_Button_Mobile", "Help_Button_Mobile", "Delete_Button_Mobile", "Watch_Button_Mobile", "AccountDash_Button_Mobile", "NewsLetter", "WatchList", "AccountDashBoard", "HelpAndContact", "DeleteAccount", "NewsLetter_Img_Mobile", "Watchlist_Img_Mobile", "Account_Img_Mobile", "Help_Img_Mobile", "Delete_Img_Mobile");
        Side_Button_Account("News_Button", "Help_Button", "Delete_Button", "Watch_Button", "AccountDashBoard_Button", "NewsLetter", "WatchList", "AccountDashBoard", "HelpAndContact", "DeleteAccount", "NewsLetter_Img", "Watchlist_Img", "Account_Img", "Help_Img", "Delete_Img");
        deleteCookie("account_newsletter");
    }
}
check_newsletter_redirect();



function delete_account() {

    const loader = document.getElementById("Delete_Account_Loader");
    const confirm_delete = document.getElementById("Confirm_Delete");


    const email_cookie = getJwtCookie("Login_Token");
    loader.style.display = "block";
    confirm_delete.style.display = "none";
    fetch('http://localhost:4000/api/Account_Info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email_cookie, }),
    })
        .then(response => {
            if (response.ok) {

                return response.json();
            } else {
                Delete_Fail_Call();
                loader.style.display = "none";
                confirm_delete.style.display = "block";
                throw new Error('Failed to send request to Account_Info');
            }
        })
        .then(accountData => {
            if (accountData.success === 1) { //delete account-------------------------------------
                fetch('http://localhost:4000/api/delete_accounts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: accountData.email }) // Assuming email is defined somewhere
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.message === 1) {
                            deleteCookie("Login_Token");
                            setJwtCookie("Account_Deleted", "1", 1);
                            window.location.href = "Home.html";
                        } else if (data.message === 0) {
                            Delete_Fail_Call();
                            confirm_delete.style.display = "block";
                            loader.style.display = "none";
                        } else if (data.message === 3) {
                            Delete_Fail_Call();
                            confirm_delete.style.display = "block";
                            loader.style.display = "none";
                        }
                    })
                    .catch(error => {
                        Delete_Fail_Call();
                        console.log(error)
                    });
            } else if (accountData.success === 0) { //delete account---------------------------------
                console.log("Did not succeed");
                Delete_Fail_Call();
                loader.style.display = "none";
                confirm_delete.style.display = "block";
            }
        })
        .catch(error => { //catch error with response
            console.error('Error sending request to Account_Info:', error.message);
            Delete_Fail_Call();
            loader.style.display = "none";
            confirm_delete.style.display = "block";
        });

}










function SearchBar() {

    const bottom_border = document.getElementById("NavigationBarBottom");
    bottom_border.classList.add("loading-border");
    const Search_Bar = document.getElementById("SearchBar");
    const Search_Bar_Value = Search_Bar.value;


    if (Search_Bar_Value === "") {
        bottom_border.classList.remove("loading-border");
    } else if (Search_Bar_Value !== "") {
        setTimeout(() => {
            deleteCookie("Out_Search");
            setJwtCookie("Out_Search", Search_Bar_Value, 1);
            bottom_border.classList.remove("loading-border");
            window.location.href = "Result.html";
        }, 3000);


    }
}

function SearchBar_Bottom(text) {

    const bottom_border = document.getElementById("NavigationBarBottom");
    bottom_border.classList.add("loading-border");

    if (text === "") {
        bottom_border.classList.remove("loading-border");
    } else if (text !== "") {
        setTimeout(() => {
            setJwtCookie("Out_Search", text, 1);
            bottom_border.classList.remove("loading-border");
            window.location.href = "Result.html";
        }, 3000);


    }
}
function handleKeyPress(event) {

    if (event.key === 'Enter') {

        document.getElementById('NavSearchButton').click();
    }
}


function Daily_Deals_go() {
    deleteCookie("Current_Search");
    setJwtCookie("Daily_Deal");
    window.location.href = 'Home.html';
}


function delete_current_search() {
    deleteCookie("Current_Search");
}