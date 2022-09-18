async function uploadFile(gallery_id) {
    let formData = new FormData();           
    formData.append("file", fileupload.files[0]);
    await fetch('/api/gallery/upload/'+gallery_id, {
      method: "POST", 
      body: formData
    });    
    alert('The file has been uploaded successfully.');
}

async function handlenewgallery(e) {
    const name = document.querySelector("#name-input").value.trim();
    if(!name) return;

    const response = await fetch ('/api/gallery', {
    method: 'post',
    body: JSON.stringify({ name: name }),
    headers: { 'Content-Type': 'application/json'}
});
if (response.status===200) {
    document.location.replace('/');
} else {
    alert('Not successful');
}
};

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
        document.location.replace('/');
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
    } else {alert(response.status === 404 ? 'No gallery found' : 'Gallery not found');}
};

document
.querySelector('#delete-form').addEventListener('click', deleteGalleryHandler);