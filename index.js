// require('dotenv').config()

async function getImages(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=S3fQysCpDBrhmpoJDMJ9oi9500WsmzNn&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const res = await fetch(endpoint)
    const data = await res.json()

    const imageObj = data.data[Math.floor(Math.random()*25)]
    const url = imageObj.images.original.url

    return {imageObj: imageObj,url: url}
}

async function addImage(query){
    if (image_div.childNodes){
        image_div.removeChild(image_div.childNodes[0])
    }

    const result = await getImages(query)

    const image = document.createElement("img")
    image.src=result.url
    image.alt=result.imageObj.alt_text
    image.width=300
    image.height=300

    image_div.appendChild(image)
}

const form = document.querySelector("#query-form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let form_data = new FormData(form)
    let query = form_data.get('query')
    addImage(query)
})

const image_div = document.querySelector(".images")