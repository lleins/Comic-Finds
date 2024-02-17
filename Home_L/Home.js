
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


function check_browser_compatibility() {
    setJwtCookie("check_browser");
    if ("") {

    }
}



fetchData();



localStorage.setItem("testkey", "testvalue");
if (localStorage.getItem("testkey") === "testvalue") {
    console.log("Data stored successfully: ", localStorage.getItem("testkey"));
} else {
    console.log("Failed to store data.");
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


//Notif----------------------------------------------------------------------------

function check_account_delete() {
    const check_cookie = getJwtCookie("Account_Deleted");
    if (check_cookie === null) {

    } else if (check_cookie !== null) {
        Account_Delete_Call();
        deleteCookie("Account_Deleted");
    }
}
check_account_delete();
function Logout_1_Call() {
    const success = document.getElementById("Logout_1");
    success.style.left = "20px";


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




function Account_Delete_Call() {
    const success = document.getElementById("Account_Deleted");
    success.style.left = "20px";

    setTimeout(function () {
        success.style.left = "-355px";
    }, 4000);
}
function Account_Delete_Call_Close() {
    const success = document.getElementById("Account_Deleted");
    success.style.left = "-355px";
}
//Notif--------------------------------------------------------------------------



//Cookies Container---------------------------------------------------------

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



function Cookies() {
    const Check_Cookie = getJwtCookie("Accept_Cookie"); //Accept Cookie
    const Cookie_Container = document.getElementById("Cookies_Container");
    if (Check_Cookie !== null) { //checks cookie value
        Cookie_Container.style.bottom = "-250px";
    } else if (Check_Cookie === null) { //checks cookie value
        setTimeout(MoveContainer, 1000);
        function MoveContainer() {
            Cookie_Container.style.transition = "1.3s ease";
            Cookie_Container.style.opacity = "1";
            Cookie_Container.style.bottom = "100px";
        }
    }
}

function AcceptCookies() {

    setJwtCookie("Accept_Cookie", "yes", 7);
    console.log("Cookie from home: ", getJwtCookie("Accept_Cookie"))
    const Cookie_Container = document.getElementById("Cookies_Container");
    Cookie_Container.style.transition = ".5s ease";
    Cookie_Container.style.opacity = "0";
    Cookie_Container.style.bottom = "-250px";
}
//Cookies Container---------------------------------------------------------

Cookies();




//Change NavBar after Login--------------------------------------------------


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
//Change NavBar after Login--------------------------------------------------


//Logout----------------------------------------------------------------------

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

//Logout--------------------------------------------------------------------


//AutoScroll Scroll Effect---------------------------------------------------------




const autoScrollContainer = document.getElementById("AutoScroll_Container");
const autoScrollItems = document.querySelectorAll(".AutoScroll_Item");
let currentImageIndex = 0;

function startAutoScroll() {
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % autoScrollItems.length;
        const offset = -currentImageIndex * 99;

        autoScrollItems.forEach((item, index) => {
            item.style.transform = `translateX(${offset}vw)`;
        });
    }, 10000); // Change images every 10 second
}

startAutoScroll();





//AutoScroll Scroll Effect/Hover Arrows Effect---------------------------------------------------------



function HoverArrows(MainContainer, ArrowsContainer) {  //Hover Arrow Effect
    const Container = document.getElementById(MainContainer);
    const Arrows = document.getElementById(ArrowsContainer);

    Arrows.style.transition = "opacity .1s"
    Container.addEventListener("mouseenter", function () {
        // Change the background color to red when hovered

        Arrows.style.opacity = 1;

    });

    // Add a "mouseleave" event listener
    Container.addEventListener("mouseleave", function () {
        // Restore the original styles when the mouse leaves

        Arrows.style.opacity = 0;

    });
}





function ScrollRight(ContainerName, ScrollValue,) {  //Scroll Right Function
    let canClick_Right = true;
    if (!canClick_Right) {
        return; // Exit the function if clicking is currently restricted
    }
    const Container = document.getElementById(ContainerName);
    const maxScroll = Container.scrollWidth - Container.clientWidth;
    const scrollPosition = Container.scrollLeft;
    if (scrollPosition === 0) {
        Container.scrollBy(ScrollValue, 0);
        Container.style.transition = "Right 0.5s ease";
    } else if (scrollPosition === maxScroll) {
        Container.scrollBy(ScrollValue, 0);
        Container.style.transition = "Right 0.5s ease";
    } else {
        Container.scrollBy(ScrollValue, 0);
        Container.style.transition = "Right 0.5s ease";
    }



    canClick_Right = false; // Disable further clicks
    setTimeout(() => {
        canClick_Right = true; // Re-enable clicks after a specified time
    }, 510);

}


function ScrollLeft(ContainerName, ScrollValue,) { //Scroll Left Function
    let canClick_Left = true;
    if (!canClick_Left) {
        return; // Exit the function if clicking is currently restricted
    }
    const Container = document.getElementById(ContainerName);
    const maxScroll = Container.scrollWidth - Container.clientWidth;
    const scrollPosition = Container.scrollLeft;
    if (scrollPosition === 0) {
        Container.scrollBy(-ScrollValue, 0);
        Container.style.transition = "Right 0.5s ease";
    } else if (scrollPosition === maxScroll) {
        Container.scrollBy(-ScrollValue, 0);
        Container.style.transition = "Right 0.5s ease";
    } else {
        Container.scrollBy(-ScrollValue, 0);
        Container.style.transition = "Right 0.5s ease";
    }



    canClick_Left = false; // Disable further clicks
    setTimeout(() => {
        canClick_Left = true; // Re-enable clicks after a specified time
    }, 510);

}


//Featured Item Today Scroll Effect---------------------------------------------------------

function Featured_ScrollRight() {

    ScrollRight("FeaturedToday", 330);

}

let canClickFeat_Left = true;

function Featured_ScrollLeft() {

    ScrollLeft("FeaturedToday", 330);

}


HoverArrows("FeaturedToday", "Arrow_Container");
HoverArrows("Arrow_Container", "Arrow_Container");

//Featured Item Today Scroll Effect---------------------------------------------------------


//Marvel Scroll Effect-----------------------------------------------------------------------


function Marvel_ScrollRight() {

    ScrollRight("MarvelUniverseContainer", 270);

}

function Marvel_ScrollLeft() {

    ScrollLeft("MarvelUniverseContainer", 270);

}

HoverArrows("MarvelUniverseContainer", "Marvel_Arrows");
HoverArrows("Marvel_Arrows", "Marvel_Arrows");

//Marvel Scroll Effect-----------------------------------------------------------------------


//DC Scroll Effect-----------------------------------------------------------------------


function DC_ScrollRight() {

    ScrollRight("DcUniverseContainer", 270);

}

function DC_ScrollLeft() {

    ScrollLeft("DcUniverseContainer", 270);

}

HoverArrows("DcUniverseContainer", "DC_Arrows");
HoverArrows("DC_Arrows", "DC_Arrows");
//DC Scroll Effect-----------------------------------------------------------------------


//Star Wars Scroll Effect----------------------------------------------------------------------

function StarWars_ScrollRight() {

    ScrollRight("StarWarsUniverseContainer", 270);

}




function StarWars_ScrollLeft() {

    ScrollLeft("StarWarsUniverseContainer", 270);

}

HoverArrows("StarWarsUniverseContainer", "StarWars_Arrows");
HoverArrows("StarWars_Arrows", "StarWars_Arrows");

//Star Wars Scroll Effect-----------------------------------------------------------------------



//Star Trek Scroll Effect-----------------------------------------------------------------------


function StarTrek_ScrollRight() {

    ScrollRight("StarTrekUniverseContainer", 270);

}



function StarTrek_ScrollLeft() {

    ScrollLeft("StarTrekUniverseContainer", 270);

}


HoverArrows("StarTrekUniverseContainer", "StarTrek_Arrows");
HoverArrows("StarTrek_Arrows", "StarTrek_Arrows");

//Star Trek Scroll Effect-----------------------------------------------------------------------


//Walking Dead Scroll Effect----------------------------------------------------------------------


function WalkingDead_ScrollRight() {

    ScrollRight("WalkingDeadUniverseContainer", 270);

}


function WalkingDead_ScrollLeft() {

    ScrollLeft("WalkingDeadUniverseContainer", 270);
}


HoverArrows("WalkingDeadUniverseContainer", "WalkingDead_Arrows");
HoverArrows("WalkingDead_Arrows", "WalkingDead_Arrows");

//Walking Dead Scroll Effect/Hover Arrows Effect-----------------------------------------------------------------------






//Added to watchlist------------------------------------------------------------------------

function AddToWatchlist(watch, src, title, url, price) {
    const watch_c = document.getElementById(watch);

    if (!watch_c) {
        console.error("Element with ID '" + watch + "' not found.");
        return;
    }

    const watch_style = window.getComputedStyle(watch_c);

    console.log("Background Color:", watch_style.backgroundColor);

    if (watch_style.backgroundColor === "rgb(255, 255, 255)") {
        console.log("Setting to Added state");
        watch_c.style.backgroundColor = "rgb(255, 66, 66)";
        watch_c.style.color = "rgb(255, 255, 255)";
        watch_c.textContent = "Added to WatchList";
        watch_c.style.paddingLeft = "50px";
        watch_c.style.paddingRight = "50px";
    } else if (watch_style.backgroundColor === "rgb(255, 66, 66)") {
        console.log("Setting to Add state");
        watch_c.style.backgroundColor = "rgb(255, 255, 255)";
        watch_c.style.color = "rgb(255, 66, 66)";
        watch_c.textContent = "Add to WatchList";
        watch_c.style.paddingLeft = "60px";
        watch_c.style.paddingRight = "60px";
    }
}
//Added to watchlist------------------------------------------------------------------------






//Function to go to Sign In Page/Cookie------------------------------------------------------



function GoToSignInPageCreateAcc() {
    document.cookie = "data=CreateAcc";
    window.location.href = "Sign.html";
}

function GoToSignInPage() {
    window.location.href = "Sign.html";
}


//Function to go to Sign In Page/Cookie------------------------------------------------------






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
    deleteCookie("Out_Search");
    deleteCookie("Current_Search");
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



//Search for comic---------------------------------------------------------------------------------


function handleKeyPress(event) {

    if (event.key === 'Enter') {

        document.getElementById('NavSearchButton').click();
    }
}



//Search for comic---------------------------------------------------------------------------------




//Daily Deals---------------------------------------------------------------------------------

const check_daily_cookie = getJwtCookie("Daily_Deal");

if (check_daily_cookie === null) {

} else if (check_daily_cookie !== null) {
    Daily_Deals();
    deleteCookie("Daily_Deal");
}

function Daily_Deals() {
    const daily_deals_marker = document.getElementById("FeaturedHeading");
    daily_deals_marker.scrollIntoView({ behavior: 'instant', block: 'start' });
}

//Daily Deals---------------------------------------------------------------------------------


//Go To AccountPage/Cookie------------------------------------------------------



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

//Go To AccountPage/Cookie------------------------------------------------------



//Featured Today WebScrape-----------------------------------------------------------------------

async function fetchData() {


    //Loaders
    const Loader_Featured = document.getElementById("Featured_Loader");
    const Loader_Marvel = document.getElementById("Marvel_Loader");
    const Loader_DC = document.getElementById("DC_Loader");
    const Loader_StarWars = document.getElementById("StarWars_Loader");
    const Loader_StarTrek = document.getElementById("StarTrek_Loader");
    const Loader_WalkingDead = document.getElementById("WalkingDead_Loader");

    Loader_Featured.style.display = "block";
    Loader_Marvel.style.display = "block";
    Loader_DC.style.display = "block";
    Loader_StarWars.style.display = "block";
    Loader_StarTrek.style.display = "block";
    Loader_WalkingDead.style.display = "block";



    //Featured comic strips
    const Comic_1_1 = document.getElementById("avengers_comic_1");
    const Comic_1_2 = document.getElementById("avengers_comic_2");
    const Comic_1_3 = document.getElementById("avengers_comic_3");
    const Comic_2_1 = document.getElementById("Batman_comic_1");
    const Comic_2_2 = document.getElementById("Batman_comic_2");
    const Comic_2_3 = document.getElementById("Batman_comic_3");
    const Comic_3_1 = document.getElementById("Spiderman_comic_1");
    const Comic_3_2 = document.getElementById("Spiderman_comic_2");
    const Comic_3_3 = document.getElementById("Spiderman_comic_3");
    const Comic_4_1 = document.getElementById("Superman_comic_1");
    const Comic_4_2 = document.getElementById("Superman_comic_2");
    const Comic_4_3 = document.getElementById("Superman_comic_3");
    const Comic_5_1 = document.getElementById("XMen_comic_1");
    const Comic_5_2 = document.getElementById("XMen_comic_2");
    const Comic_5_3 = document.getElementById("XMen_comic_3");



    //Featured Today
    const Image = document.getElementById("FeaturedImg1");
    const Image2 = document.getElementById("FeaturedImg2");
    const Image3 = document.getElementById("FeaturedImg3");
    const Image4 = document.getElementById("FeaturedImg4");
    const Image5 = document.getElementById("FeaturedImg5");
    const Image6 = document.getElementById("FeaturedImg6");
    const Image7 = document.getElementById("FeaturedImg7");
    const Image8 = document.getElementById("FeaturedImg8");

    const Desc1 = document.getElementById("FeatIssue1");
    const Desc2 = document.getElementById("FeatIssue2");
    const Desc3 = document.getElementById("FeatIssue3");
    const Desc4 = document.getElementById("FeatIssue4");
    const Desc5 = document.getElementById("FeatIssue5");
    const Desc6 = document.getElementById("FeatIssue6");
    const Desc7 = document.getElementById("FeatIssue7");
    const Desc8 = document.getElementById("FeatIssue8");

    const Price1 = document.getElementById("FeatPrice1");
    const Price2 = document.getElementById("FeatPrice2");
    const Price3 = document.getElementById("FeatPrice3");
    const Price4 = document.getElementById("FeatPrice4");
    const Price5 = document.getElementById("FeatPrice5");
    const Price6 = document.getElementById("FeatPrice6");
    const Price7 = document.getElementById("FeatPrice7");
    const Price8 = document.getElementById("FeatPrice8");

    //Marvel 
    const Image_Marvel = document.getElementById("Marvel_Univ_Img1");
    const Image2_Marvel = document.getElementById("Marvel_Univ_Img2");
    const Image3_Marvel = document.getElementById("Marvel_Univ_Img3");
    const Image4_Marvel = document.getElementById("Marvel_Univ_Img4");
    const Image5_Marvel = document.getElementById("Marvel_Univ_Img5");
    const Image6_Marvel = document.getElementById("Marvel_Univ_Img6");
    const Image7_Marvel = document.getElementById("Marvel_Univ_Img7");
    const Image8_Marvel = document.getElementById("Marvel_Univ_Img8");

    const Desc1_Marvel = document.getElementById("Marvel_Univ_Issue1");
    const Desc2_Marvel = document.getElementById("Marvel_Univ_Issue2");
    const Desc3_Marvel = document.getElementById("Marvel_Univ_Issue3");
    const Desc4_Marvel = document.getElementById("Marvel_Univ_Issue4");
    const Desc5_Marvel = document.getElementById("Marvel_Univ_Issue5");
    const Desc6_Marvel = document.getElementById("Marvel_Univ_Issue6");
    const Desc7_Marvel = document.getElementById("Marvel_Univ_Issue7");
    const Desc8_Marvel = document.getElementById("Marvel_Univ_Issue8");


    const Price1_Marvel = document.getElementById("Marvel_Univ_Price1");
    const Price2_Marvel = document.getElementById("Marvel_Univ_Price2");
    const Price3_Marvel = document.getElementById("Marvel_Univ_Price3");
    const Price4_Marvel = document.getElementById("Marvel_Univ_Price4");
    const Price5_Marvel = document.getElementById("Marvel_Univ_Price5");
    const Price6_Marvel = document.getElementById("Marvel_Univ_Price6");
    const Price7_Marvel = document.getElementById("Marvel_Univ_Price7");
    const Price8_Marvel = document.getElementById("Marvel_Univ_Price8");


    //Batman
    const Image_Batman = document.getElementById("DC_Univ_Img1");
    const Image2_Batman = document.getElementById("DC_Univ_Img2");
    const Image3_Batman = document.getElementById("DC_Univ_Img3");
    const Image4_Batman = document.getElementById("DC_Univ_Img4");
    const Image5_Batman = document.getElementById("DC_Univ_Img5");
    const Image6_Batman = document.getElementById("DC_Univ_Img6");
    const Image7_Batman = document.getElementById("DC_Univ_Img7");
    const Image8_Batman = document.getElementById("DC_Univ_Img8");

    const Desc1_Batman = document.getElementById("DC_Univ_Issue1");
    const Desc2_Batman = document.getElementById("DC_Univ_Issue2");
    const Desc3_Batman = document.getElementById("DC_Univ_Issue3");
    const Desc4_Batman = document.getElementById("DC_Univ_Issue4");
    const Desc5_Batman = document.getElementById("DC_Univ_Issue5");
    const Desc6_Batman = document.getElementById("DC_Univ_Issue6");
    const Desc7_Batman = document.getElementById("DC_Univ_Issue7");
    const Desc8_Batman = document.getElementById("DC_Univ_Issue8");

    const Price1_Batman = document.getElementById("DC_Univ_Price1");
    const Price2_Batman = document.getElementById("DC_Univ_Price2");
    const Price3_Batman = document.getElementById("DC_Univ_Price3");
    const Price4_Batman = document.getElementById("DC_Univ_Price4");
    const Price5_Batman = document.getElementById("DC_Univ_Price5");
    const Price6_Batman = document.getElementById("DC_Univ_Price6");
    const Price7_Batman = document.getElementById("DC_Univ_Price7");
    const Price8_Batman = document.getElementById("DC_Univ_Price8");



    //Spiderman
    const Price1_Spiderman = document.getElementById("StarWars_Univ_Price1");
    const Price2_Spiderman = document.getElementById("StarWars_Univ_Price2");
    const Price3_Spiderman = document.getElementById("StarWars_Univ_Price3");
    const Price4_Spiderman = document.getElementById("StarWars_Univ_Price4");
    const Price5_Spiderman = document.getElementById("StarWars_Univ_Price5");
    const Price6_Spiderman = document.getElementById("StarWars_Univ_Price6");
    const Price7_Spiderman = document.getElementById("StarWars_Univ_Price7");
    const Price8_Spiderman = document.getElementById("StarWars_Univ_Price8");

    const Image_Spiderman = document.getElementById("StarWars_Univ_Img1");
    const Image2_Spiderman = document.getElementById("StarWars_Univ_Img2");
    const Image3_Spiderman = document.getElementById("StarWars_Univ_Img3");
    const Image4_Spiderman = document.getElementById("StarWars_Univ_Img4");
    const Image5_Spiderman = document.getElementById("StarWars_Univ_Img5");
    const Image6_Spiderman = document.getElementById("StarWars_Univ_Img6");
    const Image7_Spiderman = document.getElementById("StarWars_Univ_Img7");
    const Image8_Spiderman = document.getElementById("StarWars_Univ_Img8");

    const Desc1_Spiderman = document.getElementById("StarWars_Univ_Issue1");
    const Desc2_Spiderman = document.getElementById("StarWars_Univ_Issue2");
    const Desc3_Spiderman = document.getElementById("StarWars_Univ_Issue3");
    const Desc4_Spiderman = document.getElementById("StarWars_Univ_Issue4");
    const Desc5_Spiderman = document.getElementById("StarWars_Univ_Issue5");
    const Desc6_Spiderman = document.getElementById("StarWars_Univ_Issue6");
    const Desc7_Spiderman = document.getElementById("StarWars_Univ_Issue7");
    const Desc8_Spiderman = document.getElementById("StarWars_Univ_Issue8");


    //Superman
    const Price1_Superman = document.getElementById("StarTrek_Univ_Price1");
    const Price2_Superman = document.getElementById("StarTrek_Univ_Price2");
    const Price3_Superman = document.getElementById("StarTrek_Univ_Price3");
    const Price4_Superman = document.getElementById("StarTrek_Univ_Price4");
    const Price5_Superman = document.getElementById("StarTrek_Univ_Price5");
    const Price6_Superman = document.getElementById("StarTrek_Univ_Price6");
    const Price7_Superman = document.getElementById("StarTrek_Univ_Price7");
    const Price8_Superman = document.getElementById("StarTrek_Univ_Price8");

    const Image_Superman = document.getElementById("StarTrek_Univ_Img1");
    const Image2_Superman = document.getElementById("StarTrek_Univ_Img2");
    const Image3_Superman = document.getElementById("StarTrek_Univ_Img3");
    const Image4_Superman = document.getElementById("StarTrek_Univ_Img4");
    const Image5_Superman = document.getElementById("StarTrek_Univ_Img5");
    const Image6_Superman = document.getElementById("StarTrek_Univ_Img6");
    const Image7_Superman = document.getElementById("StarTrek_Univ_Img7");
    const Image8_Superman = document.getElementById("StarTrek_Univ_Img8");

    const Desc1_Superman = document.getElementById("StarTrek_Univ_Issue1");
    const Desc2_Superman = document.getElementById("StarTrek_Univ_Issue2");
    const Desc3_Superman = document.getElementById("StarTrek_Univ_Issue3");
    const Desc4_Superman = document.getElementById("StarTrek_Univ_Issue4");
    const Desc5_Superman = document.getElementById("StarTrek_Univ_Issue5");
    const Desc6_Superman = document.getElementById("StarTrek_Univ_Issue6");
    const Desc7_Superman = document.getElementById("StarTrek_Univ_Issue7");
    const Desc8_Superman = document.getElementById("StarTrek_Univ_Issue8");


    //X-Men
    const Price1_XMen = document.getElementById("WalkingDead_Univ_Price1");
    const Price2_XMen = document.getElementById("WalkingDead_Univ_Price2");
    const Price3_XMen = document.getElementById("WalkingDead_Univ_Price3");
    const Price4_XMen = document.getElementById("WalkingDead_Univ_Price4");
    const Price5_XMen = document.getElementById("WalkingDead_Univ_Price5");
    const Price6_XMen = document.getElementById("WalkingDead_Univ_Price6");
    const Price7_XMen = document.getElementById("WalkingDead_Univ_Price7");
    const Price8_XMen = document.getElementById("WalkingDead_Univ_Price8");

    const Image_XMen = document.getElementById("WalkingDead_Univ_Img1");
    const Image2_XMen = document.getElementById("WalkingDead_Univ_Img2");
    const Image3_XMen = document.getElementById("WalkingDead_Univ_Img3");
    const Image4_XMen = document.getElementById("WalkingDead_Univ_Img4");
    const Image5_XMen = document.getElementById("WalkingDead_Univ_Img5");
    const Image6_XMen = document.getElementById("WalkingDead_Univ_Img6");
    const Image7_XMen = document.getElementById("WalkingDead_Univ_Img7");
    const Image8_XMen = document.getElementById("WalkingDead_Univ_Img8");

    const Desc1_XMen = document.getElementById("WalkingDead_Univ_Issue1");
    const Desc2_XMen = document.getElementById("WalkingDead_Univ_Issue2");
    const Desc3_XMen = document.getElementById("WalkingDead_Univ_Issue3");
    const Desc4_XMen = document.getElementById("WalkingDead_Univ_Issue4");
    const Desc5_XMen = document.getElementById("WalkingDead_Univ_Issue5");
    const Desc6_XMen = document.getElementById("WalkingDead_Univ_Issue6");
    const Desc7_XMen = document.getElementById("WalkingDead_Univ_Issue7");
    const Desc8_XMen = document.getElementById("WalkingDead_Univ_Issue8");

    try {
        const response = await fetch('http://127.0.0.1:5000/Send_Data');
        const data = await response.json();
        //Featured
        Image.src = String(data.Image_1);
        Image.addEventListener('click', () => view_full_comic(data.Image_1, data.Desc_1, data.Price_1, "No description found...", ""));
        Image2.src = String(data.Image_2);
        Image2.addEventListener('click', () => view_full_comic(data.Image_2, data.Desc_2, data.Price_2, "No description found...", ""));
        Image3.src = String(data.Image_3);
        Image3.addEventListener('click', () => view_full_comic(data.Image_3, data.Desc_3, data.Price_3, "No description found...", ""));
        Image4.src = String(data.Image_4);
        Image4.addEventListener('click', () => view_full_comic(data.Image_4, data.Desc_4, data.Price_4, "No description found...", ""));
        Image5.src = String(data.Image_5);
        Image5.addEventListener('click', () => view_full_comic(data.Image_5, data.Desc_5, data.Price_5, "No description found...", ""));
        Image6.src = String(data.Image_6);
        Image6.addEventListener('click', () => view_full_comic(data.Image_6, data.Desc_6, data.Price_6, "No description found...", ""));
        Image7.src = String(data.Image_7);
        Image7.addEventListener('click', () => view_full_comic(data.Image_7, data.Desc_7, data.Price_7, "No description found...", ""));
        Image8.src = String(data.Image_8);
        Image8.addEventListener('click', () => view_full_comic(data.Image_8, data.Desc_8, data.Price_8, "No description found...", ""));

        Desc1.textContent = data.Desc_1;
        Desc1.addEventListener('click', () => view_full_comic(data.Image_1, data.Desc_1, data.Price_1, "No description found...", ""));
        Desc2.textContent = data.Desc_2;
        Desc2.addEventListener('click', () => view_full_comic(data.Image_2, data.Desc_2, data.Price_2, "No description found...", ""));
        Desc3.textContent = data.Desc_3;
        Desc3.addEventListener('click', () => view_full_comic(data.Image_3, data.Desc_3, data.Price_3, "No description found...", ""));
        Desc4.textContent = data.Desc_4;
        Desc4.addEventListener('click', () => view_full_comic(data.Image_4, data.Desc_4, data.Price_4, "No description found...", ""));
        Desc5.textContent = data.Desc_5;
        Desc5.addEventListener('click', () => view_full_comic(data.Image_5, data.Desc_5, data.Price_5, "No description found...", ""));
        Desc6.textContent = data.Desc_6;
        Desc6.addEventListener('click', () => view_full_comic(data.Image_6, data.Desc_6, data.Price_6, "No description found...", ""));
        Desc7.textContent = data.Desc_7;
        Desc7.addEventListener('click', () => view_full_comic(data.Image_7, data.Desc_7, data.Price_7, "No description found...", ""));
        Desc8.textContent = data.Desc_8;
        Desc8.addEventListener('click', () => view_full_comic(data.Image_8, data.Desc_8, data.Price_8, "No description found...", ""));

        Price1.textContent = data.Price_1;
        Price2.textContent = data.Price_2;
        Price3.textContent = data.Price_3;
        Price4.textContent = data.Price_4;
        Price5.textContent = data.Price_5;
        Price6.textContent = data.Price_6;
        Price7.textContent = data.Price_7;
        Price8.textContent = data.Price_8;
        Loader_Featured.style.display = "none";


        //Marvel 

        Comic_1_1.src = String(data.Image_1_Marvel);
        Comic_1_1.addEventListener('click', () => view_full_comic(data.Image_1_Marvel, data.Desc_1_Marvel, data.Price_1_Marvel, data.Marvel_Write[0], "Avengers"));
        Comic_1_2.src = String(data.Image_2_Marvel);
        Comic_1_2.addEventListener('click', () => view_full_comic(data.Image_2_Marvel, data.Desc_2_Marvel, data.Price_2_Marvel, data.Marvel_Write[1], "Avengers"));
        Comic_1_3.src = String(data.Image_3_Marvel);
        Comic_1_3.addEventListener('click', () => view_full_comic(data.Image_3_Marvel, data.Desc_3_Marvel, data.Price_3_Marvel, data.Marvel_Write[2], "Avengers"));
        Image_Marvel.src = String(data.Image_1_Marvel);
        Image_Marvel.addEventListener('click', () => view_full_comic(data.Image_1_Marvel, data.Desc_1_Marvel, data.Price_1_Marvel, data.Marvel_Write[0], "Avengers"));
        Image2_Marvel.src = String(data.Image_2_Marvel);
        Image2_Marvel.addEventListener('click', () => view_full_comic(data.Image_2_Marvel, data.Desc_2_Marvel, data.Price_2_Marvel, data.Marvel_Write[1], "Avengers"));
        Image3_Marvel.src = String(data.Image_3_Marvel);
        Image3_Marvel.addEventListener('click', () => view_full_comic(data.Image_3_Marvel, data.Desc_3_Marvel, data.Price_3_Marvel, data.Marvel_Write[2], "Avengers"));
        Image4_Marvel.src = String(data.Image_4_Marvel);
        Image4_Marvel.addEventListener('click', () => view_full_comic(data.Image_4_Marvel, data.Desc_4_Marvel, data.Price_4_Marvel, data.Marvel_Write[3], "Avengers"));
        Image5_Marvel.src = String(data.Image_5_Marvel);
        Image5_Marvel.addEventListener('click', () => view_full_comic(data.Image_5_Marvel, data.Desc_5_Marvel, data.Price_5_Marvel, data.Marvel_Write[4], "Avengers"));
        Image6_Marvel.src = String(data.Image_6_Marvel);
        Image6_Marvel.addEventListener('click', () => view_full_comic(data.Image_6_Marvel, data.Desc_6_Marvel, data.Price_6_Marvel, data.Marvel_Write[5], "Avengers"));
        Image7_Marvel.src = String(data.Image_7_Marvel);
        Image7_Marvel.addEventListener('click', () => view_full_comic(data.Image_7_Marvel, data.Desc_7_Marvel, data.Price_7_Marvel, data.Marvel_Write[6], "Avengers"));
        Image8_Marvel.src = String(data.Image_8_Marvel);
        Image8_Marvel.addEventListener('click', () => view_full_comic(data.Image_8_Marvel, data.Desc_8_Marvel, data.Price_8_Marvel, data.Marvel_Write[7], "Avengers"));

        Desc1_Marvel.textContent = data.Desc_1_Marvel;
        Desc1_Marvel.addEventListener('click', () => view_full_comic(data.Image_1_Marvel, data.Desc_1_Marvel, data.Price_1_Marvel, data.Marvel_Write[0], "Avengers"));
        Desc2_Marvel.textContent = data.Desc_2_Marvel;
        Desc2_Marvel.addEventListener('click', () => view_full_comic(data.Image_2_Marvel, data.Desc_2_Marvel, data.Price_2_Marvel, data.Marvel_Write[1], "Avengers"));
        Desc3_Marvel.textContent = data.Desc_3_Marvel;
        Desc3_Marvel.addEventListener('click', () => view_full_comic(data.Image_3_Marvel, data.Desc_3_Marvel, data.Price_3_Marvel, data.Marvel_Write[2], "Avengers"));
        Desc4_Marvel.textContent = data.Desc_4_Marvel;
        Desc4_Marvel.addEventListener('click', () => view_full_comic(data.Image_4_Marvel, data.Desc_4_Marvel, data.Price_4_Marvel, data.Marvel_Write[3], "Avengers"));
        Desc5_Marvel.textContent = data.Desc_5_Marvel;
        Desc5_Marvel.addEventListener('click', () => view_full_comic(data.Image_5_Marvel, data.Desc_5_Marvel, data.Price_5_Marvel, data.Marvel_Write[4], "Avengers"));
        Desc6_Marvel.textContent = data.Desc_6_Marvel;
        Desc6_Marvel.addEventListener('click', () => view_full_comic(data.Image_6_Marvel, data.Desc_6_Marvel, data.Price_6_Marvel, data.Marvel_Write[5], "Avengers"));
        Desc7_Marvel.textContent = data.Desc_7_Marvel;
        Desc7_Marvel.addEventListener('click', () => view_full_comic(data.Image_7_Marvel, data.Desc_7_Marvel, data.Price_7_Marvel, data.Marvel_Write[6], "Avengers"));
        Desc8_Marvel.textContent = data.Desc_8_Marvel;
        Desc8_Marvel.addEventListener('click', () => view_full_comic(data.Image_8_Marvel, data.Desc_8_Marvel, data.Price_8_Marvel, data.Marvel_Write[7], "Avengers"));

        Price1_Marvel.textContent = data.Price_1_Marvel;
        Price2_Marvel.textContent = data.Price_2_Marvel;
        Price3_Marvel.textContent = data.Price_3_Marvel;
        Price4_Marvel.textContent = data.Price_4_Marvel;
        Price5_Marvel.textContent = data.Price_5_Marvel;
        Price6_Marvel.textContent = data.Price_6_Marvel;
        Price7_Marvel.textContent = data.Price_7_Marvel;
        Price8_Marvel.textContent = data.Price_8_Marvel;
        Loader_Marvel.style.display = "none";



        //Batman
        Comic_2_1.src = String(data.Image_1_Batman);
        Comic_2_1.addEventListener('click', () => view_full_comic(data.Image_1_Batman, data.Desc_1_Batman, data.Price_1_Batman, data.Batman_Write[0], "Batman"));
        Comic_2_2.src = String(data.Image_2_Batman);
        Comic_2_2.addEventListener('click', () => view_full_comic(data.Image_2_Batman, data.Desc_2_Batman, data.Price_2_Batman, data.Batman_Write[1], "Batman"));
        Comic_2_3.src = String(data.Image_3_Batman);
        Comic_2_3.addEventListener('click', () => view_full_comic(data.Image_3_Batman, data.Desc_3_Batman, data.Price_3_Batman, data.Batman_Write[2, "Batman"]));

        Image_Batman.src = String(data.Image_1_Batman);
        Image_Batman.addEventListener('click', () => view_full_comic(data.Image_1_Batman, data.Desc_1_Batman, data.Price_1_Batman, data.Batman_Write[0], "Batman"));
        Image2_Batman.src = String(data.Image_2_Batman);
        Image2_Batman.addEventListener('click', () => view_full_comic(data.Image_2_Batman, data.Desc_2_Batman, data.Price_2_Batman, data.Batman_Write[1], "Batman"));
        Image3_Batman.src = String(data.Image_3_Batman);
        Image3_Batman.addEventListener('click', () => view_full_comic(data.Image_3_Batman, data.Desc_3_Batman, data.Price_3_Batman, data.Batman_Write[2], "Batman"));
        Image4_Batman.src = String(data.Image_4_Batman);
        Image4_Batman.addEventListener('click', () => view_full_comic(data.Image_4_Batman, data.Desc_4_Batman, data.Price_4_Batman, data.Batman_Write[3], "Batman"));
        Image5_Batman.src = String(data.Image_5_Batman);
        Image5_Batman.addEventListener('click', () => view_full_comic(data.Image_5_Batman, data.Desc_5_Batman, data.Price_5_Batman, data.Batman_Write[4], "Batman"));
        Image6_Batman.src = String(data.Image_6_Batman);
        Image6_Batman.addEventListener('click', () => view_full_comic(data.Image_6_Batman, data.Desc_6_Batman, data.Price_6_Batman, data.Batman_Write[5], "Batman"));
        Image7_Batman.src = String(data.Image_7_Batman);
        Image7_Batman.addEventListener('click', () => view_full_comic(data.Image_7_Batman, data.Desc_7_Batman, data.Price_7_Batman, data.Batman_Write[6], "Batman"));
        Image8_Batman.src = String(data.Image_8_Batman);
        Image8_Batman.addEventListener('click', () => view_full_comic(data.Image_8_Batman, data.Desc_8_Batman, data.Price_8_Batman, data.Batman_Write[7], "Batman"));

        Desc1_Batman.textContent = data.Desc_1_Batman;
        Desc1_Batman.addEventListener('click', () => view_full_comic(data.Image_1_Batman, data.Desc_1_Batman, data.Price_1_Batman, data.Batman_Write[0], "Batman"));
        Desc2_Batman.textContent = data.Desc_2_Batman;
        Desc2_Batman.addEventListener('click', () => view_full_comic(data.Image_2_Batman, data.Desc_2_Batman, data.Price_2_Batman, data.Batman_Write[1], "Batman"));
        Desc3_Batman.textContent = data.Desc_3_Batman;
        Desc3_Batman.addEventListener('click', () => view_full_comic(data.Image_3_Batman, data.Desc_3_Batman, data.Price_3_Batman, data.Batman_Write[2], "Batman"));
        Desc4_Batman.textContent = data.Desc_4_Batman;
        Desc4_Batman.addEventListener('click', () => view_full_comic(data.Image_4_Batman, data.Desc_4_Batman, data.Price_4_Batman, data.Batman_Write[3], "Batman"));
        Desc5_Batman.textContent = data.Desc_5_Batman;
        Desc5_Batman.addEventListener('click', () => view_full_comic(data.Image_5_Batman, data.Desc_5_Batman, data.Price_5_Batman, data.Batman_Write[4], "Batman"));
        Desc6_Batman.textContent = data.Desc_6_Batman;
        Desc6_Batman.addEventListener('click', () => view_full_comic(data.Image_6_Batman, data.Desc_6_Batman, data.Price_6_Batman, data.Batman_Write[5], "Batman"));
        Desc7_Batman.textContent = data.Desc_7_Batman;
        Desc7_Batman.addEventListener('click', () => view_full_comic(data.Image_7_Batman, data.Desc_7_Batman, data.Price_7_Batman, data.Batman_Write[6], "Batman"));
        Desc8_Batman.textContent = data.Desc_8_Batman;
        Desc8_Batman.addEventListener('click', () => view_full_comic(data.Image_8_Batman, data.Desc_8_Batman, data.Price_8_Batman, data.Batman_Write[7], "Batman"));

        Price1_Batman.textContent = data.Price_1_Batman;
        Price2_Batman.textContent = data.Price_2_Batman;
        Price3_Batman.textContent = data.Price_3_Batman;
        Price4_Batman.textContent = data.Price_4_Batman;
        Price5_Batman.textContent = data.Price_5_Batman;
        Price6_Batman.textContent = data.Price_6_Batman;
        Price7_Batman.textContent = data.Price_7_Batman;
        Price8_Batman.textContent = data.Price_8_Batman;
        Loader_DC.style.display = "none";


        //Spiderman
        Comic_3_1.src = String(data.Image_1_Spiderman);
        Comic_3_1.addEventListener('click', () => view_full_comic(data.Image_1_Spiderman, data.Desc_1_Spiderman, data.Price_1_Spiderman, data.Spiderman_Write[0], "Spiderman"));
        Comic_3_2.src = String(data.Image_2_Spiderman);
        Comic_3_2.addEventListener('click', () => view_full_comic(data.Image_2_Spiderman, data.Desc_2_Spiderman, data.Price_2_Spiderman, data.Spiderman_Write[1], "Spiderman"));
        Comic_3_3.src = String(data.Image_3_Spiderman);
        Comic_3_3.addEventListener('click', () => view_full_comic(data.Image_3_Spiderman, data.Desc_3_Spiderman, data.Price_3_Spiderman, data.Spiderman_Write[2], "Spiderman"));


        Image_Spiderman.src = String(data.Image_1_Spiderman);
        Image_Spiderman.addEventListener('click', () => view_full_comic(data.Image_1_Spiderman, data.Desc_1_Spiderman, data.Price_1_Spiderman, data.Spiderman_Write[0], "Spiderman"));
        Image2_Spiderman.src = String(data.Image_2_Spiderman);
        Image2_Spiderman.addEventListener('click', () => view_full_comic(data.Image_2_Spiderman, data.Desc_2_Spiderman, data.Price_2_Spiderman, data.Spiderman_Write[1], "Spiderman"));
        Image3_Spiderman.src = String(data.Image_3_Spiderman);
        Image3_Spiderman.addEventListener('click', () => view_full_comic(data.Image_3_Spiderman, data.Desc_3_Spiderman, data.Price_3_Spiderman, data.Spiderman_Write[2], "Spiderman"));
        Image4_Spiderman.src = String(data.Image_4_Spiderman);
        Image4_Spiderman.addEventListener('click', () => view_full_comic(data.Image_4_Spiderman, data.Desc_4_Spiderman, data.Price_4_Spiderman, data.Spiderman_Write[3], "Spiderman"));
        Image5_Spiderman.src = String(data.Image_5_Spiderman);
        Image5_Spiderman.addEventListener('click', () => view_full_comic(data.Image_5_Spiderman, data.Desc_5_Spiderman, data.Price_5_Spiderman, data.Spiderman_Write[4], "Spiderman"));
        Image6_Spiderman.src = String(data.Image_6_Spiderman);
        Image6_Spiderman.addEventListener('click', () => view_full_comic(data.Image_6_Spiderman, data.Desc_6_Spiderman, data.Price_6_Spiderman, data.Spiderman_Write[5], "Spiderman"));
        Image7_Spiderman.src = String(data.Image_7_Spiderman);
        Image7_Spiderman.addEventListener('click', () => view_full_comic(data.Image_7_Spiderman, data.Desc_7_Spiderman, data.Price_7_Spiderman, data.Spiderman_Write[6], "Spiderman"));
        Image8_Spiderman.src = String(data.Image_8_Spiderman);
        Image8_Spiderman.addEventListener('click', () => view_full_comic(data.Image_8_Spiderman, data.Desc_8_Spiderman, data.Price_8_Spiderman, data.Spiderman_Write[7], "Spiderman"));

        Desc1_Spiderman.textContent = data.Desc_1_Spiderman;
        Desc1_Spiderman.addEventListener('click', () => view_full_comic(data.Image_1_Spiderman, data.Desc_1_Spiderman, data.Price_1_Spiderman, data.Spiderman_Write[0], "Spiderman"));
        Desc2_Spiderman.textContent = data.Desc_2_Spiderman;
        Desc2_Spiderman.addEventListener('click', () => view_full_comic(data.Image_2_Spiderman, data.Desc_2_Spiderman, data.Price_2_Spiderman, data.Spiderman_Write[1], "Spiderman"));
        Desc3_Spiderman.textContent = data.Desc_3_Spiderman;
        Desc3_Spiderman.addEventListener('click', () => view_full_comic(data.Image_3_Spiderman, data.Desc_3_Spiderman, data.Price_3_Spiderman, data.Spiderman_Write[2], "Spiderman"));
        Desc4_Spiderman.textContent = data.Desc_4_Spiderman;
        Desc4_Spiderman.addEventListener('click', () => view_full_comic(data.Image_4_Spiderman, data.Desc_4_Spiderman, data.Price_4_Spiderman, data.Spiderman_Write[3], "Spiderman"));
        Desc5_Spiderman.textContent = data.Desc_5_Spiderman;
        Desc5_Spiderman.addEventListener('click', () => view_full_comic(data.Image_5_Spiderman, data.Desc_5_Spiderman, data.Price_5_Spiderman, data.Spiderman_Write[4], "Spiderman"));
        Desc6_Spiderman.textContent = data.Desc_6_Spiderman;
        Desc6_Spiderman.addEventListener('click', () => view_full_comic(data.Image_6_Spiderman, data.Desc_6_Spiderman, data.Price_6_Spiderman, data.Spiderman_Write[5], "Spiderman"));
        Desc7_Spiderman.textContent = data.Desc_7_Spiderman;
        Desc7_Spiderman.addEventListener('click', () => view_full_comic(data.Image_7_Spiderman, data.Desc_7_Spiderman, data.Price_7_Spiderman, data.Spiderman_Write[6], "Spiderman"));
        Desc8_Spiderman.textContent = data.Desc_8_Spiderman;
        Desc8_Spiderman.addEventListener('click', () => view_full_comic(data.Image_8_Spiderman, data.Desc_8_Spiderman, data.Price_8_Spiderman, data.Spiderman_Write[7], "Spiderman"));

        Price1_Spiderman.textContent = data.Price_1_Spiderman;
        Price2_Spiderman.textContent = data.Price_2_Spiderman;
        Price3_Spiderman.textContent = data.Price_3_Spiderman;
        Price4_Spiderman.textContent = data.Price_4_Spiderman;
        Price5_Spiderman.textContent = data.Price_5_Spiderman;
        Price6_Spiderman.textContent = data.Price_6_Spiderman;
        Price7_Spiderman.textContent = data.Price_7_Spiderman;
        Price8_Spiderman.textContent = data.Price_8_Spiderman;
        Loader_StarWars.style.display = "none";

        //Superman
        Comic_4_1.src = String(data.Image_1_Superman);
        Comic_4_1.addEventListener('click', () => view_full_comic(data.Image_1_Superman, data.Desc_1_Superman, data.Price_1_Superman, data.Superman_Write[0], "Superman"));
        Comic_4_2.src = String(data.Image_2_Superman);
        Comic_4_2.addEventListener('click', () => view_full_comic(data.Image_2_Superman, data.Desc_2_Superman, data.Price_2_Superman, data.Superman_Write[1], "Superman"));
        Comic_4_3.src = String(data.Image_3_Superman);
        Comic_4_3.addEventListener('click', () => view_full_comic(data.Image_3_Superman, data.Desc_3_Superman, data.Price_3_Superman, data.Superman_Write[2], "Superman"));


        Image_Superman.src = String(data.Image_1_Superman);
        Image_Superman.addEventListener('click', () => view_full_comic(data.Image_1_Superman, data.Desc_1_Superman, data.Price_1_Superman, data.Superman_Write[0], "Superman"));
        Image2_Superman.src = String(data.Image_2_Superman);
        Image2_Superman.addEventListener('click', () => view_full_comic(data.Image_2_Superman, data.Desc_2_Superman, data.Price_2_Superman, data.Superman_Write[1], "Superman"));
        Image3_Superman.src = String(data.Image_3_Superman);
        Image3_Superman.addEventListener('click', () => view_full_comic(data.Image_3_Superman, data.Desc_3_Superman, data.Price_3_Superman, data.Superman_Write[2], "Superman"));
        Image4_Superman.src = String(data.Image_4_Superman);
        Image4_Superman.addEventListener('click', () => view_full_comic(data.Image_4_Superman, data.Desc_4_Superman, data.Price_4_Superman, data.Superman_Write[3], "Superman"));
        Image5_Superman.src = String(data.Image_5_Superman);
        Image5_Superman.addEventListener('click', () => view_full_comic(data.Image_5_Superman, data.Desc_5_Superman, data.Price_5_Superman, data.Superman_Write[4], "Superman"));
        Image6_Superman.src = String(data.Image_6_Superman);
        Image6_Superman.addEventListener('click', () => view_full_comic(data.Image_6_Superman, data.Desc_6_Superman, data.Price_6_Superman, data.Superman_Write[5], "Superman"));
        Image7_Superman.src = String(data.Image_7_Superman);
        Image7_Superman.addEventListener('click', () => view_full_comic(data.Image_7_Superman, data.Desc_7_Superman, data.Price_7_Superman, data.Superman_Write[6], "Superman"));
        Image8_Superman.src = String(data.Image_8_Superman);
        Image8_Superman.addEventListener('click', () => view_full_comic(data.Image_8_Superman, data.Desc_8_Superman, data.Price_8_Superman, data.Superman_Write[7], "Superman"));

        Desc1_Superman.textContent = data.Desc_1_Superman;
        Desc1_Superman.addEventListener('click', () => view_full_comic(data.Image_1_Superman, data.Desc_1_Superman, data.Price_1_Superman, data.Superman_Write[0], "Superman"));
        Desc2_Superman.textContent = data.Desc_2_Superman;
        Desc2_Superman.addEventListener('click', () => view_full_comic(data.Image_2_Superman, data.Desc_2_Superman, data.Price_2_Superman, data.Superman_Write[1], "Superman"));
        Desc3_Superman.textContent = data.Desc_3_Superman;
        Desc3_Superman.addEventListener('click', () => view_full_comic(data.Image_3_Superman, data.Desc_3_Superman, data.Price_3_Superman, data.Superman_Write[2], "Superman"));
        Desc4_Superman.textContent = data.Desc_4_Superman;
        Desc4_Superman.addEventListener('click', () => view_full_comic(data.Image_4_Superman, data.Desc_4_Superman, data.Price_4_Superman, data.Superman_Write[3], "Superman"));
        Desc5_Superman.textContent = data.Desc_5_Superman;
        Desc5_Superman.addEventListener('click', () => view_full_comic(data.Image_5_Superman, data.Desc_5_Superman, data.Price_5_Superman, data.Superman_Write[4], "Superman"));
        Desc6_Superman.textContent = data.Desc_6_Superman;
        Desc6_Superman.addEventListener('click', () => view_full_comic(data.Image_6_Superman, data.Desc_6_Superman, data.Price_6_Superman, data.Superman_Write[5], "Superman"));
        Desc7_Superman.textContent = data.Desc_7_Superman;
        Desc7_Superman.addEventListener('click', () => view_full_comic(data.Image_7_Superman, data.Desc_7_Superman, data.Price_7_Superman, data.Superman_Write[6], "Superman"));
        Desc8_Superman.textContent = data.Desc_8_Superman;
        Desc8_Superman.addEventListener('click', () => view_full_comic(data.Image_8_Superman, data.Desc_8_Superman, data.Price_8_Superman, data.Superman_Write[7], "Superman"));

        Price1_Superman.textContent = data.Price_1_Superman;
        Price2_Superman.textContent = data.Price_2_Superman;
        Price3_Superman.textContent = data.Price_3_Superman;
        Price4_Superman.textContent = data.Price_4_Superman;
        Price5_Superman.textContent = data.Price_5_Superman;
        Price6_Superman.textContent = data.Price_6_Superman;
        Price7_Superman.textContent = data.Price_7_Superman;
        Price8_Superman.textContent = data.Price_8_Superman;
        Loader_StarTrek.style.display = "none";

        //X-Men
        Comic_5_1.src = String(data.Image_1_XMen);
        Comic_5_1.addEventListener('click', () => view_full_comic(data.Image_1_XMen, data.Desc_1_XMen, data.Price_1_XMen, data.XMen_Write[0], "Xmen"));
        Comic_5_2.src = String(data.Image_2_XMen);
        Comic_5_2.addEventListener('click', () => view_full_comic(data.Image_2_XMen, data.Desc_2_XMen, data.Price_2_XMen, data.XMen_Write[1], "Xmen"));
        Comic_5_3.src = String(data.Image_3_XMen);
        Comic_5_3.addEventListener('click', () => view_full_comic(data.Image_3_XMen, data.Desc_3_XMen, data.Price_3_XMen, data.XMen_Write[2], "Xmen"));


        Image_XMen.src = String(data.Image_1_XMen);
        Image_XMen.addEventListener('click', () => view_full_comic(data.Image_1_XMen, data.Desc_1_XMen, data.Price_1_XMen, data.XMen_Write[0], "Xmen"));
        Image2_XMen.src = String(data.Image_2_XMen);
        Image2_XMen.addEventListener('click', () => view_full_comic(data.Image_2_XMen, data.Desc_2_XMen, data.Price_2_XMen, data.XMen_Write[1], "Xmen"));
        Image3_XMen.src = String(data.Image_3_XMen);
        Image3_XMen.addEventListener('click', () => view_full_comic(data.Image_3_XMen, data.Desc_3_XMen, data.Price_3_XMen, data.XMen_Write[2], "Xmen"));
        Image4_XMen.src = String(data.Image_4_XMen);
        Image4_XMen.addEventListener('click', () => view_full_comic(data.Image_4_XMen, data.Desc_4_XMen, data.Price_4_XMen, data.XMen_Write[3], "Xmen"));
        Image5_XMen.src = String(data.Image_5_XMen);
        Image5_XMen.addEventListener('click', () => view_full_comic(data.Image_5_XMen, data.Desc_5_XMen, data.Price_5_XMen, data.XMen_Write[4], "Xmen"));
        Image6_XMen.src = String(data.Image_6_XMen);
        Image6_XMen.addEventListener('click', () => view_full_comic(data.Image_6_XMen, data.Desc_6_XMen, data.Price_6_XMen, data.XMen_Write[5], "Xmen"));
        Image7_XMen.src = String(data.Image_7_XMen);
        Image7_XMen.addEventListener('click', () => view_full_comic(data.Image_7_XMen, data.Desc_7_XMen, data.Price_7_XMen, data.XMen_Write[6], "Xmen"));
        Image8_XMen.src = String(data.Image_8_XMen);
        Image8_XMen.addEventListener('click', () => view_full_comic(data.Image_8_XMen, data.Desc_8_XMen, data.Price_8_XMen, data.XMen_Write[7], "Xmen"));

        Desc1_XMen.textContent = data.Desc_1_XMen;
        Desc1_XMen.addEventListener('click', () => view_full_comic(data.Image_1_XMen, data.Desc_1_XMen, data.Price_1_XMen, data.XMen_Write[0], "Xmen"));
        Desc2_XMen.textContent = data.Desc_2_XMen;
        Desc2_XMen.addEventListener('click', () => view_full_comic(data.Image_2_XMen, data.Desc_2_XMen, data.Price_2_XMen, data.XMen_Write[1], "Xmen"));
        Desc3_XMen.textContent = data.Desc_3_XMen;
        Desc3_XMen.addEventListener('click', () => view_full_comic(data.Image_3_XMen, data.Desc_3_XMen, data.Price_3_XMen, data.XMen_Write[2], "Xmen"));
        Desc4_XMen.textContent = data.Desc_4_XMen;
        Desc4_XMen.addEventListener('click', () => view_full_comic(data.Image_4_XMen, data.Desc_4_XMen, data.Price_4_XMen, data.XMen_Write[3], "Xmen"));
        Desc5_XMen.textContent = data.Desc_5_XMen;
        Desc5_XMen.addEventListener('click', () => view_full_comic(data.Image_5_XMen, data.Desc_5_XMen, data.Price_5_XMen, data.XMen_Write[4], "Xmen"));
        Desc6_XMen.textContent = data.Desc_6_XMen;
        Desc6_XMen.addEventListener('click', () => view_full_comic(data.Image_6_XMen, data.Desc_6_XMen, data.Price_6_XMen, data.XMen_Write[5], "Xmen"));
        Desc7_XMen.textContent = data.Desc_7_XMen;
        Desc7_XMen.addEventListener('click', () => view_full_comic(data.Image_7_XMen, data.Desc_7_XMen, data.Price_7_XMen, data.XMen_Write[6], "Xmen"));
        Desc8_XMen.textContent = data.Desc_8_XMen;
        Desc8_XMen.addEventListener('click', () => view_full_comic(data.Image_8_XMen, data.Desc_8_XMen, data.Price_8_XMen, data.XMen_Write[7], "Xmen"));

        Price1_XMen.textContent = data.Price_1_XMen;
        Price2_XMen.textContent = data.Price_2_XMen;
        Price3_XMen.textContent = data.Price_3_XMen;
        Price4_XMen.textContent = data.Price_4_XMen;
        Price5_XMen.textContent = data.Price_5_XMen;
        Price6_XMen.textContent = data.Price_6_XMen;
        Price7_XMen.textContent = data.Price_7_XMen;
        Price8_XMen.textContent = data.Price_8_XMen;

        //Watchlist - Featured
        const Watch_featured_1 = document.getElementById("Featured_Saved_1");
        Watch_featured_1.addEventListener('click', () => save_to_watchlist_daily(data.Image_1, data.Desc_1, data.Price_1, "No description found...", "Featured_Saved_1"));
        const Watch_featured_2 = document.getElementById("Featured_Saved_2");
        Watch_featured_2.addEventListener('click', () => save_to_watchlist_daily(data.Image_2, data.Desc_2, data.Price_2, "No description found...", "Featured_Saved_2"));
        const Watch_featured_3 = document.getElementById("Featured_Saved_3");
        Watch_featured_3.addEventListener('click', () => save_to_watchlist_daily(data.Image_3, data.Desc_3, data.Price_3, "No description found...", "Featured_Saved_3"));
        const Watch_featured_4 = document.getElementById("Featured_Saved_4");
        Watch_featured_4.addEventListener('click', () => save_to_watchlist_daily(data.Image_4, data.Desc_4, data.Price_4, "No description found...", "Featured_Saved_4"));
        const Watch_featured_5 = document.getElementById("Featured_Saved_5");
        Watch_featured_5.addEventListener('click', () => save_to_watchlist_daily(data.Image_5, data.Desc_5, data.Price_5, "No description found...", "Featured_Saved_5"));
        const Watch_featured_6 = document.getElementById("Featured_Saved_6");
        Watch_featured_6.addEventListener('click', () => save_to_watchlist_daily(data.Image_6, data.Desc_6, data.Price_6, "No description found...", "Featured_Saved_6"));
        const Watch_featured_7 = document.getElementById("Featured_Saved_7");
        Watch_featured_7.addEventListener('click', () => save_to_watchlist_daily(data.Image_7, data.Desc_7, data.Price_7, "No description found...", "Featured_Saved_7"));
        const Watch_featured_8 = document.getElementById("Featured_Saved_8");
        Watch_featured_8.addEventListener('click', () => save_to_watchlist_daily(data.Image_8, data.Desc_8, data.Price_8, "No description found...", "Featured_Saved_8"));


        //Watchlist - Marvel
        const Watch_Marvel_1 = document.getElementById("Marvel_Univ_SaveButton1");
        Watch_Marvel_1.addEventListener('click', () => save_to_watchlist(data.Image_1_Marvel, data.Desc_1_Marvel, data.Price_1_Marvel, data.Marvel_Write[0], "Marvel_Univ_SaveButton1"));
        const Watch_Marvel_2 = document.getElementById("Marvel_Univ_SaveButton2");
        Watch_Marvel_2.addEventListener('click', () => save_to_watchlist(data.Image_2_Marvel, data.Desc_2_Marvel, data.Price_2_Marvel, data.Marvel_Write[1], "Marvel_Univ_SaveButton2"));
        const Watch_Marvel_3 = document.getElementById("Marvel_Univ_SaveButton3");
        Watch_Marvel_3.addEventListener('click', () => save_to_watchlist(data.Image_3_Marvel, data.Desc_3_Marvel, data.Price_3_Marvel, data.Marvel_Write[2], "Marvel_Univ_SaveButton3"));
        const Watch_Marvel_4 = document.getElementById("Marvel_Univ_SaveButton4");
        Watch_Marvel_4.addEventListener('click', () => save_to_watchlist(data.Image_4_Marvel, data.Desc_4_Marvel, data.Price_4_Marvel, data.Marvel_Write[3], "Marvel_Univ_SaveButton4"));
        const Watch_Marvel_5 = document.getElementById("Marvel_Univ_SaveButton5");
        Watch_Marvel_5.addEventListener('click', () => save_to_watchlist(data.Image_5_Marvel, data.Desc_5_Marvel, data.Price_5_Marvel, data.Marvel_Write[4], "Marvel_Univ_SaveButton5"));
        const Watch_Marvel_6 = document.getElementById("Marvel_Univ_SaveButton6");
        Watch_Marvel_6.addEventListener('click', () => save_to_watchlist(data.Image_6_Marvel, data.Desc_6_Marvel, data.Price_6_Marvel, data.Marvel_Write[5], "Marvel_Univ_SaveButton6"));
        const Watch_Marvel_7 = document.getElementById("Marvel_Univ_SaveButton7");
        Watch_Marvel_7.addEventListener('click', () => save_to_watchlist(data.Image_7_Marvel, data.Desc_7_Marvel, data.Price_7_Marvel, data.Marvel_Write[6], "Marvel_Univ_SaveButton7"));
        const Watch_Marvel_8 = document.getElementById("Marvel_Univ_SaveButton8");
        Watch_Marvel_8.addEventListener('click', () => save_to_watchlist(data.Image_8_Marvel, data.Desc_8_Marvel, data.Price_8_Marvel, data.Marvel_Write[7], "Marvel_Univ_SaveButton8"));


        //Watchlist - Batman
        const Watch_Batman_1 = document.getElementById("DC_Univ_SaveButton1");
        Watch_Batman_1.addEventListener('click', () => save_to_watchlist(data.Image_1_Batman, data.Desc_1_Batman, data.Price_1_Batman, data.Batman_Write[0], "DC_Univ_SaveButton1"));
        const Watch_Batman_2 = document.getElementById("DC_Univ_SaveButton2");
        Watch_Batman_2.addEventListener('click', () => save_to_watchlist(data.Image_2_Batman, data.Desc_2_Batman, data.Price_2_Batman, data.Batman_Write[1], "DC_Univ_SaveButton2"));
        const Watch_Batman_3 = document.getElementById("DC_Univ_SaveButton3");
        Watch_Batman_3.addEventListener('click', () => save_to_watchlist(data.Image_3_Batman, data.Desc_3_Batman, data.Price_3_Batman, data.Batman_Write[2], "DC_Univ_SaveButton3"));
        const Watch_Batman_4 = document.getElementById("DC_Univ_SaveButton4");
        Watch_Batman_4.addEventListener('click', () => save_to_watchlist(data.Image_4_Batman, data.Desc_4_Batman, data.Price_4_Batman, data.Batman_Write[3], "DC_Univ_SaveButton4"));
        const Watch_Batman_5 = document.getElementById("DC_Univ_SaveButton5");
        Watch_Batman_5.addEventListener('click', () => save_to_watchlist(data.Image_5_Batman, data.Desc_5_Batman, data.Price_5_Batman, data.Batman_Write[4], "DC_Univ_SaveButton5"));
        const Watch_Batman_6 = document.getElementById("DC_Univ_SaveButton6");
        Watch_Batman_6.addEventListener('click', () => save_to_watchlist(data.Image_6_Batman, data.Desc_6_Batman, data.Price_6_Batman, data.Batman_Write[5], "DC_Univ_SaveButton6"));
        const Watch_Batman_7 = document.getElementById("DC_Univ_SaveButton7");
        Watch_Batman_7.addEventListener('click', () => save_to_watchlist(data.Image_7_Batman, data.Desc_7_Batman, data.Price_7_Batman, data.Batman_Write[6], "DC_Univ_SaveButton7"));
        const Watch_Batman_8 = document.getElementById("DC_Univ_SaveButton8");
        Watch_Batman_8.addEventListener('click', () => save_to_watchlist(data.Image_8_Batman, data.Desc_8_Batman, data.Price_8_Batman, data.Batman_Write[7], "DC_Univ_SaveButton8"));


        //Watchlist - Spiderman
        const Watch_Spiderman_1 = document.getElementById("StarWars_Univ_SaveButton1");
        Watch_Spiderman_1.addEventListener('click', () => save_to_watchlist(data.Image_1_Spiderman, data.Desc_1_Spiderman, data.Price_1_Spiderman, data.Spiderman_Write[0], "StarWars_Univ_SaveButton1"));
        const Watch_Spiderman_2 = document.getElementById("StarWars_Univ_SaveButton2");
        Watch_Spiderman_2.addEventListener('click', () => save_to_watchlist(data.Image_2_Spiderman, data.Desc_2_Spiderman, data.Price_2_Spiderman, data.Spiderman_Write[1], "StarWars_Univ_SaveButton2"));
        const Watch_Spiderman_3 = document.getElementById("StarWars_Univ_SaveButton3");
        Watch_Spiderman_3.addEventListener('click', () => save_to_watchlist(data.Image_3_Spiderman, data.Desc_3_Spiderman, data.Price_3_Spiderman, data.Spiderman_Write[2], "StarWars_Univ_SaveButton3"));
        const Watch_Spiderman_4 = document.getElementById("StarWars_Univ_SaveButton4");
        Watch_Spiderman_4.addEventListener('click', () => save_to_watchlist(data.Image_4_Spiderman, data.Desc_4_Spiderman, data.Price_4_Spiderman, data.Spiderman_Write[3], "StarWars_Univ_SaveButton4"));
        const Watch_Spiderman_5 = document.getElementById("StarWars_Univ_SaveButton5");
        Watch_Spiderman_5.addEventListener('click', () => save_to_watchlist(data.Image_5_Spiderman, data.Desc_5_Spiderman, data.Price_5_Spiderman, data.Spiderman_Write[4], "StarWars_Univ_SaveButton5"));
        const Watch_Spiderman_6 = document.getElementById("StarWars_Univ_SaveButton6");
        Watch_Spiderman_6.addEventListener('click', () => save_to_watchlist(data.Image_6_Spiderman, data.Desc_6_Spiderman, data.Price_6_Spiderman, data.Spiderman_Write[5], "StarWars_Univ_SaveButton6"));
        const Watch_Spiderman_7 = document.getElementById("StarWars_Univ_SaveButton7");
        Watch_Spiderman_7.addEventListener('click', () => save_to_watchlist(data.Image_7_Spiderman, data.Desc_7_Spiderman, data.Price_7_Spiderman, data.Spiderman_Write[6], "StarWars_Univ_SaveButton7"));
        const Watch_Spiderman_8 = document.getElementById("StarWars_Univ_SaveButton8");
        Watch_Spiderman_8.addEventListener('click', () => save_to_watchlist(data.Image_8_Spiderman, data.Desc_8_Spiderman, data.Price_8_Spiderman, data.Spiderman_Write[7], "StarWars_Univ_SaveButton8"));




        //Watchlist - Superman
        const Watch_Superman_1 = document.getElementById("StarTrek_Univ_SaveButton1");
        Watch_Superman_1.addEventListener('click', () => save_to_watchlist(data.Image_1_Superman, data.Desc_1_Superman, data.Price_1_Superman, data.Superman_Write[0], "StarTrek_Univ_SaveButton1"));
        const Watch_Superman_2 = document.getElementById("StarTrek_Univ_SaveButton2");
        Watch_Superman_2.addEventListener('click', () => save_to_watchlist(data.Image_2_Superman, data.Desc_2_Superman, data.Price_2_Superman, data.Superman_Write[1], "StarTrek_Univ_SaveButton2"));
        const Watch_Superman_3 = document.getElementById("StarTrek_Univ_SaveButton3");
        Watch_Superman_3.addEventListener('click', () => save_to_watchlist(data.Image_3_Superman, data.Desc_3_Superman, data.Price_3_Superman, data.Superman_Write[2], "StarTrek_Univ_SaveButton3"));
        const Watch_Superman_4 = document.getElementById("StarTrek_Univ_SaveButton4");
        Watch_Superman_4.addEventListener('click', () => save_to_watchlist(data.Image_4_Superman, data.Desc_4_Superman, data.Price_4_Superman, data.Superman_Write[3], "StarTrek_Univ_SaveButton4"));
        const Watch_Superman_5 = document.getElementById("StarTrek_Univ_SaveButton5");
        Watch_Superman_5.addEventListener('click', () => save_to_watchlist(data.Image_5_Superman, data.Desc_5_Superman, data.Price_5_Superman, data.Superman_Write[4], "StarTrek_Univ_SaveButton5"));
        const Watch_Superman_6 = document.getElementById("StarTrek_Univ_SaveButton6");
        Watch_Superman_6.addEventListener('click', () => save_to_watchlist(data.Image_6_Superman, data.Desc_6_Superman, data.Price_6_Superman, data.Superman_Write[5], "StarTrek_Univ_SaveButton6"));
        const Watch_Superman_7 = document.getElementById("StarTrek_Univ_SaveButton7");
        Watch_Superman_7.addEventListener('click', () => save_to_watchlist(data.Image_7_Superman, data.Desc_7_Superman, data.Price_7_Superman, data.Superman_Write[6], "StarTrek_Univ_SaveButton7"));
        const Watch_Superman_8 = document.getElementById("StarTrek_Univ_SaveButton8");
        Watch_Superman_8.addEventListener('click', () => save_to_watchlist(data.Image_8_Superman, data.Desc_8_Superman, data.Price_8_Superman, data.Superman_Write[7], "StarTrek_Univ_SaveButton8"));


        //Watchlist - XMen
        const Watch_XMen_1 = document.getElementById("WalkingDead_Univ_SaveButton1");
        Watch_XMen_1.addEventListener('click', () => save_to_watchlist(data.Image_1_XMen, data.Desc_1_XMen, data.Price_1_XMen, data.XMen_Write[0], "WalkingDead_Univ_SaveButton1"));
        const Watch_XMen_2 = document.getElementById("WalkingDead_Univ_SaveButton2");
        Watch_XMen_2.addEventListener('click', () => save_to_watchlist(data.Image_2_XMen, data.Desc_2_XMen, data.Price_2_XMen, data.XMen_Write[1], "WalkingDead_Univ_SaveButton2"));
        const Watch_XMen_3 = document.getElementById("WalkingDead_Univ_SaveButton3");
        Watch_XMen_3.addEventListener('click', () => save_to_watchlist(data.Image_3_XMen, data.Desc_3_XMen, data.Price_3_XMen, data.XMen_Write[2], "WalkingDead_Univ_SaveButton3"));
        const Watch_XMen_4 = document.getElementById("WalkingDead_Univ_SaveButton4");
        Watch_XMen_4.addEventListener('click', () => save_to_watchlist(data.Image_4_XMen, data.Desc_4_XMen, data.Price_4_XMen, data.XMen_Write[3], "WalkingDead_Univ_SaveButton4"));
        const Watch_XMen_5 = document.getElementById("WalkingDead_Univ_SaveButton5");
        Watch_XMen_5.addEventListener('click', () => save_to_watchlist(data.Image_5_XMen, data.Desc_5_XMen, data.Price_5_XMen, data.XMen_Write[4], "WalkingDead_Univ_SaveButton5"));
        const Watch_XMen_6 = document.getElementById("WalkingDead_Univ_SaveButton6");
        Watch_XMen_6.addEventListener('click', () => save_to_watchlist(data.Image_6_XMen, data.Desc_6_XMen, data.Price_6_XMen, data.XMen_Write[5], "WalkingDead_Univ_SaveButton6"));
        const Watch_XMen_7 = document.getElementById("WalkingDead_Univ_SaveButton7");
        Watch_XMen_7.addEventListener('click', () => save_to_watchlist(data.Image_7_XMen, data.Desc_7_XMen, data.Price_7_XMen, data.XMen_Write[6], "WalkingDead_Univ_SaveButton7"));
        const Watch_XMen_8 = document.getElementById("WalkingDead_Univ_SaveButton8");
        Watch_XMen_8.addEventListener('click', () => save_to_watchlist(data.Image_8_XMen, data.Desc_8_XMen, data.Price_8_XMen, data.XMen_Write[7], "WalkingDead_Univ_SaveButton8"));




        Loader_WalkingDead.style.display = "none";
    } catch (error) {
        Loader_Featured.style.display = "none";
        Loader_Marvel.style.display = "none";
        Loader_DC.style.display = "none";
        Loader_StarWars.style.display = "none";
        Loader_StarTrek.style.display = "none";
        Loader_WalkingDead.style.display = "none";
        console.error('Error fetching data:', error);
    }
}






//Featured Today WebScrape-----------------------------------------------------------------------




//Featured Today View-----------------------------------------------------------------------



function view_full_comic(img_src, description, price, write_up, searchitem) {
    deleteCookie("View_Comic");
    deleteCookie("View_Comic_Watch");
    deleteCookie("Current_Search_related");
    const view_list = []
    img_src = img_src + "*";
    description = description + "*";
    price = price + "*";

    view_list.push(img_src + description + price + write_up);


    setJwtCookie("Current_Search_related", searchitem, 1);
    setJwtCookie("View_Comic", view_list, 1);
    window.location.href = "View.html";

}




//Featured Today View-----------------------------------------------------------------------









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


function save_to_watchlist_daily(img_src, description, price, write_up, watchlistid) {
    const check_login = getJwtCookie("Login_Token");

    const watchlistid_get = document.getElementById(watchlistid);

    if (check_login === null) { //checks if you're logged in
        Logout_prompt_Call();
    } else if (check_login !== null) {
        if (watchlistid_get.style.backgroundColor === "rgb(255, 66, 66)") {
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

                                    watchlistid_get.textContent = "ADDED TO WATCHLIST";
                                    watchlistid_get.style.backgroundColor = "rgb(255, 66, 66)";
                                    watchlistid_get.style.color = "rgb(255, 255, 255)";
                                    watchlistid_get.textContent = "Added to WatchList";
                                    watchlistid_get.style.paddingLeft = "50px";
                                    watchlistid_get.style.paddingRight = "50px";
                                    Saved_1_Call();
                                } else if (data.message === 0) {
                                    watchlistid_get.style.backgroundColor = "rgb(255, 66, 66)";
                                    watchlistid_get.style.color = "rgb(255, 255, 255)";
                                    watchlistid_get.textContent = "Added to WatchList";
                                    watchlistid_get.style.paddingLeft = "50px";
                                    watchlistid_get.style.paddingRight = "50px";
                                    watchlistid_get.textContent = "ADDED TO WATCHLIST";

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




function save_to_watchlist(img_src, description, price, write_up, watchlistid) {
    const check_login = getJwtCookie("Login_Token");

    const watchlistid_get = document.getElementById(watchlistid);

    if (check_login === null) { //checks if you're logged in
        Logout_prompt_Call();
    } else if (check_login !== null) {
        if (watchlistid_get.style.backgroundColor === "rgb(255, 66, 66)") {
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

                                    watchlistid_get.textContent = "ADDED TO WATCHLIST";
                                    watchlistid_get.style.backgroundColor = "rgb(255, 66, 66)";
                                    watchlistid_get.style.color = "rgb(255, 255, 255)";
                                    watchlistid_get.textContent = "Added to WatchList";
                                    watchlistid_get.style.paddingLeft = "30px";
                                    watchlistid_get.style.paddingRight = "30px";
                                    Saved_1_Call();
                                } else if (data.message === 0) {
                                    watchlistid_get.style.backgroundColor = "rgb(255, 66, 66)";
                                    watchlistid_get.style.color = "rgb(255, 255, 255)";
                                    watchlistid_get.textContent = "Added to WatchList";
                                    watchlistid_get.style.paddingLeft = "30px";
                                    watchlistid_get.style.paddingRight = "30px";
                                    watchlistid_get.textContent = "ADDED TO WATCHLIST";

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