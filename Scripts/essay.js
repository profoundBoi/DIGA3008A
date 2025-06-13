document.addEventListener("DOMContentLoaded", function () {
    const pages = ["Essay01.html", "Essay02.html", "Reflection.html"];
    const paginationContainer = document.getElementById("pagination");
    const blogContainers = document.querySelectorAll(".Essay");

    // Get current page name
    const currentPagePath = window.location.pathname.split("/").pop();
    const currentIndex = pages.indexOf(currentPagePath);

    function createPaginationNav(current) {
        let html = "";

        if (current > 0) {
            html += `<a href="${pages[current - 1]}" class="page-link">Previous</a> `;
        } else {
            html += `<span class="disabled">Previous</span> `;
        }

        pages.forEach((page, index) => {
            const pageLabel = page.replace(".html", "");
            if (index === current) {
                html += `<strong>${pageLabel}</strong> `;
            } else {
                html += `<a href="${page}" class="page-link">${pageLabel}</a> `;
            }
        });

        if (current < pages.length - 1) {
            html += `<a href="${pages[current + 1]}" class="page-link">Next</a>`;
        } else {
            html += `<span class="disabled">Next</span>`;
        }

        return html;
    }

    if (paginationContainer && currentIndex !== -1) {
        paginationContainer.innerHTML = createPaginationNav(currentIndex);
    }

    blogContainers.forEach(container => {
        if (currentIndex === -1) return;

        const navHTML = `
            <div class="inline-nav">
                ${currentIndex > 0 ? `<a href="${pages[currentIndex - 1]}" class="page-link">← Previous</a>` : ""}
                ${currentIndex < pages.length - 1 ? `<a href="${pages[currentIndex + 1]}" class="page-link">Next →</a>` : ""}
            </div>
        `;

        container.insertAdjacentHTML('beforebegin', navHTML);
        container.insertAdjacentHTML('afterend', navHTML);
    });
});
