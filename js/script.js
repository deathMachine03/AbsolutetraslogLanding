$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


/// плавная прокрутка пли клике
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if  (menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
            if(iconMenu.classList.contains('_active')){
                iconMenu.classList.remove('_active');
                nav.classList.remove('_active');
                document.body.classList.remove('_lock');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();            
        }
    }
}

/// плавная прокрутка пли клике
const newmenuLinks = document.querySelectorAll('.newmenu_link[data-goto]');
if (newmenuLinks.length > 0) {
    newmenuLinks.forEach(newmenuLink => {
        newmenuLink.addEventListener("click", onNewMenuLinkClick)
    });

    function onNewMenuLinkClick(e){
        const newmenuLink = e.target;
        if(newmenuLink.dataset.goto && document.querySelector(newmenuLink.dataset.goto)){
            const gotoBlock = document.querySelector(newmenuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

////меню бургер
const iconMenu = document.querySelector('.menu_icon');
const nav = document.querySelector('nav');
if (iconMenu){
    iconMenu.addEventListener("click",function(e){
        iconMenu.classList.toggle('_active');
        nav.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}

const menutap = document.querySelector('')


/////clickinput
var inputclick = document.getElementsByClassName('request-content');
inputclick[0].onclick = function() {
    inputclick[0].classList.toggle("_inputactive");
}
inputclick[1].onclick = function() {
    inputclick[0].classList.remove("_inputactive");
}
