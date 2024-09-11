function performSearch() {
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery.trim() !== "") {
        // Здесь можно добавить логику для выполнения поиска
        alert(`Performing search for: ${searchQuery}`);
    } else {
        alert("Please enter a search query.");
    }
}