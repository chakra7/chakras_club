/*var xhreq= createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
	var temp;

	if(window.ActiveXObject){
		try{
			temp= new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e){
			temp=false;
		}
		
	}

	else {
		try{
			temp= new XMLHttpRequest();
		}
		catch(e){
			temp=false;
		}
	}

	if(temp==false){
		alert("couldnt create request");
	}
	else{
		return temp;
	}
}*/


function process(id){
	var field=document.getElementById(id).value;
	var input=encodeURIComponent(field);
	var target=document.getElementById(id+"warning");

	xhreq= new XMLHttpRequest();
	if(xhreq.readyState==0 || xhreq.readyState==4){
		xhreq.open("GET", "http://localhost/Teststuff/Angular_learning/phps/check_unique.php?input="+input, true);
		xhreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhreq.onreadystatechange= function (){
			if(xhreq.readyState==4 && xhreq.status==200){
				if(xhreq.responseText=='error'){
					target.innerHTML=field+" is already present. If you're already registered, login instead";
					target.style.display="initial";
					setTimeout(function(){
						target.style.display="none"
					}, 3000);
					document.getElementById(id).value='';
					
				}
			}
		} 
		xhreq.send(null);
	}
}

function checkpasswords(){
	var pass=document.getElementById("password");
	var conf_pass= document.getElementById("conf_password");
	if(pass.value!=conf_pass.value){
		document.getElementById("matcherror").style.display="initial";
		pass.value='';
		conf_pass.value='';
		setTimeout(function(){
			document.getElementById("matcherror").style.display="none";
		}, 3000);
	}
}