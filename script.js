function selectImage(selectedImage, containerId) {
    const container = document.getElementById(containerId);
    const images = container.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
        if (images[i] !== selectedImage) {
            images[i].style.display = 'none';
        }
    }
}

function toggleSelection(selectedImage, containerId) {
    selectedImage.classList.toggle('selected');
}

function confirmCategorySelection(containerId) {
    const container = document.getElementById(containerId);
    const images = container.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        if (!images[i].classList.contains('selected')) {
            images[i].style.display = 'none';
        }
    }
}

function resetCategorySelection(containerId) {
    const container = document.getElementById(containerId);
    const images = container.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'block';
        images[i].classList.remove('selected');
    }
}

function confirmSelection() {
    const categories = ['angle-container', 'style-container', 'hairdo-container'];
    categories.forEach(containerId => {
        const container = document.getElementById(containerId);
        const images = container.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            if (!images[i].classList.contains('selected')) {
                images[i].style.display = 'none';
            }
        }
    });
}