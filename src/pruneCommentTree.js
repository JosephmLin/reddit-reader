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

innerHTML = document.getElementById("siteTable_t3_39imii").innerHTML;
console.log(innerHTML);