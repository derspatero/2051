// JavaScript Document

if(localStorageSupported()){
	alert('localStorage supported');	
}else{
	alert('localStorage not supported');	
}

// The following code is from this article on web storage:
// http://www.sitepoint.com/an-overview-of-the-web-storage-api/

function localStorageSupported() {
  try {
	return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
	return false;
  }
}