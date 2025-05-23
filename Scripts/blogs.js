document.addEventListener("DOMContentLoaded", function () 
{
    const totalPages = 10;
    const paginationContainer = document.getElementById("pagination");
    const blogContainers = document.querySelectorAll(".blog-weeks");

    //This is where I am tracking the current blog number that the user is on from the url.
    const match = window.location.pathname.match(/Blog(\d+)\.html/i);
    const currentPage = match ? parseInt(match[1]) : 1;

    function createPaginationNav(current) 
    {
        let html = "";

        if (current > 1) 
        {
            html += `<a href="blog${current - 1}.html" class="page-link">Previous</a> `;
        } 
        else 
        {
            html += `<span class="disabled">Previous</span> `;
           
        }

        for (let i = 1; i <= totalPages; i++) 
        {
            if (i === current) 
            {
                html += `<strong>${i}</strong> `;
            } 
            else 
            {
                html += `<a href="blog${i}.html" class="page-link">${i}</a> `;
            }
        }

        if (current < totalPages) 
        {
            html += `<a href="blog${current + 1}.html" class="page-link">Next</a>`;
        } 
        else 
        {
            html += `<span class="disabled">Next</span>`;
        }

        return html;
    }

    if (paginationContainer) 
    {
        paginationContainer.innerHTML = createPaginationNav(currentPage);
    }

    blogContainers.forEach(container => 
    {
        const navHTML = `
            <div class="inline-nav">
                ${currentPage > 1 ? `<a href="blog${currentPage - 1}.html" class="page-link">← Previous</a>` : ""}
                ${currentPage < totalPages ? `<a href="blog${currentPage + 1}.html" class="page-link">Next →</a>` : ""}
            </div>
        `;

        container.insertAdjacentHTML('beforebegin', navHTML); 
        container.insertAdjacentHTML('afterend', navHTML);     
    });
});