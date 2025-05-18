document.addEventListener("DOMContentLoaded", function () 
{
  const itchLinks = document.querySelectorAll('a[href*="itch.io"]');

    itchLinks.forEach(link => 
    {
      link.addEventListener("click", function (e) 
       {
         e.preventDefault(); 

         const confirmed = confirm("You are about to leave this site and go to itch.io. Continue?");
      
         if (confirmed) 
         {
          window.open(link.href, "_blank");
         } 
       });
   });
});
