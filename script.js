let cookies = localStorage.getItem("cookies");

function onloadFunctions() {
   if (cookies == "null") {
      custom_alert.show();
   }
}

var custom_alert = {
   close: function() {
      document.getElementById("alert").style.opacity = 0;
      setInterval(this.close2, 400)
   },

   close2: function() {
      document.getElementById("alert").style.display = "none";
   },

   yes: function() {
      localStorage.setItem("cookies", "notNull");
      custom_alert.close();
   },

   show: function() {
      document.getElementById("alert").style.opacity = 1;
      document.getElementById("alert").style.display = "block";
   }
};

var hamburger = {
   commit: function() {
      if(document.getElementById("menu_mobile").style.transform == "scaleY(0)") {
         document.getElementById("menu_mobile").style.transform = "scaleY(1)";
      } else {
         document.getElementById("menu_mobile").style.transform = "scaleY(0)";
      }
   }
};
