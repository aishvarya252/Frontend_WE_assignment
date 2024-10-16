// Function to toggle the visibility of sections
document.querySelectorAll('h1, h2').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Toggle visibility
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            document.querySelectorAll('.content').forEach(c => c.style.display = 'none'); // Collapse other sections
            content.style.display = 'block';
        }

        // Rotate arrow icon
        this.classList.toggle('collapsed');
    });
});

// Function to generate the Table of Contents dynamically
function generateTOC() {
    const toc = document.querySelector("#toc ul");
    document.querySelectorAll("h1, h2").forEach((header, index) => {
        const tocItem = document.createElement("li");
        tocItem.innerHTML = `<a href="#section-${index}">${header.textContent.trim()}</a>`;
        toc.appendChild(tocItem);

        // Add IDs to headings for anchor links
        header.id = `section-${index}`;
    });
}

// Smooth Scroll for TOC links
document.querySelector('#toc').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }
});

// Initialize on load
window.onload = generateTOC;
