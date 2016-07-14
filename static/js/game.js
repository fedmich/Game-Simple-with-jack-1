	function clicked( o ){
		
		// alert('clicked');
		// var o = document.getElementById('dog1');
		
		if( o.src.indexOf('_red') > 0 ){
			//red na sya so gawing blue
			o.src ="static/images/dog_blue.png";
		}
		else {
			o.src ="static/images/dog_red.png";
		}
		
		
		var sfx = new Audio("static/sounds/dog-woof.ogg");
		sfx.play();
		
	}
	
	
	