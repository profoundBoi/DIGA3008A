window.onload = function () 
{
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () 
  {
     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) 
    {
        backToTopBtn.classList.add("show");
        } 
         else 
        {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () 
  {
    window.scrollTo(
    {
      top: 0,
      behavior: "smooth"
    });
  });
};