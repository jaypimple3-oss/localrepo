lucide.createIcons();
const headlines =['Frontend','Backend','UI/UX Designer','Freelancer','Defence Aspirant','Web Developer','Intern','Software Engineer'];

function changeHeadline() {
    let randomIndex = Math.floor(Math.random() * headlines.length);
    document.getElementById("headlines").textContent = headlines[randomIndex];
}
changeHeadline(); // page load par
const seconds = 5
setInterval(changeHeadline, seconds*1000); 
function toggleMenu(){

    if (!menu) return;

    const style = window.getComputedStyle(menu);

    if (style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

const typed = new Typed("#headlines", {
    strings: [
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
        "Freelancer",
        "Defence Aspirant",
        "Software Engineer"
    ],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});