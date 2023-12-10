document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery-container');

    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            data.files.forEach(file => {
                const imgElement = document.createElement('img');
                imgElement.src = 'images/' + file;
                imgElement.classList.add('image');
                galleryContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});
