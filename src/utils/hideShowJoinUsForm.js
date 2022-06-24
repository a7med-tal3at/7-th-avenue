export function hideShowJoinUsForm(e) {
  e.preventDefault();
  let btnShow = document.querySelector(".join-us-form");
  btnShow.classList.toggle("d-none");

  if (btnShow.classList.contains("d-none")) {
    document.body.style.overflowY = "scroll ";
  } else {
    document.body.style.overflowY = "hidden ";
  }
}
