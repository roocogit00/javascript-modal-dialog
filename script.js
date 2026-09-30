const showBtn = document.querySelector(".dialog-btn");
const dialogBox = document.querySelector(".dialog-container");
const closeDialogBtns = document.querySelectorAll(".closeDialog");
const outSideClicked = document.querySelector("#outSideClick");
const escCloseClick = document.querySelector("#escCloseClick");
const iconCliclk = document.querySelector("#iconClick");
const backdropClick = document.querySelector("#backdropClick");
const closeIconBtn = document.querySelector("#closeIcon");


function closeDialog() {
    dialogBox.close();
    console.log('fn');
}
// opens Dialog press show dialog button.
showBtn.addEventListener("click", () => {
 dialogBox.showModal();
 console.log("dialog Open: Success");
});

// closes dialog press (X) and (close) buttons in modal.
closeDialogBtns.forEach((allButton) => {
 allButton.addEventListener("click", () => {
  closeDialog()
  console.log("dialog closed: sucess");
 });
});

// closes dialog when clicked on modal or outside the box.
dialogBox.addEventListener("click", (e) => {
 if (e.target === dialogBox) {
  if (outSideClicked.checked) {
   closeDialog()
   console.log("outside clicke and closed");
  }
 }
});
// prevents the ESC double when not checked and closes when checked.
dialogBox.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
  if (!escCloseClick.checked) {
     e.preventDefault()
     console.log("prevented close");
 }
    }
});

iconCliclk.addEventListener('change', () => {
    if(!iconCliclk.checked) {
        closeIconBtn.hidden = true
        console.log('icon hide');
    } else {
        closeIconBtn.hidden = false
        console.log('icon show');
    }
})

backdropClick.addEventListener('change', () => {
    if (!backdropClick.checked) {
        dialogBox.classList.add('no-backdrop')
         console.log('Backdrop removed');
    }
    else {
        dialogBox.classList.remove('no-backdrop')
        console.log('Backdrop restored');
    }
})
    
