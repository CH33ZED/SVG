            var a = document.getElementById("a");
            var b = document.getElementById("clear"); 
            var u = -1;
            var v = 0;

            var draw = function(event){       
               var c = event.clientX;
	       var d = event.clientY;
	       var e = document.createElementNS("http://www.w3.org/2000/svg","circle");	
	       e.setAttribute("cx", c);
	       e.setAttribute("cy", d);
	       e.setAttribute("r","25");
	       e.setAttribute("fill","purple");
	       a.appendChild(e);
               if (u >= 0){
                  var z = document.createElementNS("http://www.w3.org/2000/svg","line");
                  z.setAttribute("x1", u);
	          z.setAttribute("y1", v);
                  z.setAttribute("x2", c);
	          z.setAttribute("y2", d);
                  z.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2");
                  a.appendChild(z);
		}
		u = c;
		v = d;
	    }
            var clean = function(event){
               a.remove();
            }
            
            a.addEventListener('click', draw);
            b.addEventListener('click', clean);