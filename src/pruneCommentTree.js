/*if downvote
	pop up:
	Is this a pun or a meme thread?
	If click yes, then hide the rest of the comment tree
	HTML On the website
	<a href="javascript:void(0)" class="expand" onclick="return togglecomment(this)">[–]</a>
	function togglecomment(e)
	{
		var t=$(e).thing();
		var n=t.find(".expand:first");
		var r=t.hasClass("collapsed");
		t.toggleClass("collapsed noncollapsed"),
		r?n.text("[–]"):n.text("[+]")
	}	
*/
var jqueryscript = document.createElement('script');
jqueryscript.src = 'chrome-extension://ncekfpnhcgoammpphcnbbcpfmpdpeoca/jquery/jquery-1.10.2.js';
jqueryscript.type = 'text/javascript';
var head=document.getElementsByTagName('head')[0];
head.appendChild(jqueryscript);
var jqueryuiscript = document.createElement('script');
jqueryuiscript.src = 'chrome-extension://ncekfpnhcgoammpphcnbbcpfmpdpeoca/jquery/jquery-ui.js';
jqueryuiscript.type = 'text/javascript';
var head=document.getElementsByTagName('head')[0];
head.appendChild(jqueryuiscript);
/*chrome.tabs.executeScript( null, {code:"var x = 10; x"},
   function(results){ console.log(results); } );*/
jQuery(document).ready(function ($) {
	
	/*document.getElementsByClassName('.arrow down login-required').addEventListener('change_downvote', function()
		{
		});*/
	$('.arrow down login-required .click').on('click', function(){
		$(this).hide();
	});
});