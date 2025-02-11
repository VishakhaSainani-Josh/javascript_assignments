/*Go to youtube. Open any video. Add a button to the page using JS. On click of the button,
the video playback speed should change to 10x */


//Added the follwing on console 

let btn = document.createElement("button")
btn.innerHTML = "CLick me"

document.body.appendChild(btn)

btn.addEventListener("click", () => {
    document.querySelector("video").playbackRate = 10
})