/*
Daniel Leach
Intro to Internet Computing
COP 3813

Project 3 Conversion App w/ Javascript
*/

//access_key = c42c03973bbbd171e76968a2a1a1d948

var result = 0;

$.ajax({
    url: 'http://data.fixer.io/api/latest?access_key=c42c03973bbbd171e76968a2a1a1d94'
    +'8&symbols=EUR,USD,GBP,INR,AUD,CAD,SGD,CHF,MYR,JPY,CNY',
    dataType: 'jsonp',
    asyinc: false, // used this because runtime was not exicuted before calling function.
    success: function (json) {

        console.log("called API Request");
         // EUR - Euro 
         // USD - US Dollar 
         // GBP - British Pound 
         // INR - Indian Rupee 
         // AUD - Australian Dollar
         // CAD - Canadian Dollar 
         // SGD - Singaporian Dollar
         // CHF - Swiss Franc 
         // MYR - Malaysian Ringgit 
         // JPY - Japanese Yen 
         // CNY - Chinese Yuan Renminbi


        function convertEUR(amount,convertFrom,convertTo){
            if(convertFrom == "EUR" && convertTo == "US"){
                result = amount * json.rates.USD;
            }else if(convertFrom == "EUR" && convertTo == "GBP"){
                result = amount * json.rates.GBP;
            }else if (convertFrom == "EUR" && convertTo == "INR"){
                result = amount * json.rates.INR;
            }else if (convertFrom == "EUR" && convertTo == "AUD"){
                result = amount * json.rates.AUD;
            }else if (convertFrom == "EUR" && convertTo == "CAD"){
                result = amount * json.rates.CAD;
            }else if (convertFrom == "EUR" && convertTo == "SGD"){
                result = amount * json.rates.SGD;
            }else if (convertFrom == "EUR" && convertTo == "CHF"){
                result = amount * json.rates.CHF;
            }else if (convertFrom == "EUR" && convertTo == "MYR"){
                result = amount * json.rates.MYR;
            }else if (convertFrom == "EUR" && convertTo == "JPY"){
                result = amount * json.rates.JPY;
            }else if (convertFrom == "EUR" && convertTo == "CNY"){
                result = amount * json.rates.CNY;
            }else
                result = amount * json.rates.EUR;
        }

        
        function convertOther(amount,convertFrom,convertTo){
            if(convertFrom == "US" && convertTo == "EUR"){
                result = amount * (json.rates.EUR / json.rates.USD);
            }else if(convertFrom == "GBP" && convertTo =="EUR"){
                result = amount * (json.rates.EUR/json.rates.GBP);
            }else if (convertFrom == "INR" && convertTo == "EUR" ){
                result = amount * (json.rates.EUR/json.rates.INR);
            }else if (convertFrom == "AUD" && convertTo == "EUR"){
                result = amount * (json.rates.EUR/json.rates.AUD);
            }else if (convertFrom == "CAD" && convertTo == "EUR"){
                result = amount * (json.rates.EUR/json.rates.CAD);
            }else if (convertFrom == "SGD" && convertTo == "EUR"){
                result = amount * (json.rates.EUR/json.rates.SGD);
            }else if (convertFrom == "CHF" && convertTo  == "EUR"){
                result = amount * (json.rates.EUR/json.rates.CHF);
            }else if (convertFrom == "MYR" && convertTo == "EUR"){
                result = amount * (json.rates.EUR/json.rates.MYR);
            }else if (convertFrom == "JPY" && convertTo == "EUR"){
                result = amount * (1 / json.rates.JPY);
            }else if (convertFrom == "CNY" && convertTo == "EUR"){
                result = amount * (1/json.rates.CNY);
            }else
                result = amoutn * json.rates.EUR;
            
        }

        /* function to determine if the user is converting from EUR 
       to another country or from another country to EUR.
       calls apropriate conversion function.
       */
        var convert = function (amount, convertFrom, convertTo) {
            if (convertFrom == "EUR") {
                convertEUR(amount, convertFrom, convertTo);
            } else if (convertTo == "EUR") {
                convertOther(amount, convertFrom, convertTo);
            }
        }

        /* fucntion to check if user typed an amount greater than zero
            if so it calles all necesary function for conversion.
        */
        function checkValidity() {
            var check = document.getElementById("amount").value;
            if (check == 0 || check < 0) {
                alert("Must type input greater that zero");
            } else {
                var a = document.getElementById('amount').value;
                var b = document.getElementById('convertFrom').value;
                var c = document.getElementById('convertTo').value;
                convert(a, b, c);
                report(a, b, c, result);

            }
        }

        /* pushs finished calculations to screen */
        var report = function (amount, convertFrom, convertTo, result) {
            document.getElementById("answer").innerHTML =
                parseFloat(amount).toFixed(3) + " " + convertFrom + " = " + result.toFixed(3) + " " + convertTo + "<br>"
                + " * currency is rounded up to the nearest thousandths decimal value ".fontsize(2) + "<br>" +
                "* currency rates are updated every hour".fontsize(2);
        };

        /* submit function and runs all necessary javaScript functions  */
        document.getElementById("submit").onclick = function () {
            checkValidity();
        };

    }
});



 /* changes selection based conversion type to EUR currency */
 function changeEUR() {
     document.getElementById("EURTo").selected = true;
    }

 function changeOther() {
     document.getElementById("EURFrom").selected = true;
 }


 




