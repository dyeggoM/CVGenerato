import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		languageId: 0,
		personalProfile:[
			[
				{show:true,text:"Soy un ingeniero de sonido enfocado en el desarrollo de software.",},
				{show:true,text:"Tengo excelentes habilidades informáticas, desde el 2009 comencé a armar, configurar y reparar mis propios equipos.",},
				{show:true,text:"Actualmente trabajo desarrollando sistemas orientados a la administración de empresas y realizando soportes a sistemas anteriores.",},
				{show:true,text:"Soy una persona creativa e innovadora con un gran interés en el conocimiento para encontrar soluciones a nuevas situaciones.",},
				{show:true,text:"Considero ser una persona muy adaptable, trabajo bien en equipo, y considero el liderazgo y la comunicación como habilidades fundamentales tanto en el trabajo como en la vida.",},
				{show:true,text:"Soy una persona alegre y procuro transmitir esa alegría a los otros al dar mis ideas y realizar mis labores, además me gusta ayudar a crecer a las personas a mi alrededor.",},
				{show:false,text:"",},
				{show:false,text:"",},
			],
			[
				{show:true,text:"I am a Sound Engineer with a focus in software development.",},
				{show:true,text:"I have excellent computer skills; since 2009 I built, set up and repaired my own equipment. ",},
				{show:true,text:"Currently I work developing business-oriented management systems and supporting previous systems.",},
				{show:true,text:"I am a creative and innovative person with a huge interest for knowledge, to solve new situations thinking out of the box. ",},
				{show:true,text:"I consider myself to be very adaptable, I work well as a team member, and I consider leadership and communication to be fundamental skills for both work and life.",},
				{show:true,text:"I am a cheerful person and transmit that joy to others with my ideas and the way I do my work, I also like to help grow the people around me.",},
				{show:false,text:"",},
				{show:false,text:"",},
			]
		],
		professionalExperience:[
			{
				date:"04/2020 - a la fecha|04/2020 - to date",
				title:"Desarrollador Full-Stack|Full Stack Developer",
				business:"Globalbit SAS",
				data:[
					{show:true,text:"Desarrollo de bases de datos con SQL Server.|Database development using SQL Server.",},
					{show:true,text:"Desarrollo de Backend con ASP.NET (Framework y Core).|Backend development using ASP.NET Core.",},
					{show:true,text:"Desarrollo de Frontend con Vue.Js y Angular.|Frontend development using VueJs and Angular.",},
					{show:true,text:"DevOps con Azure y servidores IIS.|DevOps with Microsoft Azure and IIS servers.",},
				],
				show:true
			},
			{
				date:"10/2017 – 03/2020|10/2017 – 03/2020",
				title:"Gerente Administrativo y Cofundador|Operation Manager",
				business:"Live Room SAS",
				data:[
					{show:true,text:"Desarrollo de producto interno utilizando ASP.NET Core y VueJs.|Development of internal product using ASP.NET Core and VueJs.",},
					{show:true,text:"Desarrollo y mantenimiento de página web utilizando WordPress (Elementor).|Development and maintenances of Web page using WordPress (Elementor).",},
					{show:true,text:"Responsable de personal.|In charge of staff.",},
					{show:true,text:"Gestión administrativa.|Business management.",},
				],
				show:true
			},
			{
				date:"09/2017 – 10/2018|09/2017 – 10/2018",
				title:"Desarrollador Full-Stack|Full Stack Developer",
				business:"Prestti SAS",
				data:[
					{show:true,text:"Desarrollo de bases de datos con SQL Server.|Database development using SQL Server.",},
					{show:true,text:"Desarrollo de Backend con ASP.NET Core.|Backend development using ASP.NET Core.",},
					{show:true,text:"Desarrollo de Frontend con ReactJS.|Frontend development using ReactJS.",},
				],
				show:true
			},
			{
				date:"06/2017-08/2017|06/2017-08/2017",
				title:"Asistente Administrativo|Administrative Assistant",
				business:"Santa Lucia Hostel",
				data:[
					{show:true,text:"Tareas administrativas varias.|Business management.",},
					{show:true,text:"Atención al cliente.|Customer support.",},
				],
				show:false
			},
			{
				date:"02/2016 – 06/2017|02/2016 – 06/2017",
				title:"Traductor (no oficial)|Translation (non-official)",
				business:"Freelance",
				data:[
					{show:true,text:"Traducción no oficial de inglés a español de artículos científicos y folletos de dispositivos médicos.|Scientific papers and brochures for medical devices translation English to Spanish.",},
				],
				show:true
			},
			{
				date:"11/2015 – 01/2016|11/2015 – 01/2016",
				title:"Agente de Call Center bilingüe|Call Center Agent",
				business:"Teleperformance",
				data:[
					{show:true,text:"Atención al cliente.|Customer Support.",},
				],
				show:false
			},
			{
				date:"07/2015 – 11/2015|07/2015 – 11/2015",
				title:"Prácticas en diseño empresarial|Internship in enterprise design",
				business:"Freelance",
				data:[
					{show:true,text:"Diseño de: estrategias de mercadeo, cajas acústicas, estrategias administrativas.|Design of: marketing strategies, acoustic boxes, and administrative strategies.",},
					{show:true,text:"Desarrollo de presupuestos y análisis financiero.|Budget development and financial analysis.",},
				],
				show:true
			},
			{
				date:"05/2014 – 09/2014|05/2014 – 09/2014",
				title:"Ingeniero mecánico-eléctrico|Electro-mechanical Engineer",
				business:"SPACE7 vending machines",
				data:[
					{show:true,text:"Montaje mecánico y eléctrico de componentes.|Mechanical and electrical component assemble.",},
					{show:true,text:"Control de calidad de los proyectos.|Quality Assurance.",},
					{show:true,text:"Responsable de personal.|In charge of staff.",},
				],
				show:false
			},
			{
				date:"04/2010 – 12/2010|04/2010 – 12/2010",
				title:"Cajero|Cashier",
				business:"REWE Markt Baum oHG",
				data:[
					{show:true,text:"Cajero con ajuste de cuentas.|Cashier with account settlement.",},
					{show:true,text:"Cuidado de las estanterías.|Shelving care.",},
					{show:true,text:"Control de fecha de vencimiento.|Expiration date control.",},
					{show:true,text:"Recepción de mercancía.|Merchandise reception.",},
				],
				show:false
			}
			// ,{
			// 	date:"",
			// 	title:"",
			// 	business:"",
			// 	data:[
			// 		"",
			// 		"",
			// 		"",
			// 		"",
			// 	],
			//  show:true
			// }
		],
		educationTraining:[
			{
				date:"02/2011 – 03/2016",
				title:"Ingeniería de Sonido|Sound Engineering",
				business:"Universidad de San Buenaventura, Medellín|University of San Buenaventura, Medellín (Colombia)",
				data:[
					{show:true,text:"Enfoque en acústica (bio-acústica, acústica de instrumentos, acústica ambiental).|Acoustic approach (bio-acoustics, instrument acoustics, environmental acoustics)",},
				],
				show:true
			},
			{
				date:"08/2012 – 12/2012",
				title:"1 Semestre de Ingeniería de Sistemas e informática|1 Semesters of Computer science",
				business:"Universidad Nacional de Colombia, Medellín|National University of Colombia",
				data:[
					// {show:false,text:"|",},
				],
				show:false
			},
			{
				date:"01/2010 – 12/2010",
				title:"2 Semestres de Matemática Pura en Alemania|2 Semesters of Mathematics",
				business:"Universidad técnica de Ilmenau, Ilmenau (Alemania)|Technical University of Ilmenau, Ilmenau (Germany)",
				data:[
					{show:false,text:"|",},
				],
				show:true
			},
			{
				date:"01/2009 – 12/2009",
				title:"Preuniversitario en Alemania|Precollege in Germany",
				business:"Preuniversitario estatal de Nordhausen, Nordhausen (Alemania)|Staatliches Studienkolleg Nordhausen, Nordhausen (Germany)",
				data:[
					{show:false,text:"|",},
				],
				show:true
			},
			{
				date:"01/2002 – 12/2008",
				title:"Bachillerato|High school",
				business:"Colegio Alemán, Itagüí|Colegio Alemán, Itagüí (Colombia)",
				data:[
					{show:false,text:"|",},
				],
				show:true
			},
			// {
			// 	date:"",
			// 	title:"",
			// 	business:"",
			// 	data:[
			// 		{show:true,text:"|",},
			// 	],
			// 	show:true
			// },
		],
		languageSkills:[
			{
				language:"Español|Spanish",
				level:"Lengua materna|Native",
				certificate:"-|-",
				show:true,
			},
			{
				language:"Inglés|English",
				level:"C1 (Avanzado)|C1",
				certificate:"IELTS - Academic|IELTS - Academic",
				show:true,
			},
			{
				language:"Alemán|German",
				level:"C1 (Avanzado)|C1",
				certificate:"Deutsches Sprachdiplom Zweite Stufe|Deutsches Sprachdiplom Zweite Stufe",
				show:true,
			},
			{
				language:"Francés|French",
				level:"A1 (Básico)|A1",
				certificate:"DELF|DELF",
				show:true,
			},
		],
		digitalSkillsGroups:[
			{show:true,group:"Desarrollo|Development",},
			{show:true,group:"Seguridad|Security",},
			{show:true,group:"Datos|Data",},
			{show:true,group:"Operaciones TI|IT Operations",},
			{show:false,group:"Office suite|Office suite",},
			{show:false,group:"Mesas de mezcla digitales|Digital mixing tables",},
			{show:false,group:"Mesas de mezcla análogas|Analog mixing tables",},
			{show:false,group:"Superficies de control|Control surface",},
			{show:false,group:"Software para edición, mezcla y masterización de audio|Audio editing, mixing and mastering software",},
			{show:false,group:"Software de composición musical en MIDI|MIDI musical composing software",},
			{show:false,group:"Software de modelamiento acústico|Acoustical modeling software",},
			{show:false,group:"Sonómetros|Sound level meter",},
			{show:false,group:"Sistemas de adquisición de información para sonómetros|Acquisition software for sound level meters",},
			{show:false,group:"Software de simulación de circuitos|Circuitry simulation software",},
			{show:false,group:"Software de modelamiento 3D|3D modeling software",},
			{show:false,group:"Sistemas de información geográfica|Geographical information system",},
			{show:false,group:"",},
		],
		digitalSkills:[
			{show:true,sort:1,group:"Desarrollo|Development",skill:".NET Core",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:".NET MVC",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:"Angular",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:"C#",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:"CSS",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:"Entity Framework",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:"Git",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:"HTML5",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:"Javascript",level:"Experto|Proficient",},
			{show:true,sort:1,group:"Desarrollo|Development",skill:"VueJs",level:"Experto|Proficient",},
			{show:true,sort:2,group:"Desarrollo|Development",skill:"Arduino",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Desarrollo|Development",skill:"Bootstrap",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Desarrollo|Development",skill:"JQuery",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Desarrollo|Development",skill:"React",level:"Avanzado|Advanced",},
			{show:true,sort:3,group:"Desarrollo|Development",skill:"Python",level:"Básico|Basic",},
			{show:true,sort:3,group:"Desarrollo|Development",skill:"React Native",level:"Básico|Basic",},
			{show:true,sort:3,group:"Desarrollo|Development",skill:"Unity3D",level:"Básico|Basic",},
			{show:true,sort:3,group:"Desarrollo|Development",skill:"Vue Native",level:"Básico|Basic",},
			{show:true,sort:3,group:"Desarrollo|Development",skill:"Xamarin",level:"Básico|Basic",},
			{show:true,sort:3,group:"Desarrollo|Development",skill:"NUnit",level:"Básico|Basic",},

			{show:true,sort:2,group:"Seguridad|Security",skill:"JSON Web Tokens ",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Seguridad|Security",skill:"OAuth2 ",level:"Avanzado|Advanced",},

			{show:true,sort:1,group:"Datos|Data",skill:"SQL Server",level:"Experto|Proficient",},
			{show:true,sort:3,group:"Datos|Data",skill:"Anaconda",level:"Básico|Basic",},
			{show:true,sort:3,group:"Datos|Data",skill:"MATLAB",level:"Básico|Basic",},
			{show:true,sort:3,group:"Datos|Data",skill:"Matplotlib",level:"Básico|Basic",},
			{show:true,sort:3,group:"Datos|Data",skill:"NumPy",level:"Básico|Basic",},
			{show:true,sort:3,group:"Datos|Data",skill:"Pandas",level:"Básico|Basic",},
			{show:true,sort:3,group:"Datos|Data",skill:"Tensorflow",level:"Básico|Basic",},

			{show:true,sort:1,group:"Operaciones TI|IT Operations",skill:"Windows",level:"Experto|Proficient",},
			{show:true,sort:2,group:"Operaciones TI|IT Operations",skill:"Linux (Ubuntu)",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Operaciones TI|IT Operations",skill:"MacOS",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Operaciones TI|IT Operations",skill:"Microsoft Azure",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Operaciones TI|IT Operations",skill:"Microsoft Office",level:"Avanzado|Advanced",},
			{show:true,sort:3,group:"Operaciones TI|IT Operations",skill:"Docker",level:"Básico|Basic",},
			{show:true,sort:3,group:"Operaciones TI|IT Operations",skill:"Kubernetes",level:"Básico|Basic",},
			{show:true,sort:3,group:"Operaciones TI|IT Operations",skill:"Microsoft Windows Server",level:"Básico|Basic",},
			{show:true,sort:3,group:"Operaciones TI|IT Operations",skill:"Nginx",level:"Básico|Basic",},


			{show:true,sort:3,group:"Mesas de mezcla digitales|Digital mixing tables",skill:"Behringer X32",level:"Avanzado|Advanced",},
			{show:true,sort:3,group:"Mesas de mezcla digitales|Digital mixing tables",skill:"Digico S21",level:"Avanzado|Advanced",},
			{show:true,sort:3,group:"Mesas de mezcla digitales|Digital mixing tables",skill:"Waves LV1",level:"Avanzado|Advanced",},
			{show:true,sort:3,group:"Mesas de mezcla digitales|Digital mixing tables",skill:"Yamaha M7CL-48",level:"Avanzado|Advanced",},
			
			{show:false,sort:3,group:"Mesas de mezcla análogas|Analog mixing tables",skill:"Cualquiera",level:"Avanzado|Advanced",},
			
			{show:true,sort:3,group:"Superficies de control|Control surface",skill:"Digidesign C|24",level:"Básico|Basic",},
			
			{show:true,sort:3,group:"Sonómetros|Sound level meter",skill:"01dB Solo",level:"Avanzado|Advanced",},
			{show:true,sort:3,group:"Sonómetros|Sound level meter",skill:"Cesva SC310",level:"Avanzado|Advanced",},

			{show:true,sort:2,group:"Software para edición, mezcla y masterización de audio|Audio editing, mixing and mastering software",skill:"Acid Pro",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Software para edición, mezcla y masterización de audio|Audio editing, mixing and mastering software",skill:"Pro Tools",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Software para edición, mezcla y masterización de audio|Audio editing, mixing and mastering software",skill:"Studio One",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Software para edición, mezcla y masterización de audio|Audio editing, mixing and mastering software",skill:"WaveLab",level:"Avanzado|Advanced",},
			
			{show:true,sort:2,group:"Office suite|Office suite",skill:"Google Docs",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Office suite|Office suite",skill:"Microsoft Office",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Office suite|Office suite",skill:"Open Office",level:"Avanzado|Advanced",},
			
			{show:true,sort:2,group:"Software de composición musical en MIDI|MIDI musical composing software",skill:"Finale",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Software de composición musical en MIDI|MIDI musical composing software",skill:"Guitar Pro",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Software de composición musical en MIDI|MIDI musical composing software",skill:"Reason",level:"Avanzado|Advanced",},
			
			{show:true,sort:2,group:"Software de modelamiento acústico|Acoustical modeling software",skill:"CATT-Acoustic",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Software de modelamiento acústico|Acoustical modeling software",skill:"EASE Focus",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Software de modelamiento acústico|Acoustical modeling software",skill:"Insul",level:"Avanzado|Advanced",},
			
			{show:true,sort:2,group:"Sistemas de adquisición de información para sonómetros|Acquisition software for sound level meters",skill:"01dB dbTRAIT",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Sistemas de adquisición de información para sonómetros|Acquisition software for sound level meters",skill:"SFT030 Cesva Capture Studio",level:"Avanzado|Advanced",},
			
			{show:true,sort:2,group:"Software de simulación de circuitos|Circuitry simulation software",skill:"PSpice",level:"Avanzado|Advanced",},
			{show:true,sort:2,group:"Software de simulación de circuitos|Circuitry simulation software",skill:"Proteus",level:"Avanzado|Advanced",},
			
			{show:true,sort:2,group:"Software de modelamiento 3D|3D modeling software",skill:"AutoCAD",level:"Avanzado|Advanced",},
			{show:true,sort:3,group:"Software de modelamiento 3D|3D modeling software",skill:"SketchUp",level:"Básico|Basic",},
			
			{show:true,sort:3,group:"Sistemas de información geográfica|Geographical information system",skill:"ArcGIS",level:"Básico|Basic",},
			{show:true,sort:3,group:"Sistemas de información geográfica|Geographical information system",skill:"CadnaA",level:"Básico|Basic",},
			{show:true,sort:3,group:"Sistemas de información geográfica|Geographical information system",skill:"Sound Plan",level:"Básico|Basic",},

			{show:false,sort:3,group:"",skill:"",level:"",},
		],
		certifications:[
			{show:true,data:"Microsoft Certified: Azure Developer Associate|Microsoft Certified: Azure Developer Associate",date:"2022-02-17"},
			{show:true,data:"Unit Testing for c# Developers|Unit Testing for c# Developers",date:"2022-01-07"},
			{show:false,data:"Work Smarter Not Harder Productive Time Management|Work Smarter Not Harder Productive Time Management",date:"2016-12-28"},
			{show:false,data:"Financial Proficiency for Young Adults|Financial Proficiency for Young Adults",date:"2016-12-26"},
			{show:false,data:"Digital Body Language|Digital Body Language",date:"2017-04-01"},
			{show:false,data:"Cómo Programar para Emprendedores HTML y CSS|Cómo Programar para Emprendedores - HTML y CSS",date:"2017-07-08"},
			{show:false,data:"7 Scientifically Proven Steps to Increase Your Influence|7 Scientifically Proven Steps to Increase Your Influence",date:"2017-04-12"},
			{show:true,data:"Scrum Certification 2022 + Scrum Master + Agile Scrum Training|Scrum Certification 2022 + Scrum Master + Agile Scrum Training",date:"2022-04-11"},
			{show:true,data:"The Complete Guide to Becoming a Software Architect|The Complete Guide to Becoming a Software Architect",date:"2022-04-29"},
			{show:true,data:"Design Patterns in C# and .NET|Design Patterns in C# and .NET",date:"2022-05-28"},
			{show:true,data:"Master .NET and C# Unit Testing with NUnit and Moq|Master .NET and C# Unit Testing with NUnit and Moq",date:"2022-06-14"},
			{show:true,data:"Learn Parallel Programming with C# and .NET|Learn Parallel Programming with C# and .NET",date:"2022-06-25"},
			{show:true,data:"Complete C# Unity Game Developer 3D|Complete C# Unity Game Developer 3D",date:"2022-06-27"},
			{show:true,data:"Advanced Topics in C#|Advanced Topics in C#",date:"2022-07-04"},
			{show:true,data:"Principios SOLID y Clean Code|Principios SOLID y Clean Code",date:"2022-07-19"},
		], 
		personalInterests:[
			{show:false,data:"Bajo eléctrico|Electric bass",},
			{show:false,data:"Guitarra eléctrica|Electric guitar",},
			{show:false,data:"Batería|Drums",},
			{show:true,data:"Piano|Piano",},
			{show:true,data:"Proyectos con Arduino|Arduino projects",},
			{show:false,data:"Proyectos con Raspberry Pi y diversos circuitos electrónicos|Raspberry Pi projects and various electronic circuits",},
			{show:true,data:"Leer libros y Manga|Reading books and Manga",},
			{show:true,data:"Ver Anime|Watch Anime",},
			{show:true,data:"Video juegos|Video Games",},
			{show:true,data:"Juegos de rol (como D&D, Lord of the rings, World of darkness)|Role playing games (like D&D, Lord of the rings, World of darkness)",},
		]
	},
	mutations: {
		mutate(state, payload) {
			state[payload.property] = payload.with;
		},
	},
	actions: {
		setMutation({commit},{property:prop, with:data}){
			commit('mutate', {property:prop, with:data})
		},
	},
	modules: {
	}
})
