
const menu2 = document.querySelector(".menu2");
const menu2Main = menu2.querySelector(".menu2-main");
const goBack = menu2.querySelector(".go-back");
const menu2Trigger = document.querySelector(".mobile-menu2-trigger"); 
const closeMenu2 = menu2.querySelector(".mobile-menu2-close");
let subMenu2;
menu2Main.addEventListener("click", (e) => {
  if (!menu2.classList.contains("activo")) {
    return;
  }
  if (e.target.closest(".menu2-item-has-children")) {
    const hasChildren = e.target.closest(".menu2-item-has-children");
    showSubMenu2(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu2();
})
menu2Trigger.addEventListener("click", () => {
  toggleMenu2();
})

closeMenu2.addEventListener("click", () => {
  toggleMenu2();
})
document.querySelector(".menu2-overlay").addEventListener("click", () => {
  toggleMenu2();
})
function toggleMenu2() {
  alert("certo")
  menu2.classList.toggle("activo");
  document.querySelector(".menu2-overlay").classList.toggle("activo");
}
function showSubMenu2(hasChildren) {
  subMenu2 = hasChildren.querySelector(".sub-menu2");
  subMenu2.classList.add("activo");
  subMenu2.style.animation = "slideLeft 0.5s ease forwards";
  const menu2Title = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu2.querySelector(".current-menu2-title").innerHTML = menu2Title;
  menu2.querySelector(".mobile-menu2-head").classList.add("activo");
}

function hideSubMenu2() {
  subMenu2.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu2.classList.remove("activo");
  }, 300);
  menu2.querySelector(".current-menu2-title").innerHTML = "";
  menu2.querySelector(".mobile-menu2-head").classList.remove("activo");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu2.classList.contains("activo")) {
      toggleMenu2();
    }

  }
}