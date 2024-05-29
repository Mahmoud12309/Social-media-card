// Get Subscribers
const youtubeKey = 'AIzaSyBm_xYhvcFYh43wnKO9r4CVFF5_VU8CN-c';
const youtubeUser = 'UC_29nG1PuJYjxVF9MEFqFQA';
const viwe = document.getElementById('viwe');
const sub = document.getElementById('subscribers');
const videos = document.getElementById('videos');
const Message = document.querySelector(".Message");
const delay = 1000; // 10 min

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        viwe.innerHTML = data["items"][0].statistics.viewCount;
        sub.innerHTML = data["items"][0].statistics.subscriberCount;
        videos.innerHTML = data["items"][0].statistics.videoCount;
    })

}

setInterval(() => {
    getSubscribers();
}, delay);


Message.onclick = () => {
    window.location.href = `https://wa.me/+201017574173/?text=Hello`;

}