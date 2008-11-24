/************************ 
 * This Ubiquity plugin validates the following doc types:
 * html
 * css
 *
 * By: Patrick Tully <software@avatarnewyork.com>
 * Company: Avatar New York
 ***********************/
CmdUtils.CreateCommand({
	name: "validate-html",
	    icon: "http://www.avatarnewyork.com/sites/all/themes/avatarnewyork/favicon.ico",
	    homepage: "http://www.avatarnewyork.com",
	    author: { name: "Patrick Tully", email: "software@avatarnewyork.com"},
	    license: "GPL",
	    description: "This application validates the html of the current page using http://validator.w3.org",
	    help: "Goto the webpage you want to validate and type the command: validate-html",
	    //takes: {"doc": noun_type_doc},
	    preview: function( pblock, input ) {
	    var template = "This page's html is ${name}";
	    var button = "";
	    var doc = Application.activeWindow.activeTab.document;
	    //if(input.text == 'html'){
	    var baseUrl = "http://validator.w3.org/check?uri="+doc.location;
	    var params = {output : 'text'};
	    jQuery.get( baseUrl, params, function(report) {
		    if(report.match(/(.*)class\=\"(valid)\"(.*)/gi)){
			button = "<a href=\"" + baseUrl + "\"><font color=\"green\">valid</font>.</a>";
		    }else{
			button = "<a href=\"" + baseUrl + "\"><font color=\"red\">not valid</font>.</a>";
		    }
		    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": button});
		});
	    //}  
	}
  
    });

CmdUtils.CreateCommand({
	name: "validate-css",
	    icon: "http://www.avatarnewyork.com/sites/all/themes/avatarnewyork/favicon.ico",
	    homepage: "http://www.avatarnewyork.com",
	    author: { name: "Patrick Tully", email: "software@avatarnewyork.com"},
	    license: "GPL",
	    description: "This application validates the css of the current page using http://validator.w3.org",
	    help: "Goto the webpage you want to validate and type the command: validate-css",
	    //takes: {"doc": noun_type_doc},
	    preview: function( pblock, input ) {
	    var template = "This page's CSS is ${name}";
	    var button = "";
	    var doc = Application.activeWindow.activeTab.document;
	    //if(input.text == 'html'){
	    var baseUrl = "http://jigsaw.w3.org/css-validator/validator?uri="+doc.location;
	    var params = {output : 'html'};
	    jQuery.get( baseUrl, params, function(report) {
		    if(report.match(/(.*)id\=\'(congrats)\'(.*)/gi)){
			button = "<a href=\"" + baseUrl + "\"><font color=\"green\">valid</font>.</a>";
		    }else{
			button = "<a href=\"" + baseUrl + "\"><font color=\"red\">not valid</font>.</a>";
		    }
		    //button = report;
		    pblock.innerHTML = CmdUtils.renderTemplate(template, {"name": button});
		});
	    //}  
	}
  
    });