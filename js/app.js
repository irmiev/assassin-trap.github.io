const QUERY_PARAM = "payload";
const TRAP_HEADER = "trap-header";
const TRAP_TITLE = "trap-title";
const VIDEO_ID = "video";

window.onload = function () {
    let payload = new URL(window.location).searchParams.get(QUERY_PARAM);
    let header = document.getElementById(TRAP_HEADER);
    let title = document.getElementById(TRAP_TITLE);
    let frame = document.getElementById(VIDEO_ID);

    if (payload == null) {
        header.innerText = "What are you looking at?";
        return 0;
    }

    let data = JSON.parse(this.atob(payload));

    let youtubeLink = data.link;
    let iframe = `<iframe 
    width="${window.innerWidth}" height="${window.innerWidth / 2}" 
    src="${youtubeLink}?autoplay=1&mute=1"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>`;

    header.innerText = `You fell into trap #${data.trapId}`;
    title.innerText = `"${data.trapTitle}"`;
    frame.innerHTML = iframe;
}