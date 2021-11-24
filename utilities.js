date = new Date("Mar 25 2015").toDateString();

window.onload = (e) => {
  document.getElementById("created-date").innerHTML = date;
};

function showMenu() {
  navLinks = document.getElementById("navLinks");

  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks = document.getElementById("navLinks");

  navLinks.style.right = "-500px";
}

function showContent(ai, ac) {
  articleIntro = document.getElementById(ai);
  articleIntro.hidden = true;

  articleContent = document.getElementById(ac);
  articleContent.hidden = false;
}

function showComments(e, id) {
  showCom = document.getElementById(id);
  showCom.hidden = !showCom.hidden;
  e.text = e.text === "Hide Comments" ? "Show Comments" : "Hide Comments";
}
