
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

    view_list.push(img_src);
    view_list.push(description);
    view_list.push(price);
    view_list.push(write_up);

    setJwtCookie("View_Comic_Watch", view_list, 1);
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











