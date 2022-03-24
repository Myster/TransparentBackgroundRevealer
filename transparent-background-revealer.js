document.children[0].style.backgroundImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill-opacity="0.3" width="50" height="50" ><g fill="grey"><rect x="50" width="50" height="50" /><rect y="50" width="50" height="50" /></g><rect width="50" height="50" /><rect y="50" x="50" width="50" height="50" /></svg>')`;
if(document.body)
{
	document.body.style.background = null;
	document.body.children[0].style.background=null;
}
