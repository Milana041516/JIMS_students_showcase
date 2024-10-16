const bigDesktopImage = document.querySelector('.developers-desktop-picture');
const bigMobileImage = document.querySelector('.developers-mobile-picture');
const smallImages = document.querySelectorAll('.small-image');


function animateImage(bigImage, translateX = 150, translateY = 150) {
 
  bigImage.style.opacity = '0';
  bigImage.style.transition = 'opacity 0.5s ease';

 
  smallImages.forEach((img, index) => {
    img.style.transition = 'transform 0.8s ease, opacity 0.8s ease'; fade in

    setTimeout(() => {
      img.style.opacity = '1'; 

     
      switch (index) {
        case 0:
          img.style.transform = `scale(1) translate(-${translateX}%, -${translateY}%)`; 
          break;
        case 1:
          img.style.transform = `scale(1) translate(${translateX}%, -${translateY}%)`; 
          break;
        case 2:
          img.style.transform = `scale(1) translate(-${translateX}%, ${translateY}%)`; 
          break;
        case 3:
          img.style.transform = `scale(1) translate(${translateX}%, ${translateY}%)`;
          break;
      }
    }, index * 150); 
  });

  
  setTimeout(() => {
    
    smallImages.forEach((img) => {
      img.style.transform = 'scale(0) translate(0, 0)'; 
      img.style.opacity = '0';  
    });

    
    bigImage.style.opacity = '1';
  }, 7000); 
}


function handleAnimationForScreen() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1024) { // Desktop size
    bigDesktopImage.addEventListener('click', function() {
      animateImage(bigDesktopImage, 29, 29); 
    });
  } else if (screenWidth >= 720 && screenWidth < 1024) { // Tablet size
    bigDesktopImage.addEventListener('click', function() {
      animateImage(bigDesktopImage, 50, 50); 
    });
  } else { // Mobile size
    bigMobileImage.addEventListener('click', function() {
      animateImage(bigMobileImage, 30, 30); 
    });
  }
}


handleAnimationForScreen();


window.addEventListener('resize', handleAnimationForScreen);
