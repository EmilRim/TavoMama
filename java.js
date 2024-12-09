function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('popupOverlay');
    popup.classList.toggle('active');
    overlay.classList.toggle('active');
    popup.classList.toggle()
}

function togglePopup() {
    const popup = document.getElementById("popup");
    const popupOverlay = document.getElementById("popupOverlay");
    const blurElement = document.getElementById("blur");
  
    const isActive = popup.classList.contains("active");
  
    // Toggle popup visibility
    popup.classList.toggle("active", !isActive);
    popupOverlay.classList.toggle("active", !isActive);
  
    // Toggle blur effect
    blurElement.classList.toggle("blur", !isActive);
  }
