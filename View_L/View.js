
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
        Top_Navbar.style.top='-200px';
        Main_Navbar.style.top =  '-120px';
        Bottom_Navbar.style.top =  '-50px';
    } 
    else if(currentScrollY < prevScrollY){
        if (scrollTop > solidThreshold) {
            Top_Navbar.style.top='-50px';
            Main_Navbar.style.top =  '0px';
            Bottom_Navbar.style.top =  '92px';
        }else if(scrollTop <= solidThreshold){
            Account.style.display = "flex";
            WatchList.style.display = "flex";
            Top_Navbar.style.top='0px';
            Main_Navbar.style.top =  '44px';
            Bottom_Navbar.style.top =  '140px';
        }
    }
    prevScrollY = currentScrollY; 
});


//Navigation Bar Scroll Effect---------------------------------------------------------





function GoToSignInPageCreateAcc(){
    document.cookie = "data=CreateAcc";
    window.location.href = "Sign.html";
}

function GoToSignInPage(){
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
