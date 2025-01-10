//listen for toogle button click event
document.getElementByclass('theme-toogle')
.addEventlistener('click',function() {
	var themestyle = document.getElementByclass('theme-style');
	// body...

//check if the checkbox is checked if(this.checked)
{
	//change the css stylesheet to dark mode
	themestyle.href = 'dark.css';
}
else{
	//change the css stylesheet to light mode
	themestyle.href = 'light.css';
}
});