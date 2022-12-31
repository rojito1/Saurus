# Linkvertise
Linkvertise is an easy-to-use NPM package that shorten Linkvertise.com links automatically for you!
## Guide
**Step 1**: First things first, install Linkvertise package using NPM:<br />
```npm install linkvertise```<br /><br/>
**Step 2**:
If you already have a Linkvertise account, please click on __Full Script API__ and then click on  __Activate Full Script API__<br/><br/>
**Step 3:**
Now you should see a little script right there. Take this code from it:<br />
```<script src="https://linkvertise.net/cdn/linkvertise.js"></script><script>linkvertise(**258831**, {whitelist: [], blacklist: [""]});</script>```<br />
In my case, the code is: **258831**<br/>
## Example:
```javascript
const linkvertise = require("linkvertise")
linkvertise("https://example.com", 258831)
//https://example.com is the target link that the user will be redirected to after watching ads
//258831 is the code that we got previously and it is important because using that code you get earnings into your account
```
## Contact Me:
Discord: **BCR#0001**<br/>
Instagram: **bachar_souhail1**<br/>
Email: **bacharsouhail99@gmail.com**
## Disclaimer
**I AM NOT AFFILIATED WITH LINKVERTISE.COM AND I AM NOT WORKING WITH THEM. THIS IS AN UNOFFICIAL PACKAGE**
## License:
This code is licensed under MIT LICENSE
