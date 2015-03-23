// JavaScript Document

// Part of the code for this example is code from: 
// http://www.chartjs.org/docs

var data = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			data : [65,59,90,81,56,55,40]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			data : [28,48,40,19,96,27,100]
		}
	]
}

canvasApp();

function canvasApp(){
		
	var theCanvas = document.getElementById('canvas_10');
	var context = theCanvas.getContext('2d');
	
	

} // end canvasApp()
