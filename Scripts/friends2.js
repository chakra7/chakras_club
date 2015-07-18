// Create our XMLHttpRequest object
var xhreq = createXmlHttpRequestObject();

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
	
	var target= document.getElementById("target");
	if(xhreq.readyState==0 || xhreq.readyState==4){
		var search=encodeURIComponent(document.getElementById("search").value);
		xhreq.open("GET", "http://localhost/Teststuff/Angular_learning/phptest.php?search="+search, true);
		xhreq.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		target.innerHTML = "processing request...";
		xhreq.onreadystatechange=handleServerResponse;
		xhreq.send(null);

	}
	else{
		setTimeout('process()',1000);
	}
	/*encodeURIComponent(document.getElementById("search_box").value)="well?";*/
	
}

// Create some variables we need to send to our PHP file
// Set content type header information for sending url encoded variables in the request
/*hr.setRequestHeader("Content-type", "application/json");*/
// Access the onreadystatechange event for the XMLHttpRequest object

function handleServerResponse(){
	if(xhreq.readyState==4 && xhreq.status==200){
		//receive data
		var data=JSON.parse(xhreq.responseText);
		target.innerHTML+='handling';
		for (var obj in data){
			target.innerHTML+="data[obj].name <br/>";
		}
		setTimeout('process()', 1000);
	}
}

//process();
/*hr.onreadystatechange = function() {
    if(hr.readyState == 4 && hr.target == 200) {
	    var data= JSON.parse(hr.responseText);
		target.innerHTML = "";

		for(var obj in data){
			target.innerHTML += "<tr>"+"<td>"+data[obj].name+"</td>" +"<td>"+data[obj].age+"</td>" + "<td>"+data[obj].nationality +"</td>"+ "<td>"+ data[obj].keywords +"</td>" + "<td>"+ data[obj].spl_ftr+"</td>" +"</tr>";
		}
    }
}*/
// Send the data to PHP now... and wait for response to update the target div
/*hr.send(null); // Actually execute the request*/
//