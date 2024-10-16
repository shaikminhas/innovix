let menu = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".nav-links");

menu.onclick = () => {
    menu.classList.toggle("move");
    navLinks.classList.toggle("show");  // Toggle menu visibility
};
// swpier
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 50000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  document.querySelector('.submit-btn').addEventListener('click', () => {
    alert('Request sent!');
});
// Get the upload icon and input field  
const uploadIcon = document.querySelector('.upload-icon');  
const inputFile = document.querySelector('.input-section input[type="file"]');  
  
// Add an event listener to the upload icon  
uploadIcon.addEventListener('click', () => {  
  // Trigger the file input field to open  
  inputFile.click();  
});  
  
// Add an event listener to the file input field  
inputFile.addEventListener('change', (e) => {  
  // Get the selected file  
  const file = e.target.files[0];  
  
  // Check if a file was selected  
  if (file) {  
   // Create a new FormData object  
   const formData = new FormData();  
  
   // Add the file to the FormData object  
   formData.append('file', file);  
  
   // Send the FormData object to the server using AJAX  
   fetch('/upload', {  
    method: 'POST',  
    body: formData,  
   })  
    .then((response) => response.json())  
    .then((data) => {  
      // Handle the response from the server  
      console.log(data);  
    })  
    .catch((error) => {  
      // Handle any errors that occur during the upload process  
      console.error(error);  
    });  
  }  
});
