<!--
var undefined;
jsCommon=function(){}
jsCommon.prototype={
	ms_ : navigator.appName != "Netscape",
	copy_text : function(str){
	  // IE
	  if (window.clipboardData) { 
	   window.clipboardData.setData("Text", str);
	   alert("복사되었습니다!       \n"+str+"       \n");
	  // FF
	  } else if (window.netscape) { 
	   try {
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		alert("복사되었습니다!       \n"+str+"       \n");
	   
		var copytext = str; 

		var str   = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		if (!str) return false;

		str.data  = copytext;

		var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
		if (!trans) return false;

		trans.addDataFlavor("text/unicode");
		trans.setTransferData("text/unicode", str, copytext.length * 2);

		var clipid = Components.interfaces.nsIClipboard;
		var clip   = Components.classes["@mozilla.org/widget/clipboard;1"].getService(clipid);
		if (!clip) return false;

		clip.setData(trans, null, clipid.kGlobalClipboard);
	   } catch(e) {
		alert("Error:Set this value to True, the setting signed.applets.codebase_principal_support.\n"+e);
		return;
	   }
	  } 
	 },
	help : function()
	{
		var obj=document.getElementById("help_listDiv");
		if(obj.style.display=="none")
			obj.style.display="block";
		else
			obj.style.display="none";
	},
	addLoadEvent : function(func)
	{
		var oldonload = window.onload;
		if(typeof window.onload != 'function'){
			window.onload = func;
		}else{
			window.onload = function(){
				oldonload();
				func();
			}
		}
	},
	createMenu : function(Width,Url,m,likey)
	{
		var len=m.length;
		var w=parseInt(100/len).toString()+"%";
		var objDiv=document.createElement("div");
		objDiv.style.borderTop="1px solid #3c9337";
		objDiv.style.backgroundColor="#49a643";
		objDiv.style.borderBottom="3px solid #469b41";
		var html="<table style='width:"+Width+";'>\r\n"+
			"<tr>\r\n";
		document.body.appendChild(objDiv);
		for(var i=0;i<len;i++){
			html +="<td style='width:4'><img src='/_prozn/_image/admin/btn_back/btn_sbak01_01.gif' width='4' height='30' /></td>\r\n" +
				"<td id='m_td' name='m_td' style='" +
				"padding-top:5;color:#f9f9f9;font-weight:bold;font-family:굴림;font-size:9pt;" +
				"text-align:center;cursor:pointer;'" +
				" onclick=\"js_admin.m_go("+i+",'"+Url[i]+"');\">"+m[i]+"</td>\r\n" +
				"<td style='width:4'><img src='/_prozn/_image/admin/btn_back/btn_sbak01_03.gif' width='4' height='30' /></td>\r\n";
		}
		html += "</tr></table>\r\n";
		objDiv.innerHTML=html;
		var mnu=document.getElementsByName("m_td");
		for(var i=0;i<mnu.length;i++){
			mnu[i].style.background="url('/_prozn/_image/admin/btn_back/btn_sbak01_02.gif')";
			mnu[i].style.backgroundRepeat="repeat-x";
		}
	},
	createMenu_s : function(Width,Url,m,likey)
	{
		var len=m.length;
		var w=parseInt(100/len).toString()+"%";
		var objDiv=document.createElement("div");
		objDiv.style.borderTop="1px solid #5596aa";
		objDiv.style.backgroundColor="#5596aa";
		objDiv.style.borderBottom="3px solid #5596aa";
		var html="<table style='width:"+Width+";'>\r\n"+
			"<tr>\r\n";
		document.body.appendChild(objDiv);
		for(var i=0;i<len;i++){
			html +="<td style='width:4'><img src='/_prozn/_image/admin/btn_back/btn_sbak02_01.gif' width='4' height='30' /></td>\r\n" +
				"<td id='m_td' name='m_td' style='" +
				"padding-top:5;color:#f9f9f9;font-weight:bold;font-family:굴림;font-size:9pt;" +
				"text-align:center;cursor:pointer;'" +
				" onclick=\"js_admin.m_go("+i+",'"+Url[i]+"');\">"+m[i]+"</td>\r\n" +
				"<td style='width:4'><img src='/_prozn/_image/admin/btn_back/btn_sbak02_03.gif' width='4' height='30' /></td>\r\n";
		}
		html += "</tr></table>\r\n";
		objDiv.innerHTML=html;
		var mnu=document.getElementsByName("m_td");
		for(var i=0;i<mnu.length;i++){
			mnu[i].style.background="url('/_prozn/_image/admin/btn_back/btn_sbak02_02.gif')";
			mnu[i].style.backgroundRepeat="repeat-x";
		}
	},
	Alert : function(msg){alert(msg+"       ");},
	oReload : function(){document.location.reload();},
	goURL : function(Url,ty)
	{
		switch(ty) {
			case 1: 
				location.href=Url; 
			break;
			case 2: 
				window.open(Url,'',''); 
			break;
		}
	},
	goURL_ : function(Url)
	{
		if(parent.document) parent.document.location.href=Url;
		else document.location.href=Url;
	},
	chk : function(element,ele_name)
	{
		if(typeof(element) !=undefined){
			if(!element.value){
				alert(ele_name+"을(를) 입력하세요.     ");
				element.focus();
				return false;
			}
		}
	},
	getRadioValue : function(element){
		for(var i=0;i<element.length;i++){
			if(element[i].checked==true){
				return element[i].value
			}
		}
	},
	getCheckBoxValue : function(element){
		var k=0;
		var chk_list=new Array();
		for(var i=0;i<element.length;i++){
			if(element[i].checked==true){
				chk_list[k]=element[i].value;
				k++;
			}
		}
		if(chk_list.length>0)
			return chk_list.join(",");
		else
			return "";
	},
	selectchk : function(element)
	{
		var obj=document.getElementsByName(element);
		for(var i=0;i<obj.length;i++) {
			if(obj[i].checked == true) return true;
		}
		alert('적용하실 데이타를 선택하세요.       ');
		return false;
	},
	selectchk_only : function(element)
	{
		var obj=document.getElementsByName(element);
		for(var i=0;i<obj.length;i++) {
			if(obj[i].checked == true) return true;
		}
		return false;
	},
	selectall : function(element)
	{
		var obj=document.getElementsByName(element);
		for(var i=0;i<obj.length;i++) {
			if(obj[i].checked == true) obj[i].checked=false;
			else obj[i].checked=true;
		}
	},
	autochk : function(element,n)
	{
		var obj=document.getElementsByName(element);
		obj[n].checked="checked";
	},
	ifresize : function(ifrmObj)
	{
		if(!this.ms_){
			var getFFVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1];
			var FFextraHeight=getFFVersion>=0.1? 16 : 0;
			var innerBody=ifrmObj.contentDocument.body;
			ifrmObj.width=innerBody.offsetWidth;
			ifrmObj.height=innerBody.offsetHeight+FFextraHeight;
		}else{
			var innerBody=ifrmObj.contentWindow.document.body;
			var objWidth=innerBody.scrollWidth + (innerBody.offsetWidth - innerBody.clientWidth);
			var objHeight=innerBody.scrollHeight + (innerBody.offsetHeight - innerBody.clientHeight);
			ifrmObj.style.width=objWidth;
			ifrmObj.style.height=objHeight;
		}
	},
	openwin : function(Url,W,H,L,T,scrollBar,wID)
	{
		var new_win;
		var L=L || (screen.availWidth - W) / 2;
		var T=T || (screen.availHeight - H) / 2;
		var scrollbar=scrollBar || 'no';
		var wid= wID || 'new_win';
		new_win = 'width='+W+', height='+H+', left='+L+', top='+T+', scrollbars='+scrollbar;
		new_win += ', titlebar=no, toolbar=no, menubar=no, location=no, directories=no';
		var win=window.open(Url,wid,new_win);
		return win;
	},
	openwinprint : function(Url,W,H,L,T,scrollBar,wID)
	{
		var new_win;
		var L=L || (screen.availWidth - W) / 2;
		var T=T || (screen.availHeight - H) / 2;
		var scrollbar=scrollBar || 'no';
		var wid= wID || 'new_win';
		new_win = 'width='+W+', height='+H+', left='+L+', top='+T+', scrollbars='+scrollbar;
		new_win += ', titlebar=no, toolbar=no, menubar=yes, location=no, directories=no';
		var win=window.open(Url,wid,new_win);
		return win;
	},
	openModal : function(Url,arg,W,H,scrollBar)
	{
		var arg=arg || null;
		var scrollbar=scrollBar || 'no';
		var Width=W+'px';
		var Height=H+'px';
		var L=L || (screen.availWidth - W) / 2;
		var T=T || (screen.availHeight - H) / 2;
		var win=''+'dialogwidth:'+Width+';dialogleft='+L+';dialogtop='+T+';dialogheight:'+Height+';scroll:'+scrollbar+';status:0;help:no'+'';
		var result=showModalDialog(Url,arg,win);
		return result;
	},
	makeCookie : function(cookie_name,cookie_value,expire)
	{
	  var date=new Date();
	  date.setDate(date.getDate()+parseInt(expire));
	  document.cookie=cookie_name+"="+escape(cookie_value)+"; path=/; expires="+date.toGMTString()+";";
	},
	cookieDelete : function(cookie_name)
	{
		var date=new Date();
		date.setDate(date.getDate()-1);
		document.cookie=cookie_name+"= "+"; expires="+date.toGMTString()+"; path=/";
	},
	getCookie  : function(cookie_name)
	{
		var startIndex;
		var slt_cookie;
		var strCookie=document.cookie;
		slt_cookie=cookie_name || "";
		if(strCookie.length > 0) {
			if(slt_cookie){
				startIndex=strCookie.indexOf(slt_cookie);
				if(startIndex != -1) {
					endIndex = strCookie.indexOf(";",startIndex);
					if( endIndex == -1) 
						endIndex = strCookie.length;
					return unescape(strCookie.substring((startIndex+slt_cookie.length+1),endIndex));
				}
				return "";
			} else {
				return strCookie;
			}	
		} else {
			return "";
		}
	},
	onlychk  : function(str,ty) 
	{
		var j,chkstr,patrn,rstr;
		switch(ty){
			case 1:	patrn='1234567890'; break;
			case 2: patrn='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'; break;
			case 3: patrn='1234567890-';
		}
		rstr=(ty==1) ? str.replace(/,/g,"") : str;
		for (i=0; i<rstr.length; i++){
			chkstr = rstr.charAt(i);
			for (j=0;j<patrn.length;j++){
				if (chkstr == patrn.charAt(j)) break;
				if (j+1 == patrn.length) return false;
			}
		}
		return true;
	},

	onlyNumber : function (ele) 
	{
		var rstr=ele.value;
		var number_string="";
		var patrn='1234567890';
		for (i=0; i<rstr.length; i++){
			var chkstr = rstr.charAt(i);
			if(escape(chkstr).length > 4){
				break;
			}
			for (var j=0;j<patrn.length;j++){
				if (chkstr == patrn.charAt(j)) {
					number_string += chkstr;
					break;
				}
			}
		}
		ele.value=number_string;
	},
	emailchk : function(element)
	{
		if(!element.value) {
			alert('이메일 주소를 입력하여 주십시오.     ');
			element.focus();
			return false;
		}
		/*var patrn="^[A-Za-z0-9-_\\.]{2,}@[A-Za-z0-9-_\\.]{2,}\\.[A-Za-z0-9-_]{2,}$"
		var reg= new RegExp(patrn);
		if(!reg.test (element.value)){
			alert('유효한 이메일 주소가 아닙니다.     ');
			element.value='';
			element.focus();
			return false;
		}*/
		return true;
	},
	idchk : function(element)
	{
		if(!element.value) {
			alert('아이디를 입력하여 주십시오.     ');
			element.focus();
			return false;
		}
		if(this.onlychk(element.value,2) != true) {
			alert('아이디를 영문+숫자만으로 입력하여 주십시오.     ');
			element.value='';
			element.focus();
			return false;
		}
		if(element.value.length < 4 || element.value.length > 12) {
			alert('아이디는 4-12자로 입력하여 주십시오.     ');
			element.focus();
			return false;
		}
		return true;
	},
	passchk : function(ele,ele2)
	{
		if(!ele.value) {
			alert('패스워드를 입력하여 주십시오.       ');
			ele.focus();
			return false;
		}
		if(!ele2.value) {
			alert('패스워드 확인을 입력하여 주십시오.       ');
			ele2.focus();
			return false;
		}
		if(this.onlychk(ele.value,2) != true) {
			alert('패스워드는 영문+숫자만으로 입력하여 주십시오.     ');
			return false;
		}
		if(ele.value.length <4 || ele2.value.length >12) {
			alert('패스워드를 4-12자로 입력하여 주십시오.     ');
			return false;
		}
		if(ele.value != ele2.value) {
			alert('패스워드가 일치하지 않습니다.     ');
			return false;
		}
		return true;
	},
	juminchk : function(jumin1,jumin2) 
	{
		var jnum_01=jumin1.value;
		var jnum_02=jumin2.value;

		if(!jnum_01) {
			alert('주민등록번호 앞자리를 입력하여 주십시오.       ');
			jumin1.focus();
			return false;
		}
		if(!jnum_02) {
			alert('주민등록번호 뒷자리를 입력하여 주십시오.       ');
			jumin2.focus();
			return false;
		}

		var chk = false;
		var b_Year = (jnum_02.charAt(0)<="2")?"19":"20";
		b_Year += jnum_01.substr(0,2);
		var b_Month = jnum_01.substr(2,2)-1;
		var b_Date = jnum_01.substr(4,2);
		var b_sum = new Date(b_Year, b_Month, b_Date);
		if(b_sum.getYear()%100!=jnum_01.substr(0,2)||b_sum.getMonth()!=b_Month||b_sum.getDate()!=b_Date){
			return chk;
		}
		var total = 0;
		var temp = new Array(13);
		for(var i=1;i<=6;i++) temp[i]=jnum_01.charAt(i-1);
		for(var i=7;i<=13;i++) temp[i]=jnum_02.charAt(i-7);
		for(var i=1;i<=12;i++) {
			var k=i+1;
			if(k>=10) k=k%10+2;
			total=total+(temp[i]*k);
		}
		var last_num=(11-(total%11))%10;
		if(last_num==temp[13]) {
			chk=true;
		}else{
			alert ('유효하지 않은 주민등록번호입니다.     ');
			return false;
		}
		return chk;
	},
	checkbiz : function(bizID)  //사업자등록번호 체크 
	{ 
		if(bizID =="") return false;
		// bizID는 숫자만 10자리로 해서 문자열로 넘긴다. 
		var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1); 
		var tmpBizID, i, chkSum=0, c2, remander; 
		 bizID = bizID.replace(/-/gi,''); 

		 for (i=0; i<=7; i++) chkSum += checkID[i] * bizID.charAt(i); 
		 c2 = "0" + (checkID[8] * bizID.charAt(8)); 
		 c2 = c2.substring(c2.length - 2, c2.length); 
		 chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1)); 
		 remander = (10 - (chkSum % 10)) % 10 ; 

		if (Math.floor(bizID.charAt(9)) == remander) return true ; // OK! 
		  return false; 
	},
	coma : function(element)
	{
		var str,rstr;
		str=element.value;
		rstr=(this.onlychk(str,1)) ? this.comaAdd(str) : str.substring(0,str.length-1);
		element.value=rstr;
	},
	comaAdd : function(str)
	{
		var rstr='';
		var nm=0;
		str=str.replace(/,/g,"");
		var len=str.length;
		for(var i=len-1;i>=0;i--) {
			nm++;
			var n=str.charAt(i);
			rstr=n+rstr;
			if(nm != len && nm%3==0) rstr =','+rstr;
		}
		return rstr;
	},
	searchzip : function(fieldname)
	{
		var surl="/_prozn/_system/member/zip_sh.php?fieldname="+fieldname;
		js_cls.openwin(surl,550,400,'','','yes','zipwin');
	},
	insertFlash : function(width, height, url, val) 
	{
		document.write("<object  ");
		document.write("  classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'  ");
		document.write("  codebase='https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'  ");
		document.write("  width='" + width + "'  ");
		document.write("  height='" + height + "' ");
		document.write("> ");
		document.write("  <param name='movie' value='" + url + "'> ");
		document.write("  <param name='quality' value='high'> ");
		document.write("  <param name='wmode' value='transparent'> ");
		document.write("  <param name='menu' value='false'> ");
		document.write("  <param name='FlashVars' value='"+val+"'> ");
		document.write("  <embed  ");
		document.write("    src='" + url + "'  ");
		document.write("    quality='high' flashvars='"+val+"' wmode='transparent' ");
		document.write("    pluginspage='https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash'  ");
		document.write("    type='application/x-shockwave-flash'  ");
		document.write("    width='" + width + "'  ");
		document.write("    height='" + height + "' ");
		document.write("    wmode='transparent' ");
		document.write("  > ");
		document.write("  </embed>  ");
		document.write("</object> ");
	},
	changeDisplay : function(o)
	{
		o.style.display=(o.style.display == 'none') ? 'block' : 'none';
	},
	preview : function(objFile, previewer) {
		if(!/(\.gif|\.jpg|\.jpeg|\.png)$/i.test(objFile.value)) {
			alert("이미지 형식의 파일을 선택하십시오");
			return;
		}

		previewer = (typeof(previewer) == "object") ? previewer : document.getElementById(previewer);
		var ua = window.navigator.userAgent;

		if (ua.indexOf("MSIE") > -1) {
			var img_path = "";
			if (objFile.value.indexOf("\\fakepath\\") < 0) {
				img_path = objFile.value;
			} else {
				objFile.select();
				var selectionRange = document.selection.createRange();
				img_path = selectionRange.text.toString();
				objFile.blur();
			}
			previewer.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='fi" + "le://" + img_path + "', sizingMethod='scale')";
		} else {
			previewer.innerHTML = "";
			var W = previewer.offsetWidth;
			var H = previewer.offsetHeight;
			var tmpImage = document.createElement("img");
			previewer.appendChild(tmpImage);

			tmpImage.onerror = function () {
				return previewer.innerHTML = "";
			}

			tmpImage.onload = function () {
				if (this.width > W) {
					this.height = this.height / (this.width / W);
					this.width = W;
				}
				if (this.height > H) {
					this.width = this.width / (this.height / H);
					this.height = H;
				}
			}
			if (ua.indexOf("Firefox/3") > -1) {
				var picData = objFile.files.item(0).getAsDataURL();
				tmpImage.src = picData;
			} else {
				tmpImage.src = "file://" + objFile.value;
			}
		}
	},
	setDay : function(fildname1,fildname2,t){
		var ipt1=document.getElementById(fildname1);
		var ipt2=document.getElementById(fildname2);
		var now = new Date;
		var year = this.ms_ ? now.getYear() : now.getYear()+1900;
		var today = year + "-" + (now.getMonth()+1) + "-" + now.getDate();
		ipt1.value = this.getThatday(today,t);
		ipt2.value = (t==-1) ? this.getThatday(today,t) : this.addZero(today);
	},
	setDay_2 : function(fildname1,fildname2,t){
		var ipt1=document.getElementById(fildname1);
		var ipt2=document.getElementById(fildname2);
		var now = new Date;
		var year = this.ms_ ? now.getYear() : now.getYear()+1900;
		var today = year + "-" + (now.getMonth()+1) + "-" + now.getDate();
		ipt1.value = this.getThatday(today,t);
		ipt2.value = this.addZero(today);
	},
	getThatday : function(today,t){
		var pdate=new Array(); 
		var pday=today.split("-");
		var ptoday=new Date(pday[0],pday[1]-1,pday[2]);
		var ptimestamp=ptoday.valueOf()+1000*60*60*24*t;
		var thatday=new Date(ptimestamp);
		if(this.ms_)
			pdate[pdate.length]=thatday.getYear();
		else
			pdate[pdate.length]=thatday.getYear()+1900;
		pdate[pdate.length]=thatday.getMonth()+1;
		pdate[pdate.length]=thatday.getDate();
		return this.addZero(pdate.join("-"));
	},
	addZero : function(d)
	{
		var dd=d.split('-');
		dd[1]=(dd[1].length==1) ? '0'+dd[1] : dd[1];
		dd[2]=(dd[2].length==1) ? '0'+dd[2] : dd[2];
		return dd.join("-");
	},
	votechk : function(fm)
	{
		var chk=false;
		var v_id=fm.no.value;
		var radio=fm.v_nm;
		for(i=0;i<radio.length;i++) {
			if(radio[i].checked ==true) {
				var v_nm=radio[i].value;
				chk=true;
				break;
			}
		}
		if(!chk) {
			alert('투표항목을 선택하세요.       ');
			return;
		}
		js_cls.openwin('/_prozn/_system/vote/vote_result.php?mode=vote&no='+v_id+'&n='+v_nm,500,500,"","","","");
	}
};
ykFloater=function()
{
	var div;
	var intval;
	var startY;
	var targetY;
	var currentY;
	var ie_;
}
ykFloater.prototype={
	set : function(obj)
	{
		this.ie_=(navigator.appName=='Netscape') ? false : true;
		this.div=obj;
		this.targetY=0;
		this.currentY=0;
		if(this.ie_)
			this.startY=parseInt(this.div.style.pixelTop);
		else
			this.startY=parseInt(this.div.style.top);
		if(typeof(this.div) != undefined && this.div !=""){
			var oInstance=this;
			this.intval=setInterval(function(){oInstance.roll()},10);
		}
	},
	roll : function()
	{
		var percent;
		if(!this.ie_){
			if(self.pageYOffset>0)
				this.targetY=self.pageYOffset+this.startY;
			else
				this.targetY=this.startY;
			if(this.targetY != this.currentY){
				percent=.1*(this.targetY-this.currentY);
				if(percent>0) 
					percent=Math.ceil(percent);
				else 
					percent=Math.floor(percent);
				this.currentY=this.currentY+percent;
				this.div.style.top = this.currentY;
			}
		} else {
			if(document.body.scrollTop>0)
				this.targetY=(document.body.scrollTop)+this.startY;
			else
				this.targetY=this.startY;
				this.currentY=this.div.style.pixelTop;
			percent=.1*(this.targetY-this.currentY);
			if(percent>0)
				this.div.style.pixelTop=Math.ceil(this.currentY+percent);
			else
				this.div.style.pixelTop=Math.floor(this.currentY+percent);
		}
	}
};
js_cls=new jsCommon();

var positionRolling=function(){}
positionRolling.prototype={
	mouseover_ : false,
	end_ : false,
	rolln_ : 1,
	div_ : new Object(),
	ini_startpos_ : 0,
	spd_ : .2,
	ms_ : navigator.appName != "Netscape",
	sto_ : "",
	height_ : 0,
	max_n_ :0,
	direction_ :"",
	ini : function(pid,Height,Max_n,Direction){
		this.div_=document.getElementById(pid);
		this.height_=Height;
		this.max_n_=Max_n;
		this.direction_=Direction;
		if(this.div_){
			var oInstance=this;
			setTimeout(function(){oInstance.pRolling()},3000);
		}
	},
	setMouseOver : function(){
		clearTimeout(this.sto_);
		this.mouseover_=true;
	},
	setMouseOut : function(){
		this.mouseover_=false;
		if(this.div_){
			var oInstance=this;
			this.sto_=setTimeout(function(){oInstance.pRolling()},500);
		}
	},
	pRolling : function(){
		if(!this.mouseover_){
			if(this.rolln_>0){
				if(this.direction_=="top")
					var targetpos=-(this.height_)*this.rolln_;
			}else{
				var targetpos=this.ini_startpos_;
			}
			if(this.ms_){
				var startpos=this.div_.style.pixelTop;
				if(this.rolln_>0){
					this.div_.style.pixelTop +=Math.floor((targetpos-startpos)*this.spd_);
					if(this.div_.style.pixelTop <= targetpos){
						this.div_.style.pixelTop=targetpos;
						this.end_=true;
					}
				}else{
					this.div_.style.pixelTop +=Math.floor((targetpos-startpos)*this.spd_);
					if(this.div_.style.pixelTop >= targetpos-5){
						this.div_.style.pixelTop=targetpos;
						this.end_=true;
					}
				}
			}else{
				this.div_.style.top =parseInt(this.div_.style.top)-1;
				if(parseInt(this.div_.style.top) <= targetpos)
					this.end_=true;
			}
			clearTimeout(this.sto_);
			if(!this.end_){
				var oInstance=this;
				this.sto_=setTimeout(function(){oInstance.pRolling()},5);
			}else{
				this.end_=false;
				this.rolln_++;
				if(this.rolln_==this.max_n_) 
					this.rolln_=-1;
				var oInstance=this;
				this.sto_=setTimeout(function(){oInstance.pRolling()},5000);
			}
		}
	}
};

function getTimer_()
{
	var ms_=(navigator.appName=="Netscape") ? false : true;
	if(document.getElementById('timerDiv')){
		var objDiv=document.getElementById('timerDiv');
		var w=new Array('일요일','월요일','화요일','수요일','목요일','금요일','토요일');
		var today=new Date();
		var year=today.getYear();
		if(!ms_) year+=1900;
		var month=today.getMonth()+1;
		var day=today.getDate();
		var hour=today.getHours();
		if(hour==12)
			hour="오후 "+hour;
		else
			hour=(hour>12) ? "오후 "+(hour-12) : "오전 "+hour;
		var minute=today.getMinutes();
		minute=(minute<10) ? "0"+minute.toString() : minute.toString();
		var second=today.getSeconds();
		var week=today.getDay();
		second=(second<10) ? "0"+second.toString() : second.toString();
		var str=year.toString()+'년'+month.toString()+'월'+day.toString()+'일 '+
			hour.toString()+':'+minute+':'+second+'   '+w[week].toString();
		objDiv.innerHTML=str;
		objDiv.style.color="#666666";
		objDiv.style.fontFamily="돋움";
		objDiv.style.fontSize="11px";
		setTimeout("getTimer_()",1000);
	}
}


function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//-->