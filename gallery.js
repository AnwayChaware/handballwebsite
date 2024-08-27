function openFolder(folderName) {
    // Display the overlay and folder content
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('folder-content').style.display = 'block';

    // Load content based on the folderName
    document.getElementById('folder-details').innerHTML = `
        <h2>${capitalizeFirstLetter(folderName)}</h2>
        <p>Content for ${folderName} goes here.</p>
        <!-- You can add more dynamic content here -->
    `;
}

function closeFolder() {
    // Hide the overlay and folder content
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('folder-content').style.display = 'none';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
