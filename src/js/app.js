const body = document.querySelector("body"),
  menuItems = body.querySelectorAll(".menu_item"),
  popupForm = body.querySelector(".popup"),
  buttonActiveForm = body.querySelector(".button_active_form"),
  buttonCloseForm = body.querySelector(".button_close_form"),
  windowsPathname = window.location.pathname


buttonActiveForm.addEventListener("click", (e) => {
  e.preventDefault();
  popupForm.classList.add("active")
})


buttonCloseForm.addEventListener("click", (e) => {
  e.preventDefault();
  popupForm.classList.remove("active")
})

menuItems.forEach(menuItem => {
  const link = menuItem.children[0];
  const menuItemPathname = new URL(link.href).pathname;

  if (windowsPathname === menuItemPathname || (windowsPathname === '/index.php' && menuItemPathname === '/')) {
    menuItem.classList.add("active")
  }
});