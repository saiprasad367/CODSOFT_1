

var tabl= document.getElementsByClassName("tab-l");
var tabc= document.getElementsByClassName("tab-c");
function opentab(tabname){
    for(tablink of tabl){
        tablink.classList.remove("active");

    }
    for(tabcontent of tabc){
        tabcontent.classList.remove("active-t");
        
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-t");

}



var sidemenu= document.getElementById("sidemenu");
function openmenu(){
sidemenu.style.right= "0";
}

function closemenu(){
sidemenu.style.right= "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbxgUdFvptk72vTYmrS0Kcta5rOHeuMrzgGwsrAZfNgHcHy3bHzOjYg_KNl93whMGQo/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })

    .catch(error => console.error('Error!', error.message))
})
