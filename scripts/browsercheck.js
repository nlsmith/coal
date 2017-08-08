//THIS IS THE COMPILED BROWSER DETECT JAVASCRIPT
//below alerts useragent string
	//alert(navigator.userAgent);
//below loops through and gives you every detail you could possibly ever need really. 
	var browser ="BROWSER INFORMATION:\n";
	for(var propname in navigator) {
		browser += propname + ": " + navigator[propname] +"\n"
	}
	//alert(browser);
	
	//TEST FOR IE VERSIONS
	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
 	var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
 		if (ieversion>=9) {
 				alert("You're using IE9 or above");
 			} else if (ieversion>=8) {
 				window.location.replace("http://www.poweringanation.org/");
 			} else if (ieversion>=7) {
  				window.location.replace("http://www.poweringanation.org/");
 			} else if (ieversion>=6) {
 				//window.location.replace("http://www.poweringanation.org/");
 			} else if (ieversion>=5) {
  				//window.location.replace("http://www.poweringanation.org/");
			}
			else {
			 alert("n/a");
			 }
		 }
	
	//TEST FOR IPHONE/IPOD
	var deviceIphone = "iphone";
	var deviceIpod = "ipod";
	var deviceIpad = "ipad";

	//Initialize our user agent string to lower case.
	var uagent = navigator.userAgent.toLowerCase();

	//**************************
	// Detects if the current device is an iPhone.
	function DetectIphone()
	{
   		if (uagent.search(deviceIphone) > -1)
     		return true;
     		//document.writeln('<link rel="stylesheet" type="text/css" href="style/styles_mobile.css">');
   		else
      		return false;
	}

	//**************************
	// Detects if the current device is an iPod Touch.
	function DetectIpod()
	{
   		if (uagent.search(deviceIpod) > -1)
        	return true;
   		else
      		return false;
	}
	
	//**************************
	// Detects if the current device is an iPad.
	function DetectIpad()
	{
		if (uagent.search(deviceIpad) > -1)
			return true;
		else
			return false;
	}
	
	//**************************
	// Detects if the current device is an iPhone or iPod Touch.
	function DetectIphoneOrIpod()
	{
    	if (DetectIphone())
       		return true;
    	else if (DetectIpod())
       		return true;
       	else if (DetectIpad())
       		return true;
    	else
       		return false;
	}
	//alert(DetectIphoneOrIpod());
	
	//TEST FOR ANDROID BROWSERS
	var deviceAndroid = "android";

	//**************************
	// Detects if the current device is an Android OS-based device.
	function DetectAndroid()
	{
   		if (uagent.search(deviceAndroid) > -1)
      		return true;
  		else
      		return false;
	}


	//**************************
	// Detects if the current device is an Android OS-based device and
	//   the browser is based on WebKit.
	function DetectAndroidWebKit()
	{
   		if (DetectAndroid())
   	{
     	if (DetectWebkit())
        	return true;
     	else
        	return false;
   		}
   		else
      		return false;
		}
