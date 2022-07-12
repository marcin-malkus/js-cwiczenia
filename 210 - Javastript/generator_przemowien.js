var tab_1 = ['Koleżanki i koledzy', 'Z drugiej strony', 'Podobnie', 'Nie zapominajmy jednak, że', 'W ten oto sposób', 'Praktyka dnia codziennego dowodzi, że', 'Wagi i znaczenia tych problemów nie trzeba szerzej uzasadniać, ponieważ', 'Różnorakie i bogate doświadczenia', 'Troska organizacji, a szczególnie', 'Wyższe założenia ideowe, a także'];

var tab_2 = ['realizacja nakreślonych zadań programowych', 'zakres i miejsce szkolenia kadr', 'stały wzrost ilości i zakres naszej aktywności', 'aktualna struktura organizacji', 'nowy model działalności organizacyjnej', 'dalszy rozwój różnych form działalności', 'stałe zabezpieczenie informacyjno-programowe naszej działalności', 'wzmacnianie i rozwijanie struktur', 'konsultacja z szerokim aktywem',
'rozpoczęcie powszechnej akcji kształtowania postaw'];

var tab_3 = ['zmusza nas do przeanalizowania', 'spełnia istotną rolę w kształtowaniu', 'wymaga sprecyzowania i określenia', 'pomaga w przygotowaniu i realizacji', 'zabezpiecza udział szerokiej grupie w kształtowaniu', 'spełnia ważne zadania w wypracowaniu', 'umożliwia w większym stopniu tworzenie', 'powoduje docenianie wagi', 'przedstawia interesującą próbę sprawdzenia', 'pociąga za sobą proces wdrażania i unowocześniania'];

var tab_4 = ['istniejących warunków administracyjno-finansowych.', 'dalszych kierunków rozwoju.', 'systemu powszechnego uczestnictwa.', 'postaw uczestników wobec zadań stawianych przez organizację.', 'nowych propozycji.', 
'kierunków postępowego wychowania.', 'systemu szkolenia kadry odpowiadającego potrzebom.', 'odpowiednich warunków aktywizacji.', 'modelu rozwoju.', 'form oddziaływania.'];



function generuj() {
	
	var los1 = (Math.floor(Math.random()*10));
	var los2 = (Math.floor(Math.random()*10));
	var los3 = (Math.floor(Math.random()*10));
	var los4 = (Math.floor(Math.random()*10));
	
	var przemowienie = 
		tab_1[los1] + ' ' + 
		tab_2[los2] + ' ' + 
		tab_3[los3] + ' ' + 
		tab_4[los4] + ' ' ;
	
	document.getElementById('tekst').innerHTML = przemowienie
}