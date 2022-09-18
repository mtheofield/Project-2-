document.querySelector("new-gallery-item").addEventListener("submit",handlenewgallery);
async function handlenewgallery(e) {
    event.preventDefault ();
    const name = document.querySelector("#name-input").value.trim();
    if(!name) return;

    const response = await fetch ('/', {
    method: 'post',
    body: JSON.stringify({ name: name }),
    headers: { 'Content-Type': 'application/json'}
});
if (response.ok) {
    document.location.replace('dashboard');
} else {
    alert(response.message);
}
};