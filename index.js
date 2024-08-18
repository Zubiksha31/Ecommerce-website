const humburger= document.querySelector(".humburger");
const navList = document.querySelector('.nav-list');

if(humburger){
    humburger.addEventListener("click", () =>{
        navList.classList.toggle("open");
    })
}



