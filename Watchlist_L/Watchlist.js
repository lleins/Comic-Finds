
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



//Go To AccountPage/Cookie------------------------------------------------------



function GoToAccountPage() {
    window.location.href = "Account.html";
}

function GoToContactPage() {
    window.location.href = "HelpContact.html";
}


//Go To AccountPage/Cookie------------------------------------------------------



//Function for Watchlist Button------------------------------------------------------


function WatchList_Button(Button, Image) {

    const Img = document.getElementById(Image);
    const Img_Style = Img.getAttribute("src");
    const WatchList_Button = document.getElementById(Button);

    if (Img_Style == "") {
        WatchList_Button.textContent = "";
        WatchList_Button.textContent = "N/A";
        WatchList_Button.style.paddingLeft = "105px";
        WatchList_Button.style.paddingRight = "105px";
        WatchList_Button.style.color = "rgb(130, 130, 130)";
        WatchList_Button.style.border = "2px solid rgb(130, 130, 130)";

        WatchList_Button.addEventListener("mouseenter", () => {

            WatchList_Button.style.color = "rgb(130, 130, 130)";
            WatchList_Button.style.border = "2px solid rgb(130, 130, 130)";
            WatchList_Button.style.backgroundColor = "rgb(255, 255, 255)";
        });


        WatchList_Button.addEventListener("mouseleave", () => {

            WatchList_Button.style.color = "rgb(130, 130, 130)";
            WatchList_Button.style.border = "2px solid rgb(130, 130, 130)";
            WatchList_Button.style.backgroundColor = "rgb(255, 255, 255)";
        });

    } else {
        WatchList_Button.textContent = "Remove";
    }

}


WatchList_Button("Watchlist_Button_1", "FeaturedImg1");
WatchList_Button("Watchlist_Button_2", "FeaturedImg2");
WatchList_Button("Watchlist_Button_3", "FeaturedImg3");
WatchList_Button("Watchlist_Button_4", "FeaturedImg4");
WatchList_Button("Watchlist_Button_5", "FeaturedImg5");
WatchList_Button("Watchlist_Button_6", "FeaturedImg6");
WatchList_Button("Watchlist_Button_7", "FeaturedImg7");
WatchList_Button("Watchlist_Button_8", "FeaturedImg8");
WatchList_Button("Watchlist_Button_9", "FeaturedImg9");
WatchList_Button("Watchlist_Button_10", "FeaturedImg10");
WatchList_Button("Watchlist_Button_11", "FeaturedImg11");
WatchList_Button("Watchlist_Button_12", "FeaturedImg12");
WatchList_Button("Watchlist_Button_13", "FeaturedImg13");
WatchList_Button("Watchlist_Button_14", "FeaturedImg14");
WatchList_Button("Watchlist_Button_15", "FeaturedImg15");
WatchList_Button("Watchlist_Button_16", "FeaturedImg16");
WatchList_Button("Watchlist_Button_17", "FeaturedImg17");
WatchList_Button("Watchlist_Button_18", "FeaturedImg18");
WatchList_Button("Watchlist_Button_19", "FeaturedImg19");
WatchList_Button("Watchlist_Button_20", "FeaturedImg20");
WatchList_Button("Watchlist_Button_21", "FeaturedImg21");
WatchList_Button("Watchlist_Button_22", "FeaturedImg22");
WatchList_Button("Watchlist_Button_23", "FeaturedImg23");
WatchList_Button("Watchlist_Button_24", "FeaturedImg24");
WatchList_Button("Watchlist_Button_25", "FeaturedImg25");
WatchList_Button("Watchlist_Button_26", "FeaturedImg26");
WatchList_Button("Watchlist_Button_27", "FeaturedImg27");
WatchList_Button("Watchlist_Button_28", "FeaturedImg28");
WatchList_Button("Watchlist_Button_29", "FeaturedImg29");
WatchList_Button("Watchlist_Button_30", "FeaturedImg30");
//Function for Watchlist Button------------------------------------------------------





//Function for Deleting Watchlist item------------------------------------------------------

function Remove_Watchlist_Item(src, univ, Iss, Price, Button) {
    const Img_Item = document.getElementById(src);
    const Univ_Item = document.getElementById(univ);
    const Issue_Item = document.getElementById(Iss);
    const Price_Item = document.getElementById(Price);
    const Button_Item = document.getElementById(Button);

    Img_Item.textContent = "";
    Univ_Item.textContent = "";
    Issue_Item.textContent = "";
    Price_Item.textContent = "";
    Button_Item.textContent = "";
    Button_Item.textContent = "N/A";
    Button_Item.style.paddingLeft = "105px";
    Button_Item.style.paddingRight = "105px";
    Button_Item.style.color = "rgb(130, 130, 130)";
    Button_Item.style.border = "2px solid rgb(130, 130, 130)";

    Button_Item.addEventListener("mouseenter", () => {

        Button_Item.style.color = "rgb(130, 130, 130)";
        Button_Item.style.border = "2px solid rgb(130, 130, 130)";
        Button_Item.style.backgroundColor = "rgb(255, 255, 255)";
    });


    Button_Item.addEventListener("mouseleave", () => {

        Button_Item.style.color = "rgb(130, 130, 130)";
        Button_Item.style.border = "2px solid rgb(130, 130, 130)";
        Button_Item.style.backgroundColor = "rgb(255, 255, 255)";
    });
}


//Function for Deleting Watchlist item------------------------------------------------------

onclick = 'Remove_Watchlist_Item("FeaturedImg8", "FeatUniv8", "FeatIssue8", "FeatPrice8", "Watchlist_Button_8")'
onclick = 'Remove_Watchlist_Item("FeaturedImg9", "FeatUniv9", "FeatIssue9", "FeatPrice9", "Watchlist_Button_9")'
onclick = 'Remove_Watchlist_Item("FeaturedImg10", "FeatUniv10", "FeatIssue10", "FeatPrice10", "Watchlist_Button_10")'
onclick = 'Remove_Watchlist_Item("FeaturedImg11", "FeatUniv11", "FeatIssue11", "FeatPrice11", "Watchlist_Button_11")'
onclick = 'Remove_Watchlist_Item("FeaturedImg12", "FeatUniv12", "FeatIssue12", "FeatPrice12", "Watchlist_Button_12")'
onclick = 'Remove_Watchlist_Item("FeaturedImg13", "FeatUniv13", "FeatIssue13", "FeatPrice13", "Watchlist_Button_13")'
onclick = 'Remove_Watchlist_Item("FeaturedImg14", "FeatUniv14", "FeatIssue14", "FeatPrice14", "Watchlist_Button_14")'
onclick = 'Remove_Watchlist_Item("FeaturedImg15", "FeatUniv15", "FeatIssue15", "FeatPrice15", "Watchlist_Button_15")'
onclick = 'Remove_Watchlist_Item("FeaturedImg16", "FeatUniv16", "FeatIssue16", "FeatPrice16", "Watchlist_Button_16")'
onclick = 'Remove_Watchlist_Item("FeaturedImg17", "FeatUniv17", "FeatIssue17", "FeatPrice17", "Watchlist_Button_17")'
onclick = 'Remove_Watchlist_Item("FeaturedImg18", "FeatUniv18", "FeatIssue18", "FeatPrice18", "Watchlist_Button_18")'
onclick = 'Remove_Watchlist_Item("FeaturedImg19", "FeatUniv19", "FeatIssue19", "FeatPrice19", "Watchlist_Button_19")'
onclick = 'Remove_Watchlist_Item("FeaturedImg20", "FeatUniv20", "FeatIssue20", "FeatPrice20", "Watchlist_Button_20")'
onclick = 'Remove_Watchlist_Item("FeaturedImg21", "FeatUniv21", "FeatIssue21", "FeatPrice21", "Watchlist_Button_21")'
onclick = 'Remove_Watchlist_Item("FeaturedImg22", "FeatUniv22", "FeatIssue22", "FeatPrice22", "Watchlist_Button_22")'
onclick = 'Remove_Watchlist_Item("FeaturedImg23", "FeatUniv23", "FeatIssue23", "FeatPrice23", "Watchlist_Button_23")'
onclick = 'Remove_Watchlist_Item("FeaturedImg24", "FeatUniv24", "FeatIssue24", "FeatPrice24", "Watchlist_Button_24")'
onclick = 'Remove_Watchlist_Item("FeaturedImg25", "FeatUniv25", "FeatIssue25", "FeatPrice25", "Watchlist_Button_25")'
onclick = 'Remove_Watchlist_Item("FeaturedImg26", "FeatUniv26", "FeatIssue26", "FeatPrice26", "Watchlist_Button_26")'
onclick = 'Remove_Watchlist_Item("FeaturedImg27", "FeatUniv27", "FeatIssue27", "FeatPrice27", "Watchlist_Button_27")'
onclick = 'Remove_Watchlist_Item("FeaturedImg28", "FeatUniv28", "FeatIssue28", "FeatPrice28", "Watchlist_Button_28")'
onclick = 'Remove_Watchlist_Item("FeaturedImg29", "FeatUniv29", "FeatIssue29", "FeatPrice29", "Watchlist_Button_29")'
onclick = 'Remove_Watchlist_Item("FeaturedImg30", "FeatUniv30", "FeatIssue30", "FeatPrice30", "Watchlist_Button_30")'





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

Call_Remove_0();