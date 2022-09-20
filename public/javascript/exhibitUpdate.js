const updateGalleryFormHandler = async (event) => {
    event.preventDefault();

    const galleryID = window.location.href.split("/").pop();
    const name = document.getElementById('title-input').value;
    const response = await fetch('/api/gallery/' + galleryID, {
        method: 'post',
        body: JSON.stringify({ name }),
        Headers: { 'Content-Type': 'application/json' }
    });

    if (response.status === 200) {
        document.location.replace('/dashboard');
    } else {alert(response.status === 404 ? 'No gallery found' : 'Gallery not found');}
};

document
.querySelector('#blog-update-form').addEventListener('submit', updateGalleryFormHandler);

const updateGalleryHandler = async (event) => {
    event.preventDefault();

    const galleryID = window.location.href.split("/").pop();

    const response = await fetch('/api/gallery/' + galleryID, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.status === 200) {
        document.location.replace('/dashboard');
    } else {alert(response.status === 404 ? 'failed to delete gallery' : 'Unable to delete gallery');}
};

document
.querySelector('#delete-form').addEventListener('click', deleteGalleryHandler);



