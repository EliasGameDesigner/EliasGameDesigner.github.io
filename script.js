let item = 0;
const max = 8;//quantidade imagens


function proxImage(img){
    fetch(`img/${img}.jpg`)
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);
            console.log(imageObjectURL);
            const proxImageTag = document.createElement("img");
            proxImageTag.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxImageTag);

        })
}



window.onload = function(){
    for(;item<9; item++){
        proxImage(item)
    }
    setInterval(function (){proxImage( item++ % max+1)
    
    window.scrollTo(0,document.body.scrollHeight)
    }, 1000);
}


// window.onscroll = function(){
//     let scrollPoint = window.scrollY + window.innerHeight;
//     let altura = document.body.scrollHeight;
//     if(scrollPoint >= altura){
//         proxImage( item++ % max+1);
//     }
   
    
// }
    
    











