require('dotenv').config();

async function getImages(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
    const res = await fetch(endpoint)
    const data = await res.json()
    let num = Math.floor(Math.random()*25)
    const url = data.data[num].images.original.url
    console.log(url)
    return url
}

async function helperFunction(){
    await getImages("dogs")
}

helperFunction()