document.addEventListener("DOMContentLoaded", () => 
  {
    const images = document.querySelectorAll("figure img");
    let currentIndex = 0;
    let overlay;

    function showImage(index) 
    {
     if (!images[index]) return;

     overlay.innerHTML = ''; 

     const enlargedImg = document.createElement("img");
     enlargedImg.src = images[index].src;
     enlargedImg.alt = images[index].alt;
     enlargedImg.classList.add("enlarged-img");

     const prevBtn = document.createElement("div");
     prevBtn.classList.add("img-prev");

    const nextBtn = document.createElement("div");
    nextBtn.classList.add("img-next");

     overlay.appendChild(prevBtn);
    overlay.appendChild(enlargedImg);
     overlay.appendChild(nextBtn);

     prevBtn.addEventListener("click", (e) => 
      {
       e.stopPropagation();
       currentIndex = (currentIndex - 1 + images.length) % images.length;
       showImage(currentIndex);
      });

     nextBtn.addEventListener("click", (e) => 
      {
       e.stopPropagation();
       currentIndex = (currentIndex + 1) % images.length;
       showImage(currentIndex);
      });
    }

    images.forEach((img, index) => 
      {
       img.addEventListener("click", () => 
        {
         currentIndex = index;
         overlay = document.createElement("div");
         overlay.classList.add("img-overlay");
         document.body.appendChild(overlay);

         showImage(currentIndex);

         overlay.addEventListener("click", () => 
          {
           document.body.removeChild(overlay);
          });

         document.addEventListener("keydown", handleKeyboard);
        });
      });

  function handleKeyboard(e) 
  {
    if (!overlay) return;

    if (e.key === "ArrowRight") 
      {
       currentIndex = (currentIndex + 1) % images.length;
       showImage(currentIndex);
      } 
      else if (e.key === "ArrowLeft") 
      {
       currentIndex = (currentIndex - 1 + images.length) % images.length;
       showImage(currentIndex);
      } 
      else if (e.key === "Escape") 
      {
        if (overlay && document.body.contains(overlay)) 
        {
         document.body.removeChild(overlay);
         document.removeEventListener("keydown", handleKeyboard);
        }
      }
  }
});