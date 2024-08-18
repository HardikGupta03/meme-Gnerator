const generateBtn=document.querySelector(".gen-meme");
const titleMeme=document.querySelector(".meme-title");
const memeImage=document.querySelector(".meme-image");
const memeAuthor=document.querySelector(".meme-author");

function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=>res.json())
    .then((data)=>{
        const{author,title,url}=data;
        titleMeme.innerText=title;
        memeImage.src=url;
        memeAuthor.innerText=author;
        
    })
}
getMeme();

generateBtn.addEventListener('click',()=>{
    getMeme();
})