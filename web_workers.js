import facebookPixelScript from './js/facebook-pixel-script.js'
import tiktokPixelScript from './js/tiktok-pixel-script.js'
import pinterestPixelScript from './js/pinterest-pixel-script.js'
import twitterPixelScript from './js/twitter-pixel-script.js'
import snapchatPixelScript from './js/snapchat-pixel-script.js'
import googleScript from './js/google-script.js'
import microsoftScript from './js/microsoft-script.js'

let listFacebookPixel = []
let listTikTokPixel = []
let listPinterest = []
let listTwitter = []
let listSnapchat = []
let listGoogleAds = []
let listMicrosoftAds = []

let event = {
    name: 'page_viewd',
    data: {},
    context: {
        document: {
            location: {
                href: 'https://makima-3.myshopify.com/products/ao-thun-c%E1%BB%95-tron-th%E1%BA%A7n-c%E1%BB%95-d%E1%BA%A1i-anubis-ver12?_pos=1&_sid=f78f0a4b0&_ss=r',
                origin: 'https://makima-3.myshopify.com',
            },
        }
    },
    data: {}
}

let settings = {
    shopDomain: 'makima-3.myshopify.com',
}

fetch("https://pixel-api-stag.socialhead.dev/api/store/pixel?shop=makima-3.myshopify.com")
            .then(response => response.json())
            .then(res => {
                if(res.data && res.data.length > 0) {
                    res.data.forEach(pixel => {
                        console.log(pixel);
                        pixel.social_type === 'facebook' ? listFacebookPixel.push(pixel) : null
                    })
                }
                if (listFacebookPixel.length > 0) {
                    facebookPixelScript(event, settings)
                }
            })
            .catch(err => {
                console.log(err);
            })