// const clap = document.getElementById("box-clap")
// const hihat = document.getElementById("box-hihat")
// const kick = document.getElementById("box-kick")
// const openhat = document.getElementById("box-openhat")
// const boom = document.getElementById("box-boom")
// const ride = document.getElementById("box-ride")
// const snare = document.getElementById("box-snare")
// const tom = document.getElementById("box-tom")
// const tink = document.getElementById("box-tink")
// const box = document.querySelectorAll("p")

// clap.addEventListener("click", (e)=>{

// })
addEventListener("keydown", (e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.drum-box[data-key="${e.keyCode}"]`)
    console.log(key)
    if(!audio){
        return null
    }else{
        audio.currentTime = 0;
        audio.play()
        key.classList.add("drum-box-play")
        // setTimeout((key.classList.remove("drum-box-play")),3000)
    }
    addEventListener("keyup", (e)=>{
        key.classList.remove("drum-box-play")
    })
}) 
