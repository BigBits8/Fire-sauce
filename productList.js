
/* class Product {
    constructor(
        nr,
        img,
        name,
        info
    ){
        this.nr = nr;
        this.img = img;
        this.name = name;
        this.info = info;
    }
}

const pl = []; */

/* pl.push(
    new Product(
        "1",
        "images2/caribbean-hot-sauce-chillisas.png",
        "Caribbean Hot Sauce",
        "Många trodde att de var de 7 haven som till slut tog kål på piraterna. Men få vet sanningen bakom det som blev döden för röverierna: Caribbean hot sauce. Om döden hade en andedräkt, om djävulen hade blod i sina ådror, om Captain Marvel svettades, skulle de alla smaka som Caribbean."
    )
);

pl.push(
  new Product(
    "2",
    "images2/Taco sauce.png",
    "Taco Sauce",
    "För den svage som hatar utmaningar. Denna mesige klassiker är för medelmåttan som aldrig pushar sina gränser. En mes-sås vars enda syfte är att låta magen vila mellan chilihöjdarna."
  )
);

pl.push(
    new Product(
        "3",
        "images2/The General sauce test.png",
        "The General",
        "En hög höjdare när du vill tappa känseln i munnen inför en krogrunda. I denna finner du 3 chilisorter i ett hemligt recept som kommer få din sambo att flytta ut. En av våra favoriter här på Fire Sauce!"
    )
);

pl.push(
    new Product(
        "4",
        "images2/Red Hot.png",
        "Red Hot",
        "En smakrik champion på den internationella marknaden. Red Hot innehåller både mango och jordgubbe för att förhöja hetta, speciellt till kött. Receptet är något av det bästa vi sett som ger dig en rik smakupplevelse och ett vattenfall till tårkanaler."
    )
);
 */

const db = [
    {
    img:"images2/caribbean-hot-sauce-chillisas.png",
    name: "Caribbean Hot Sauce",
    info: "Många trodde att de var de 7 haven som till slut tog kål på piraterna.<span id='dots'>...</span><span id='more'>Men få vet sanningen bakom det som blev döden för röverierna: Caribbean hot sauce. Om döden hade en andedräkt, om djävulen hade blod i sina ådror, om Captain Marvel svettades, skulle de alla smaka som Caribbean.</span>" ,
    rating: "&#128293; &#128293; &#128293; &#128293; &#128293;",
    button: "<button id= 'myBtn' onclick = readMoreCaribbean()>Read more</button>"

},
{
    img: "images2/Taco sauce.png",
    name: "Taco Sauce",
    info: "För den svage som hatar utmaningar.<span id='dots1'>...</span><span id='more1'> Denna mesige klassiker är för medelmåttan som aldrig pushar sina gränser. En mes-sås vars enda syfte är att låta magen vila mellan chilihöjdarna.</span>",
    rating: "&#128293;",
    button: "<button id='myBtn1' onclick = readMoreTaco()>Read more</button>"
},
{
    img: "images2/The General sauce test.png",
    name: "The General",
    info: "En hög höjdare när du vill tappa känseln i munnen inför en krogrunda.<span id='dots2'>...</span><span id='more2'> I denna finner du 3 chilisorter i ett hemligt recept som kommer få din sambo att flytta ut. En av våra favoriter här på Fire Sauce!</span>",
    rating: "&#128293; &#128293; &#128293;",
    button: "<button id='myBtn2' onclick = readMoreGeneral()>Read More</button>"
    
},
{
    img: "images2/Red Hot.png",
    name: "Red Hot",
    info: "En smakrik champion på den internationella marknaden.<span id='dots3'>...</span><span id='more3'> Red Hot innehåller både mango och jordgubbe för att förhöja hetta, speciellt till kött. Receptet är något av det bästa vi sett som ger dig en rik smakupplevelse och ett vattenfall till tårkanaler.</span>",
    rating: "&#128293; &#128293; &#128293; &#128293;",
    button: "<button id='myBtn3' onclick = readMoreRedHot()>Read More</button>"
}
]
