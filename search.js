document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('tag-search-input');
    const entryLinks = document.querySelectorAll('.entry-list .entry-link');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        entryLinks.forEach(function(entryLink) {
            const entry = entryLink.querySelector('.entry');
            const name = entry.querySelector('.entry-name').textContent.toLowerCase();
            const categories = entry.querySelectorAll('.entry-categories span');
            let isVisible = false;

            if (searchTerm === '') {
                isVisible = true;
            } else {
                // Check if name matches
                if (name.includes(searchTerm)) {
                    isVisible = true;
                }

                // If name doesn't match, check categories
                if (!isVisible) {
                    for (const category of categories) {
                        if (category.textContent.toLowerCase().includes(searchTerm)) {
                            isVisible = true;
                            break; // Exit loop once a match is found
                        }
                    }
                }
            }

            if (isVisible) {
                entryLink.style.display = 'block';
            } else {
                entryLink.style.display = 'none';
            }
        });
    });
}); 