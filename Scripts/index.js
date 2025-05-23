function getExplore()
{
 //I am Getting the element with id "explore"
 let newExplore = document.getElementById("explore");

 let explore = [];

 explore[0] = "Explore my portfolio! You will find amazing games that I have been a collaborator on along with some of my own projects and artwork.";

 explore[1] = "Explore my Blogs!! I talk about many things relating to websites and the web.";

 explore[2] = "Find my inspiration page!!! This is where all my ideas come from.";

 explore[3] = "Do you like galleries? Have a look at my gallery page and see all my planning and sketches.";

 explore[4] = "Some reaseach!! Look at my essay page and the reaearch that i have enaged with for my assignment essays.";

 explore[5] = "Design documentation time!! See my design page for all my thoughts and ideas that went into building this website.";

 let i = Math.floor(Math.random() * explore.length);

 newExplore.innerHTML = explore[i];

}