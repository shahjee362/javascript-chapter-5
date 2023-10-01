var ticketprice = 600
var getprice = prompt("Cost of 1 movie ticket is 600 PKR");

document.write("Total cost to buy",getprice,"tickets  to a movie is")
document.write(ticketprice * getprice)
  
  // ------add/devide/multi/sub------

document.write("<h3>Value After Variable declaration in undefined</h3>")

var num1 = 20 
var num2 = 10

 var sum1 = num1 + num2

document.write("<br>","Addition of 20 and 10","= ", sum1)


var num3 = 10
var sum2 = sum1 - num3

document.write("<br>","Subtraction of 10 in 30","= ", sum2)


var num4 = 5
var sum3 = sum2 * num4

document.write("<br>","Multiply of 5 to 20","= ", sum3)


var num5 = 5
var sum4 = sum3 / num5

document.write("<br>","Divided of 100 to 5","= ", sum4)




    // ------table of 4------- 

    var tablenum = 4

    document.write("<h1>Table of 4</h1>")

    for(var i = 1; i <= 10; i++){
        
        document.write("</br>",tablenum +" "+ "*" +" "+ i +" "+ "=" +" "+ tablenum*i)
    }
   

    // --------Shopping Card------
     
    document.write("<h1>Shopping Card</h1>")

    document.write ("price of item 1 is 650")
    document.write ("<br/>","Quantity of item 1 is 3")
    document.write ("<br/>","Price of item 2 is 100")
    document.write ("<br/>","Quantity of item 2 is 7")
    document.write ("<br/>", "Shipping charges 100")


    document.write ("<br/>", "Total Cost Of Your Order is 2750")


    //   --------Marks sheet------
  

    var total = 980
    var obtain = 804

    var multply = 804 * 100
    var result  = multply / total

    document.write("<h1>Mark Sheet</h1>")

    document.write("Total marks :" ," "+ total , "<br>")
    document.write("Marks obtained :" ," "+ obtain , "<br>")
    document.write("Percentage" ," "+ result , "%" , "<br>")


    //  -------currency  in PKR------

    document.write("<h1>Currency in PKR</h1>")

   var exchangerates1 = "1 US Doller = 104.80 pakistani Rupee"
   var exchangerates2 = "1 Saudi Riyal = 28 pakistani Rupee"

   console.log(exchangerates1 + exchangerates2)

   document.write("Total Currency in PKR : 1748")


    //  -------age Calculator----
    document.write("<h1>Age Calculator</h1>")
    document.write("Current Year 2016")
    document.write("<br>" , "Birth Year 1992")

    document.write("<br>" ,"your age is 24");



    // -----------the geometrizer
    document.write("<h1>The Geometrizer</h1>")

    var radius = 20
    var circumfarance = 2*3.14*radius

    console.log(circumfarance)

    document.write("Radius of a circle :20")
    document.write("<br>", "Circumference :" , circumfarance)

    var area = 3.14*radius*radius
    
    document.write( "<br>","The Area is", area)


    // ---------he Lifetime Supply Calculator---------

    document.write("<h1>The Lifetime Supply Calculator</h1>")

    document.write("<br>","favourite Snack: Chocolate chip")
    document.write("<br>","Current Age : 15")
    document.write("<br>","Estimated Maximum Age :65")
    document.write("<br>","Amount of Snack pr Day : 3")

    document.write("<br>","You Will Need 150 chocolate chip to last you until the price old age of 65")