
	function adres(img) {
		alert (img.src);
	}
	
	function piwo(img) {
		img.src="Diablo2.jpg";
	}
	
	function bez(img) {
		img.src="Diablo.jpg";
	}
	
	function losuj(kostka) {
		var nr = (Math.floor(Math.random()*6+1));
		kostka.src='kostka_' + nr + '.png';
	}

	function napisz(tekst) {
		document.getElementById('ramka').innerHTML+=tekst + ' ';
	}
	
	function czysc() {
		document.getElementById('ramka').innerHTML = '';
	}
	
	function kolor(kolor) {
		document.getElementById('stol').style.color = kolor;
	}
	
	var szer = 300;
	
	function poszerz() {
		
		szer += 10;
		document.getElementById('prostokat').style.width = szer + 'px';
	}