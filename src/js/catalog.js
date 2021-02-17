
$(function(){
	const dataSet = [
		{'Acura': ['CL','CSX','EL','ILX','Integra','Legend','MDX','NSX','RDX','RL','RLX','RSX','SLX','TL','TLX','TSX','ZDX']},
		{'Audi': ['100','200','50','5000','80','90','920','A1','A2','A3','A4','A4 allroad','A5','A6','A6 allroad','A7','A8','Cabriolet','Coupe','NSU RO 80','Q2','Q3','Q5','Q7','Quattro','R8','RS 2','RS 3','RS 4','RS 5','RS 6','RS 7','RS Q3','S1','S2','S3','S4','S5','S6','S7','S8','SQ5','SQ7','TT','TT RS','TTS','Typ R','V8']},
		{'BMW': ['02 (E10)','1er','1M','2000 C/CS','2er','2er Active Tourer','2er Grand Tourer','3/15','315','320','321','326','327','340','3er','4er','501','502','503','507','5er','600','6er','700','7er','8er','E3','E9','i3','i8','M2','M3','M4','M5','M6','New Class','X1','X2','X3','X4','X5','X5 M','X6','X6 M','Z1','Z3','Z3 M','Z4','Z4 M','Z8']},
		{'BYD': ['E6','F0','F3','F5','F6','F8 (S8)','Flyer','G3','G6','L3','M6','S6']},
		{'Cadillac': ['Allante','ATS','ATS-V','BLS','Brougham','Catera','CT6','CTS','CTS-V','DeVille','DTS','Eldorado','ELR','Escalade','Fleetwood','LSE','Series 62','Seville','Sixty Special','SRX','STS','XLR','XT5','XTS']},
		{'Chery': ['Amulet (A15)','Arrizo 3','Arrizo 7','B13','Bonus (A13)','Bonus 3 (E3/A19)','CrossEastar (B14)','Fora (A21)','IndiS (S18D)','Kimo (A1)','M11 (A3)','Oriental Son (B11)','QQ6 (S21)','QQme','Sweet (QQ)','Tiggo (T11)','Tiggo 2','Tiggo 3','Tiggo 5','Very (A13)','Windcloud (A11)']},
		{'Chevrolet': ['Alero','Astra','Astro','Avalanche','Aveo','Bel Air','Beretta','Blazer','Blazer K5','Bolt','C-10','C/K','Camaro','Caprice','Captiva','Cavalier','Celebrity','Celta','Chevelle','Chevette','Citation','Classic','Cobalt','Colorado','Corsa','Corsica','Corvair','Corvette','Cruze','Cruze (HR)','Deluxe','El Camino','Epica','Equinox','Evanda','Express','Fleetmaster','HHR','Impala','Kalos','Lacetti','Lanos','Lumina','Lumina APV','LUV D-MAX','Malibu','Master','MATIZ','Metro','Monte Carlo','Monza','MW','Niva','Nubira','Omega','Orlando','Prizm','Rezzo','S-10 Pickup','Sail','Silverado','Sonic','Spark','Special DeLuxe','SS','SSR','Starcraft','Suburban','Tacuma','Tahoe','Tavera','Tracker','TrailBlazer','Trans Sport','Traverse','Uplander','Van','Vectra','Venture','Viva','Volt','Zafira']},
		{'Chrysler': ['180','200','300','300 Letter Series','300C','300C SRT8','300M','Aspen','Cirrus','Concorde','Cordoba','Crossfire','Dynasty','Fifth Avenue','Imperial','Imperial Crown','Intrepid','LeBaron','LHS','Nassau','Neon','New Yorker','Newport','Pacifica','Prowler','PT Cruiser','Saratoga','Sebring','Stratus','TC by Maserati','Town & Country','Viper','Vision','Voyager','Windsor']},
		{'Citroen': ['2 CV','AMI','AX','Berlingo','Berlingo Cargo','BX','C-Crosser','C-Elysee','C-Quatre','C-Triomphe','C-ZERO','C1','C2','C3','C3 Aircross','C3 Picasso','C4','C4 Aircross','C4 Cactus','C4 Picasso','C5','C6','C8','CX','DS','DS3','DS4','DS5','Dyane','E-Mehari','Evasion','GS','Jumper','Jumpy','LN','Nemo','Saxo','SM','SpaceTourer','Traction Avant','Visa','Xantia','XM','Xsara','Xsara Picasso','ZX']},
		{'Daewoo': ['Alpheon','Arcadia','Chairman','Damas','Espero','Evanda','G2X','Gentra','Kalos','Korando','Lacetti','Lanos','Leganza','LeMans','Magnus','Matiz','Musso','Nexia','Nubira','Prince','Racer','Rezzo','Sens','Tacuma','Tico','Tosca','Winstorm']},
		{'Daihatsu': ['Altis','Applause','Atrai','Be-go','Boon','Ceria','Charade','Charmant','Coo','Copen','Cuore','Delta Wagon','Esse','Feroza','Gran Move','Hijet','Leeza','Materia','MAX','Midget','Mira','Mira e:S','Mira Gino','Move','Move Canbus','Move Conte','Move Latte','Naked','Opti','Pyzar','Rocky','Rugger','Sirion','Sonica','Storia','Taft','Tanto','Tanto Exe','Terios','Trevis','Wildcat','Xenia','YRV']},
		{'Datsun': ['240Z','280ZX','720','Bluebird','Cherry','GO','GO+','mi-DO','on-DO','Stanza','Sunny','Urvan','Violet']},
	    {'Fiat': ['124','124 Spider','124 Sport Spider','126','127','128','130','131','132','238','500','500L','500X','508','600','900T','Albea','Argenta','Barchetta','Brava','Bravo','Cinquecento','Coupe','Croma','Doblo','Doblo Cargo','Ducato','Duna','Fiorino','Freemont','Fullback','Idea','Linea','Marea','Multipla','Palio','Panda','Punto','Qubo','Regata','Ritmo','Scudo','Sedici','Seicento','Siena','Stilo','Strada','Tempra','Tipo','Ulysse','Uno','X 1/9']},
		{'Ford': ['Aerostar','Aspire','B-MAX','Bronco','Bronco-II','C-MAX','Capri','Consul','Contour','Cougar','Crown Victoria','Custom','Econoline','EcoSport','Edge','Escape','Escort','Escort (North America)','Everest','Excursion','Expedition','Explorer','Explorer Sport Trac','F-150','Fairlane','Fairmont','Festiva','Fiesta','Fiesta ST','Five Hundred','Flex','Focus','Focus (North America)','Focus RS','Focus ST','Freda','Freestar','Freestyle','Fusion','Fusion (North America)','Galaxie','Galaxy','GPA','Granada','Granada (North America)','GT','GT40','Ikon','Ixion','KA','Kuga','Laser','LTD Crown Victoria','M151','Mainline','Maverick','Model A','Model T','Mondeo','Mondeo ST','Mustang','Orion','Probe','Puma','Ranchero','Ranger','Ranger (North America)','S-MAX','Scorpio','Sierra','Spectron','Taunus','Taurus','Taurus X','Telstar','Tempo','Territory','Thunderbird','Torino','Tourneo Connect','Tourneo Courier','Tourneo Custom','Transit','Transit Connect','Transit Custom','V8','Windstar','Zephyr']},
		{'Great Wall': ['Coolbear','Cowry (V80)','Deer','Florid','Hover','Hover H3','Hover H5','Hover H6','Hover M1 (Peri 4x4)','Hover M2','Hover M4','Pegasus','Peri','Safe','Sailor','Sing RUV','Socool','Voleex C10 (Phenom)','Voleex C30','Wingle']},
		{'Haval': ['F7','H2','H6','H6 Coupe','H8','H9']},
		{'Honda': ['145','Accord','Acty','Airwave','Ascot','Ascot Innova','Avancier','Ballade','Beat','Brio','Capa','City','Civic','Civic Ferio','Civic Type R','Concerto','CR-V','CR-X','CR-Z','Crossroad','Crosstour','Domani','Edix','Element','Elysion','FCX Clarity','Fit','Fit Aria','Fit Shuttle','FR-V','Freed','Grace','Horizon','HR-V','Insight','Inspire','Integra','Integra SJ','Jazz','Lagreat','Legend','Life','Logo','MDX','Mobilio','Mobilio Spike','N-BOX','N-One','N-WGN','N360','NSX','Odyssey','Odyssey (North America)','Orthia','Partner','Passport','Pilot','Prelude','Quint','Rafaga','Ridgeline','S-MX','S2000','S500','S600','S660','Saber','Shuttle','Stepwgn','Stream','Street','That\'S','Today','Torneo','Vamos','Vezel','Vigor','Z','Zest']},
		{'Hyundai': ['Accent','Aslan','Atos','Avante','Centennial','Click','Coupe','Creta','Dynasty','EON','Elantra','Entourage','Equus','Excel','Galloper','Genesis','Genesis Coupe','Getz','Grace','Grand Starex','Grandeur','H-1','H100','H35','HD 120','HD 35','HD 65','HD 72','HD 78','IONIQ','Kona','Lantra','Lavita','Marcia','Matrix','Maxcruz','Pony','Porter','Santa Fe','Santamo','Scoupe','Solaris','Sonata','Starex','Stellar','Terracan','Tiburon','Trajet','Tucson','Tuscani','Veloster','Veracruz','Verna','XG','i10','i20','i30','i30 N','i40','ix20','ix35','ix55']},
		{'Infiniti': ['EX','FX','G','I','J','JX','M','Q','Q30','Q40','Q50','Q60','Q70','QX30','QX4','QX50','QX56','QX60','QX70','QX80']},
	    {'Isuzu': ['Amigo','Ascender','Aska','Axiom','Bighorn','D-Max','Elf','Fargo Filly','Forward','Gemini','Hombre','Impulse','KB','MU','MU-7','MU-X','Piazza','Rodeo','Stylus','TF (Pickup)','Trooper','VehiCross','Wizard']},
	    {'Jeep': ['Cherokee','CJ','Commander','Compass','Grand Cherokee','Grand Cherokee SRT8','Grand Wagoneer','Liberty (North America)','Liberty (Patriot)','Renegade','Wrangler']},
	    {'Kia': ['Avella','Bongo','Cadenza','Capital','Carens','Carnival','Carstar','Cee\'d','Cee\'d GT','Cerato','Clarus','Concord','Elan','Enterprise','Forte','Joice','K3','K5','K7','K9','Lotze','Magentis','Mentor','Mohave (Borrego)','Morning','Niro','Opirus','Optima','Picanto','Potentia','Pregio','Pride','ProCeed','Quanlima','Quoris','Ray','Retona','Rio','Sedona','Sephia','Shuma','Sorento','Soul','Spectra','Sportage','Stinger','Stonic','Towner','Venga','Visto','X-Trek']},
		{'LADA (ВАЗ)': ['1111 Ока','2101','2102','2103','2104','2105','2106','2107','2108','2109','21099','2110','2111','2112','2113','2114','2115','2120 Надежда','2121 (4x4)','2123','2129','2131 (4x4)','2328','2329','4x4 Фургон','EL Lada','Granta','Granta Фургон','Kalina','Largus','Largus Фургон','Priora','Revolution','Vesta','XRAY']},
	    {'Land Rover': ['Defender','Discovery','Discovery Sport','Freelander','Range Rover','Range Rover Evoque','Range Rover Sport','Range Rover Velar','Series I','Series II','Series III']},
		{'Lexus': ['CT','ES','GS','GS F','GX','HS','IS','IS F','LC','LFA','LS','LX','NX','RC','RC F','RX','SC']},
		{'Lifan': ['620','Breez (520)','Cebrium (720)','Celliya (530)','Murman','Myway','Smily','Solano','X50','X60','X70']},
		{'Mazda': ['1000','121','1300','2','3','3 MPS','323','5','6','6 MPS','616','626','818','929','Atenza','Axela','AZ-1','AZ-Offroad','AZ-Wagon','B-series','Biante','Bongo','Bongo Friendee','BT-50','Capella','Carol','Cosmo','Cronos','CX-3','CX-5','CX-7','CX-8','CX-9','Demio','Efini MS-6','Efini MS-8','Efini MS-9','Eunos 100','Eunos 300','Eunos 500','Eunos 800','Eunos Cosmo','Familia','Flair','Flair Crossover','Lantis','Laputa','Luce','Millenia','MPV','MX-3','MX-5','MX-6','Navajo','Persona','Premacy','Proceed','Proceed Levante','Proceed Marvie','Protege','Revue','Roadster','RX-7','RX-8','Scrum','Sentia','Spiano','Titan','Tribute','Verisa','Xedos 6','Xedos 9']},
		{'Mercedes-Benz': ['190 (W201)','190 SL','A-klasse','A-klasse AMG','Actros','AMG GT','Atego','B-klasse','C-klasse','C-klasse AMG','Citan','Citan Cargo','CL-klasse','CL-klasse AMG','CLA-klasse','CLA-klasse AMG','CLC-klasse','CLK-klasse','CLK-klasse AMG','CLS-klasse','CLS-klasse AMG','E-klasse','E-klasse AMG','G-klasse','G-klasse AMG','G-klasse AMG 6x6','GL-klasse','GL-klasse AMG','GLA-klasse','GLA-klasse AMG','GLC','GLC AMG','GLC Coupe','GLC Coupe AMG','GLE','GLE AMG','GLE Coupe','GLE Coupe AMG','GLK-klasse','GLS-klasse','GLS-klasse AMG','M-klasse','M-klasse AMG','Maybach S-klasse','R-klasse','R-klasse AMG','S-klasse','S-klasse AMG','SL-klasse','SL-klasse AMG','SLC-klasse','SLC-klasse AMG','SLK-klasse','SLK-klasse AMG','SLR McLaren','SLS AMG','Sprinter','Sprinter Classic','V-klasse','Vaneo','Viano','Vito','W100','W108','W110','W111','W114','W115','W120','W121','W123','W124','W128','W136','W186','W188','W189','W29','X-klasse']},
		{'Mitsubishi': ['3000 GT','500','Airtrek','Aspire','ASX','Attrage','Carisma','Celeste','Challenger','Chariot','Colt','Cordia','Debonair','Delica','Delica D:2','Delica D:3','Delica D:5','Diamante','Dignity','Dingo','Dion','Eclipse','Eclipse Cross','eK Active','eK Classic','eK Custom','eK Space','eK Sport','eK Wagon','Emeraude','Endeavor','Eterna','Freeca','FTO','Fuso Canter','Galant','Galant Fortis','Grandis','GTO','i','i-MiEV','Jeep J','L200','Lancer','Lancer Cargo','Lancer Evolution','Lancer Ralliart','Legnum','Libero','Minica','Minicab','Mirage','Montero','Montero Sport','Outlander','Pajero','Pajero iO','Pajero Junior','Pajero Mini','Pajero Pinin','Pajero Sport','Pistachio','Proudia','Raider','RVR','Sapporo','Savrin','Sigma','Space Gear','Space Runner','Space Star','Space Wagon','Starion','Strada','Toppo','Town Box','Tredia','Triton','Xpander']},
		{'Nissan': ['100NX','180SX','200SX','240SX','280ZX','300ZX','350Z','370Z','AD','Almera','Almera Classic','Almera Tino','Altima','Armada','Atlas','Avenir','Bassara','BE-1','Bluebird','Bluebird Maxima','Bluebird Sylphy','Cabstar','Caravan','Cedric','Cefiro','Cherry','Cima','Clipper Rio','Crew','Cube','Datsun','Dayz','Diesel','Dualis','Elgrand','Exa','Expert','Fairlady Z','Figaro','Fuga','Gloria','GT-R','Homy','Hypermini','Juke','Juke Nismo','Kix','Lafesta','Langley','Largo','Latio','Laurel','Leaf','Leopard','Liberta Villa','Liberty','Livina','Lucino','March','Maxima','Micra','Mistral','Moco','Murano','Navara (Frontier)','Note','NP300','NV100 Clipper','NV200','NV350 Caravan','NX Coupe','Otti','Pao','Pathfinder','Patrol','Pino','Pixo','Prairie','Presage','Presea','President','Primastar','Primera','Pulsar','Qashqai','Qashqai+2','Quest','R\'nessa','Rasheen','Rogue','Roox','Safari','Sentra','Serena','Silvia','Skyline','Skyline Crossover','Stagea','Stanza','Sunny','Teana','Terrano','Terrano Regulus','Tiida','Tino','Titan','Urvan','Vanette','Versa','Wingroad','X-Trail','Xterra']},
		{'Opel': ['Adam','Admiral','Agila','Ampera','Antara','Ascona','Astra','Astra OPC','Calibra','Campo','Cascada','Combo','Combo Cargo','Commodore','Corsa','Corsa OPC','Crossland X','Diplomat','Frontera','Grandland X','GT','Insignia','Insignia OPC','Kadett','Kapitan','Karl','Manta','Meriva','Meriva OPC','Mokka','Monterey','Monza','Movano','Olympia','Omega','P4','Rekord','Senator','Signum','Sintra','Speedster','Super Six','Tigra','Vectra','Vectra OPC','Vita','Vivaro','Zafira','Zafira OPC']},
		{'Peugeot': ['1007','104','106','107','108','2008','201','202','203','204','205','205 GTi','206','207','208','208 GTi','3008','301','304','305','306','307','308','308 GTi','309','4007','4008','402','403','404','405','406','407','408','5008','504','505','508','604','605','607','806','807','Bipper','Boxer','Expert','iOn','Pars','Partner','Partner Cargo','RCZ','Traveller']},
	    {'Porsche': ['356','718 Boxster','718 Cayman','911','911 GT2','911 GT3','911 R','914','918 Spyder','924','928','944','959','968','Boxster','Carrera GT','Cayenne','Cayman','Cayman GT4','Macan','Panamera']},
	    {'Renault': ['10','11','12','14','15','16','17','18','19','20','21','25','30','4','4CV','5','6','8','9','Alaskan','Arkana','Avantime','Caravelle','Clio','Clio RS','Clio V6','Dauphine','Docker','Dokker','Dokker Van','Duster','Espace','Floride','Fluence','Fregate','Fuego','KWID','Kadjar','Kango','Kangoo','Kangoo Express','Kaptur','Koleos','Laguna','Latitude','Lodgy','Logan','Master','Megane','Megane RS','Midlum','Modus','Rodeo','Safrane','Sandero','Sandero RS','Scenic','Sport Spider','Symbol','Talisman','Trafic','Twingo','Twizy','Vel Satis','Vivastella','Wind','ZOE']},
	    {'Saab': ['9-2X','9-3','9-4X','9-5','9-7X','90','900','9000','93','95','96','99','Sonett']},
	    {'Skoda': ['100 Series','105, 120','1200','Citigo','Fabia','Fabia RS','Favorit','Felicia','Forman','Karoq','Kodiaq','Octavia','Octavia RS','Popular','Rapid','Roomster','Superb','Yeti']},
	    {'SsangYong': ['Actyon','Actyon Sports','Chairman','Istana','Kallista','Korando','Korando Family','Korando Sports','Korando Turismo','Kyron','Musso','Nomad','Rexton','Rodius','Stavic','Tivoli','XLV']},
		{'Subaru': ['1000','360','Alcyone','Baja','Bighorn','Bistro','Brat','BRZ','Dex','Dias Wagon','Domingo','Exiga','Forester','Impreza','Impreza WRX','Impreza WRX STi','Justy','Legacy','Legacy Lancaster','Leone','Levorg','Libero','Lucra','Outback','Pleo','R1','R2','Rex','Sambar','Stella','SVX','Traviq','Trezia','Tribeca','Vivio','WRX','WRX STi','XT','XV']},
		{'Suzuki': ['Aerio','Alto','Alto Lapin','APV','Baleno','Cappuccino','Cara','Carry','Celerio','Cervo','Cultus','Equator','Ertiga','Escudo','Esteem','Every','Forenza','Grand Vitara','Hustler','Ignis','Jimny','Kei','Kizashi','Landy','Liana','MR Wagon','Palette','Reno','Samurai','Solio','Spacia','Splash','Swift','SX4','Twin','Verona','Vitara','Wagon R','Wagon R+','X-90','XL7']},
		{'Toyota': ['2000GT','4Runner','Allex','Allion','Alphard','Altezza','Aqua','Aristo','Aurion','Auris','Avalon','Avanza','Avensis','Avensis Verso','Aygo','bB','Belta','Blade','Blizzard','Brevis','C-HR','Caldina','Cami','Camry','Camry Solara','Carina','Carina E','Carina ED','Cavalier','Celica','Celsior','Century','Chaser','Comfort','Corolla','Corolla II','Corolla Rumion','Corolla Spacio','Corolla Verso','Corona','Corona EXiV','Corsa','Cressida','Cresta','Crown','Crown Majesta','Curren','Cynos','Duet','Dyna','Echo','Esquire','Estima','Etios','FJ Cruiser','Fortuner','FunCargo','Gaia','Grand HiAce','Granvia','GT86','Harrier','HiAce','Highlander','Hilux','Hilux Surf','Innova','Ipsum','iQ','ISis','Ist','Kluger','Land Cruiser','Land Cruiser Prado','LiteAce','Mark II','Mark X','Mark X ZiO','MasterAce Surf','Matrix','Mega Cruiser','Mirai','Model F','MR2','Nadia','Noah','Opa','Origin','Paseo','Passo','Passo Sette','Picnic','Pixis Epoch','Pixis Mega','Pixis Space','Platz','Porte','Premio','Previa','Prius','Prius Alpha','Prius c','Prius v (+)','ProAce','ProAce City Cargo','Probox','Progres','Pronard','Publica','Ractis','Raum','RAV 4','Regius','RegiusAce','Rush','Sai','Scepter','Sequoia','Sera','Sienna','Sienta','Soarer','Soluna','Spade','Sparky','Sprinter','Sprinter Carib','Sprinter Marino','Sprinter Trueno','Starlet','Succeed','Supra','Tacoma','Tercel','Touring HiAce','TownAce','ToyoAce','Tundra','Urban Cruiser','Vanguard','Vellfire','Venza','Verossa','Verso','Verso-S','Vios','Vista','Vitz','Voltz','Voxy','WiLL','WiLL Cypha','Windom','Wish','Yaris','Yaris Verso']},
	    {'Volkswagen': ['181','Amarok','Arteon','Beetle','Bora','Caddy','Caddy Kasten','California','Caravelle','Corrado','Crafter','Derby','Eos','Fox','Gol','Golf','Golf Country','Golf GTI','Golf Plus','Golf R','Golf R32','Golf Sportsvan','Iltis','Jetta','K70','Karmann-Ghia','Lupo','Lupo GTI','Multivan','Parati','Passat','Passat (North America)','Passat CC','Phaeton','Pointer','Polo','Polo GTI','Polo R WRC','Quantum','Routan','Santana','Scirocco','Scirocco R','Sharan','T-Roc','Taro','Teramont','Tiguan','Touareg','Touran','Transporter','Type 1','Type 2','Type 3','Type 4','up!','Vento','XL1']},
		{'Volvo': ['120 Series','140 Series','164','240 Series','260 Series','300 Series','440','460','480','66','740','760','780','850','940','960','C30','C70','Laplander','P1800','P1900','S40','S60','S60 Cross Country','S70','S80','S90','V40','V40 Cross Country','V50','V60','V60 Cross Country','V70','V90','V90 Cross Country','XC40','XC60','XC70','XC90']},
		{'ГАЗ': ['Рысь','Фора']},
		{'ЗАЗ': ['1102 «Таврия»','1103 «Славута»','1105 «Дана»','965','966','968','Chance','Forza','Lanos','Sens','Vida']},
	    {'УАЗ': ['Aquila','C-30','C10','C190','LC100','Road Partner','Tager','Vega']},
		{'Эксклюзив': ['Бэтмобиль','Лимузин','Мелкосерийная','Реплика','Самоделка']},
  ];

  const selectsArray = [`first`, `order`, `example`, `modal`]

	// selects form
	const onHeapbox = (arr) => {
		for (const select of arr) {
			$(`#${select}-calculation-model`).heapbox({
				effect: {'type':'standard'},
				'openStart': function() {
					$(`#heapbox_${select}-calculation-model`).parent().removeClass(`calculation__select-wrap--error`);
				},
			});
  		$(`#${select}-calculation-year`).heapbox({effect: {'type':'standard'}});
  		$(`#heapbox_${select}-calculation-model .holder`).css("pointer-events", "none");
		}
  };


	const createSelect = (arr) => {
		for (const select of arr) {

			$(`#${select}-calculation-brand`).heapbox({
				effect: {'type':'standard'},
				'openStart': function() {
					$(`#heapbox_${select}-calculation-brand`).parent().removeClass(`calculation__select-wrap--error`);
				},
				'onChange': function(value) {
					const modelArray = Object.values(dataSet[value])[0]
					$(`#heapbox_${select}-calculation-model .heapOptions`).empty();
					$(`#${select}-calculation-model`).empty();
					$(`#heapbox_${select}-calculation-model .holder`).css("pointer-events", "auto")
					$(`#heapbox_${select}-calculation-model .holder`).prop("rel", "10")

					
		
					modelArray.forEach((item,i) => {
						$( `#${select}-calculation-model` ).append(`<option value=${item}>${item}</option>`);
						
						$(`#heapbox_${select}-calculation-model .heapOptions`).append(
							`<li class="heapOption">
								<a href="" rel="${i}" title="${item}" class="">${item}</a>
							</li>`
						);
					})

					$('body').on('click', `#heapbox_${select}-calculation-model .heapOption`, (e) => {
						e.preventDefault();

						$(`#heapbox_${select}-calculation-model .holder`).text(e.target.textContent);
						$(`#${select}-calculation-model option[value="${e.target.textContent}"]`).prop("selected", true);
					})
				}
			});
		}
	};

	const createModelSelect = () => {

		for (const item of selectsArray) {
			const modelSelect = $(`#${item}-calculation-model`);
			modelSelect.prop("disabled", true);
			
			$(`body`).on(`change`, `#${item}-calculation-brand`, () => {
				modelSelect.empty();
				modelSelect.prop("disabled", false);
				$(`#${item}-calculation-model` ).append(`<option value="" disabled selected>Марка вашего авто</option>`);
				

				const modelArray = Object.values(dataSet[$(`#${item}-calculation-brand`).val()])[0];

				modelArray.forEach((elem,i) => {
					$(`#${item}-calculation-model` ).append(`<option value=${elem}>${elem}</option>`);
				})
			})
		}
	}


	const main = () => {
		if (window.matchMedia("(min-width: 600px)").matches) {

			onHeapbox(selectsArray);
			createSelect(selectsArray);
		} else {
			createModelSelect()
		}
	};

	main();

	const validationForms = (arr) => {
		
	
		$(`body`).on(`submit`, `.calculation--first`, (e) => {

			if ($(`#first-calculation-brand`).val() === null) {
				e.preventDefault();

				$(`#first-calculation-brand`).parent().addClass(`calculation__select-wrap--error`);
			} 

			if ($(`#first-calculation-model`).val() === null) {
				e.preventDefault();

				$(`#first-calculation-model`).parent().addClass(`calculation__select-wrap--error`);
			}

			if ($(`#calculation-phone--first`).val() === ``) {
				e.preventDefault();

				$(`#calculation-phone--first`).parent().addClass(`calculation__select-wrap--error`);
			}
		})

		$(`body`).on(`submit`, `.calculation--order`, (e) => {
			

			if ($(`#order-calculation-brand`).val() === null) {
				e.preventDefault();

				$(`#order-calculation-brand`).parent().addClass(`calculation__select-wrap--error`);
			} 

			if ($(`#order-calculation-model`).val() === null) {
				e.preventDefault();

				$(`#order-calculation-model`).parent().addClass(`calculation__select-wrap--error`);
			}
			
			console.log($(`#calculation-phone--order`).val())

			if ($(`#calculation-phone--order`).val() === ``) {
				console.log(`111111111111111111`)
				e.preventDefault();

				$(`#calculation-phone--order`).parent().addClass(`calculation__select-wrap--error`);

				
			}
		})

		$(`body`).on(`submit`, `.calculation--example`, (e) => {
			if ($(`#example-calculation-brand`).val() === null) {
				e.preventDefault();

				$(`#example-calculation-brand`).parent().addClass(`calculation__select-wrap--error`);
			} 

			if ($(`#example-calculation-model`).val() === null) {
				e.preventDefault();

				$(`#example-calculation-model`).parent().addClass(`calculation__select-wrap--error`);
			}
			
			console.log($(`#calculation-phone--example`).val())

			if ($(`#calculation-phone--example`).val() === ``) {
				e.preventDefault();
				$(`#calculation-phone--example`).parent().addClass(`calculation__select-wrap--error`);
			}
		})

		$(`body`).on(`submit`, `.calculation--modal`, (e) => {
			if ($(`#modal-calculation-brand`).val() === null) {
				e.preventDefault();

				$(`#modal-calculation-brand`).parent().addClass(`calculation__select-wrap--error`);
			} 

			if ($(`#modal-calculation-model`).val() === null) {
				e.preventDefault();

				$(`#modal-calculation-model`).parent().addClass(`calculation__select-wrap--error`);
			}
			
			console.log($(`#calculation-phone--modal`).val())

			if ($(`#calculation-phone--modal`).val() === ``) {
				e.preventDefault();
				$(`#calculation-phone--modal`).parent().addClass(`calculation__select-wrap--error`);
			}
		})

		$(`body`).on(`click`, `#calculation-phone--first`, () => {
			$(`#calculation-phone--first`).parent().removeClass(`calculation__select-wrap--error`);
		})
		
		$(`body`).on(`click`, `#calculation-phone--order`, () => {
			$(`#calculation-phone--order`).parent().removeClass(`calculation__select-wrap--error`);
		})
		
		$(`body`).on(`click`, `#calculation-phone--example`, () => {
			$(`#calculation-phone--example`).parent().removeClass(`calculation__select-wrap--error`);
		})
		
		$(`body`).on(`click`, `#calculation-phone--modal`, () => {
			$(`#calculation-phone--modal`).parent().removeClass(`calculation__select-wrap--error`);
		})
		
	};

	// $(`body`).on(`click`, `#heapbox_first-calculation-brand .holder`, () => {
	// 	console.log(`fhffhfhh`)
	// })

	
	

	
	validationForms(selectsArray);

	
  
  
  
  
});
