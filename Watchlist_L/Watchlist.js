
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



//Cookies----------------------------------------------------------------------------
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


//Cookies-----------------------------------------------------------------------------


//Logout------------------------------------------------------------------------------------
function Logout_Account_Watch() {

    const Logout_Loader = document.getElementById("Logout_Loader");

    deleteCookie("Login_Token");
    Logout_1_Call();
    Logout_Loader.style.display = "block";
    setTimeout(function () {
        Logout_Loader.style.display = "none";
        window.location.href = 'Home.html';
    }, 4000);


}

//Logout------------------------------------------------------------------------------------


//Notifs-----------------------------------------------------------------------------------

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

//Notifs---------------------------------------------------------------------------------



//Go To AccountPage/Cookie------------------------------------------------------



function GoToAccountPage() {
    window.location.href = "Account.html";
}

function GoToContactPage() {
    window.location.href = "HelpContact.html";
}


//Go To AccountPage/Cookie------------------------------------------------------





function Call_Remove_1() {
    const success = document.getElementById("Confirm_Remove");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-350px";
    }, 4000);
}
function Call_Remove_1_Speed() {
    const success = document.getElementById("Confirm_Remove");
    success.style.left = "-350px";
}

function Call_Remove_0() {
    const fail = document.getElementById("Error_Remove");
    fail.style.left = "20px";
    setTimeout(function () {
        fail.style.left = "-350px";
    }, 4000);
}


function Call_Remove_0_Speed() {
    const fail = document.getElementById("Error_Remove");
    fail.style.left = "-350px";
}




















function add_watchlisted_items() {
    const title = document.getElementById("Title");
    const watchlist_number = document.getElementById("Watchlist_Number_Actual");
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
                            title.textContent = "Watchlist";
                            const container = document.getElementById("SearchResults_Grid");

                            const length = savedComicsData.existingUsers.length;
                            watchlist_number.textContent = length;

                            // Loop through the existingUsers array and create items dynamically
                            savedComicsData.existingUsers.forEach((item, index) => {
                                // Create a new div element for each item
                                const newItem = document.createElement("div");
                                newItem.className = "Item_Grid";
                                newItem.id = "Item" + (index + 1);

                                // Create an img element
                                const img = document.createElement("img");
                                img.className = "GridItem_Img";
                                img.src = item.url;
                                img.addEventListener('click', () => view_full_comic(item.url, item.description, item.price, item.write));
                                newItem.appendChild(img);


                                const description = document.createElement("p");
                                description.className = "FeaturedItem_Text_Universe";
                                description.textContent = "Dynamic Forces";
                                newItem.appendChild(description);

                                const issue = document.createElement("p");
                                issue.className = "FeaturedItem_Text_Issue";
                                issue.textContent = item.description;
                                issue.addEventListener('click', () => view_full_comic(item.url, item.description, item.price, item.write));
                                newItem.appendChild(issue);

                                const price = document.createElement("p");
                                price.className = "FeaturedItem_Text_Price";
                                price.textContent = item.price;
                                newItem.appendChild(price);


                                // Create a button for removing the item
                                const removeButton = document.createElement("button");
                                removeButton.className = "AddWatchList";
                                removeButton.textContent = "REMOVE";
                                removeButton.id = "Watchlist_Button_" + (index + 1);
                                removeButton.addEventListener('click', () => remove_comic(item.description));
                                newItem.appendChild(removeButton);

                                // Append the newly created item to the container
                                container.appendChild(newItem);
                            });
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
add_watchlisted_items();




function view_full_comic(img_src, description, price, write_up) {
    deleteCookie("View_Comic");
    deleteCookie("View_Comic_Watch");
    const view_list = []
    img_src = img_src + "*";
    description = description + "*";
    price = price + "*";

    view_list.push(img_src + description + price + write_up);



    setJwtCookie("View_Comic", view_list, 1);
    window.location.href = "View.html";

}



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
                            window.location.reload();
                        } else if (data.message === 0) {
                            Call_Remove_0();
                        } if (data.message === 3) {
                            Call_Remove_1();
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







function check_removed_comic() {
    const cookie = getJwtCookie("removed_comic");
    if (cookie === null) {

    } else if (cookie !== null) {
        Call_Remove_1();
        deleteCookie("removed_comic")
    }
}
check_removed_comic();




//Search Bar---------------------------------------------------------------------------------

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


function delete_current_search() {
    deleteCookie("Current_Search");
}

//Search Bar---------------------------------------------------------------------------------

function Daily_Deals_go() {
    deleteCookie("Current_Search");
    setJwtCookie("Daily_Deal");
    window.location.href = 'Home.html';
}

//Search for comic---------------------------------------------------------------------------------


function handleKeyPress(event) {

    if (event.key === 'Enter') {

        document.getElementById('NavSearchButton').click();
    }
}



//Search for comic---------------------------------------------------------------------------------











//NewsLetter button-----------------------------------------------------------------------
const NewsLetter_Container = document.getElementById("NewsLetterContainer");

const NewsLetterSignUp_Container = document.getElementById("NewsLetterSignUp");
const NewsLetterSignUpSecondary_Container = document.getElementById("NewsLetterSignUpSecondary");

const NewsLetter_Img = document.getElementById("NewsLetter_Image");
const NewsLetter_Img_Style = getComputedStyle(NewsLetter_Img);

const Exit_Img = document.getElementById("Exit_Image");
const Exit_Img_Style = getComputedStyle(Exit_Img);

function NewsLetter() {


    if (NewsLetter_Img_Style.display == "flex") {
        NewsLetter_Img.style.display = "none";
        Exit_Img.style.display = "flex";
        NewsLetterSignUp_Container.style.transition = "bottom .05s ease";
        NewsLetterSignUp_Container.style.bottom = "80px";
        NewsLetterSignUpSecondary_Container.style.transition = "bottom .05s ease";
        NewsLetterSignUpSecondary_Container.style.bottom = "90px";

    } else if (NewsLetter_Img_Style.display == "none") {
        NewsLetter_Img.style.display = "flex";
        Exit_Img.style.display = "none";
        NewsLetterSignUp_Container.style.bottom = "-450px";
        NewsLetterSignUp_Container.style.transition = " bottom .05s ease";
        NewsLetterSignUpSecondary_Container.style.transition = "bottom .05s ease";
        NewsLetterSignUpSecondary_Container.style.bottom = "-450px";

    }


}


function check_login_newsletter() {
    const check_cookie = getJwtCookie("Login_Token");

    const title = document.getElementById("NewsLetter_Text_Title");
    const write_up = document.getElementById("NewsLetter_Text_Description");
    const login_text_bottom = document.getElementById("Sign_in_TextBottom");
    const button_sub = document.getElementById("NewsLetter_Signup_Button");
    const subbed_text = document.getElementById("subbed_text_news");
    const not_subbed_text = document.getElementById("not_subbed_text_news");
    if (check_cookie === null) {
        write_up.textContent = "Sign up now and get access to exlusive offers, updates and more. Also a chance to register for our Newsletter.";
        title.textContent = "Sign up";
        login_text_bottom.style.display = "block";
        button_sub.textContent = "Sign up";
        subbed_text.style.display = "none";
        not_subbed_text.style.display = "none";
        button_sub.onclick = null;
        button_sub.onclick = function () {
            GoToSignInPageCreateAcc();
        };
    } else if (check_cookie !== null) {
        login_text_bottom.style.display = "none";
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
                                write_up.textContent = "Subscribe to our Newsletter now and get access to exlusive offers, updates and more!";
                                title.textContent = "Newsletter";
                                button_sub.textContent = "Unsubscribe";
                                subbed_text.style.display = "block";
                                not_subbed_text.style.display = "none";
                                button_sub.onclick = null;
                                button_sub.onclick = function () {
                                    GoToAccountPage_newsletter();
                                };
                            } else if (data.message === 0) { //Not subscribed to newsleter
                                write_up.textContent = "Subscribe to our Newsletter now and get access to exlusive offers, updates and more!";
                                title.textContent = "Newsletter";
                                button_sub.textContent = "Subscribe";
                                subbed_text.style.display = "none";
                                not_subbed_text.style.display = "block";
                                button_sub.onclick = null;
                                button_sub.onclick = function () {
                                    GoToAccountPage_newsletter();
                                };
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
}
check_login_newsletter();

function GoToAccountPage_newsletter() {
    const Logn_cookie = getJwtCookie("Login_Token");

    if (Logn_cookie === null) {
        Logout_prompt_Call();
    } else if (Logn_cookie !== null) {
        setJwtCookie("account_newsletter", "1", 1);
        window.location.href = "Account.html";
    }
}
//NewsLetter button-----------------------------------------------------------------------




