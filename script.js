const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-sec");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navlist[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-sec");
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this)
        if(window.innerWidth < 1200)
        {
            asidesectogbtn()        
        }
    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("aec");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("aec")
}
function updatenav(element) {
    for(let i=0; i<totalNavList; i++)
    {
        navlist[i].querySelector("a").classList.remove("active");
        const target =  element.getAttribute("href").split("#")[1];
        if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updatenav(this);
})
const navtogglebtn = document.querySelector(".nav-toggle"),
aside = document.querySelector(".aside-content");
navtogglebtn.addEventListener("click", ()=>
 {
asidesectogbtn();
})
function asidesectogbtn() 
{
    aside.classList.toggle("open");
    navtogglebtn.classList.toggle("open")
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}
const social = document.querySelector