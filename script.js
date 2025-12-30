<<<<<<< HEAD
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
    img.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    }
});

lightbox.onclick = () => {
    lightbox.style.display = 'none';
};
=======
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
    img.onclick = () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    }
});

lightbox.onclick = () => {
    lightbox.style.display = 'none';
};
>>>>>>> febd211d7535a6752e47d8110f0f296da326377c
