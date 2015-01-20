function bankAccount(number, type) {
    var self = this;

    //initialize properties

    self.accountNumber = number;
    self.accountType = "";
    self.balance = "0.00";

    if (type == "chequing") {
        self.accountType = "chequing";
    }
    else if (type == "savings") {
        self.accountType = "savings";
    }
    else {
        alert("Not a valid account type");
    }

    //functions

    self.displayBalance = function(elementLocator){
        $(elementLocator).html("$" + self.balance);
    }

    self.deposit = function(amount) {
        if(isNaN(amount)) {
            alert("Invalid entry");
        }
        else {
            amount = parseFloat(amount);
            self.balance = parseFloat(self.balance); //floating point 0.01 was being stored as 0.0099 causing problems during withdrawal
            self.balance += amount;
            self.balance = self.balance.toFixed(2); //deal with floating decimals
            console.log("new balance: " + self.balance);
        }
    }

    self.withdrawal = function(amount) {
        if(isNaN(amount)) {
            alert("Invalid entry");
        }
        else {
            amount = parseFloat(amount);

            console.log("amount: " + amount);
            console.log("balance: " + self.balance);

            if(amount > self.balance){
                alert("Insufficient Funds")
            }
            else {
                self.balance -= amount;
                self.balance = self.balance.toFixed(2);  //deal with floating decimals
                console.log("new balance: " + self.balance);
            }
        }
    }
}

//initialization
var savings = new bankAccount("A00892244", "savings");
var chequing = new bankAccount("A00892244", "chequing");

//display initial balance
$("#account_name").html($("#account").val());
window[$("#account").val()].displayBalance("#output");

//Event handlers

//submit button is pressed
$("#submit").click(function(){
    var account = $("#account").val();
    var action = $("#action").val();
    var amount = $("#amount").val();

    //input validation
    if (amount == "") {
        alert("Please enter an amount")
    }
    else if (amount[0] == " "){
        alert("Please do not enter blank spaces");
    }
    else if (amount.indexOf(".") < amount.length - 3) {
        alert("Invalid format: please submit no more than 2 decimal places");
    }
    //passed validation. submit form
    else {
        window[account][action](amount);  //perform selected action on selected account
        window[account].displayBalance("#output");  //update displayed balance
    }
});

//account selector is changed
$("#account").change(function (){
    var account = $("#account").val();

    $("#account_name").html(account);
    window[account].displayBalance("#output");
});