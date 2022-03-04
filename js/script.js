let searchField = document.getElementById('search-field'),
    searchPlaceholder = searchField.getAttribute('placeholder');

function animatePlaceholder() {
    var i = 0;
    searchField.setAttribute('placeholder', "")

    let interval = setInterval(() => {
        let lastPlaceholder = searchField.getAttribute('placeholder');

        searchField.setAttribute("placeholder", lastPlaceholder+searchPlaceholder.charAt(i));
        i++;
        if(i == searchPlaceholder.length +1) {
            setTimeout(function() {
                clearInterval(interval);
                animatePlaceholder();
            }, 1000)
            
            
        }

    }, 150);
}
animatePlaceholder()


let divHeight = document.getElementById('header-content').clientHeight;
document.getElementById('header-content').style.paddingTop = 'calc((100vh - '+divHeight+'px - 80px)/2)';

window.addEventListener('resize', function() {
    
    let divHeight = document.getElementById('header-content').clientHeight;
    document.getElementById('header-content').style.paddingTop = 'calc((100vh - '+divHeight+'px - 80px)/2)';
})


let tableTd = document.querySelectorAll('table td, table th');



for(i = 0; i < tableTd.length; i++) {
    tableTd[i].innerText == "" ? tableTd[i].style.background = "#fafafa" : "";

}


var i = 0;
document.getElementById('navbar-toggler').addEventListener('click', function() {
    i++;
    document.getElementsByClassName('fa-bars-staggered')[0].classList.toggle('fa-xmark')
    
    if(i%2 == 0) {
        document.getElementById('navbar-nav').style.display = "none";
        document.getElementById('search-form').style.display = "none";

    } else {

        document.getElementById('navbar-nav').style.display = "block";
        document.getElementById('search-form').style.display = "block";

    }
})