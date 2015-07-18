// Create our XMLHttpRequest object
var xhreq = createXmlHttpRequestObject();
var target= document.getElementById("friendlist");

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
	else{
		try{
			temp=new XMLHttpRequest();
		}
		catch(e){
			temp=false;
		}
	}

	if(temp==false){
		alert("couldnt create XmlHttpRequestObject");
	}
	else{
		//alert("request created");
		return temp;
	}
}


//create data exchange process
function process(){

	if(xhreq.readyState==0 || xhreq.readyState==4){
		//var search=encodeURIComponent(document.getElementById("search_box").value);
		xhreq.open("GET", "phps/interact.php", true);
		//xhreq.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		target.innerHTML = "processing request...";
		xhreq.onreadystatechange=handleServerResponse;
		xhreq.send(null);

	}
	else{
		setTimeout('process()',1000);
	}
	
}

// Create some variables we need to send to our PHP file
// Set content type header information for sending url encoded variables in the request
/*hr.setRequestHeader("Content-type", "application/json");*/
// Access the onreadystatechange event for the XMLHttpRequest object

function handleServerResponse(){
	if(xhreq.readyState==4 && xhreq.status==200){
		//receive data
		data=JSON.parse(xhreq.responseText);
		target.innerHTML='';
		for (var obj in data){
			target.innerHTML+="<tr><td><strong>"+data[obj].name+ "</strong></td><td>"+data[obj].age+"</td><td>"+data[obj].nationality+"</td><td>"+data[obj].keywords+"</td><td>"+data[obj].spl_ftr+"</td></tr>";
		}
		//setTimeout('process()', 1000);
	}
}

process();

function search_results(){
	target.innerHTML='';
	var input = document.getElementById("search_box");

	for (var obj in data){
		if(data[obj].name.toLowerCase().search(input.value.toLowerCase())==0){
			
			target.innerHTML+="<tr><td><strong>"+data[obj].name+ "</strong></td><td>"+data[obj].age+"</td><td>"+data[obj].nationality+"</td><td>"+data[obj].keywords+"</td><td>"+data[obj].spl_ftr+"</td></tr>";
		}
	}
}

