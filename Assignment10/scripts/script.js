// JavaScript Document

// Following Mortgage Calculator function modified from:
// http://www.mcfedries.com/creatingawebpage/mortgage.htm
//
// Notes:
// amount = mortgage amount
// ir = monthly interest rate --> take an annual rate / 100 and multiply by 12 --> ((3%/100)*12)
// months = total amount of monthly payments --> term * 12 --> (25 * 12)
//


var data = [];
var colours = ['#D5D2D3', '#FB2F42'];




$("#btn_submit").click(function (){
    //e.preventDefault();
    var amount = $("#amount").val();
    var term = $("#term").val();
    var ir = $("#ir").val();
    ir = parseFloat(ir)/100;
    var income = $("#income").val();
    income = parseFloat(income)/12;

    var payment = calculatePayment(amount, ir, term);

    if (payment > income) {
        alert("payment is greater than monthly income");
    }
    else {
        var angle = income + payment;

        data[0] = income / angle * 360;

        data[1] = payment / angle * 360;

        canvasApp();
    }
});


function calculatePayment(amount, ir, months) {
	var payment = Math.floor((amount * ir) / (1-Math.pow(1+ir,(-1 * months)))*100) / 100;
	return payment;
}



// JavaScript Document

// The following JavaScript code was modified from code found at:
// http://wickedlysmart.com/how-to-make-a-pie-chart-with-html5s-canvas


function canvasApp(){

    var theCanvas = document.getElementById('canvas_01');
    var theContext = theCanvas.getContext('2d');

    function drawScreen(){

        for (var i = 0; i < data.length; i++) {
            drawSlice(theCanvas, theContext, i);
        } // end for

    }// end drawScreen

    drawScreen();

} // end canvasApp()

// function for drawing a segment of the
// pie chart
function drawSlice(canvas, context, i) {
    // save the current state of the context
    context.save();

    // get the centre points of the canvas
    var centreX = Math.floor(canvas.width / 2);
    var centreY = Math.floor(canvas.height / 2);
    // set the radius of the pie chart to
    // half the width of the canvas
    radius = Math.floor(canvas.width / 2);

    // set the starting angle which is the
    // sum of all data values that have been iterated
    // over up until this point...we use our
    // st (sum to) helper function to get this value
    var startingAngle = dtr(st(data, i));
    // the data value determines the
    // size of the arc...we use our
    // dtr (degrees to radians) helper
    // function to get this value
    var arcSize = dtr(data[i]);
    // ending angle is just the starting angle
    // plus the current data value we set this
    // value above with the arcSize variable
    var endingAngle = startingAngle + arcSize;

    // draw the path
    context.beginPath();
    // go to the centre of the canvas
    context.moveTo(centreX, centreY);
    // draw an arc with the values we
    // set in the above variables
    context.arc(centreX, centreY, radius, startingAngle, endingAngle, false);
    // close the current path
    context.closePath();
    // set the fill style to the current
    // colour from the colours array
    context.fillStyle = colours[i];
    // fill the current path
    context.fill();

    // restore the saved context
    context.restore();

} // end drawSlice()

// function for converting
// degrees to radians
function dtr(degrees){
    var radians = (Math.PI / 180) * degrees;
    return radians;
} // end dtr()

// function for suming up all
// data used up until a
// certain point
function st(a, i) {
    var sum = 0;
    for (var j = 0; j < i; j++) {
        sum += a[j];
    }
    return sum;
} // end st()

