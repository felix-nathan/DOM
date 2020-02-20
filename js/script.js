$(document).ready(function() {
  $("p").click(function() {
    alert("hi");  
  // previous code...
  
  });
    $("button#hello").click(function() {
      $("ul.user").prepend("<li>Hello!</li>");
      $("ul.webpage").prepend("<li>Why hello there!</li>");
      
      $("ul.user").addClass("background-color");
      $("ul.webpage").addClass("background-color1");
      
      
    });

    $("button#goodbye").click(function() {
      $("ul.user").prepend("<li>Goodbye!</li>");
      $("ul.webpage").prepend("<li>Goodbye, dear user!</li>");
    });

    $("button#stop").click(function() {
      $("ul.user").prepend("<li>Stop copying me!</li>");
      $("ul.webpage").prepend("<li>Pardon me. I meant no offen.</li");     
    });
  });