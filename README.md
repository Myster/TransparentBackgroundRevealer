TransparentBackgroundRevealer
=============================

Bookmarklet to reveal transparent backgrounds by applying a checkerbaord behind.

To make this bookmarklet work, create a bookmark with this url
```
javascript:fetch('https://rawgit.com/Myster/TransparentBackgroundRevealer/master/transparent-background-revealer.js').then((scriptResponse) => { scriptResponse.text().then((script) => { eval(script) }) })
```

For a solution that works where cross domain scripts are not allowed (and a more secure solution) do the following:
1. Review the source of [transparent-background-revealer.js](https://github.com/Myster/TransparentBackgroundRevealer/blob/main/transparent-background-revealer.js) 
2. Copy this source code to your clipboard.
3. Create a bookmark with whatever name you want.
4. Set the URL to `javascript:` followed by the source code you copied in step #2
5. You may also wish to watch or star this repo in case the source is updated.
