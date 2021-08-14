const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(bodyParser.json());

let link;

app.get("/", (req, res) => {
    var websiteLinks = ['http://heeeeeeeey.com/',
        'http://thatsthefinger.com/',
        'http://cant-not-tweet-this.com/',
        'http://eelslap.com/',
        'http://www.staggeringbeauty.com/',
        'http://burymewithmymoney.com/',
        'http://www.fallingfalling.com/',
        'http://ducksarethebest.com/',
        'http://www.trypap.com/',
        'http://www.republiquedesmangues.fr/',
        'http://www.movenowthinklater.com/',
        'http://www.partridgegetslucky.com/',
        'http://www.rrrgggbbb.com/',
        'http://beesbeesbees.com/',
        'http://www.sanger.dk/',
        'http://www.koalastothemax.com/',
        'http://www.everydayim.com/',
        'http://www.leduchamp.com/',
        'http://grandpanoclothes.com/',
        'http://www.haneke.net/',
        'http://r33b.net/',
        'http://randomcolour.com/',
        'http://cat-bounce.com/',
        'http://cachemonet.com/',
        'http://www.sadforjapan.com/',
        'http://www.taghua.com/',
        'http://chrismckenzie.com/',
        'http://hasthelargehadroncolliderdestroyedtheworldyet.com/',
        'http://ninjaflex.com/',
        'http://iloveyoulikeafatladylovesapples.com/',
        'http://ihasabucket.com/',
        'http://corndogoncorndog.com/',
        'http://giantbatfarts.com/',
        'http://www.ringingtelephone.com/',
        'http://www.pointerpointer.com/',
        'http://www.pleasedonate.biz/',
        'http://imaninja.com/',
        'http://willthefuturebeaweso.me/',
        'http://salmonofcapistrano.com/',
        'http://www.ismycomputeron.com/',
        'http://www.wwwdotcom.com/',
        'http://www.nullingthevoid.com/',
        'http://www.muchbetterthanthis.com/',
        'http://www.ouaismaisbon.ch/',
        'http://iamawesome.com/',
        'http://www.pleaselike.com/',
        'http://crouton.net/',
        'http://corgiorgy.com/',
        'http://www.electricboogiewoogie.com/',
        'http://www.nelson-haha.com/',
        'http://www.wutdafuk.com/',
        'http://unicodesnowmanforyou.com/',
        'http://tencents.info/',
        'http://intotime.com/',
        'http://leekspin.com/',
        'http://minecraftstal.com/',
        'http://www.riddlydiddly.com/',
        'http://www.patience-is-a-virtue.org/',
        'http://whitetrash.nl/',
        'http://www.theendofreason.com/',
        'http://zombo.com',
        'http://secretsfornicotine.com/',
        'http://pixelsfighting.com/',
        'http://crapo.la/',
        'http://baconsizzling.com/',
        'http://isitwhite.com/',
        'http://noot.space/',
        'http://tomsdog.com/',
        'http://hardcoreprawnlawn.com/',
        'http://www.omfgdogs.com/',
        'https://perikat.github.io/Simple-game/',
        'https://smashthewalls.com/'
    ]
    const random = Math.floor(Math.random() * websiteLinks.length)
     link = websiteLinks[random]

    res.render("index")
})

app.post("/", (req, res)=>{
    res.redirect(link)
    console.log(link)
})


app.listen(3000, function () {
    console.log("Server started on port 3000");
});
