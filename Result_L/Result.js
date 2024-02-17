
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


check_current_search();


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

function GoToSignInPageCreateAcc() {
    deleteCookie("Current_Search");
    document.cookie = "data=CreateAcc";
    window.location.href = "Sign.html";
}

function GoToSignInPage() {
    deleteCookie("Current_Search");
    window.location.href = "Sign.html";
}
//Navigation Bar Scroll Effect---------------------------------------------------------






//Cookies----------------------------------------------------------------------------------

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


//Cookies----------------------------------------------------------------------------------







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


function Saved_3_a_Call() {
    const success = document.getElementById("Saved_3_a");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Saved_3_a_Close() {
    const success = document.getElementById("Saved_3_a");
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

function Search_from_outside() {
    const top_text = document.getElementById("SearchResult_Title_PlaceHere");
    const search_bar = document.getElementById("SearchBar");

    const outside_cookie = getJwtCookie("Out_Search");

    if (outside_cookie === null) {

    } else if (outside_cookie !== null) {
        top_text.textContent = outside_cookie;
        search_bar.value = outside_cookie;
        fetch_Search_data();
        deleteCookie("Out_Search");
    }


}

Search_from_outside();


function Search_Comics() {
    const top_text = document.getElementById("SearchResult_Title_PlaceHere");
    const search_bar = document.getElementById("SearchBar");

    const bottom_border = document.getElementById("NavigationBarBottom");
    bottom_border.classList.add("loading-border");

    if (search_bar.value === "") {
        bottom_border.classList.remove("loading-border");
    } else if (search_bar.value !== "") {
        top_text.textContent = search_bar.value;
        bottom_border.classList.remove("loading-border");
    }

}


function delete_current_search() {
    deleteCookie("Current_Search");
}


function SearchBar_Bottom(text) {

    const search_bar = document.getElementById("SearchBar");
    const search_text = document.getElementById("SearchResult_Title_PlaceHere");
    const loader = document.getElementById("Loader");



    loader.style.backgroundColor = "rgb(0, 0, 0, .5)";
    loader.style.filter = "brightness(50%)";
    const bottom_border = document.getElementById("NavigationBarBottom");
    bottom_border.classList.add("loading-border");

    if (text === "") {
        bottom_border.classList.remove("loading-border");

        loader.style.backgroundColor = "rgb(0, 0, 0, 0)";
        loader.style.filter = "brightness(100%)";
    } else if (text !== "") {

        setTimeout(() => {

            loader.style.backgroundColor = "rgb(0, 0, 0, 0)";
            loader.style.filter = "brightness(100%)";
            bottom_border.classList.remove("loading-border");
            search_bar.value = text;
            search_text.textContent = text;
            fetch_Search_data();
        }, 3000);
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



//View Full Comic--------------------------------------------------------------------------------------

function view_full_comic(img_src, description, price, write_up) {
    const search_bar = document.getElementById("SearchBar");
    deleteCookie("Current_Search_related");
    deleteCookie("View_Comic");
    deleteCookie("View_Comic_Watch");
    const view_list = []
    img_src = img_src + "*";
    description = description + "*";
    price = price + "*";

    view_list.push(img_src + description + price + write_up);



    setJwtCookie("View_Comic", view_list, 1);
    setJwtCookie("Current_Search_related", search_bar.value, 1);
    window.location.href = "View.html";

}



//View Full Comic--------------------------------------------------------------------------------------



//Save to watchlist--------------------------------------------------------------------------------------
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

                                    watchlistid.textContent = "ADDED TO WATCHLIST";
                                    watchlistid.classList.remove("AddWatchList");
                                    watchlistid.classList.add("AddedWatchList");
                                    Saved_1_Call();
                                } else if (data.message === 0) {
                                    watchlistid.classList.remove("AddWatchList");
                                    watchlistid.classList.add("AddedWatchList");
                                    watchlistid.textContent = "ADDED TO WATCHLIST";

                                    Saved_3_Call();
                                } else if (data.message === 3) {

                                    Saved_3_a_Call();
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




//Save to watchlist--------------------------------------------------------------------------------------


//Flask Communication--------------------------------------------------------------------------------------
async function fetch_Search_data() {
    const Result_Number = document.getElementById("SearchResult_Number");
    const Item_Container = document.getElementById("SearchResults_Grid");
    const Search_Bar = document.getElementById("SearchBar");
    const error_search_none = document.getElementById("None_Found_Search");
    const main_search_title = document.getElementById("Title");
    const search_number_text = document.getElementById("SearchResult_NumberTitle");
    const page_of = document.getElementById("top_page_count_text");
    const page_number_actual = document.getElementById("top_page_count_actual");

    const top_text = document.getElementById("SearchResult_Title_PlaceHere");

    const bottom_border = document.getElementById("NavigationBarBottom");

    const loader = document.getElementById("Loader");




    bottom_border.classList.add("loading-border");

    loader.style.backgroundColor = "rgb(0, 0, 0, .5)";
    loader.style.filter = "brightness(50%)";

    top_text.textContent = Search_Bar.value;

    error_search_none.style.display = "none";
    main_search_title.style.display = "block";
    search_number_text.style.display = "block";

    deleteCookie("Current_Search");
    setJwtCookie("Current_Search", Search_Bar.value, 1);
    try {

        const searchData = {
            searchTerm: Search_Bar.value,
        };


        const response = await fetch('http://127.0.0.1:5500/Search_Data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchData),
        });

        const data = await response.json();

        Result_Number.textContent = data.Total_Result;

        const search_result_number = document.getElementById("SearchResult_Number");
        const number_of_page = document.getElementById("Page_total_number");
        const search_result_value = search_result_number.textContent;
        const search_result_value_unit = parseInt(search_result_value, 10);

        const page_number = Math.ceil(search_result_value_unit / 20);


        number_of_page.textContent = page_number;

        if (data.Description.length === 0) {
            loader.style.backgroundColor = "rgb(0, 0, 0, 0)";
            loader.style.filter = "brightness(100%)";
            Item_Container.innerHTML = "";
            error_search_none.style.display = "block";
            main_search_title.style.display = "none";
            search_number_text.style.display = "none";
            page_of.style.display = "none";

        } else if (data.Description.length !== 0) {
            loader.style.backgroundColor = "rgb(0, 0, 0, 0)";
            loader.style.filter = "brightness(100%)";
            error_search_none.style.display = "none";
            main_search_title.style.display = "block";
            search_number_text.style.display = "block";
            page_of.style.display = "block";
            page_number_actual.textContent = "1";
            // Clear previous items in the container
            Item_Container.innerHTML = "";
            // Loop through the data and create HTML elements
            for (let i = 0; i < data.Description.length; i++) {
                const div = document.createElement("div");
                div.id = `Item${i + 1}`;
                div.className = "Item_Grid";

                const img = document.createElement("img");
                img.id = `FeaturedImg${i + 1}`;
                img.className = "GridItem_Img";
                img.src = data.Image[i];
                img.addEventListener('click', () => view_full_comic(data.Image[i], data.Description[i], data.Price[i], data.Writes[i]));

                const pUniverse = document.createElement("p");
                pUniverse.className = "FeaturedItem_Text_Universe";
                pUniverse.id = `FeatUniv${i + 1}`;
                pUniverse.textContent = "Dynamic Forces";

                const pIssue = document.createElement("p");
                pIssue.className = "FeaturedItem_Text_Issue";
                pIssue.id = `FeatIssue${i + 1}`;
                pIssue.textContent = data.Description[i];
                pIssue.addEventListener('click', () => view_full_comic(data.Image[i], data.Description[i], data.Price[i], data.Writes[i]));

                const pPrice = document.createElement("p");
                pPrice.className = "FeaturedItem_Text_Price";
                pPrice.id = `FeatPrice${i + 1}`;
                pPrice.textContent = data.Price[i];

                const button = document.createElement("button");
                button.className = "AddWatchList";
                button.textContent = "Add to WatchList";
                button.addEventListener('click', () => save_to_watchlist(data.Image[i], data.Description[i], data.Price[i], data.Writes[i], button));

                // Append elements to the div
                div.appendChild(img);
                div.appendChild(pUniverse);
                div.appendChild(pIssue);
                div.appendChild(pPrice);
                div.appendChild(button);

                // Append the div to the container
                Item_Container.appendChild(div);
            }

        }
        bottom_border.classList.remove("loading-border");
    } catch (error) {
        deleteCookie("Current_Search");
        bottom_border.classList.remove("loading-border");
        Result_Number.textContent = "N/A";
        console.error('Error fetching data:', error);
    }
}

var f_numb = 0;
var l_numb = 19;

async function next_page(mode) {
    const Item_Container = document.getElementById("SearchResults_Grid");
    const Search_Bar = document.getElementById("SearchBar");
    const search_result_number = document.getElementById("SearchResult_Number");
    const number_of_page = document.getElementById("Page_total_number");
    const search_result_value = search_result_number.textContent;

    const search_result_value_unit = parseInt(search_result_value, 10);

    const page_number = Math.ceil(search_result_value_unit / 20);
    const loader = document.getElementById("Loader");

    const page_count = document.getElementById("CurrentPage");

    const top_page_count = document.getElementById("top_page_count_actual");

    number_of_page.textContent = page_number;


    if (mode === "next") { //Next page is triggered 
        console.log("Its is next   11211111");
        if (page_count.textContent >= page_number) { //If current page number is >= total result number in terms of pages

        } else {


            deleteCookie("Current_Search");
            setJwtCookie("Current_Search", Search_Bar.value, 1);
            f_numb = f_numb + 20;
            l_numb = l_numb + 20;
            try {

                const searchData = {
                    page_prev_next: "next",
                    search_term: Search_Bar.value,
                    f_numb: f_numb,
                    l_numb: l_numb,
                };

                const response = await fetch('http://127.0.0.1:5500/Change_Page', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(searchData),
                });

                const data = await response.json();

                console.log(data.Description);
                if (data.Description.length === 0) {

                    Item_Container.innerHTML = "";


                } else if (data.Description.length !== 0) {


                    // Clear previous items in the container
                    Item_Container.innerHTML = "";
                    // Loop through the data and create HTML elements
                    for (let i = 0; i < data.Description.length; i++) {
                        const div = document.createElement("div");
                        div.id = `Item${i + 1}`;
                        div.className = "Item_Grid";

                        const img = document.createElement("img");
                        img.id = `FeaturedImg${i + 1}`;
                        img.className = "GridItem_Img";
                        img.src = data.Image[i];
                        img.addEventListener('click', () => view_full_comic(data.Image[i], data.Description[i], data.Price[i], data.Writes[i]));

                        const pUniverse = document.createElement("p");
                        pUniverse.className = "FeaturedItem_Text_Universe";
                        pUniverse.id = `FeatUniv${i + 1}`;
                        pUniverse.textContent = "Dynamic Forces";

                        const pIssue = document.createElement("p");
                        pIssue.className = "FeaturedItem_Text_Issue";
                        pIssue.id = `FeatIssue${i + 1}`;
                        pIssue.textContent = data.Description[i];
                        pIssue.addEventListener('click', () => view_full_comic(data.Image[i], data.Description[i], data.Price[i], data.Writes[i]));

                        const pPrice = document.createElement("p");
                        pPrice.className = "FeaturedItem_Text_Price";
                        pPrice.id = `FeatPrice${i + 1}`;
                        pPrice.textContent = data.Price[i];

                        const button = document.createElement("button");
                        button.className = "AddWatchList";
                        button.textContent = "Add to WatchList";
                        button.addEventListener('click', () => save_to_watchlist(data.Image[i], data.Description[i], data.Price[i], data.Writes[i], button));

                        // Append elements to the div
                        div.appendChild(img);
                        div.appendChild(pUniverse);
                        div.appendChild(pIssue);
                        div.appendChild(pPrice);
                        div.appendChild(button);

                        // Append the div to the container
                        Item_Container.appendChild(div);
                    }
                    page_count.textContent = parseInt(page_count.textContent) + 1;
                    top_page_count.textContent = page_count.textContent;
                    page_count.textContent = "  " + page_count.textContent + "  ";

                    const scroll_top = document.getElementById('SearchResult_Title');
                    scroll_top.scrollIntoView({ behavior: 'instant', block: 'start' });

                }

            } catch (error) {
                deleteCookie("Current_Search");
                console.error('Error fetching data:', error);
            }
        }



    } else if (mode === "prev") {
        f_numb = f_numb - 20;
        l_numb = l_numb - 20;

        if (parseInt(page_count.textContent) === 1) { //
            ""
        } else {


            deleteCookie("Current_Search");
            setJwtCookie("Current_Search", Search_Bar.value, 1);
            try {

                const searchData = {
                    page_prev_next: "prev",
                    search_term: Search_Bar.value,
                    f_numb: f_numb,
                    l_numb: l_numb,
                };

                const response = await fetch('http://127.0.0.1:5500/Change_Page', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(searchData),
                });

                const data = await response.json();


                if (data.Description.length === 0) {

                    Item_Container.innerHTML = "";


                } else if (data.Description.length !== 0) {


                    // Clear previous items in the container
                    Item_Container.innerHTML = "";
                    // Loop through the data and create HTML elements
                    for (let i = 0; i < data.Description.length; i++) {
                        const div = document.createElement("div");
                        div.id = `Item${i + 1}`;
                        div.className = "Item_Grid";

                        const img = document.createElement("img");
                        img.id = `FeaturedImg${i + 1}`;
                        img.className = "GridItem_Img";
                        img.src = data.Image[i];
                        img.addEventListener('click', () => view_full_comic(data.Image[i], data.Description[i], data.Price[i], data.Writes[i]));

                        const pUniverse = document.createElement("p");
                        pUniverse.className = "FeaturedItem_Text_Universe";
                        pUniverse.id = `FeatUniv${i + 1}`;
                        pUniverse.textContent = "Dynamic Forces";

                        const pIssue = document.createElement("p");
                        pIssue.className = "FeaturedItem_Text_Issue";
                        pIssue.id = `FeatIssue${i + 1}`;
                        pIssue.textContent = data.Description[i];
                        pIssue.addEventListener('click', () => view_full_comic(data.Image[i], data.Description[i], data.Price[i], data.Writes[i]));

                        const pPrice = document.createElement("p");
                        pPrice.className = "FeaturedItem_Text_Price";
                        pPrice.id = `FeatPrice${i + 1}`;
                        pPrice.textContent = data.Price[i];

                        const button = document.createElement("button");
                        button.className = "AddWatchList";
                        button.textContent = "Add to WatchList";
                        button.addEventListener('click', () => save_to_watchlist(data.Image[i], data.Description[i], data.Price[i], data.Writes[i], button));

                        // Append elements to the div
                        div.appendChild(img);
                        div.appendChild(pUniverse);
                        div.appendChild(pIssue);
                        div.appendChild(pPrice);
                        div.appendChild(button);

                        // Append the div to the container
                        Item_Container.appendChild(div);
                    }
                    page_count.textContent = parseInt(page_count.textContent) - 1;
                    top_page_count.textContent = page_count.textContent;
                    page_count.textContent = "  " + page_count.textContent + "  ";
                    const scroll_top = document.getElementById('SearchResult_Title');
                    scroll_top.scrollIntoView({ behavior: 'instant', block: 'start' });
                }

            } catch (error) {
                deleteCookie("Current_Search");
                console.error('Error fetching data:', error);
            }



        }

    }


}
//Flask Communication--------------------------------------------------------------------------------------













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



