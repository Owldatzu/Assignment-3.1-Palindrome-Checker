function reverse()
{
    var str1 = document.getElementById("firstStr").value;
    var splitStr1 = str1.split("");
    alert("split = " + splitStr1);
    var reverse = splitStr1.reverse();
    alert("reverse = " + reverse);
    var joinStr1 = reverse.join("");
    alert("join = " + joinStr1);

    if (str1 == joinStr1)
    {
        document.getElementById("palin").innerHTML = "This is a palindrome!  Enter another one.";
    }
    else 
    {
        document.getElementById("palin").innerHTML = "This is NOT a palin :(";
    }

    var sub = "";
    str1.substring(0,3);
  //  alert("str1 substring 0,3 = " + sub);

    var sub2 = "";
    sub2 = str1.substring(3,5);
  //  alert ("str1 stubstr 3 5 = " + sub2);
    str1 = str1.toUpperCase();
    sub = str1.toUpperCase();
    alert ("all caps " + sub);
    sub2 = str1.replace(/qwe/i, "asd");
  //  alert("replace qwe with asd " + sub2);


}
//User is done inputing words
  function imDone()
  {
    alert("Thanks for participating!")
    document.getElementById("firstStr").value = "";
    document.getElementById("palin").innerHTML = "Bye!";
  }
   // function reverse2()
  //  {
       // alert("4");
      //  let reversed = "";
      //  for (let i = str1.length - 1;  i >=0; i--)
      //  {
      //      reversed += str1(i); // reveresed = reversed + str1(i)
      //  }
     //   alert("reversed string using loops = " + reversed);
   // }
