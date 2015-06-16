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
console.log("hidden");
console.log("tagline should be hidden");
//$(".expand").hide();
hideClass = function(className)
{
	console.log("hideClass called to hide " + className);
	var elements = document.getElementsByClassName(className);
	for (var i = 0, length = elements.length; i< length; i++)
	{
		elements[i].style.display='none';
	}
}
$(document).ready(function ($) {
	hideClass('arrow up login-required');
	hideClass('arrow login-required up');
	hideClass('arrow down login-required');
	hideClass('arrow login-required down');
	hideClass('arrow login-required downmod');
});