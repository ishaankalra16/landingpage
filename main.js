function toggleDropdown(){
    let navbartoggle= document.getElementById("navbar-toggle");
    if(navbartoggle.className === 'topnav')
        {navbartoggle.className += ' responsive';}
    else
        {navbartoggle.className = 'topnav';}
}