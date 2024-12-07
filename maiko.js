function toggleDropdown(dropdownIdToOpen, dropdownIdToClose) {
    const dropdownOpen = document.getElementById(dropdownIdToOpen);
    const dropdownClose = document.getElementById(dropdownIdToClose);

    if (dropdownOpen.style.display === "none" || dropdownOpen.style.display === "") {
        dropdownOpen.style.display = "block";
        dropdownOpen.classList.add('open');  
        
        if (dropdownClose) {
            dropdownClose.style.display = "none";
            dropdownClose.classList.remove('open');
        }
    } else {
        dropdownOpen.style.display = "none";
        dropdownOpen.classList.remove('open');
    }
}

const searchBox = document.getElementById('search-bar');

searchBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = encodeURIComponent(searchBox.value.trim());
        if (query) {
            window.location.href = "https://www.amazon.com";
        }
        event.preventDefault();
    }
});