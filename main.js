let saturate = document.getElementById('saturate')
let contrast = document.getElementById('contrast')
let brightness = document.getElementById('brightness')
let sepia = document.getElementById('sepia')
let grayscale = document.getElementById('grayscale')
let hueRotat = document.getElementById('hue-rotate')
let blur = document.getElementById('blur')

console.log(saturate,contrast,brightness,sepia,grayscale,hueRotat,blur)

let download = document.getElementById('download')
let reset = document.querySelector('.reset')
console.log(download)


let upload = document.getElementById('upload')
let img = document.querySelector('img')
let boxImg = document.querySelector(".img-box")


window.onload = function(){

    download.style.display = 'none'
    reset.style.display = 'none'
    boxImg.style.display = 'none'

}

upload.onchange = function(){
    resetdata()
    download.style.display = 'block'
    reset.style.display = 'block'
    boxImg.style.display = 'block'

    let file = new FileReader()

    file.readAsDataURL(upload.files[0])
    // img.src = file.result

    file.onload = function(){
        img.src = file.result
        
        
    }
    img.onload = function(){
        
        canvas.width = img.width
        canvas.height = img.height

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        img.style.display = 'none'
    }
    
}



function resetdata(){

    img.style.filter = 'none'
    saturate.value = '100'
    contrast.value = '100'
    brightness.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    hueRotat.value = '0'
    blur.value = '0'
}

let filters = document.querySelectorAll('ul li input')

filters.forEach( filter => {
    filter.addEventListener('input',function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        hue-rotate(${hueRotat.value}deg)
        blur(${blur.value}px)
        `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    })
})


let canvas = document.querySelector('.canvas')
let ctx = canvas.getContext('2d')

function  downloadimage(){
    download.style.color = '#fff'
    download.href = canvas.toDataURL()
}