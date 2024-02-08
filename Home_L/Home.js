
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



fetchData();


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
//Notif--------------------------------------------------------------------------



//Cookies Container---------------------------------------------------------

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


//NewsLetter button-----------------------------------------------------------------------





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
        Image2.src = String(data.Image_2);
        Image3.src = String(data.Image_3);
        Image4.src = String(data.Image_4);
        Image5.src = String(data.Image_5);
        Image6.src = String(data.Image_6);
        Image7.src = String(data.Image_7);
        Image8.src = String(data.Image_8);

        Desc1.textContent = data.Desc_1;
        Desc2.textContent = data.Desc_2;
        Desc3.textContent = data.Desc_3;
        Desc4.textContent = data.Desc_4;
        Desc5.textContent = data.Desc_5;
        Desc6.textContent = data.Desc_6;
        Desc7.textContent = data.Desc_7;
        Desc8.textContent = data.Desc_8;

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
        Image_Marvel.src = String(data.Image_1_Marvel);
        Image2_Marvel.src = String(data.Image_2_Marvel);
        Image3_Marvel.src = String(data.Image_3_Marvel);
        Image4_Marvel.src = String(data.Image_4_Marvel);
        Image5_Marvel.src = String(data.Image_5_Marvel);
        Image6_Marvel.src = String(data.Image_6_Marvel);
        Image7_Marvel.src = String(data.Image_7_Marvel);
        Image8_Marvel.src = String(data.Image_8_Marvel);

        Desc1_Marvel.textContent = data.Desc_1_Marvel;
        Desc2_Marvel.textContent = data.Desc_2_Marvel;
        Desc3_Marvel.textContent = data.Desc_3_Marvel;
        Desc4_Marvel.textContent = data.Desc_4_Marvel;
        Desc5_Marvel.textContent = data.Desc_5_Marvel;
        Desc6_Marvel.textContent = data.Desc_6_Marvel;
        Desc7_Marvel.textContent = data.Desc_7_Marvel;
        Desc8_Marvel.textContent = data.Desc_8_Marvel;

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
        Image_Batman.src = String(data.Image_1_Batman);
        Image2_Batman.src = String(data.Image_2_Batman);
        Image3_Batman.src = String(data.Image_3_Batman);
        Image4_Batman.src = String(data.Image_4_Batman);
        Image5_Batman.src = String(data.Image_5_Batman);
        Image6_Batman.src = String(data.Image_6_Batman);
        Image7_Batman.src = String(data.Image_7_Batman);
        Image8_Batman.src = String(data.Image_8_Batman);

        Desc1_Batman.textContent = data.Desc_1_Batman;
        Desc2_Batman.textContent = data.Desc_2_Batman;
        Desc3_Batman.textContent = data.Desc_3_Batman;
        Desc4_Batman.textContent = data.Desc_4_Batman;
        Desc5_Batman.textContent = data.Desc_5_Batman;
        Desc6_Batman.textContent = data.Desc_6_Batman;
        Desc7_Batman.textContent = data.Desc_7_Batman;
        Desc8_Batman.textContent = data.Desc_8_Batman;

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
        Image_Spiderman.src = String(data.Image_1_Spiderman);
        Image2_Spiderman.src = String(data.Image_2_Spiderman);
        Image3_Spiderman.src = String(data.Image_3_Spiderman);
        Image4_Spiderman.src = String(data.Image_4_Spiderman);
        Image5_Spiderman.src = String(data.Image_5_Spiderman);
        Image6_Spiderman.src = String(data.Image_6_Spiderman);
        Image7_Spiderman.src = String(data.Image_7_Spiderman);
        Image8_Spiderman.src = String(data.Image_8_Spiderman);

        Desc1_Spiderman.textContent = data.Desc_1_Spiderman;
        Desc2_Spiderman.textContent = data.Desc_2_Spiderman;
        Desc3_Spiderman.textContent = data.Desc_3_Spiderman;
        Desc4_Spiderman.textContent = data.Desc_4_Spiderman;
        Desc5_Spiderman.textContent = data.Desc_5_Spiderman;
        Desc6_Spiderman.textContent = data.Desc_6_Spiderman;
        Desc7_Spiderman.textContent = data.Desc_7_Spiderman;
        Desc8_Spiderman.textContent = data.Desc_8_Spiderman;

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
        Image_Superman.src = String(data.Image_1_Superman);
        Image2_Superman.src = String(data.Image_2_Superman);
        Image3_Superman.src = String(data.Image_3_Superman);
        Image4_Superman.src = String(data.Image_4_Superman);
        Image5_Superman.src = String(data.Image_5_Superman);
        Image6_Superman.src = String(data.Image_6_Superman);
        Image7_Superman.src = String(data.Image_7_Superman);
        Image8_Superman.src = String(data.Image_8_Superman);

        Desc1_Superman.textContent = data.Desc_1_Superman;
        Desc2_Superman.textContent = data.Desc_2_Superman;
        Desc3_Superman.textContent = data.Desc_3_Superman;
        Desc4_Superman.textContent = data.Desc_4_Superman;
        Desc5_Superman.textContent = data.Desc_5_Superman;
        Desc6_Superman.textContent = data.Desc_6_Superman;
        Desc7_Superman.textContent = data.Desc_7_Superman;
        Desc8_Superman.textContent = data.Desc_8_Superman;

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
        Image_XMen.src = String(data.Image_1_XMen);
        Image2_XMen.src = String(data.Image_2_XMen);
        Image3_XMen.src = String(data.Image_3_XMen);
        Image4_XMen.src = String(data.Image_4_XMen);
        Image5_XMen.src = String(data.Image_5_XMen);
        Image6_XMen.src = String(data.Image_6_XMen);
        Image7_XMen.src = String(data.Image_7_XMen);
        Image8_XMen.src = String(data.Image_8_XMen);

        Desc1_XMen.textContent = data.Desc_1_XMen;
        Desc2_XMen.textContent = data.Desc_2_XMen;
        Desc3_XMen.textContent = data.Desc_3_XMen;
        Desc4_XMen.textContent = data.Desc_4_XMen;
        Desc5_XMen.textContent = data.Desc_5_XMen;
        Desc6_XMen.textContent = data.Desc_6_XMen;
        Desc7_XMen.textContent = data.Desc_7_XMen;
        Desc8_XMen.textContent = data.Desc_8_XMen;

        Price1_XMen.textContent = data.Price_1_XMen;
        Price2_XMen.textContent = data.Price_2_XMen;
        Price3_XMen.textContent = data.Price_3_XMen;
        Price4_XMen.textContent = data.Price_4_XMen;
        Price5_XMen.textContent = data.Price_5_XMen;
        Price6_XMen.textContent = data.Price_6_XMen;
        Price7_XMen.textContent = data.Price_7_XMen;
        Price8_XMen.textContent = data.Price_8_XMen;
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








