TransparentBackgroundRevealer
=============================

To reveal transparent backgrounds of graphic elements:
Create a bookmark with this URL:
```
javascript:document.children[0].style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill-opacity="0.3" width="50" height="50" ><g fill="grey"><rect x="50" width="50" height="50" /><rect y="50" width="50" height="50" /></g><rect width="50" height="50" /><rect y="50" x="50" width="50" height="50" /></svg>')`;if(document.body){document.body.style.background = null;document.body.children[0].style.background=null;}
```
When you click the bookmark it will reveal transparent backgrounds by applying a checkerboard behind

Steps to create this URL from the source file:
1. Review the source of [transparent-background-revealer.js](https://github.com/Myster/TransparentBackgroundRevealer/blob/main/transparent-background-revealer.js) 
2. Copy this source code to a text editor, remove linebreaks, and prefix the code with `javascript'
3. Copy that to your clipboard.
4. Create a bookmark with whatever name you want.
5. PASTE the URL from the clipboard copied in step #2
6. You may also wish to watch or star this repo in case the source is updated.

I no-longer recommend hot-linking to my, or any repo you don't own/trust as it could change the script to be malicious. but I've left it here for backwards compatibility.
The hot-link solution also does not work where cross-domain scripts are not allowed.
Create a bookmark with this URL (adjust the url to the trusted js)
```
javascript:fetch('https://rawgit.com/Myster/TransparentBackgroundRevealer/master/transparent-background-revealer.js').then((scriptResponse) => { scriptResponse.text().then((script) => { eval(script) }) })
```
