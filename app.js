$(document).ready(function() {


   var NewsData = "sample.json";

   $.getJSON(NewsData, function(data) {
       $.each(data, function(i, f) {

          var NewsList = "<li>"+"<a href=" + f.link +">"+ "<h2>"+ f.Headlines + "</h2>" + "</a>"+"</li>"


           $(NewsList).appendTo("#userdata");
     });

   });

});
