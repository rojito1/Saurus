const btoa = require("btoa")
function linkvertise(link, code){
var base_url="https://link-to.net/"+code+"/"+Math.random()*1000+"/dynamic/"+"?r="+btoa(encodeURI(link));
return base_url
            }
module.exports = linkvertise
