<!--
js_Ajax=function(){}

//RETURN oXmlHttp
/*
header("Content-Type: text/html; charset=KS_C_5601-1987");
*/
js_Ajax.prototype={
	getXmlHttp : function() {
		if(typeof XMLHttpRequest != "undefined"){
			return new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			var aVersions = [ 
				"MSXML2.XMLHttp.5.0",
				"MSXML2.XMLHttp.4.0",
				"MSXML2.XMLHttp.3.0",
				"MSXML2.XMLHttp",
				"Microsoft.XMLHttp"
			];
			for (var i = 0; i < aVersions.length; i++) {
				try {
					var oXmlHttp = new ActiveXObject(aVersions[i]);
					return oXmlHttp;
				} catch (oError) {
					//Do nothing
				}
			}
		}
		throw new Error("MSXML is not installed.");
	},

	//querystring : get.php?id=sid
	sendGet : function(querystring)
	{
		var xmlhttp=this.getXmlHttp();
		//querystring=encodeURIComponent(querystring);
		//alert(querystring);
		xmlhttp.open("get",querystring,true);
		xmlhttp.send(null);
		return xmlhttp;
	},

	sendPostQury : function(fmaction,querystring)
	{
		var xmlhttp=this.getXmlHttp();
		xmlhttp.open("post",fmaction,true);
		xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlhttp.send(querystring);
		return xmlhttp;
	},

	sendPost : function(fm)
	{
		var xmlhttp=this.getXmlHttp();
		var sBody=this.getParams(fm);
		xmlhttp.open("post",fm.action,true);
		xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xmlhttp.send(sBody);
		return xmlhttp;
	},

	getParams : function(fm)
	{
		var obj=fm.elements;
		var aParams=new Array();
		for(var i=0;i<obj.length;i++){
			if(obj[i].type=="checkbox" || obj[i].type=="radio"){
				if(obj[i].checked){
					var sParams=encodeURIComponent(obj[i].name);
					sParams += "=";
					sParams +=encodeURIComponent(obj[i].value);
					aParams.push(sParams);
				}
			} else {
				var sParams=encodeURIComponent(obj[i].name);
				sParams += "=";
				sParams +=encodeURIComponent(obj[i].value);
				aParams.push(sParams);
			}
		}
		//alert(aParams.join("&"));
		return aParams.join("&");
	}
};

var n_ajax=new js_Ajax();

//-->