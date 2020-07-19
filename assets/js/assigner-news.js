// Nacionales
Genarate_nacionales_1();
Genarate_nacionales_2();
Genarate_nacionales_3();
Genarate_nacionales_4();
Genarate_nacionales_5();
Genarate_nacionales_6();
// sucesos
Genarate_sucesos_1();
Genarate_sucesos_2();
Genarate_sucesos_3();
Genarate_sucesos_4();
Genarate_sucesos_5();
Genarate_sucesos_6();
// Deportes
Genarate_deportes_1();
Genarate_deportes_2();
Genarate_deportes_3();
Genarate_deportes_4();
Genarate_deportes_5();
Genarate_deportes_6();
// Espectaculos
Genarate_espectaculos_1();
Genarate_espectaculos_2();
Genarate_espectaculos_3();
Genarate_espectaculos_4();
Genarate_espectaculos_5();
Genarate_espectaculos_6();




/*
*
*
*
*              NACIONALES
*
*
*
*
*/


function Genarate_nacionales_1(){
  let tittle ="Costa Rica sobrepasa los 10 mil infectados por Covid-19";
  let subtittle="Hoy se reportan 582 nuevos enfermos y un total acumulado de 10.551";
  let content ="7.476 costarricenses y 3.075 extranjeros, para un total de 10.551 personas, son los positivos por Covid-19 en nuestro país de acuerdo con el corte del Ministerio de Salud de este sábado 18 de julio. Rodrigo Marín, director de Vigilancia de la Salud, reveló desde Casa Presidencial en Zapote, San José, que hay 582 nuevos positivos y que los infectados permanecen en 81 cantones. Asimismo, subrayó que se contabilizan siete nuevos fallecimientos para un total de 54 personas, con edades entre los 23 y los 94 años. Por su parte Román Macaya, director ejecutivo de la Caja Costarricense de Seguro Social, agregó que es preocupante el incremento de las personas hospitalizadas. “Reportamos 225 pacientes hospitalizados por Covid-19 y de esos 41 están en Unidades de Cuidados Intensivos y 184 en salón, 77 en Ceaco y los demás en los hospitales de todo el país, lo que demuestra que estamos en una fase de que hay más pacientes fuera del Centro Especializado que adentro y es una situación que se ve desde hace varios días.";
  let image ="./assets/images/news/nacionales/1.jpg";
  let category ="NACIONALES";
  let createdAt ="37 minutos";
  let dataCreated = "today";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-nacionales-1');
}


function Genarate_nacionales_2(){
  let tittle ="Coronavirus tiñe de luto a 7 familias más";
  let subtittle="Cifra total de decesos llegó a 54.";
  let content ="El Ministerio de Salud confirmó que para este sábado 18 de julio se suman siete fallecidos más en el territorio nacional a causa del coronavirus que provoca la Covid-19, para un total de 54 decesos. Se trata de 22 mujeres y 32 hombres, cuyo rango de edad va de los 23 a los 94 años. Una de las lamentables muertes es la de una mujer de 75 años de nacionalidad costarricense y vecina de Puntarenas. Se informó que permanecía internada en el Centro Especializado de Atención a Pacientes Covid-19 (Ceaco) y que la diagnosticaron el 1 de julio.  Como factores de riesgo presentaba hipertensión arterial, diabetes e insuficiencia venosa crónica. “El segundo es un hombre de 63 años, extranjero, vecino de Heredia, falleció en el Hospital San Juan de Dios y fue diagnosticado el 10 de julio. Padecía de hipertensión arterial y diabetes. Y el tercero un hombre de 58 años, vecino de Puntarenas, extranjero, estaba internado en el Hospital México y fue diagnosticado el 28 de junio. Padecía de hipertensión arterial y una enfermedad renal crónica”, ampliaron en un comunicado de prensa.";
  let image ="./assets/images/news/nacionales/2.jpg";
  let category ="NACIONALES";
  let createdAt ="50 minutos";
  let dataCreated = "today";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-nacionales-2');
}


function Genarate_nacionales_3(){
  let tittle ="Costa Rica a punto de superar 10 mil contagios de Covid-19";
  let subtittle="Hoy se contabilizan 423 nuevos enfermos y un total de positivos de 9.969.";
  let content ="Las cifras del Ministerio de Salud en cuanto al avance de la Covid-19 en nuestro país no resultan alentadoras. A hoy viernes 17 de julio, se suman 423 nuevos contagios y un total acumulado de 9.969 positivos. El ministro de esa cartera, Daniel Salas, reveló hace pocos minutos desde Casa Presidencial en Zapote, San José, que además la cifra de fallecidos se incrementó en cinco, para llegar a 47. Dado el riesgo incrementado de transmisión y de acuerdo con las últimas proyecciones en donde se evidencia que existe un riesgo muy importante de que si no hacemos las medidas vamos a tener lamentablemente un colapso de los servicios de salud, en algunas zonas continuamos con medidas restrictivas.";
  let image ="./assets/images/news/nacionales/3.jpg";
  let category ="NACIONALES";
  let createdAt ="12/7/2020";
  let dataCreated = "07/12/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-nacionales-3');
}

function Genarate_nacionales_4(){
  let tittle ="Fronteras serán vigiladas con drones";
  let subtittle="Tienen cámaras con visión térmica y nocturna";
  let content ="El Instituto Costarricense sobre Drogas (ICD) adquirió tres drones de alta tecnología con visión térmica y nocturna que fueron entregados esta semana al Ministerio de Seguridad Pública, con el objetivo de apoyar a los cuerpos policiales con el patrullaje de las zonas fronterizas de Costa Rica. Los cuadricópteros, cuya inversión supera los ¢31 millones, reforzarán la labor desde el aire a los oficiales de la Policía de Fronteras y de la Fuerza Pública en sus funciones de resguardo y control fronterizo, efectuando patrullajes más exhaustivos en sitios de difícil acceso.";
  let image ="./assets/images/news/nacionales/4.jpg";
  let category ="NACIONALES";
  let createdAt ="10/06/2020";
  let dataCreated = "06/10/2020";


  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-nacionales-4');
}

function Genarate_nacionales_5(){
  let tittle ="Turismo se vería afectado por ley seca";
  let subtittle="Hoteles y restaurantes piden no ser incluidos";
  let content ="La Cámara Nacional de Turismo (Canatur) y la Cámara Costarricense de Hoteles (CCH) solicitaron a los diputados excluir a los hoteles y restaurantes del proyecto de ley que se discute en la Asamblea Legislativa, con el cual se facultaría a las municipalidades a prohibir la venta de bebidas alcohólicas en el marco del estado emergencia nacional por la pandemia. Las cámaras del sector manifestaron su preocupación ante la posibilidad de que las municipalidades apliquen la denominada “Ley Seca” al turismo, pues temen que la medida desincentive la visitación en zonas turísticas, lo que agravaría la situación económica que viven algunas comunidades.";
  let image ="./assets/images/news/nacionales/5.jpg";
  let category ="NACIONALES";
  let createdAt ="05/04/2020";
  let dataCreated = "04/04/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-nacionales-5');
}

function Genarate_nacionales_6(){
  let tittle ="Extienden ayuda a familias de Pavas y Alajuela";
  let subtittle="150 hogares recibirán alimentos";
  let content ="La condición de emergencia en la que se encuentra el país a causa de la pandemia del Covid-19 provocó que la situación económica de muchas persona empeorara y es por eso que durante los próximos tres meses se extenderá la ayuda a 150 familias de Pavas y Alajuela con la donación de alimentos. Esta es una iniciativa de Gutis Farmacéutica, la cual entregó durante los meses de mayo, junio y julio una ayuda alimentaria a pobladores de Pavas, San Isidro, Fraijanes y Alajuela Centro.Las ayudas sociales de esta campaña llamada “Trabajamos por vos” incluye alimentos de producción 100% nacional con alto valor nutritivo como arroz, frijoles, atún, lentejas y garbanzos, entre otros ideales para cuidar el sistema inmunológico frente al virus. Además alcohol en gel, producto de protección necesario para evitar un contagio y se está suministrando información de cuidado y prevención del contagio del Covid-19.";
  let image ="./assets/images/news/nacionales/6.jpg";
  let category ="NACIONALES";
  let createdAt ="05/04/2020";
  let dataCreated = "04/05/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-nacionales-6');
}


/*
*
*
*
*              SUCESOS
*
*
*
*
*/



function Genarate_sucesos_1(){
  let tittle ="Protocolo de reos para virus no es funcional";
  let subtittle="Declaran admisible amparo contra Ministerio de Justicia";
  let content ="Jonathan Fonseca, representante sindical de la Asociación Nacional de Empleados Públicos y Privados (ANEP), presentó un recurso de amparo contra el Ministerio de Justicia por la presunta desobediencia y desacato en la aplicación del protocolo de privados de libertad en casos Covid-19. Según consta en el expediente 20-012654-0007-CO, del que DIARIO EXTRA tiene una copia, lo declararon admisible y se establece tres días hábiles para notificar a los jerarcas. En ANEP informaron que el recurso cuestiona el incumplimiento en la atención de casos Covid-19 positivos que se atendían en cada uno de los centros penales, para los cual se le indicó a la Sala la existencia de 1.748 espacios de aislamiento. pero no se utilizaron. Los aprovecharon para trasladar reclusos de otros centros penales como el Carlos Luis Fallas de Pococí, ante lo cual se pone en riesgo la salud pública y aumenta la exposición de contagios masivos. En la información ANEP cuestiona los traslados en las perreras, que no cuentan con condiciones suficientes para esa labor, donde los custodios no han sido capacitados en la forma como se trasladan los reos positivos ni cómo deben cuidarse en la UAI Reinaldo Villalobos.";
  let image = "./assets/images/news/sucesos/1.jpg";
  let category ="SUCESOS";
  let createdAt ="34 minutos";
  let dataCreated = "today";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-sucesos-1');
}


function Genarate_sucesos_2(){
  let tittle ="Sacan policías de cárcel para pruebas Covid-19";
  let subtittle="Mientras que viceministras y allegados lo hacen en prisión";
  let content ="Cuatro oficiales de Policía Penitenciaria que custodiaban a los privados de libertad positivos de Covid-19 en la Unidad de Atención Integral (UAI) Reinaldo Villalobos fueron sacados del centro penal para que se realizaran por sus propios medios las respectivas pruebas, según denuncia recibida por DIARIO EXTRA. La doctora del Sistema Penitenciario en apariencia decidió que es necesario aplicarles dicha prueba, ya que desde el miércoles presentan síntomas que los convierten en casos sospechosos de coronavirus. Los penitenciarios tuvieron contacto directo con un recluso que, aprovechando que abrieron la puerta del espacio donde permanece aislado, salió al patio y no quería ingresar a su celda, por lo que tuvieron que utilizar la fuerza racional para someterlo. Los funcionarios viven en Nicoya, Guápiles, Puriscal y Palmares, y no cuentan con transporte propio, pese a ello, las autoridades del Ministerio de Justicia los obligaron a trasladarse en autobús obviando el riesgo que eso implica para todas las personas que utilizan ese servicio público. Sin embargo, las viceministras de esa cartera y su personal de confianza sí pudieron tener acceso a la realización de pruebas en el centro penal de La Reforma, pese a que ni siquiera cumplen sus funciones de trabajo allí.";
  let image = "./assets/images/news/sucesos/2.jpg";
  let category ="SUCESOS";
  let createdAt ="2 horas";
  let dataCreated = "today";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-sucesos-2');
}

function Genarate_sucesos_3(){
  let tittle ="Extranjeros prenden fuego a centro de aprehensión";
  let subtittle="Policía detuvo a 4 extracontinentales por disturbios, La Cruz, Guanacaste";
  let content ="La bomba de tiempo que sostenía la Dirección General de Migración y Extranjería (DGME) explotó este viernes en el Centro de Atención Temporal para Personas Migrantes (Catem Norte), ubicado en Santa Cecilia de La Cruz, Guanacaste. Un grupo de haitianos y extrarregionales decidieron confabularse contra las autoridades migratorias, manifestándose con un bloqueo sobre la ruta 1 y posteriormente prendiéndole fuego a una carpa que sirve de bodega, donde se almacenan los insumos que se les proveen para dormir, entre ellos colchonetas. Al parecer el zafarrancho empezó porque las 107 personas que se albergan en el Catem Norte, muchas de ellas llevan más de cinco meses de permanecer ahí, están cansadas y desean seguir su camino hacia los Estados Unidos, por lo que pensaron que la única forma de ser escuchados era manifestándose. La protesta hizo que se lanzaran a bloquear la carretera Interamericana Norte, hecho que las autoridades impidieron, por lo cual decidieron prenderle fuego a la carpa donde se guardan las colchonetas, 10 de las cuales se incendiaron. Además varios oficiales de la Policía Profesional de Migración (PPM) fueron agredidos, al igual que varios extrarregionales, de los que detuvieron a 4 por bloqueo de vías nacionales, agresión a la autoridad y resistirse al arresto. Posteriormente los llevaron a la Fiscalía de Liberia para que se determine su situación jurídica.";
  let image = "./assets/images/news/sucesos/3.jpg";
  let category ="SUCESOS";
  let createdAt ="11/07/2020";
  let dataCreated = "07/11/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-sucesos-3');
}

function Genarate_sucesos_4(){
  let tittle ="Pandemia cobra dos vidas más";
  let subtittle="Costa Rica registra 42 fallecimientos";
  let content ="La pandemia del covid-19 en Costa Rica sumó dos nuevas víctimas, confirmó el Ministerio de Salud. Con estas muertes, la cifra alcanzó los 42 lamentables fallecimientos, 17 mujeres y 25 hombres. Las víctimas, de acuerdo con el reporte de las autoridades, tienen un rango de edad de 26 a 94 años. Los decesos más recientes se registraron la tarde de ayer miércoles 15 de julio, informó Salud. El primero de ellos se trata de una mujer de 77 años, costarricense, vecina de Puntarenas. La mujer se encontraba internada en el Hospital San Juan de Dios, siendo diagnosticada con COVID-19 el 15 de julio, mismo día que falleció. Padecía de cáncer de piel, mieloma múltiple y arritmia cardíaca. El segundo fallecimiento se registra en el Hospital Calderón Guardia, y se está en proceso de notificación de la familia.";
  let image = "./assets/images/news/sucesos/4.jpg";
  let category ="SUCESOS";
  let createdAt ="16/07/2020";
  let dataCreated = "07/16/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-sucesos-4');
}

function Genarate_sucesos_5(){
  let tittle ="Covid no perdona a nadie";
  let subtittle="Murió por virus el músico dominicano Víctor Víctor";
  let content ="El cantautor dominicano José Víctor Rojas, conocido como Víctor Víctor, murió el jueves. La información se dio a conocer según un comunicado del Hospital de la Plaza de la Salud de Santo Domingo.El artista de 71 años había sido hospitalizado el 9 de julio por coronavirus, según sus familiares. Su catálogo artístico incluye canciones como “Mesita de Noche”, “Ando buscando un amor” y “Así es mi amor”, entre otras. De acuerdo a información publicada por el medio local El Caribe, el músico se encontraba estable, pero tuvo complicaciones que provocaron el cambio en su tratamiento por lo que fue ingresado en la Unidad de Cuidados Intensivos (UCI) del Hospital General Plaza de la Salud, en Santo Domingo.";
  let image = "./assets/images/news/sucesos/5.jpg";
  let category ="SUCESOS";
  let createdAt ="10/07/2020";
  let dataCreated = "07/10/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-sucesos-5');
}

function Genarate_sucesos_6(){
  let tittle ="Vacuna del Covid-19";
  let subtittle="Universidad rusa completa con éxito pruebas clínicas";
  let content ="La Primera Universidad Médica de Moscú (también conocida como la Universidad Sechenov) ha completado las pruebas clínicas de una vacuna contra el Covid-19. El anuncio se hizo el pasado 12 de julio por Vadim Tarassov, director del Instituto de Medicina de Transición y Biotecnología de la universidad. El propósito de estas pruebas era verificar la seguridad del nuevo fármaco. La vacuna propiamente dicha fue inventada por el Centro Nacional de Investigación en Epidemiología y Microbiología Gamaleya, conjuntamente con el Ministerio de Defensa de Rusia. Ahora comienza la segunda fase, destinada a determinar la eficacia de la vacuna, tal y como explicó Alexánder Ginzburg, director del Centro Gamaleya, a RIA Novosti. Este periodo se extenderá hasta el 28 de julio. Después comenzará el proceso de registro. También explicó que se estaban llevando a cabo negociaciones con el sector privado para que la producción pudiera comenzar en septiembre. El centro espera que la vacunación sea gratuita y que la realicen los establecimientos médicos del país. Es probable que, inicialmente, la vacuna no se comercialice en las farmacias.";
  let image = "./assets/images/news/sucesos/6.jpg";
  let category ="SUCESOS";
  let createdAt ="07/10/2020";
  let dataCreated = "10/07/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-sucesos-6');
}


/*
*
*
*
*              Deportes
*
*
*
*
*/



function Genarate_deportes_1(){
  let tittle ="Clubes de Costa Rica deberán tomar nuevas medidas para entrenar por COVID-19";
  let subtittle="UNAFUT explica en dónde deberán entrenar los clubes de acuerdo a las medidas del Gobierno";
  let content ="COSTA RICA -- Ante las medidas tomadas por el Gobierno de Costa Rica, el Consejo Director de la UNAFUT, ente que rige el balompié tico, acordó algunas medidas referentes a los entrenamientos de los clubes de la máxima categoría para sus respectivas pretemporadas. La propagación del nuevo Coronavirus puso en alerta naranja a varias zonas de la Gran Área Metropolitana, así como otras lejos del Valle Central. Por lo que, a partir de este sábado 11 de julio y hasta el 19 de este mismo mes, las medidas deberán ser más estrictas. En UNAFUT afirmaron que la prohibición de entrenamientos en zona naranja es solo para entre semana, es decir, del lunes 13 al viernes 17 de julio. Durante este periodo, cada club es responsable de verificar que su lugar de entrenamiento no tenga la categoría de alerta naranja.";
  let image = "./assets/images/news/deportes/1.jpg";
  let category ="DEPORTES";
  let createdAt ="50 minutos";
  let dataCreated = "today";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-deportes-1');
}


function Genarate_deportes_2(){
  let tittle ="¡Costa Rica regresó al fútbol y estas fueron las medidas de bioseguridad que tomaron!";
  let subtittle="La Liga de Primera División en Costa Rica regresó a la actividad y lo hicieron en medio de la pandemia del coronavirus.";
  let content ="El partido que abrió la lata en tierras ticas y que reanudó así el fútbol luego de más de dos meses, fue el Guadalupe  vs  Limón, disputado en el Eladio Rosabal Cordero.La Fedefutbol, como ente rector del fútbol en , había girado varias recomendaciones a seguir para llevar a cabo la reanudación del fútbol de la mano también del Ministerio de Salud y Unafut.El protocolo a seguir por el balompié tico fue similar al de la Bundesliga. Se prohibió tocarse la cara; evitar el contacto cercano en la celebración de goles; escupir dentro o fuera de la cancha y sacudirse la nariz dentro o fuera de la cancha, tal y como lo dicta el protocolo que giró. Aunque cabe destacar que si algún jugador llegase a hacer eso, no será amonestado, solamente apercibido de manera verbal.";
  let image = "./assets/images/news/deportes/2.jpg";
  let category ="DEPORTES";
  let createdAt ="3 horas";
  let dataCreated = "today";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-deportes-2');
}

function Genarate_deportes_3(){
  let tittle ="Ministerio del Deporte solicita prudencia y respeto ante el cierre de playas, parques y otros espacios para prevenir Covid-19";
  let subtittle="Playas en costa Rica estaran cerradas";
  let content ="'El ministro del Deporte, Hernán Solano Venegas, exhortó a las organizaciones deportivas, federaciones y atletas a cumplir estrictamente las medidas emitidas por el Ministerio de Salud ante la emergencia nacional que vive el país por el coronavirus covid-19 y adecuar sus entrenamientos desde casa.Ante los últimos acontecimientos sucedidos el fin de semana, el jerarca solicitó prudencia y respeto ante el cierre de playas, parques y otros espacios como una medida para prevenir el contagio de la pandemia mundial. “Sé el momento difícil que están pensando”, agregó el ministro rector del deporte costarricense.“Su alegría es la competencia en sus respectivos deportes, porque son su pasión, pero hoy la historia los está llamando a la competencia más importante de sus vidas, luchar por salvar vidas contra un enemigo invisible”, continuó el jerarca tras alentar a los atletas a ser ejemplos ante la emergencia nacional e invitar a la ciudadanía a quedarse en casa.“Sería un error descuidarnos”, expresó el jerarca tras señalar que esta pandemia se propaga con velocidad, es altamente contagiosa y pone en peligro de muerte a muchos seres humanos si no se acatan las medidas sanitarias.";
  let image = "./assets/images/news/deportes/3.jpg";
  let category ="DEPORTES";
  let createdAt ="17/07/2020";
  let dataCreated = "07/17/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-deportes-3');
}

function Genarate_deportes_4(){
  let tittle ="La relación entre el ejercicio físico y la inmunidad ante el COVID-19";
  let subtittle="Diferentes estudios a nivel mundial han comprobado que el ejercicio tiene un impacto profundo en el funcionamiento normal del sistema inmune del ser humano";
  let content ="El confinamiento al que nos hemos sometido muchísimos costarricenses ante la pandemia por el COVID-19 es muy necesario, pero es igualmente importante mantenernos físicamente activos en nuestras casas, por muy variadas razones. Por eso, en colaboración con el Colegio Americano de Medicina Deportiva (ACSM) y la organización El Ejercicio es Medicina.En esta oportunidad el Ph.D.Luis Fernando Aragón V. Director del Cimohu, recomienda la lectura del siguiente estudio que relaciona la práctica del ejercicio físico, la inmunidad y el COVID-19. Una traducción al idioma español, del artículo en idioma inglés, que el Cimohu ha querido poner en conocimiento del público, y que aquí le presentamos un resumen del artículo original, el cual usted puede consultar también en la página web del Cimohu.";
  let image = "./assets/images/news/deportes/4.png";
  let category ="DEPORTES";
  let createdAt ="15/06/2020";
  let dataCreated = "06/15/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-deportes-4');
}

function Genarate_deportes_5(){
  let tittle ="APROBADO PROTOCOLO SANITARIO PARA LA REACTIVACIÓN DE ACTIVIDADES DEPORTIVAS Y RECREATIVAS";
  let subtittle="Actividades deben de cumplir protocolos a cabalidad";
  let content ="A partir del “Protocolo sectorial para la prevención del COVID-19 en el sector deporte y recreación”, aprobado por  el ministro del Deporte, Hernán Solano Venegas, las organizaciones encargadas de clubes deportivos, instalaciones y eventos deportivos y recreativos de concentración masiva podrán elaborar sus propias guías para reactivar sus actividades previniendo el contagio del virus. Se trata de un documento que contiene los requisitos mínimos para la elaboración de una guía técnica sanitaria sectorial bajo las definiciones emitidas por el Ministerio de Salud, donde cada sector deberá completar con rigurosidad la información solicitada por las autoridades y acatar las disposiciones emanadas en el contexto de la pandemia. El jerarca destacó el trabajo coordinado entre distintas entidades permitió finalizar la propuesta de lineamientos que estuvo a cargo de la Universidad de Costa Rica (Escuela de Ing. Industrial), Instituto Costarricense del Deporte y la Recreación, Universidad Nacional, ASETEC – ITCR y asesores del despacho del ministro del Deporte. “Este protocolo forma parte del trabajo que estamos impulsando junto a las entidades deportivas con el propósito de reactivar de manera progresiva, segura y responsable la actividad deportiva en todo el país”, dijo el ministro del Deporte, advirtiendo que está sujeto a ser actualizado permanentemente con el objeto de que responda en todo momento a las necesidades y lineamientos sanitarios vigentes. “El objetivo propuesto es que el deporte, la recreación y la actividad física en este momento sean una fuente de ejercicio no solo físico, sino emocional, de manera que podamos poner por delante la salud de la ciudadanía y al mismo tiempo se pueda generar posibilidades de trabajo para quienes dependen de esta actividad”, agregó el jerarca.";
  let image = "./assets/images/news/deportes/5.jpg";
  let category ="DEPORTES";
  let createdAt ="18/05/2020";
  let dataCreated = "05/18/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-deportes-5');
}

function Genarate_deportes_6(){
  let tittle ="Ministerio de Salud ordena prohibir uso de gimnasios y piscinas";
  let subtittle="Duración de la medida es por tiempo indefinido. Archivo/La República";
  let content ="Instalaciones deportivas y polideportivos que incluyen piscinas, balnearios y gimnasios deben suspender sus actividades por orden de Ministerio de Salud. Lea más: Salud cancela eventos masivos ante casos de coronavirus y ordena teletrabajo al sector público Actividades y deportes de contacto como Judo, Karate, Lucha y Taekwondo también forman parte de la lista. La medida tendrá una duración indefinida y aplica desde este momento. Lea más: ¿Cerraron su lugar de trabajo ante el coronavirus? Conozca qué puede hacer su patrono Asimismo, se recuerda que que si la situación de la emergencia sanitaria por Covid-19 se mantiene, las reprogramaciones de actividades de concentración masiva podrían no ser autorizadas.";
  let image = "./assets/images/news/deportes/6.jpg";
  let category ="DEPORTES";
  let createdAt ="01/05/2020";
  let dataCreated = "05/01/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-deportes-6');
}

/*
*
*
*
*              Espectaculos
*
*
*
*
*/



function Genarate_espectaculos_1(){
  let tittle ="Fabiana Granados se vio obligada a cerrar su negocio por COVID-19";
  let subtittle="La crisis económica que arrastra las medidas para prevenir la expansión de la pandemia en el país obligaron a Granados a ponerle un alto a su negocio.";
  let content ="La guanacasteca Fabiana Granados, quien clasificara en el top 16 del Miss Universo en el año 2013 en Rusia, y que luego, participara en la última edición de la competencia de baile “Dancing with the Stars” sexta temporada se encuentra con su ánimo afectado. Lo anterior porque un emprendimiento el cual le costó mucho tiempo, dinero y dedicación posicionar, el restaurante y cafetería Milá en Plaza Tempo Escazú, cerró de forma definitiva sus servicios. La crisis económica que arrastra las medidas para prevenir la expansión de la pandemia en el país obligaron a Granados a tomar duras decisiones y eso incluía ponerle un alto a su negocio. Los detalles en la nota adjunta.";
  let image = "./assets/images/news/espectaculos/1.jpg";
  let category ="ESPECTACULOS";
  let createdAt ="2 horas";
  let dataCreated = "today";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-espectaculos-1');
}


function Genarate_espectaculos_2(){
  let tittle ="Famoso Circo del Sol se declara en quiebra debido al COVID-19";
  let subtittle="Los principales accionistas de la empresa, la más importante del mundo circense, han presentado un plan de reestructuración que deberá ser aprobado.";
  let content ="El Circo del Sol se declaró en bancarrota y despidió a 3.480 empleados que se encontraban en suspensión de empleo, como consecuencia de la cancelación de espectáculos por la crisis del coronavirus. Los principales accionistas de la empresa, la más importante del mundo circense, han presentado un plan de reestructuración que deberá ser aprobado por el Tribunal Superior de Quebec. El grupo estadounidense TPG Capital, el chino Fosun Capital Group y el Fondo Canadiense Caisse de Dépôt et Placement du Québec, adquirieron la empresa en 2015 por 1.337 millones de euros. Los inversores inyectarán 267 millones de euros para apoyar la reanudación de sus actividades; el gobierno de Quebec aportará 178 millones de euros y los demás inversores los 100 millones restantes.";
  let image = "./assets/images/news/espectaculos/2.jpg";
  let category ="ESPECTACULOS";
  let createdAt ="12 horas";
  let dataCreated = "today";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-espectaculos-2');
}

function Genarate_espectaculos_3(){
  let tittle ="El coronavirus también enferma a la industria del espectáculo en vivo de Costa Rica";
  let subtittle="Productores de conciertos, proveedores de servicios técnicos y administradores los afecta el covid-19 ";
  let content ="La imagen de Jorge Drexler cantando en un Melico Salazar desierto es, hasta ahora, una de las estampas más dramáticas de lo que significó para los productores de espectáculos en el país, la entrada del  a territorio nacional. Las frustradas presentaciones del cantautor uruguayo, programadas para el martes 10 y miércoles 11 de marzo, a las 8 p. m. en ese teatro capitalino, inauguraron la creciente lista de espectáculos públicos que debieron ser cancelados o postergados a consecuencia de los embates de la pandemia y de un decreto oficial que busca mitigar la propagación de la enfermedad entre los costarricenses. A inicios de semana, el Gobierno ordenó la cancelación de espectáculos masivos por los siguientes 15 días en una primera etapa; sin embargo, el Ministerio de Salud revisará la medida cumplido ese tiempo y definirá si la extiende o la deja sin efecto. En otras palabras, no hay claridad de cuándo podrá reactivarse el calendario de espectáculos.";
  let image = "./assets/images/news/espectaculos/3.jpg";
  let category ="ESPECTACULOS";
  let createdAt ="12/07/2020";
  let dataCreated = "07/12/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-espectaculos-3');
}

function Genarate_espectaculos_4(){
  let tittle ="El sector del espectáculo en La Mancha, notablemente afectado por el Covid-19";
  let subtittle="A la empresa Espectáculos La Mancha, esta crisis les ha afectado al 100 por ciento";
  let content ="Las orquestas de las verbenas, los espectáculos infantiles, la pirotecnia… actos a los que estamos acostumbrados a asistir en los meses estivales y que este año no podremos disfrutar. En Radio Azul nos hemos puesto en contacto con la empresa Espectáculos La Mancha, nos cuenta su gerente, Sara Gómez, que esta crisis les ha afectado al 100%. Sus ingresos de todo el año se originan en los meses de verano En cuanto a las posibles soluciones, Gómez señala que las asociaciones de empresas del sector están reclamando el 50% de los contratos suspendidos pero que, en la mayoría de los casos, no se garantiza la devolución. Desde Espectáculos La Mancha esperan que en el 2021 se retome su actividad completa pero su mayor preocupación es que el 2020 no les impida seguir desarrollando su trabajo.";
  let image = "./assets/images/news/espectaculos/4.jpg";
  let category ="ESPECTACULOS";
  let createdAt ="01/07/2020";
  let dataCreated = "07/01/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-espectaculos-4');
}

function Genarate_espectaculos_5(){
  let tittle ="Promotores de espectáculos costarricenses. A reajustes por Covid-19";
  let subtittle="La economia no soporta mas";
  let content ="Las grandes compañías promotoras de espectáculos reajustan hoy sus calendarios y ofertan opciones al público debido al impresionante número de eventos cancelados a causa de la Covid-19, enfermedad declarada pandemia por la Organización Mundial de la Salud. El gigante de ventas de entradas online Ticketmaster finalizó un plan para reembolsar el dinero de las entradas de más de 18 mil conciertos pospuestos o cancelados en el mundo por la crisis sanitaria, (entre ellos nuestro pais) que obliga a la detención de todo tipo de actividades para evitar aumente el número de contagios. De acuerdo con la revista Billboard a partir del 1 de mayo el público será notificado sobre los espectáculos cancelados o aplazados y la posibilidad de reembolso en un plazo de 30 días, de no hacerlo la entrada será válida para las nuevas fechas. Ticketmaster promueve 55 mil eventos programados para todo el 2020, lo que representa unos 2 mil millones de dólares por concepto de entradas. El mundo del espectáculo está entre los más afectados por la Covid-19, que ha obligado a suspender importantes eventos en el orbe caracterizados por convocar a grandes cantidades de personas. La larga lista de festivales, giras y conciertos cancelados incluye prestigiosos eventos como el Festival de Jazz de Montreux, el New Orleans Jazz and Heritage, y la fiesta de música electrónica Tomorrowland.";
  let image = "./assets/images/news/espectaculos/5.jpg";
  let category ="ESPECTACULOS";
  let createdAt ="13/06/2020";
  let dataCreated = "06/13/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-espectaculos-5');
}

function Genarate_espectaculos_6(){
  let tittle ="Tica con famosos en Televisa: “Por el Covid-19 pararon las grabaciones”";
  let subtittle="Steph Molina Coll actúa en la telenovela “Falsa Identidad”";
  let content ="En Costa Rica es famosa porque es fotoperiodista deportiva, siempre la vemos con una cámara en la mano, dando cobertura a los partidos de fútbol de la primera división, incluso ocasiones viaja a México para tomar fotos en el propio Estadio Azteca. Se trata de Steph Molina Coll, hija de la empresaria artística Mónica Coll, quien tras una pasantía en Televisa logró participar como extra en varias producciones, entre ellas “Falsa Identidad” y “Como tú no hay dos”, que pronto se verán en Costa Rica. ¿Desde cuándo quería ser actriz? -Desde que tenía 9 años, incluso llevé cursos en el Teatro Giratablas y después en la Universidad Nacional. En Costa Rica es muy difícil dedicarse a la actuación. Recuerdo que fui a muchos castings, pero nunca me dieron pelota hasta que el año pasado grabé mi primera película en Costa Rica con unos gringos de Boston, quienes llegaron a hacer un casting y me escogieron. Es una película independiente (se llama “Scam Likely”). Disfruté mucho haciendo eso, por eso decidí venirme a México a probar suerte. Empecé a buscar agencias y mandar fotos. Aquí trabajan con perfiles y logré que me colocaran en alguna serie o proyecto. ¿En cuáles producciones ha participado? -Estuve en una novela que se llama “Falsa Identidad”, de Telemundo, donde sale Dulce María. Ahí fui enfermera. Estuve en “Como tú no hay dos”, de Televisa, con Adrián Uribe. Yo era clienta de un mercado donde se graba gran parte de la novela. En “Como dice el dicho” también fui clienta en un capítulo.";
  let image = "./assets/images/news/espectaculos/6.jpg";
  let category ="ESPECTACULOS";
  let createdAt ="10/06/2020";
  let dataCreated = "06/10/2020";

  createCard(tittle, subtittle, content,image,category,createdAt, dataCreated).appendTo('.theme-espectaculos-6');
}
