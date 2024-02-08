
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


function Saved_1_Call() {
    const success = document.getElementById("Saved_1");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Saved_1_Close() {
    const success = document.getElementById("Saved_1");
    success.style.left = "-355px";
}


function Saved_0_Call() {
    const success = document.getElementById("Saved_0");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Saved_0_Close() {
    const success = document.getElementById("Saved_0");
    success.style.left = "-355px";
}



function Saved_3_Call() {
    const success = document.getElementById("Saved_3");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Saved_3_Close() {
    const success = document.getElementById("Saved_3");
    success.style.left = "-355px";
}


function Remove_1_Call() {
    const success = document.getElementById("Remove_1");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Remove_1_Close() {
    const success = document.getElementById("Remove_1");
    success.style.left = "-355px";
}


function Remove_0_Call() {
    const success = document.getElementById("Remove_0");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Remove_0_Close() {
    const success = document.getElementById("Remove_0");
    success.style.left = "-355px";
}

//Logout Notifs----------------------------------------------------------------------------------




//Logout Account--------------------------------------------------------------------------------------

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
//Logout Account--------------------------------------------------------------------------------------

//Go to Pages----------------------------------------------------------------------------------


function GoToAccountPage() {
    const Logn_cookie = getJwtCookie("Login_Token");

    if (Logn_cookie === null) {
        Logout_prompt_Call();
    } else if (Logn_cookie !== null) {
        deleteCookie("Current_Search");
        window.location.href = "Account.html";

    }
}

function GoToContactPage() {
    deleteCookie("Current_Search");
    window.location.href = "HelpContact.html";

}

function GoToWatchListPage() {
    const Logn_cookie = getJwtCookie("Login_Token");
    deleteCookie("Current_Search");
    if (Logn_cookie === null) {
        Logout_prompt_Call();
    } else if (Logn_cookie !== null) {
        window.location.href = "Watchlist.html";
    }

}


//Go to Pages----------------------------------------------------------------------------------


//Daily Deals--------------------------------------------------------------------------------------

function Daily_Deals_go() {
    deleteCookie("Current_Search");
    setJwtCookie("Daily_Deal");
    window.location.href = 'Home.html';
}

//Daily Deals--------------------------------------------------------------------------------------


//Change NavBar--------------------------------------------------------------------------------------
function ChangeNavBar_Login() {
    const Login_Cookie = getJwtCookie("Login_Token");

    const Sign_Reg = document.getElementById("TopSignInItem");
    const Logout = document.getElementById("TopLogoutItem");


    if (Login_Cookie === null) {
        Sign_Reg.style.display = "block";
        Logout.style.display = "none";
    } else if (Login_Cookie !== null) {
        Sign_Reg.style.display = "none";
        Logout.style.display = "block";

    }
}
ChangeNavBar_Login();



//Change NavBar--------------------------------------------------------------------------------------



//Daily Deals--------------------------------------------------------------------------------------

function Daily_Deals_go() {
    deleteCookie("Current_Search");
    setJwtCookie("Daily_Deal");
    window.location.href = 'Home.html';
}

//Daily Deals--------------------------------------------------------------------------------------


//Search from outside--------------------------------------------------------------------------------------
//const search_bar = document.getElementById("SearchBar");
//search_bar.value = "";



function SearchBar() {

    const bottom_border = document.getElementById("NavigationBarBottom");
    bottom_border.classList.add("loading-border");
    const Search_Bar = document.getElementById("SearchBar");
    const Search_Bar_Value = Search_Bar.value;


    if (Search_Bar_Value === "") {
        bottom_border.classList.remove("loading-border");
    } else if (Search_Bar_Value !== "") {
        setTimeout(() => {
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

//Search from main--------------------------------------------------------------------------------------

function handleKeyPress(event) {

    if (event.key === 'Enter') {

        document.getElementById('NavSearchButton').click();
    }
}

function check_current_search() {
    const current_search = getJwtCookie("Current_Search");
    const search_bar = document.getElementById("SearchBar");
    search_bar.value = current_search;
    if (current_search !== null) {
        fetch_Search_data();
    } else if (current_search === null) {
        ""
    }

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





function GoToSignInPageCreateAcc() {
    document.cookie = "data=CreateAcc";
    window.location.href = "Sign.html";
}

function GoToSignInPage() {
    window.location.href = "Sign.html";
}


//function for Image Hover Effect---------------------------------------------------------------

function zoomImage(event) {
    const image = document.getElementById("View_Img");

    const container = image.parentElement;

    // Calculate the position of the mouse within the container
    const x = (event.pageX - container.offsetLeft) / container.offsetWidth;
    const y = (event.pageY - container.offsetTop) / container.offsetHeight;

    // Apply a transform to zoom in around the mouse position
    image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    image.style.transform = "scale(1.5)"; // Adjust the scale factor as needed
}

function resetImage() {
    const image = document.getElementById("View_Img");
    image.style.transform = "scale(1)"; // Reset the image scale
}

//function for Image Hover Effect---------------------------------------------------------------


//Cookies----------------------------------------------------------------------------------

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function setJwtCookie(name, jwt, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    console.log("Setting cookie:", name, jwt, expires);
    document.cookie = `${name}=${jwt}; ${expires}; path=/; SameSite=None; Secure`;
}

// Get a cookie value by name
function getJwtCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}



//Cookies----------------------------------------------------------------------------------







function save_to_watchlist(img_src, description, price, write_up, watchlistid) {
    const check_login = getJwtCookie("Login_Token");

    if (check_login === null) { //checks if you're logged in
        Logout_prompt_Call();
    } else if (check_login !== null) {
        if (watchlistid.style.backgroundColor === "rgb(255, 66, 66)") {
            Saved_3_Call();
        } else {
            const email_cookie = getJwtCookie("Login_Token"); //Get email from account cookie.
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
                        fetch('http://localhost:4000/api/save_comic', { //save_comic---------------------------------------
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ email: data.email, url: img_src, description: description, price: price, write: write_up }),
                        })
                            .then(response => {
                                if (response.ok) {
                                    console.log("Request successful");
                                    return response.json();
                                } else {
                                    console.error("Request failed");
                                    throw new Error("Network response was not ok.");
                                }
                            })
                            .then(data => {
                                if (data.message === 1) {
                                    watchlistid.style.backgroundColor = "rgb(255, 66, 66)";
                                    watchlistid.style.color = "white";
                                    watchlistid.style.whiteSpace = "nowrap";
                                    watchlistid.textContent = "ADDED TO WATCHLIST";
                                    watchlistid.style.paddingLeft = "35px";
                                    watchlistid.style.paddingRight = "55px";
                                    Saved_1_Call();
                                } else if (data.message === 0) {
                                    watchlistid.style.backgroundColor = "rgb(255, 66, 66)";
                                    watchlistid.style.color = "white";
                                    watchlistid.style.whiteSpace = "nowrap";
                                    watchlistid.textContent = "ADDED TO WATCHLIST";
                                    watchlistid.style.paddingLeft = "35px";
                                    watchlistid.style.paddingRight = "55px";
                                    Saved_3_Call();
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                Saved_0_Call();
                            });                                    //save_comic---------------------------------------


                    } else if (data.success === 0) {
                        console.log("Did not succeed");
                    }
                })
                .catch(error => { //catch error with response

                });

        }
    }
}









//View Comic---------------------------------------------------------------

function View_Comic() {
    const img = document.getElementById("View_Img");
    const description = document.getElementById("View_Issue");
    const price = document.getElementById("View_Price");
    const write_up = document.getElementById("View_Description_Text");
    const add_watchlist_button = document.getElementById("View_AddWishList");

    const remove_button = document.getElementById("View_Remove");

    const check_cookie_main = getJwtCookie("View_Comic");
    const check_cookie_watch = getJwtCookie("View_Comic_Watch");

    if ((check_cookie_main === null) && (check_cookie_watch === null)) {
        console.log("here 0");
    } else if ((check_cookie_main !== null) && (check_cookie_watch === null)) {
        console.log("here 1");
        add_watchlist_button.style.display = "block";
        remove_button.style.display = "none";
        const viewList = check_cookie_main.split(',');
        img.src = "";
        img.src = viewList[0];

        description.textContent = "";
        description.textContent = viewList[1];

        price.textContent = "";
        price.textContent = viewList[2];

        write_up.textContent = "";
        write_up.textContent = viewList[3];

        add_watchlist_button.addEventListener('click', () => save_to_watchlist(viewList[0], viewList[1], viewList[2], viewList[3], add_watchlist_button));
    } else if ((check_cookie_main === null) && (check_cookie_watch !== null)) {
        console.log("here 2");
        add_watchlist_button.style.display = "none";
        remove_button.style.display = "block";
        const viewList = check_cookie_watch.split(',');
        img.src = "";
        img.src = viewList[0];

        description.textContent = "";
        description.textContent = viewList[1];

        price.textContent = "";
        price.textContent = viewList[2];

        write_up.textContent = "";
        write_up.textContent = viewList[3];

        remove_button.addEventListener('click', () => remove_comic(viewList[1]));
    }

}
View_Comic();






function remove_comic(description) {

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
                fetch('http://localhost:4000/api/delete_saved_comic', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: accountData.email, description: description })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok.');
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.message === 1) {
                            setJwtCookie("removed_comic", "1", 1);
                            window.location.href = "Watchlist.html";
                        } else if (data.message === 0) {
                            Remove_0_Call();
                        } if (data.message === 3) {
                            Remove_0_Call();
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

//View Comic---------------------------------------------------------------