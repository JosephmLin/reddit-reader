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

collapseGrandParent = function(element)
{
	//console.log("collapseGrandParent called " + element)
	var name_of_grandparent = element.parent().parent().attr('class');
	console.log(name_of_grandparent);
	//Will need to parse through the name of the grandparent to get the unique ID for this class.
}
addEventListenersToElement = function(element)
{
	//element.click(function()
	{
		collapseGrandParent($(element));
	}
}
changeDownvoteClass = function(className)
{
	for (var iter = 0, elenum = className.length; iter < elenum; iter++)
	{
		console.log("change class called to add listener to " + className[iter]);
		var elements = document.getElementsByClassName(className[iter]);
		for (var i = 0, length = elements.length; i< length; i++)
		{
			if(elements[i] == undefined)
			{
				console.log(i)
				console.log("ELEMENTS BEFORE AND AFTER UNDEFINED.");
				console.log(elements[i-1]);
				console.log(elements[i]);
				console.log(elements[i+10]);
			}
			else
			{
				addEventListenersToElement(elements[i]);
			}
		}
	}
	console.log("hideclass complete");
}
$(document).ready(function ($) {
	var list_of_downvote_names = ['arrow down login-required', 'arrow login-required down', 'arrow login-required downmod'];
	//hideClass(['arrow up login-required', 'arrow login-required up']);
	changeDownvoteClass(list_of_downvote_names);
	//addEventListenersToClass(list_of_downvote_names);
});