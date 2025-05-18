document.addEventListener("DOMContentLoaded", function () 
{
  const itchLinks = document.querySelectorAll('a[href*="itch.io"]');

  itchLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 
      alert("You are being redirected to an external site (Itch.io).");
      window.location.href = link.href; 
    });
  });
});

