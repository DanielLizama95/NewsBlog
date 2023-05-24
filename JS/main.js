//Esta función nos sirve para que se genere el contenido de los artículos dinámicamente.

window.addEventListener("load", function () {
  if (window.location.href.includes("articulo.html")) {
    let articleID = window.location.href.split("=")[1];
    generateArticle(articleID);
  }
});

//Esta función es útil para generar números aleatorios

function pickRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Javascript para la navbar responsive. Común a todas las páginas.

const menu = document.querySelector(".burger-menu-container");
const mobileMenu = document.querySelector(".mobile-menu");

menu.addEventListener("click", (e) => {
  menu.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
  menu.textContent === "✕"
    ? (menu.textContent = "☰")
    : (menu.textContent = "✕");
});

// Animaciones de los iconos de la navbar.
const faIcons = document.querySelectorAll(".navbar-icon");
faIcons.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.classList.add("fa-bounce");
  });
  element.addEventListener("mouseleave", () => {
    element.classList.remove("fa-bounce");
  });
});

//Y esta para el corazón del footer.

const heart = document.querySelector(".fa-heart");
heart.addEventListener("mouseenter", () => {
  heart.classList.add("fa-beat");
  heart.addEventListener("mouseleave", () => {
    heart.classList.remove("fa-beat");
  });
});

// Javascript para el contenido del main en el index.

//Primero seleccionamos el contenedor.
let featuredGrid = document.querySelector(".featured-grid");

//Luego creamos un array con los datos de la miniatura de cada elemento.
let thumbnailData = [
  {
    category: "Engines",
    title:
      "¡Unreal Engine 5.2 ya está disponible! Y nos trajo una alucinante demo",
    editor: "Daniel Lizama",
    date: "May 27, 2023",
    IMG: "https://www.techpowerup.com/img/IUZlxJplNxF30gGj.jpg",
    IMGalt: "foto de un automóvil",
    id: 0,
    articleText: `<p><b class="bold-text">Epic games</b> no solo tiene una <b class="bold-text">tienda de videojuegos</b>&nbsp;que nos ofrece títulos gratis todas las semanas. También cuenta con un conocido motor para juegos, Unreal Engine, que ahora <a href='unrealengine.com/en-US/blog/unreal-engine-5-2-is-now-available' target='_blank'>se ha actualizado</a> a la versión 5.2. En esta nueva versión se han introducido algunos cambios que permitirán a los desarrolladores obtener mayor rendimiento a la hora de <b class="bold-text">crear escenas más realistas y con mayor calidad para los juegos</b>.</p>
    <img src="https://www.hd-tecnologia.com/imagenes/articulos/2023/05/Epic-Games-lanza-Unreal-Engine-5.2-cuando-las-creaciones-digitales-parecen-reales.jpg" alt="Primera foto del motor">
    <p>Una de las novedades es el <b class="bold-text">Marco de Generación de Contenidos Procedimentales (PCG)</b>, que permitirá usarse dentro de Unreal Engine. Con estas herramientas se <b class="bold-text">podrán poblar grandes escenas</b> permitiendo crear grandes mundos de forma rápida,&nbsp;permitirá <b class="bold-text">ejecutarlo en tiempo real</b>, incluso dentro de un juego, para ver las <b class="bold-text">reacciones a los cambios</b>. También se ha añadido <b class="bold-text">Substrate </b>que permitirá <b class="bold-text">crear materiales para mejorar la apariencia de los objetos</b>&nbsp;también en tiempo real. Substrate está especialmente diseñado para <b class="bold-text">modificar capas</b> como añadir líquido sobre metal.</p>
    <img src="https://www.techeblog.com/wp-content/uploads/2023/03/unreal-engine-5-2-preview.jpg" alt="segunda foto del motor">
    <p>Otra novedad es la nueva compatibilidad con Apple Silicon de forma nativa</b></a> para mejor experiencia con estos procesadores. Nueva muestra ML Deformer, que permitirá crear <b class="bold-text">personajes musculosos impulsados por el aprendizaje automático</b> para dar más realismo, incluso marcándolos debajo de la ropa dotando de mayor realismo al personaje.</p>
    <img src="https://www.hd-tecnologia.com/imagenes/articulos/2023/05/Epic-Games-lanza-Unreal-Engine-5.2-cuando-las-creaciones-digitales-parecen-reales-6.jpg" alt="tercera foto del engine">
    <p>Además de estas destacadas novedades, se incluyen otras que podemos <a href="https://docs.unrealengine.com/5.2/en-US/unreal-engine-5.2-release-notes/" target="_blank">ver en las notas de la versión</a>.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/I7zyNDazmGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <p>El equipo de desarrollo también asegura que se implementarán mejoras en el sistema Unreal Engine VCam, proporcionando aún más opciones durante la fase de preproducción de cualquier proyecto en desarrollo. Una de las características más destacadas es <b class="bold-text">la capacidad de manejar múltiples cámaras a través de cámaras virtuales utilizando un único editor.</b> Asimismo, se promete incorporar movimientos más sofisticados y de múltiples capas a las grabaciones.</p>`,
    summary:
      "Te presentamos todas las novedades respecto a esta nueva versión.",
    wordCount: 283,
  },

  {
    category: "Opinión",
    title:
      "Zelda TOTK nos da una cátedra de cómo hacer el mundo abierto perfecto",
    editor: "Daniel Lizama",
    date: "May 24, 2023",
    IMG: "https://i.blogs.es/459cb5/zelda/450_1000.webp",
    IMGalt: "Foto de Zelda Tears of The Kingdom",
    id: 1,
    articleText: `<p>Nintendo es ambiciosa. Lo demostró llevando un juego como <em>The Legend of Zelda: Breath of the Wild</em> a un sistema portátil, pero el paso que ha dado en <strong>Tears of the Kingdom supera todos los límites marcados</strong>: es probable que hayamos jugado la aventura más inmensa que ha existido nunca en los videojuegos. Algo tan loco y desproporcionadamente grande que creemos que nunca alcanzaremos a conocer todo su potencial. En este <strong>análisis a fondo vamos a contaros qué nos ha parecido Zelda Tears of the Kingdom</strong> para Nintendo Switch, <strong>qué hace bien y qué hace mal</strong>, lo que ha aportado al mundo abierto, si ha estado a la altura de su predecesor, y si deberías lanzarte a su abismo y decir adiós a tu vida por una larga temporada.</p>
    <h2 class="title">Desterrados del recuerdo</h2>
      <p>Tears of the Kingdom es la secuela de Breath of the Wild, no exactamente un Breath of the Wild 2. A grosso modo, podríamos decir que es más de lo mismo. No esperábamos otra cosa de una secuela y esto ha servido para amplificar la fórmula, cambiar algunas cosas y hacerte ver, una vez más, que el primer juego de Zelda en Nintendo Switch fue toda una obra maestra.
        Parece que no ha pasado el tiempo y la primera impresión que te llevas de Tears of the Kingdom es la de estar jugando a <b class="bold-text">una expansión o DLC de Breath of the Wild… y ciertamente podría ser así, aunque con unas dimensiones y posibilidades absurdamente grandes.</b></p>
    <img src="https://nintenduo.com/wp-content/uploads/2023/05/Zelda-Tears-of-the-Kingdom1-1-720x416.webp" alt="Foto de Link cayendo">
    <p>Este nuevo juego de Zelda comienza unos años después de los hechos ocurridos en Breath of the Wild, aunque la intención de Nintendo con este juego ha sido que pueda ser disfrutado por todos los jugadores, incluso si no conocen la historia de la precuela.</p>
    <p>Esto ha provocado inconsistencias en el juego: <b class="bold-text">los personajes no son apenas conscientes de su propia historia</b> y, al no querer hacer spoilers sobre lo que ocurre en Breath of the Wild, tampoco se avanza en ese sentido y se opta por una trama totalmente nueva. Importantes personajes del primer juego apenas son mencionados, mientras que su enemigo principal, Ganon el Cataclismo, apenas parece que nunca hubiera existido.</p>
    <img src="https://nintenduo.com/wp-content/uploads/2023/05/Zelda-Tears-of-the-Kingdom1-2-720x416.webp" alt="captura del juego">
    <h2 class="title">Más historia original, menos profundidad.</h2>
    <p>Quien jugó a Breath of the Wild se preguntará qué le ha pasado a los personajes para que no tengan en cuenta su propia historia. Son decisiones para hacer más accesible el juego y que repercuten en la forma de contar su historia.
      Si en Breath of the Wild tuvimos una trama centrada en el recuerdo y la evolución de los personajes en una situación de emergencia, en Tears of the Kingdom es el caso contrario: <b class="bold-text">en pos de una historia épica se sacrifica la evolución de los personajes</b>, que tienen sus propias motivaciones pero cuyos arcos argumentales se basan en la toma de decisiones, y no tanto en el crecimiento personal. No tendremos una princesa Zelda frustrada por no conseguir sus objetivos y sintiéndose culpable por decepcionar a su padre, o a una Mipha enamorada que, a cada escena, veía cómo Link estaba aún más cerca.</p>
    <img src="https://nintenduo.com/wp-content/uploads/2023/05/Zelda-Tears-of-the-Kingdom1-3-720x416.webp" alt="Link a caballo">
      <p>Para algunos, la historia de Tears of the Kingdom será la más especial y atrevida de Zelda, y para otros será el detonante que bombardea todo el lore de la saga, al concederse algunas licencias para saltarse sus propias normas.</p>
      <p>Y a título personal: a nosotros nos ha gustado. Nos habría parecido genial que hubiera un poco más de evolución en los personajes como la tuvieron en Breath of the Wild, pero las sensaciones finales han sido muy similares.</p>
      <h2 class="title">Las lágrimas de Nintendo Switch</h2>
      <p>Nintendo Switch ya no puede con sus propios juegos. La consola se lanzó en el 2017 con un hardware no especialmente puntero en potencia. Como consecuencia, los desarrolladores han tenido que ingeniárselas para llevar impresionantes apartados técnicos y mundos abiertos con resultados increíbles. Bueno, no todos.</p>
      <p>6 años después llega Zelda Tears of the Kingdom siendo, sin lugar a dudas, <b class="bold-text">el juego más potente y mejor optimizado de Nintendo Switch.</b> Un mundo mucho más inmenso que el Hyrule de Breath of the Wild corre sin tiempos de carga para dejarnos con la boca abierta tras descender desde los cielos hasta incluso bajo tierra. El resultado ha sido un juego muy similar gráficamente a Breath of the Wild, con algunas mejoras notorias en la iluminación y la distancia de dibujado.</p>
      <img src="https://nintenduo.com/wp-content/uploads/2023/05/Zelda-Tears-of-the-Kingdom1-1-1-720x416.webp" alt="Link en Paravela">
      <p>Con un apartado artístico que evoca a la animación japonesa, Tears of the Kingdom mantiene una estética de colores no muy saturados, optando por <b class="bold-text">mostrar un contraste</b> entre la oscuridad del subsuelo y la iluminación y brillo de Hyrule en sus cielos.</p>
      <p>Además, se nos dan herramientas para modificar la iluminación en lugares oscuros a nuestro gusto. No con una alta precisión, pero con acabados muy buenos y naturales.</p>
      <p>Está claro que si el hardware fuera más potente se podrían obtener mejores resultados, sobre todo para paliar las consecuencias de la optimización extrema: la resolución máxima del juego es de 900p, variando en función de la carga de procesamiento en pantalla pero con valores mínimos limitados. Una vez esos valores se alcanzan, el rendimiento baja de forma controlada.</p>
      <p>Tras el análisis técnico hemos visto que el objetivo de Zelda Tears of the Kingdom es <b class="bold-text">mantener 30 imágenes por segundo estables, bajando hasta 20 fotogramas en momentos puntuales</b>. Esto ocurre especialmente al aparecer transparencias y mallas en el terreno al usar los diversos poderes de Link. Su rendimiento es equiparable al de Breath of the Wild: molesta en ocasiones la baja resolución y la pérdida de fotogramas por segundo, pero es asumible y no perjudica la experiencia de juego.</p>
      <p>La única pega técnica que tenemos son algunos tiempos de carga mal colocados en la entrada de los santuarios, haciéndonos creer que no van a existir o van a ser muy breves, como ocurría en Bayonetta, pero pasando la pantalla a negro. En ese sentido, preferiríamos que hubieran dejado algo similar a un ascensor, como en Breath of the Wild, y que esto pasará más desapercibido.</p>
      <h2 class="title">El mundo abierto en Zelda Tears of the Kingdom</h2>
      <p>El juego tiene una estructura de ruta prácticamente calcada a la de Zelda Breath of the Wild. Si has jugado al anterior, te darás cuenta de que la originalidad la han volcado enteramente en nuevas herramientas y lugares innovadores, porque es imposible no tener cierta sensación de pesadez al tener que hacer los mismos tipos de tareas principales de la anterior aventura una vez más.</p>
      <p>Por suerte, <b class="bold-text">Nintendo ha sabido variar el mundo de Hyrule</b> lo suficiente para que no se sienta el mismo, con millones de cosas por hacer y multiples soluciones de abordarlas.</p>
      <img src="https://nintenduo.com/wp-content/uploads/2023/05/Zelda-Tears-of-the-Kingdom1-4-2-720x416.webp" alt="gameplay">
      <p>Creemos que Nintendo ha dado a los “científicos” jugadores de Breath of the Wild el juguete que querían con Tears of the Kingdom. Se echa de menos especialmente el poder del Paralizador, que acumulaba energía cinética para después soltarla. Este poder estaba específicamente creado para sacar el máximo provecho al motor de físicas y, sin él, <b class="bold-text">creemos que se ha perdido un punto importante.</b></p>
      <p>Han sido valientes haciendo <b class="bold-text">un juego de Zelda complicado y desafiante</b>. Hemos notado un aumento de dificultad en la saga que puede que pille de imprevisto a muchos jugadores, pero que considerábamos necesario y que terminará aportando más diversión.</p>
      <h2 class="title">El videojuego más inmenso</h2>
      <p>Cuando juntas algo enorme, y te empeñas en hacerlo aún más grande, te sale un monstruo como Zelda Tears of the Kingdom. Resulta increíble el tamaño y contenido que ofrece este juego: es <b class="bold-text">algo tan loco que hasta que no lo juegas, no llegas a creértelo</b>. Y menos que corra de forma tan correcta en Nintendo Switch.</p>
      <img src="https://nintenduo.com/wp-content/uploads/2023/05/Zelda-Tears-of-the-Kingdom1-2-3-720x416.webp" alt="más foto de gameplay">
      <p>Este juego va a dar a los fans de Zelda la epicidad argumental que estaban pidiendo, dejando a un lado la evolución y crecimiento de los personajes en favor de una historia que choca con el lore de la saga y te deja con más preguntas que respuestas.</p>
      <p><b class="bold-text">Zelda Tears of the Kingdom es una experiencia única en los videojuegos</b> y una expansión bestial de lo que conocimos en Breath of the Wild, con algunos momentos que te dejarán con la boca abierta y haciendo que te pierdas por su mundo sin que te des cuenta.</p>`,
    summary:
      "Si ya creíamos que BOTW era el mejor juego de su tipo, TOTK nos demuestra que aún puede haber más.",
    wordCount: 1338,
  },

  {
    category: "Opinión",
    title: "¿Necesito una PC costosa para empezar a programar?",
    editor: "Daniel Lizama",
    date: "May 20 2023",
    IMG: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    IMGalt: "Descripción de la imagen",
    id: 2,
    articleText: `<p>En el mundo de la programación, es común escuchar la idea de que necesitas una computadora potente y costosa para poder comenzar a programar. Sin embargo, <b class="bold-text">esto no es del todo cierto.</b></p>
    <p>Si bien tener una computadora de alto rendimiento puede ser beneficioso para ciertos tipos de desarrollo, como el desarrollo de videojuegos o el procesamiento de datos intensivo, no es un requisito absoluto para comenzar en el mundo de la programación.</p>
    <p>Claro, ahora podrás decir que este es un blog sobre desarrollo de videojuegos. Y ciertamente, la afirmación de arriba es correcta, pero con los videojuegos 3D. La realidad es que <b class="bold-text">no necesitas un PC potente para aprender las bases y hacer juegos 2D sencillos</b></p>
    <p>Además, muchos lenguajes de programación y entornos de desarrollo pueden funcionar perfectamente en computadoras de especificaciones modestas gracias a que es posible utilizar herramientas en línea y plataformas de desarrollo en la nube que te permiten programar sin necesidad de tener una máquina potente.</p>
    <p>Lo más importante para empezar a programar es <b class="bold-text">tener una actitud de aprendizaje y práctica constante</b>. Puedes comenzar con una computadora básica, instalar un editor de texto o un entorno de desarrollo ligero, y aprender los conceptos fundamentales de la programación.</p>
    <p>A medida que avances en tus habilidades y proyectos, podrás evaluar si necesitas invertir en una computadora más potente según tus necesidades específicas.</p>
    <img src="https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png" alt="PC">
    <p>En resumen, no necesitas una PC costosa para empezar a programar. Lo más importante es tener pasión, dedicación y perseverancia en el aprendizaje de la programación.</p>`,
    summary: "Hoy contestaremos esta incógnita y haremos una reflexión",
    wordCount: 250,
  },

  {
    category: "Engines",
    title: "Motores de videojuegos más utilizados en 2023",
    editor: "Daniel Lizama",
    date: "May 17 2023",
    IMG: "https://gamersrd.com/wp-content/uploads/2022/02/Con-estos-motores-graficos-podras-iniciar-tu-carrera-como-desarrollador-de-videojuegos-3.jpg",
    IMGalt: "Collage con varios engines de videojuegos",
    id: 3,
    articleText: `<p>Los motores de videojuegos son herramientas fundamentales en el desarrollo de juegos, ya que ofrecen un conjunto de funcionalidades y recursos para agilizar y simplificar el proceso de creación. En la actualidad, existen varios motores de videojuegos populares y ampliamente utilizados por desarrolladores de todo el mundo.</p>
    <p>A continuación, te presentamos algunos de los motores de videojuegos más destacados:</p>
      <h2 class="bold-text title">Unity:</h2>
        <img src="https://dotnet.microsoft.com/static/images/games/unity/unity-engine-landscape-swimlane.png?v=qXuAEuTmn1teWmBipAskcg5IpW6Tn2fEunOIqAYui20" alt="logo de Unity">
         <p>es uno de los motores de videojuegos más populares y versátiles. Es ampliamente utilizado tanto por desarrolladores independientes como por estudios de renombre. Unity ofrece una amplia gama de herramientas y funcionalidades, y es conocido por su facilidad de uso y soporte multiplataforma.</p> 
     <h2 class="bold-text title">Unreal Engine:</h2>
     <img src="https://s2.glbimg.com/ljaMxgf-ieh2FcTSXHd2vHESw7w=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/9/U/yfjm8fThCT4N5wwDaUaQ/unreal.png" alt="Entorno de Unreal Engine">
     <p>Unreal Engine es otro motor de videojuegos muy popular que ha sido utilizado en el desarrollo de numerosos títulos aclamados. Destaca por su potencia gráfica y sus capacidades de renderizado, lo que lo convierte en una opción popular para juegos de alta calidad visual.</p>
     <h2 class="bold-text title">Godot:</h2>
        <img src="https://godotengine.org/storage/app/uploads/public/5ec/fac/334/5ecfac334405b789986563.png" alt="entorno de Godot">
     <p>Godot es un motor de videojuegos de código abierto que ha ganado popularidad en los últimos años. Ofrece un entorno de desarrollo intuitivo y una amplia gama de características, lo que lo convierte en una opción atractiva para desarrolladores que buscan una alternativa gratuita y flexible.</p>
     <h2 class="bold-text title">Construct:</h2> 
     <img src="https://cdn.mycplus.com/mycplus/wp-content/uploads/2020/04/construct.png" alt="">
     <p>Construct es un motor de videojuegos enfocado en la creación de juegos 2D. Es conocido por su enfoque basado en eventos y su interfaz visual intuitiva, que permite a los desarrolladores crear juegos sin necesidad de programar extensivamente.</p>
     <h2 class="bold-text title">CryEngine:</h2> 
     <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/54377b3d-fec5-41c6-88ed-4d9c7876bdb5.png?auto=format&q=50" alt="foto del entorno de CryEngine">
     <p>CryEngine es un motor de videojuegos de alto rendimiento utilizado en la creación de juegos de alta gama. Es conocido por su capacidad de renderizado avanzada y su potencial para crear entornos visuales impresionantes.</p>
    
    <p>Estos son solo algunos ejemplos de los motores de videojuegos más populares y utilizados en la industria. Cada uno de ellos tiene sus propias fortalezas y características distintivas, por lo que la elección del motor adecuado depende de los requisitos y objetivos del proyecto en particular.</p>
    <p>Si estás interesado en el desarrollo de videojuegos, explorar y familiarizarte con estos motores te brindará una base sólida para comenzar tu camino en esta emocionante industria.</p>`,
    summary:
      "Presentamos la lista oficial de popularidad de los motores de videojuegos más importantes en el año 2023",
    wordCount: 344,
  },

  {
    category: "Opinión",
    title: "¿Tiene futuro el desarrollo de videojuegos en México?",
    editor: "Daniel Lizama",
    date: "May 15 2023",
    IMG: "https://cdn2.dineroenimagen.com/media/dinero/styles/gallerie/public/images/2021/09/videojuegos-mexicanos.jpg",
    IMGalt: "Collage de tres juegos mexicanos",
    id: 4,
    articleText: ` <p>Los videojuegos se han convertido en una industria en constante crecimiento y México no se queda atrás. Con una rica historia y antecedentes en el desarrollo de juegos, el país se ha posicionado como un actor destacado en la escena internacional de los videojuegos.</p>
    <p>México cuenta con una gran comunidad de desarrolladores talentosos y creativos que han estado construyendo una sólida base para el futuro de los videojuegos hechos en el país. Durante décadas, se han producido videojuegos de calidad, desde clásicos de la época de los 8 y 16 bits hasta títulos más recientes y ambiciosos.</p>
    <p><b class="bold-text">La industria de los videojuegos en México ha experimentado un crecimiento significativo en los últimos años</b>. Con una combinación de talento creativo, pasión y el respaldo de instituciones y programas de apoyo, los desarrolladores mexicanos han logrado destacar a nivel nacional e internacional.</p>
    <h2 class="title">Antecedentes</h2>
    <p>Los antecedentes de los videojuegos en México se remontan a las décadas de los 80 y 90, con la aparición de estudios y empresas que sentaron las bases de la industria en el país. Aunque en aquel entonces el desarrollo de videojuegos en México era limitado, se sentaron las bases para futuros avances.
      Ciertamente, se han sentado las bases para un futuro prometedor. El país ha visto el surgimiento de estudios de desarrollo de renombre, así como el florecimiento de una comunidad indie vibrante y en constante expansión.</p>
<img src="https://i.ytimg.com/vi/u_ERufWT9sE/maxresdefault.jpg" alt="Foto de Guacameelee"> 
<p>México se ha convertido en un semillero de talento en la industria de los videojuegos. Los desarrolladores mexicanos han demostrado su capacidad para crear experiencias de calidad en diferentes géneros y plataformas. Juegos como "Mulaka", "GRIS" y "Guacamelee!" han recibido reconocimiento a nivel internacional, posicionando a los desarrolladores mexicanos en el mapa.</p>         

<h2 class="title">El futuro</h2>
<p><b class="bold-text">El futuro de los videojuegos hechos en México es prometedor</b>. El gobierno y diversas instituciones han impulsado programas de apoyo y financiamiento para fomentar el crecimiento de la industria. Además, se han creado comunidades y espacios de colaboración que permiten a los desarrolladores intercambiar ideas, conocimientos y apoyarse mutuamente.</p>
<p>La diversidad cultural y el rico folclore mexicano han sido fuentes de inspiración para muchos juegos. La incorporación de elementos de la cultura mexicana en los videojuegos no solo atrae a los jugadores locales, sino que también genera interés en el mercado internacional. Esto abre oportunidades para la creación de juegos únicos y distintivos que destacan la identidad mexicana.</p>
<p>Además, el avance de la tecnología y el acceso a herramientas de desarrollo cada vez más accesibles han democratizado la creación de videojuegos. Esto ha permitido que más personas en México incursionen en la industria, ampliando aún más el panorama y abriendo la puerta a nuevas ideas y propuestas innovadoras.</p>
<img src="https://s.yimg.com/ny/api/res/1.2/_akVIUSv9ygjRvCjfr67Bg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMA--/https://media.zenfs.com/es/business_insider_m_xico_941/c52d94fa2a47807ce9dab83379c77744" alt="foto de varios juegos mexicanos">
<p>En el futuro, se espera que México continúe creciendo en la industria de los videojuegos. Los desarrolladores mexicanos están aprovechando la creatividad, la pasión y la diversidad cultural del país para crear experiencias únicas y auténticas. Se están explorando temas relevantes y se están abordando diferentes géneros, desde juegos indie con una fuerte identidad cultural hasta títulos de gran escala que compiten a nivel internacional.</p>
<p>El futuro de los videojuegos hechos en México se presenta lleno de potencial. Con el avance de la tecnología, la expansión del mercado global y el crecimiento de la comunidad de jugadores, México está listo para destacar aún más en la escena internacional. Se espera que nuevos talentos emerjan, que se desarrollen títulos innovadores y que se establezcan alianzas estratégicas con actores clave de la industria.</p>    
<h2 class="title">Conclusión</h2>
<p>En resumen, el futuro de los videojuegos hechos en México se vislumbra brillante. Con el talento, la pasión y el apoyo adecuado, los desarrolladores mexicanos están preparados para seguir sorprendiendo al mundo con sus creaciones. Los antecedentes y logros alcanzados hasta ahora marcan el camino hacia un futuro prometedor en la industria de los videojuegos en México.</p>`,
    summary:
      "Hoy reflexionaremos sobre el pasado, presente y futurod el desarrollo de videojuegos en México",
    wordCount: 634,
  },

  {
    category: "Inteligencia Artificial",
    title: "Esta IA puede capturar tus movimientos gratis y desde el navegador",
    editor: "Daniel Lizama",
    date: "Feb 20 2023",
    IMG: "https://assets.3dtotal.com/plask.ub67yo.jpg",
    IMGalt: "Imagen de un chico bailando y una IA que imita sus pasos",
    id: 5,
    articleText: ` <p>
    Las técnicas de captura de movimiento forman parte de los recursos más
    interesantes del mundo audiovisual, pues tras un proceso que suele ser
    complejo, es posible animar un personaje en base a los movimientos de
    una persona.
  </p>
  <p>
    Antes, la única vía para poner en práctica esta técnica era mediante
    el uso de trajes con sensores que reportan los movimientos de las
    articulaciones monitoreadas a un editor de animaciones. Sin embargo,
    ahora la IA hace más fácil esta tarea, dejando todo en manos de una
    potente aplicación.
  </p>
  <h2 class="title">
    Captura de movimiento para vídeos, gratis y desde el navegador
  </h2>
  <p>
    Plask es una completa herramienta de captura de movimiento para la
    realización de animaciones. Se ofrece de manera totalmente gratuita a
    través de la web, encontrándose disponible únicamente a través de
    aquella vía, para su ejecución desde el navagador.
  </p>
  <p>
    Este servicio, proveniente de Corea, apuesta por la unificación de las
    principales herramientas necesarias para este tipo de trabajos,
    mediante una aplicación web concebida con el propósito de prescindir
    de aplicaciones accesorias y cuya interfaz recuerda de cierta forma a
    Blender, pero de una manera más simplificada.
  </p>
  <p>
    La interfaz de Plask cuenta con un sistema para gestionar de manera
    ordenada los proyectos. La aplicación soporta además los principales
    formatos asociados a estos proyectos, como GLB, FBX, BVH y otros más.
  </p>
  <p>
    Adicionalmente, para quienes recién se introduzcan en este mundo, esta
    aplicación de animación ofrece un completo
    <a
      href="https://plasticmask.notion.site/User-guide-ac4bba1b75384c309e7a24e6542454ba"
      >manual introductorio</a
    >, que ayuda a conocer de mejor forma a Plask para aprovechar todo su
    potencial.
  </p>
  <p>
    Según sus desarrolladores, Plask contará próximamente con herramientas
    para colaborar en equipo, generar NFTs y galerías, junto con un
    espacio consagrado para destacar el trabajo de algunos creadores
    presentes en la plataforma.
  </p>
  <p>Esta plataforma elimina de la clásica ecuación de esta clase de animaciones toda la parafernalia técnica antes requerida. En su lugar, dependiendo sólo de un ordenador, un algoritmo de IA se encarga de identificar en un vídeo las extremidades del cuerpo y sus principales articulaciones, para rastrear sus movimientos y emular su trayectoria.</p>
  <p>Al no ser un absoluto reemplazo para las tecnologías profesionales de animación, los resultados que se pueden obtener son más que llamativos si se utiliza como base un vídeo capturado en buena calidad.</p>
<h2 class="title">¿Existen otras opciones?</h2>
<p>Por supuesto que sí. Aquí te dejamos un video del conocido desarrollador de videojuegos Alva Majo, comparando estas herramientas gratuitas</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/UiWqHM-T3qI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<p>¿Qué les parece?</p>`,
    summary:
      "Esta IA podría ser un antes y un después en el desarrollo de videojuegos.",
    wordCount: 378,
  },
  {
    category: "Guías",
    title: "Guía para publicar tu primer videojuego en Steam",
    editor: "Daniel Lizama",
    date: "Feb 20 2023",
    IMG: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/steam-3035480.jpg?tf=1200x",
    IMGalt: "Logo de Steam",
    id: 6,
    articleText: `<p>Publicar un juego en Steam, una de las plataformas de distribución digital más populares para videojuegos, implica seguir un proceso específico. A continuación, te brindaré una visión general de los pasos involucrados en la publicación de un juego en Steam:</p>
    <h2 class="title">Creación de una cuenta de desarrollador en Steam</h2>
   <p>Creación de una cuenta de desarrollador en Steam: Lo primero que debes hacer es crear una cuenta de desarrollador en Steam. Puedes acceder al sitio web de Steamworks y seguir el proceso de registro. Durante el registro, se te pedirá que proporciones información sobre tu estudio o empresa.</p>
    <h2 class="title">Preparación del juego</h2>
    <p>Antes de publicar tu juego, debes asegurarte de que esté completo y listo para su distribución. Esto incluye realizar pruebas exhaustivas, corregir errores y optimizar el rendimiento. También debes asegurarte de tener todos los activos necesarios, como imágenes, videos y descripciones del juego.</p>
    <img src="https://ucarecdn.com/7200264e-beaf-4607-8884-8894d30ab872/" alt="un juego indie">
    <h2 class="title">Preparación de la página del juego en Steam</h2>
    <p>
      En Steamworks, la plataforma de desarrollo de Steam, podrás crear la página de tu juego. Aquí es donde mostrarás la información clave del juego, como la descripción, las capturas de pantalla, los videos y los requisitos del sistema. También deberás establecer el precio y las opciones de distribución, como los idiomas disponibles y las restricciones regionales.
    </p>
    <h2 class="title">Configuración de la versión del juego</h2>
    <p>Deberás crear y configurar la versión del juego que deseas publicar en Steam. Esto puede incluir la elección de la rama de distribución (por ejemplo, versión pública o versión beta), la configuración de actualizaciones automáticas y la integración de funciones especiales de Steam, como logros o estadísticas.</p>
    <img src="https://zwiftdmz-marcom-us-east.s3.amazonaws.com/support/EN/Cycling/Content/Resources/Images/Troubleshooting/System%20Bar.jpg" alt="instrucción">
    <h2 class="title">Envío de juego para revisión</h2>
    <p>Envío del juego para revisión: Una vez que hayas preparado todo, deberás enviar tu juego para revisión a Valve, la empresa detrás de Steam. Ellos realizarán una evaluación para garantizar que tu juego cumpla con los requisitos técnicos y de contenido establecidos por la plataforma. También verificarán que tu juego cumpla con las políticas y directrices de Steam.</p>
    <h2 class="title">Configuración final y lanzamiento</h2>
    <p>Después de que tu juego haya sido aprobado, podrás realizar la configuración final en Steamworks, como establecer la fecha de lanzamiento, configurar las opciones de precompra (si corresponde) y finalizar los detalles de distribución. Una vez que todo esté configurado, podrás lanzar oficialmente tu juego en Steam.</p>
    <h2 class="title">Mantenimiento y actualizaciones</h2>
    <p> Después del lanzamiento, es importante mantener tu juego actualizado y responder a cualquier problema o consulta de los jugadores. Steam proporciona herramientas y funcionalidades para administrar actualizaciones, interactuar con la comunidad de jugadores y recopilar comentarios y reseñas.</p>
    <p>Es importante tener en cuenta que el proceso de publicación puede variar en función de los requisitos y políticas actuales de Steam. Es recomendable consultar la documentación oficial de Steamworks y seguir las indicaciones proporcionadas por Valve para obtener información detallada y actualizada sobre cómo publicar un juego en Steam.</p>`,
    summary: "Cómo publicar tu primer juego y no morir en el intento.",
    wordCount: 431,
  },

  {
    category: "Engines",
    title: "Unity despide a más de 600 empleados",
    editor: "Daniel Lizama",
    date: "May 07 2023",
    IMG: "https://www.mundodeportivo.com/alfabeta/hero/2023/05/motor_unity_abj.jpg?width=1200&aspect_ratio=16:9",
    IMGalt: "Logo de Unity",
    id: 7,
    articleText: `<p>Desde que tuvo lugar la pandemia, muchas empresas han optado por ahorrar recursos de la manera más clásica posible. Despedir empleados y cerrar oficinas suele ser lo más habitual en estos casos, la última empresa en hacerlo es Unity, la famosa empresa que cede su <a class="article-link" href="#">motor gráfico a la creación de videojuegos</a>. El motor de Unity se puede ver en consolas, PC, móviles y VR.
    <b class="bold-text">En esta ocasión, la empresa ha despedido aproximadamente a 600 empleados y no solo eso, si no que tiene pensado cerrar casi la mitad de sus oficinas en los próximos años.</b> Actualmente cuenta con 58 oficinas repartidas a lo largo del mundo y la intención es que ese número baje hasta las 30, como os hemos dicho, casi el cincuenta por ciento del total, una auténtica locura.</p>
    <h2 class="article-title">Unity hace recortes en su plantilla</h2>
    <p>
        Todo esto lo sabemos gracias a una entrevista en el <a class="article-link" href="#">Wall Street Journal</a>, el cual os dice lo que os estamos comentando ahora, la compañía planea despedir a gente y cerrar un gran número de oficinas. Todo esto no será inmediatamente, si no que lo harán en unos cuantos años, <b class="bold-text">por lo que será un proceso lento y medido; veremos en qué termina todo esto.</b> Pero ya sabéis que Unity no es la única que ha hecho esto, pudimos ver esta práctica en Amazon, EA, Take-Two y otras cuantas más.
    </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eXYUNrgqWUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p>
        Con respecto a lo que dice la empresa,<b class="bold-text"> estos recortes se deben a un esfuerzo para reducir los niveles de gestión, optimizar sus operaciones y así mejorar la rentabilidad de la empresa.</b> Según el CEO de Unity, Joh Riccitiello, todo esto es producto de una preparación para obtener un mayor crecimiento. Algo que mucha gente no entenderá, sobre todo los trabajadores de Unity, pero que como ya sabemos, ocurre en los negocios.
Como bien sabéis, este motor no solamente se utiliza en juegos, si no que también está disponible para películas, <a class="article-link" href="#">desarrollo de IA</a> e incluso en la industria automovilística. <b class="bold-text">Veremos cómo afectan estas decisiones en un futuro, pero son grandes las acciones que la empresa tiene previsto llevar a cabo.</b> Todo esto viene después de una acción similar el año pasado, donde la empresa despidió a 500 empleados.
    </p>`,
    summary: "Continuan los despidos masivos en la industria tech",
    wordCount: 367,
  },
  {
    category: "Creadores",
    title:
      "Los mejores canales de YouTube sobre desarrollo de videojuegos en español",
    editor: "Daniel Lizama",
    date: "Abr 18 2023",
    IMG: "https://scontent.fcjs3-2.fna.fbcdn.net/v/t1.15752-9/346150435_1020843602232889_7172892165946108857_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=kQmBj7SCWfYAX93L2MK&_nc_ht=scontent.fcjs3-2.fna&oh=03_AdQpmcTftfdRYWlBr0SSWpp02ALl9HHxbTEVuCmg8NBnnA&oe=648CBEDB",
    IMGalt: "Foto de Alva Majo, Guinxu y Jasperdev",
    id: 8,
    articleText: `<p>
    Los canales de desarrollo de videojuegos han sido un antes y un
    después en el mundo de los juegos indie. Ya que han servido como guía
    o inspiración para muchos jóvenes que sueñan con hacer su propio
    videojuego. A continuación te presentamos algunos de los más
    importantes.
  </p>
  <h2 class="title">Guinxu</h2>
  <img
    src="https://www.guinxu.com/fotos/guinxu/guinxu-montjuic.jpg"
    alt=""
  />
  <p>
    Empecemos esta lista con el pionero de los canales sobre desarrollo de
    videojuegos en español, Guinxu. Guinxu es el sobrenombre de Guillem
    Salvadó, un youtuber y desarrollador de videojuegos oriundo de
    Barcelona que actualmente cuenta con más de 700,000+ suscriptores en
    YouTube
  </p>
  <p>
    Sus inicios se remontan al año 2006 cuando hizo un videojuego llamado
    Training Dogs. Un juego inspirado en Pokémon pero donde capturas
    perros. Fue hecho en Java con ayuda de su padre, y posteriormente le
    hizo un remake dos años después.
  </p>
  <img
    src="https://archive.org/download/training-dogs/Captura%20de%20pantalla%20%281640%29.png"
    alt="Gameplay de Training Dogs"
  />
  <p>
    Su siguiente juego relevante fue Gemdow Quest. Guinxu le dedicó 8 años
    al desarrollo de ese juego, que salió en 2014, y recibió un par de
    actualzaciones hasta 2016.
  </p>
  <img
    src="https://guinxu.com/games-img/gemdow-quest-1.png"
    alt="Gameplay de Gemdow Quest"
  />
  <p>
    Guinxu quería promocionar su juego, y tras no tener tanto éxito en
    foros de desarrollo, decidió crearse un canal sobre aquello, a la vez
    que promocionaba su propio juego, y futuros desarrollos que haría,
    como FreeFall Fighters, y una versión antigua de Flatworld
  </p>
  <img
    src="https://www.guinxu.com/games-img/flatworld-1.png"
    alt="Gameplay de Flatworld"
  />
  <p>
    Actualmente, se encuentra desarrollando Flatworld, un juego episódico,
    y su primer juego comercial.
  </p>
  <p>
    En su canal nos comparte el progreso de dicho juego, y también
    consejos y motivación para nuevos desarrolladores.
  </p>
  <p>
    Sus videos más populares consisten en juegos donde hackea o "rompe"
    juegos conocidos como Pokémon y Super Mario
  </p>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/2Vfbl8IE748"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/xkJPbrR1uGA"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/fKnsmZ1rpNo"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <h2 class="title">Alva Majo</h2>
  <img
    src="https://www.virtualgamer.es/wp-content/uploads/2021/08/alva-majo_1280.png"
    alt="Foto de Alva Majo"
  />
  <p>
    Alva Majo es un youtuber y streamer español el cual vive de sus
    propios videojuegos, de su contenido en YouTube y Twitch, y de
    patrocinadores entre estos los más destacables son los patrocinios de
    la marca Jimmy Joy, una empresa que produce un compuesto nutritivo
    compuesto de harina de avena, entre otros. Tiene más de 400.000
    suscriptores.
  </p>
  <p>
    Sus inicios se remontan al año 2015, cuando su juego Majotori fue
    aprobado en Steam mediante Steam Greenlight. en febrero de 2016, fue
    lanzada la primera versión, aunque la versión actualmente disponible
    en Steam fue lanzada el 28 de marzo de 2017.
  </p>
  <img
    src="https://www.majorariatto.com/res/mt/screenshot01_es.png"
    alt="Gameplay de Majotori"
  />
  <p>
    Majotori fue recibido medianamente bien, aunque no destacó
    especialmente. Su segundo juego, Golfing Over It With Alva Majo
    (inspirado en Getting Over It With Bennett Foddy ), recibió mucho
    mejores números, y tuvo un inesperado éxito en Corea del Sur gracias a
    que steamers de dicho país lo jugaron. Incluso llegando a estar en el
    top 5 de Twitch en aquel entonces. Igual el youtuber Markiplier y el
    jugador profesional Faker ayudaron a darle mucha difusión, aunque no
    se tradujo en un aumento significativo en sus ventas
  </p>
  <img
    src="https://cdn.cloudflare.steamstatic.com/steam/apps/817510/ss_4986df90469042681a03213823b4422fa653732c.1920x1080.jpg?t=1668880497"
    alt="Gameplay de Golfing over it with Alva Majo"
  />
  <p>
    Sin embargo, el boom de Alva Majo ocurrió en 2018 cuando subió un
    video criticando la primera versión de Flatworld, el juego de Guinxu.
    Su humor y personalidad hicieron que pasara de tener 1000, a tener
    50,000 suscriptores en muy poco tiempo.
  </p>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/Mxtle9VclBQ"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <p>
    Aprovechando su creciente fama, lanza Shipped, un juego multijugador
    de barquitos, y Pureya, un videojuego que cambia cada diez segundos
    con múltiples minijuegos. Dichos juegos reciben muy buenas ventas y
    reconocimiento en Steam, lo suficiente como para que Alva Majo pueda
    dedicarse un par de años más a lanzar juegos gratuitos como son The
    one who pulls out the sword will be crowned king y Pizza con Piña.
  </p>
  <p>
    En su canal comparte consejos para crear juegos indie, reportes de sus
    ganancias, el progreso de sus proyectos, y tutoriales (Actualmente, su
    tutorial de Unity para retrasados, es su video más visto, y es un
    tutorial para iniciarse en dicho motor).
  </p>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/IT7vDqm4xiY"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <p>
    Actualmente, estamos a la espera de su próximo proyecto. Probablemente
    vuelva a hacer un juego que sea de pago, pero no sabemos si tendrá una
    pequeña, mediana o grande escala. El tiempo lo dirá.
  </p>

  <h2 class="title">JasperDev</h2>
  <img
    src="https://pbs.twimg.com/media/FAf056gWYAQNLMr.jpg"
    alt="Foto de JasperDev"
  />
  <p>
    JasperDev es un youtuber de nacionalidad colombiana, su canal se
    centra generalmente en replicar juegos teniendo ciertas condiciones,
    sus videos tienen ciertas piscas de humor.
  </p>
  <p>
    En sus inicios subía videos variados y sin mucha relación. Esto cambio
    cuando empezo a subir videos de crítica, convirtiendose estos en el
    tema principal de su canal por un tiempo. Hasta que decidío cambiar el
    tema al de desarrollo de videojuegos subiendo el video «Hice MINECRAFT
    En 24 HORAS», este cambio resulto que su canal aumente en popularidad.
  </p>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/lx3BYZlssAM"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <p>
    Después empezó a desarrollar un videojuego llamado «Lord Doomer» donde
    el protagonista era el Youtuber Matias Candia, haciéndole una página
    de Steam al juego, y promoviendo que lo pusieran en su lista de
    deseados. Candia al verlo le termino fascinando el juego. Pero
    lamentablemente este proyecto se encuentra congelado por el retiro de
    Candia.
  </p>
  <p>
    Cuando llego a la cifra de 100k subscriptores, por motivo de
    celebración decidió hacer una GameJam con el tema «Tienes 24 horas»,
    donde jugó todos los juegos que le mandaron en directo. Después de
    presentar a los finalistas y una encuesta donde la gente que estaba en
    el directo tenía que votar, terminó ganando «El túnel», un juego de
    plataformas sobre un mapache que muere aplastado por un árbol y es
    enviado a la dimensión del túnel.
  </p>
  <p>
    A pesar de que las reglas de su Jam decían que él no podía participar,
    termino infiltrándose y creando un endless runner en el espacio,
    llamado «24 - EVENT HORIZON».
  </p>
  <p>
    En la GameJam «Tu Juego A Juicio Jam», de Alva Majo. Que tenía el tema
    «Demasiado largo», Alva majo lo invita que participe. JasperDev
    termina haciendo un juego al estilo de Getting Over It, pero al final
    Jasper no terminó participando porque no acabó el juego a tiempo.
  </p>
  <p>
    Sus videos consisten en tomar juegos ya hechos y recrearlos o
    mejorarlos gráficamente. En su video más popular actualmente hizo
    Geometry dash en «versión RTX»
  </p>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/_jftS0lXUq8"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <p>
    Y esos fueron los 3 youtubers más grandes de desarrollo de
    videojuegos. Pronto la actualizaremos para poner más canales del
    estilo.
  </p>`,
    summary:
      "Repasamos a los creadores de contenido sobre desarrollo de videojuegos más populares.",
    wordCount: 990,
  },
  {
    category: "Videojuegos",
    title: "Géneros de videojuegos que han sido olvidados",
    editor: "Daniel Lizama",
    date: "Feb 20 2023",
    IMG: "https://sanyodigital.com/wp-content/uploads/2021/12/Do-you-want-to-Create-a-Dream-Game-but-need-help.png",
    IMGalt: "Foto de dos mandos de videojuegos",
    id: 9,
    articleText: `<p>
    A lo largo de la historia de los videojuegos, hemos sido testigos de
    la evolución y el surgimiento de una amplia gama de géneros. Algunos
    géneros han perdurado y se han convertido en pilares de la industria,
    mientras que otros han quedado en el olvido, eclipsados por nuevas
    tendencias y preferencias del mercado. En este artículo, exploraremos
    algunos géneros de videojuegos que han sido olvidados y merecen ser
    redescubiertos.
  </p>
  <h2 class="title">
    1. Point-and-click Adventures (Aventuras gráficas)
  </h2>
  <img
    src="https://i0.wp.com/www.oldschoolgamermagazine.com/wp-content/uploads/2018/05/Monkey-Island-1.png?fit=639%2C289&ssl=1"
    alt="Gameplay de Monkey Island"
  />
  <p>
    Hubo una época en la que los juegos de aventuras gráficas, impulsados
    por la exploración y la resolución de acertijos, dominaban la
    industria. Títulos clásicos como "Monkey Island" y "Day of the
    Tentacle" encantaron a los jugadores con su narrativa cautivadora y su
    humor ingenioso. Aunque el género ha disminuido en popularidad, hay
    una base de fanáticos que sigue apreciando la complejidad y la
    inmersión que ofrecen estos juegos.
  </p>
  <h2 class="title">2. Shoot 'em ups (Matamarcianos)</h2>
  <img
    src="https://www.culturaneogeo.com/reviews/aero%20fighters2/22.jpg"
    alt="Gameplay de Aero Fighters 2"
  />
  <p>
    Los shoot 'em ups fueron una vez una parte integral de los arcades y
    las consolas de videojuegos. Estos juegos de disparos frenéticos,
    llenos de acción y con enemigos que llenaban la pantalla, desafiaban
    los reflejos y la habilidad de los jugadores. Aunque el género ha
    evolucionado con títulos como "Ikaruga" y "Resogun", no ha logrado
    capturar la misma atención que en décadas pasadas.
  </p>
  <h2 class="title">
    3. Beat 'em ups (Juegos de pelea uno contra muchos)
  </h2>
  <img
    src="https://media.vandal.net/i/1200x630/6-2022/20226211234543_1.jpg"
    alt="Gameplay de Streets of Rage 2"
  />
  <p>
    Los beat 'em ups fueron populares en la era de los arcades y las
    consolas de 8 y 16 bits. Juegos como "Streets of Rage" y "Final Fight"
    permitían a los jugadores enfrentarse a hordas de enemigos en intensas
    batallas cuerpo a cuerpo. Aunque los juegos de lucha en 3D han ganado
    protagonismo, los beat 'em ups clásicos todavía tienen un encanto
    especial y ofrecen una experiencia cooperativa única.
  </p>
  <h2 class="title">
    4. Rail Shooters (Juegos de disparos sobre rieles)
  </h2>
  <img
    src="https://www.gameinformer.com/s3/files/styles/body_default/s3/legacy-images/imagefeed/Time%20Crisis%20Like%20You%27ve%20Never%20Seen%20It%20Before/TimeCrisis12041-610.jpg"
    alt="Gameplay de Time Crisis"
  />
  <p>
    Los rail shooters fueron populares en las salas recreativas y en las
    consolas de la época de los 16 y 32 bits. Estos juegos, como "Time
    Crisis" y "House of the Dead", te ponían en el papel de un tirador en
    primera persona que seguía un camino predefinido mientras disparaba a
    enemigos que aparecían en la pantalla. Aunque los juegos de disparos
    en primera persona han evolucionado hacia experiencias más abiertas,
    los rail shooters ofrecen una experiencia de juego única y llena de
    acción.
  </p>
  <h2 class="title">5. RPG de estilo clásico</h2>
  <img
    src="https://eu-images.contentstack.com/v3/assets/blt95b381df7c12c15d/bltdd9190a421be9df9/611f7f1dbe258b6507477e33/image2.jpg?width=828&quality=80&format=webply&disable=upscale"
    alt="Gameplay de Chrono Trigger"
  />
  <p>
    En la era dorada de los juegos de rol, títulos como "Final Fantasy" y
    "Chrono Trigger" cautivaron a los jugadores con sus historias épicas,
    personajes memorables y sistemas de combate estratégico. Aunque los
    RPG modernos han evolucionado hacia mundos abiertos y gráficos
    impresionantes, existe una nostalgia por los RPG de estilo clásico,
    con su enfoque en la narrativa y la exploración.
  </p>
  <p>
    Aunque estos géneros han sido olvidados en cierta medida, es
    importante recordar y valorar su legado. Existen joyas ocultas y
    experiencias únicas dentro de estos géneros que merecen ser
    descubiertas y apreciadas por los jugadores de hoy en día.
  </p>
  <p>
    En última instancia, reconocer y valorar los géneros de videojuegos
    olvidados nos permite apreciar la diversidad y la evolución de la
    industria. Además, nos invita a mantener la curiosidad y la apertura
    hacia experiencias de juego más allá de las tendencias dominantes,
    descubriendo auténticos tesoros perdidos que pueden brindar emociones
    y alegrías inesperadas a los jugadores de todas las generaciones.
  </p>`,
    summary:
      "Te presentamos algunos géneros que por una u otra razón quedaron olvidados.",
    wordCount: 515
    },
  {
    category: "Videojuegos",
    title: "La importancia del primer enemigo en un videojuego",
    editor: "Daniel Lizama",
    date: "Ene 17 2023",
    IMG: "https://cdn.elobservador.com.uy/082019/1566937814067.webp?&extw=jpg&cw=1170",
    IMGalt: "Imagen de Mario Bros junto a un Goomba",
    id: 10,
    articleText: `<p>
    En el mundo de los videojuegos, el primer enemigo al que te enfrentas
    en una aventura puede parecer un simple obstáculo inicial. Sin
    embargo, este primer encuentro juega un papel crucial en la
    experiencia del jugador, ya que establece el tono, presenta mecánicas
    de juego y establece el nivel de desafío. El primer enemigo puede ser
    una experiencia memorable y formativa para el jugador, y aquí
    exploraremos la importancia que tiene en un videojuego.
  </p>

  <h2 class="title">1. Establece el tono y la atmósfera</h2>
  <img
    src="https://pm1.aminoapps.com/6279/af5fdaa5c811ee42d605ec2c2122181eb1ec7120_hq.jpg"
    alt="Dekus baba"
  />
  <p>
    El primer enemigo es una oportunidad para establecer el tono y la
    atmósfera del juego. Puede ser un enemigo temible y poderoso que
    genera tensión y misterio desde el principio, o puede ser más débil y
    servir como una introducción gradual al mundo del juego. La música,
    los efectos de sonido y el diseño del enemigo contribuyen a crear la
    atmósfera y dar pistas sobre el tipo de desafío que los jugadores
    enfrentarán más adelante.
  </p>

  <h2 class="title">2. Introduce las mecánicas de juego</h2>
  <img
    src="https://external-preview.redd.it/fNIj8N9iVBiiPIVPdteOxrkbt3HwouaIG75ysMpgRgA.jpg?auto=webp&s=fead6a34a35d52ce107752461106bf4b4212537d"
    alt="Dummy de Undertale"
  />
  <p>
    El primer enemigo suele ser un tutorial encubierto que enseña al
    jugador las mecánicas básicas del juego. A través de este primer
    encuentro, los jugadores aprenden a moverse, atacar, defenderse o
    utilizar habilidades especiales. Es una forma efectiva de introducir
    gradualmente las habilidades del personaje controlado por el jugador y
    prepararlo para futuros desafíos más complejos.
  </p>

  <h2 class="title">3. Genera empatía y motivación</h2>
  <img
    src="https://www.gameinformer.com/s3/files/styles/body_default/s3/legacy-images/imagefeed/Ranking%20All%20Of%20The%20Colossi%20In%20Shadow%20Of%20The%20Colossus/SHADOW-OF-THE-COLOSSUS_5F00_20180203122231.jpg"
    alt="Primer coloso de Shadow of the Colossus"
  />
  <p>
    Si el primer enemigo presenta un nivel de desafío adecuado, puede
    generar una sensación de logro y satisfacción cuando el jugador lo
    derrota. Esto crea una conexión emocional y una sensación de
    progresión temprana en el juego. El jugador se siente motivado para
    seguir adelante y enfrentar desafíos aún mayores. Un primer enemigo
    demasiado fácil o demasiado difícil puede tener el efecto contrario y
    desmotivar al jugador.
  </p>

  <h2 class="title">4. Crea expectativas y anticipación</h2>
  <img
    src="https://media.vandal.net/i/1440x1080/5-2018/201854162846_1.jpg"
    alt="Demonio del refugio en Dark Souls"
  />
  <p>
    El primer enemigo puede ser un indicador de lo que vendrá más adelante
    en el juego. Si el enemigo es impresionante y desafiante, el jugador
    puede emocionarse y esperar enfrentamientos aún más emocionantes en el
    futuro. Por otro lado, si el primer enemigo es decepcionante o poco
    interesante, el jugador puede tener dudas sobre la calidad del juego
    en general. El primer enemigo puede servir como una promesa implícita
    de lo que los jugadores pueden esperar a medida que avanzan en la
    aventura.
  </p>

  <h2 class="title">5. Impacto en la narrativa</h2>
  <img
    src="https://chasingthestorm.org/wp-content/uploads/2021/05/BioShock_No_gods_or_kings.jpg"
    alt="Andrew Ryan"
  />
  <p>
    En algunos juegos, el primer enemigo puede tener un impacto en la
    narrativa y la historia del juego. Puede ser el villano principal o
    puede desencadenar eventos importantes que dan forma a la trama. El
    primer enemigo puede establecer un conflicto central y motivar al
    jugador a perseguir una misión o un objetivo específico a lo largo del
    juego.
  </p>
  <h2 class="title">Conclusión</h2>
  <p>
    En conclusión, el primer enemigo en un videojuego desempeña un papel
    fundamental en la experiencia del jugador. No solo establece el tono y
    la atmósfera del juego, sino que también introduce las mecánicas de
    juego, genera empatía y motivación, crea expectativas y anticipación,
    e incluso puede tener un impacto significativo en la narrativa. El
    primer enemigo puede ser un desafío emocionante que impulsa al jugador
    a explorar y superar obstáculos, o puede generar una conexión
    emocional y simpatía hacia los enemigos que se encuentran. Ya sea a
    través de la satisfacción de vencerlo, la curiosidad por lo que vendrá
    después o el deseo de desentrañar los misterios de la historia, el
    primer enemigo tiene el poder de enganchar y cautivar a los jugadores
    desde el principio.
  </p>
  <p>
    Los desarrolladores de videojuegos comprenden la importancia de crear
    un primer enemigo memorable y significativo, ya que esto sienta las
    bases para la experiencia de juego y establece la relación entre el
    jugador y el mundo virtual que se está explorando. En última
    instancia, el primer enemigo es mucho más que un simple obstáculo
    inicial. Es un elemento clave que configura la experiencia del
    jugador, influye en sus emociones y motiva su progreso a lo largo de
    la aventura. Es un recordatorio constante de que, en el mundo del
    juego, cada desafío puede superarse y cada victoria puede ser
    gratificante.
  </p>`,
    summary:
      "Analizamos la importancia del primer enemigo y otros elementos del inicio de cualquier buen juego.",
    wordCount: 640
    },
  {
    category: "Videojuegos",
    title: "Gamedev Tycoon cumple 10 años",
    editor: "Daniel Lizama",
    date: "Dic 10 2022",
    IMG: "https://www.greenheartgames.com/wp-content/uploads/2012/09/logo-wide-180.png",
    IMGalt: "Logo de Gamedev Tycoon",
    id: 11,
    articleText: `<p>
    Diez años atrás, Gamedev Tycoon llegó a revolucionar el mundo de los
    videojuegos de simulación con una idea muy interesante: un juego sobre
    crear juegos.
  </p>
  <h2 class="title">¿Qué es Gamedev Tycoon?</h2>
  <p>
    Gamedev Tycoon es un videojuego de simulación desarrollado por
    Greenheart Games que te sumerge en el apasionante mundo de la creación
    y gestión de estudios de desarrollo de videojuegos. En este juego,
    asumes el papel de un desarrollador novato y te enfrentas al desafío
    de construir tu propio imperio de juegos desde cero. Con su estilo
    retro y su mecánica adictiva, Gamedev Tycoon ha capturado los
    corazones de los fanáticos de la industria del videojuego.
  </p>
  <h2 class="title">¡De novato a magnate del juego!</h2>
  <img
    src="https://www.destructoid.com/wp-content/uploads/2020/12/253040-gamedev.jpg"
    alt="Gameplay del primer nivel de Gamedev Tycoon"
  />
  <p>
    En Gamedev Tycoon, comienzas como un desarrollador independiente en la
    década de 1980, trabajando desde tu garaje y tomando decisiones clave
    para crear tus primeros juegos. Desde el diseño y desarrollo hasta la
    elección de género, plataforma y estrategia de marketing, cada
    decisión tendrá un impacto en el éxito o fracaso de tus creaciones. A
    medida que avanzas y ganas experiencia, puedes contratar empleados,
    expandir tu estudio y enfrentarte a desafíos más grandes.
  </p>
  <p>
    El juego te sumerge en la realidad del mundo del desarrollo de
    videojuegos, ofreciendo una visión fascinante de los desafíos que los
    desarrolladores enfrentan a lo largo del tiempo. Tendrás que gestionar
    tus recursos, equilibrar tu presupuesto, investigar nuevas tecnologías
    y mantener a tu equipo motivado para alcanzar el éxito.
  </p>
  <h2 class="title">Tomando decisiones estratégicas</h2>
  <img
    src="https://cdn.akamai.steamstatic.com/steam/apps/239820/ss_33e784062b2b61901280956b96b72815888cd860.1920x1080.jpg?t=1667167358"
    alt="Gameplay de Gamedev Tycoon"
  />
  <p>
    Una de las características más atractivas de Gamedev Tycoon es la
    capacidad de tomar decisiones estratégicas que afectarán el resultado
    de tus juegos. El juego simula el mercado en constante cambio y las
    preferencias de los jugadores, lo que significa que debes estar atento
    a las tendencias actuales y adaptar tu enfoque en consecuencia.
    ¿Deberías enfocarte en juegos de acción, aventuras gráficas o
    simuladores? ¿Deberías desarrollar para PC, consolas o dispositivos
    móviles? Las elecciones son tuyas, pero debes tener en cuenta la
    demanda y la competencia para maximizar tus ganancias.
  </p>
  <h2 class="title">Un tributo a la industria del videojuego</h2>
  <img
    src="https://cdn.vox-cdn.com/thumbor/fwVEtzSmZo9ZZMJ3fjSGxi-dW3E=/0x0:1366x768/1200x800/filters:focal(574x275:792x493)/cdn.vox-cdn.com/uploads/chorus_image/image/59184555/4_offices.0.png"
    alt="Gameplay de Gamedev Tycoon"
  />
  <p>
    Gamedev Tycoon es más que un simple juego de simulación: es un
    homenaje a la industria del videojuego en sí. A medida que avanzas en
    el juego, encontrarás referencias a juegos y consolas icónicas,
    eventos históricos en la industria y desafíos que muchos
    desarrolladores han enfrentado en el mundo real. Esta atención al
    detalle y la pasión por los videojuegos hacen de Gamedev Tycoon una
    experiencia auténtica y atractiva para los amantes de los videojuegos.
  </p>
  <h2 class="title">Una comunidad vibrante y modding</h2>
  <img
    src="https://static.fandomspot.com/images/09/8844/00-featured-vacationtime-game-dev-tycoon-mod.jpg"
    alt="Mods de Gamedev Tycoon"
  />
  <p>
    Gamedev Tycoon cuenta con una comunidad activa de jugadores que
    comparten su amor por el juego. Los foros en línea, los mods y las
    creaciones personalizadas brindan nuevas experiencias y desafíos para
    aquellos que buscan expandir aún más la jugabilidad. Esto ha llevado a
    la creación de contenido adicional, como nuevos géneros,
    características y eventos, lo que demuestra la dedicación y el apoyo
    de la comunidad hacia el juego.
  </p>
  <h2 class="title">Conclusion</h2>
  <p>
    Gamedev Tycoon te invita a vivir el emocionante mundo del desarrollo
    de videojuegos desde la comodidad de tu pantalla. Con su jugabilidad
    adictiva, su estilo retro y su atención al detalle, el juego ofrece
    una experiencia envolvente y emocionante. Ya sea que sueñes con crear
    tu propio estudio de desarrollo o simplemente quieras sumergirte en el
    proceso creativo de los videojuegos, Gamedev Tycoon es una elección
    acertada. ¡Así que ponte los auriculares, ajusta tu silla y prepárate
    para crear los juegos más exitosos de todos los tiempos!
  </p>`,
    summary:
      "El icónico juego sobre crear videojuegos celebra su décimo aniversario, y tenemos review.",
    wordCount: 544
    },
  {
    category: "Videojuegos",
    title: "Los bugs más divertidos de Pokémon Escarlata y Púrpura",
    editor: "Daniel Lizama",
    date: "Nov 28 2022",
    IMG: "https://prod.assets.earlygamecdn.com/images/Pokemon-SV-glitch.jpg?mtime=1669026945",
    IMGalt: "Foto de un bug del juego donde el protagonista se hace gigante",
    id: 12,
    articleText: `<p>
    Pokémon Escarlata y Púrpura ya están entre nosotros y, aunque cuentan
    con un parche de lanzamiento, han demostrado tener un rendimiento algo
    problemático. El mundo entero se ha lanzado a recorrer Paldea, y no
    han dudado en compartir algunos errores, bugs y glitches de Pokémon
    Escarlata y Púrpura que son de lo más divertidos
  </p>
  <p>
    A continuación, dejamos una breve selección de los fallos de Pokémon
    Escarlata y Púrpura recogidos por varios usuarios en internet:
  </p>
  <iframe
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    allowfullscreen="true"
    style="
      position: static;
      visibility: visible;
      width: 500px;
      height: 489px;
      display: block;
      flex-grow: 1;
    "
    title="Twitter Tweet"
    src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1593591679377735685&amp;lang=es&amp;origin=https%3A%2F%2Fnintenduo.com%2Fbugs-divertidos-pokemon-escarlata-purpura%2F&amp;sessionId=6971876fee4981b7e9198fe1a1f0859da28aecc4&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=500px"
    data-tweet-id="1593591679377735685"
  ></iframe>
  <script
    data-minify="1"
    async=""
    charset="utf-8"
    src="https://nintenduo.com/wp-content/cache/min/1/widgets.js?ver=1683708823"
    data-rocket-status="executed"
  ></script>
  <iframe
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    allowfullscreen="true"
    style="
      position: static;
      visibility: visible;
      width: 500px;
      height: 613px;
      display: block;
      flex-grow: 1;
    "
    title="Twitter Tweet"
    src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-1&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1593372216099487754&amp;lang=es&amp;origin=https%3A%2F%2Fnintenduo.com%2Fbugs-divertidos-pokemon-escarlata-purpura%2F&amp;sessionId=6971876fee4981b7e9198fe1a1f0859da28aecc4&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=500px"
    data-tweet-id="1593372216099487754"
  ></iframe>
  <script
    data-minify="1"
    async=""
    charset="utf-8"
    src="https://nintenduo.com/wp-content/cache/min/1/widgets.js?ver=1683708823"
    data-rocket-status="executed"
  ></script>
  <iframe
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    allowfullscreen="true"
    style="
      position: static;
      visibility: visible;
      width: 500px;
      height: 489px;
      display: block;
      flex-grow: 1;
    "
    title="Twitter Tweet"
    src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-2&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1593299849407090691&amp;lang=es&amp;origin=https%3A%2F%2Fnintenduo.com%2Fbugs-divertidos-pokemon-escarlata-purpura%2F&amp;sessionId=6971876fee4981b7e9198fe1a1f0859da28aecc4&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=500px"
    data-tweet-id="1593299849407090691"
  ></iframe>
  <script
    data-minify="1"
    async=""
    charset="utf-8"
    src="https://nintenduo.com/wp-content/cache/min/1/widgets.js?ver=1683708823"
    data-rocket-status="executed"
  ></script>
  <iframe
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    allowfullscreen="true"
    style="
      position: static;
      visibility: visible;
      width: 500px;
      height: 521px;
      display: block;
      flex-grow: 1;
    "
    title="Twitter Tweet"
    src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-3&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1593480110828462085&amp;lang=es&amp;origin=https%3A%2F%2Fnintenduo.com%2Fbugs-divertidos-pokemon-escarlata-purpura%2F&amp;sessionId=6971876fee4981b7e9198fe1a1f0859da28aecc4&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=500px"
    data-tweet-id="1593480110828462085"
  ></iframe>
  <script
    data-minify="1"
    async=""
    charset="utf-8"
    src="https://nintenduo.com/wp-content/cache/min/1/widgets.js?ver=1683708823"
    data-rocket-status="executed"
  ></script>
  <iframe
    scrolling="no"
    frameborder="0"
    allowtransparency="true"
    allowfullscreen="true"
    style="
      position: static;
      visibility: visible;
      width: 500px;
      height: 489px;
      display: block;
      flex-grow: 1;
    "
    title="Twitter Tweet"
    src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-4&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1593481416439840768&amp;lang=es&amp;origin=https%3A%2F%2Fnintenduo.com%2Fbugs-divertidos-pokemon-escarlata-purpura%2F&amp;sessionId=6971876fee4981b7e9198fe1a1f0859da28aecc4&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=500px"
    data-tweet-id="1593481416439840768"
  ></iframe>
  <script
    data-minify="1"
    async=""
    charset="utf-8"
    src="https://nintenduo.com/wp-content/cache/min/1/widgets.js?ver=1683708823"
    data-rocket-status="executed"
  ></script>
  <p>
    Pokémon Escarlata y Púrpura trasladan la acción a Paldea, una región
    inspirada en España que sirve como el escenario de la 9ª Generación.
    Gracias a estos títulos, los jugadores tendrán la oportunidad de
    descubrir el mayor avance de la serie: la apuesta total por el RPG y
    el mundo abierto.
  </p>
  <p>
    Sin embargo, pese a contar con la ayuda de algunos miembros del equipo
    de desarrollo de Breath of the Wild y Xenoblade Chronicles, el juego
    tuvo un desastroso resultado en calidad. Debido a cortos plazos de
    desarrollo, la costumbre / necedad de lanzarlo en noviembre antes de
    Navidad, y el relativamente pequeño tamaño del personal involucrado en
    el juego.
  </p>
  <p>
    No obstante, el juego ha vendido 10 millones de copias en su primer
    fin de semana, lo cual nos deja mucho qué pensar
  </p>`,
    summary:
      "Los bugs más divertidos del nuevo juego de Game Freak, y cómo pudieron ocurrir.",
    wordCount: 206
    },
  {
    category: "Videojuegos",
    title: "Increíbles juegos hechos por solo una persona",
    editor: "Daniel Lizama",
    date: "May 20 2022",
    IMG: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/08/games-made-by-one-person.jpg",
    IMGalt:
      "Imagen donde se muestra gameplay de Stardew Valley, Braid y Bright Memory",
    id: 13,
    articleText: `        <h2 class="title">introducción</h2>
    <p>
      Cuando pensamos en videojuegos, normalmente pensamos en grandes juegos
      hechos por equipos de 300 personas, más o menos. O en juegos indie,
      pero con un equipo de 10 personas o menos. Claro, siempre y cuando no
      se vean como juegos de baja calidad y muy simples
    </p>
    <p>
      En esta ocasión repasaremos juegos que gozaron de un tremendo éxito
      siendo desarrollados nada más y nada menos que por una persona. Y que
      quizá tú pensabas que no era tal el caso debido a sus enormes
      calidades.
    </p>
    <h2 class="title">Minecraft</h2>
    <img
      src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/07/minecraft-rtx-mod.jpg?q=50&fit=crop&w=740&dpr=1.5"
      alt="Gameplay de Minecraft"
    />
    <p>
      Sí, Minecraft. Hoy sabemos que es propiedad de una de las mayores
      compañías de software del mundo (después de la adquisición de Mojang
      por parte de Microsoft en 2014), pero originalmente comenzó como un
      proyecto de una sola persona. La versión original de Minecraft en Java
      fue desarrollada por Markus "Notch" Persson en 2009 antes de fundar
      Mojang Studios, y el juego pronto se convirtió en el videojuego más
      vendido de todos los tiempos. Aunque el juego ha evolucionado mucho
      desde esos primeros días, su mecánica de juego principal aún se puede
      rastrear hasta esos humildes comienzos.
    </p>
    <h2 class="title">Cave Story</h2>
    <img
      src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/10/Cave-Story-gameplay.jpg?q=50&fit=crop&w=740&dpr=1.5"
      alt="Gameplay de Cave Story"
    />
    <p>
      Cave Story es un juego de Metroidvania que fue lanzado originalmente
      en 2004 para PC antes de llegar a otras plataformas. Esto siguió un
      ciclo de desarrollo de cinco años por parte de su único desarrollador,
      Daisuke "Pixel" Amaya, quien trabajó en el juego famosamente en su
      tiempo libre. El juego también recibió adaptaciones para plataformas
      de Nintendo como Wii, DS, 3DS y Switch, con la ayuda del estudio de
      desarrollo independiente Nicalis.
    </p>
    <h2 class="title">Papers, please</h2>
    <img
      src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/04/papers-please-permitted-entry.jpg?q=50&fit=crop&w=740&dpr=1.5"
      alt="Gameplay de Papers, please"
    />
    <p>
      Un juego en el que interpretas a un oficial de inmigración podría no
      parecer muy cautivador, pero eso es precisamente lo que haces en
      Papers, Please, un juego de simulación y rompecabezas que fue lanzado
      para Windows y Mac OS X en 2013. Fue desarrollado por Lucas Pope, un
      antiguo desarrollador de Naughty Dog, quien se inspiró en sus propias
      experiencias con oficiales de inmigración durante sus viajes. El juego
      recibió adaptaciones para Linux, iOS y PlayStation Vita, y fue
      considerado uno de los mejores juegos de 2013 por varias publicaciones
      y organismos de premios.
    </p>
    <h2 class="title">Bright Memory</h2>
    <img
      src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/01/Bright-Memory-Infinite-Xbox-Series-X.jpg?q=50&fit=crop&w=740&dpr=1.5"
      alt="Gameplay de Bright Memory"
    />
    <p>
      Bright Memory es un juego de acción en primera persona que combina
      elementos de disparos y hack-and-slash. Fue desarrollado por el
      desarrollador independiente chino Zeng "FYQD" Xiancheng. El juego fue
      lanzado originalmente en 2019 en Steam a través de Early Access, antes
      de ser adaptado para iOS y Android, así como para Xbox Series X/S,
      donde fue un título de lanzamiento. Actualmente se está trabajando en
      una versión completa del juego titulada Bright Memory: Infinite, que
      será lanzada para Xbox Series X/S y Windows.
    </p>
    <h2 class="title">Spelunky</h2>
    <img
      src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/02/Spelunky.jpg?q=50&fit=crop&w=740&dpr=1.5"
      alt="Gameplay de Spelunky"
    />
    <p>
      Spelunky es un juego de plataformas en 2D desarrollado por Derek Yu,
      un desarrollador independiente. Fue lanzado originalmente como un
      juego gratuito para Windows en 2008, pero posteriormente se adaptó
      para Xbox 360, PS3, PS4 y PS Vita, y más recientemente se lanzó una
      versión para Nintendo Switch. El juego resultó ser influyente en el
      género de los roguelike al incorporar elementos de este tipo en un
      juego de plataformas de desplazamiento lateral. En 2020 se lanzó una
      secuela para Windows y PlayStation 4, y el 26 de agosto de 2021 se
      lanzó una versión para Nintendo Switch.
    </p>
    <h2 class="title">Undertale</h2>
    <img
      src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/08/Undertale-Cropped.jpg?q=50&fit=crop&w=740&dpr=1.5"
      alt="Gameplay de Undertale"
    />
    <p>
      Undertale es un juego de rol (RPG) en 2D que fue desarrollado por Toby
      Fox, un diseñador y compositor de videojuegos. Fue lanzado para
      Windows y Mac OS X en 2015, y posteriormente se adaptó para
      PlayStation 4, PS Vita, Nintendo Switch y Xbox One. El juego recibió
      una buena acogida por parte de la crítica y fue nominado en varias
      categorías de Juego del Año en diversos sitios web de videojuegos.
      Desde entonces, ha adquirido el estatus de clásico de culto junto con
      un sucesor espiritual. Si bien el creador contrató artistas para
      ciertos detalles, la mayor parte de la obra fue hecha por él.
    </p>
    <h2 class="title">Stardew Valley</h2>
    <img
      src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/08/stardew-valley-ipad.jpg?q=50&fit=crop&w=740&dpr=1.5"
      alt="Gameplay de Stardew Valley"
    />
    <p>
      Desarrollado por Eric "ConcernedApe" Barone, Stardew Valley es un RPG
      de simulación lanzado originalmente para Windows en 2016.
      Posteriormente fue adaptado a consolas y teléfonos móviles. Inspirado
      en los juegos de la serie Harvest Moon, el juego te permite controlar
      a un personaje que debe cuidar de una granja que recientemente has
      heredado, al mismo tiempo que interactúas con los numerosos habitantes
      del pueblo vecino para forjar relaciones duraderas. El juego fue
      nominado para varios premios y ganó el premio Breakthrough en los
      Golden Joysticks. Desde entonces, ha vendido más de diez millones de
      copias.
    </p>
    <h2 class="title">Braid</h2>
    <img
      src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/04/Braid-the-famous-puzzle-platformer-with-time-reversing-mechanics.jpg?q=50&fit=crop&w=740&dpr=1.5"
      alt="Gameplay de Braid"
    />
    <p>
      Lanzado originalmente en 2008 en Xbox Live Arcade, Braid es un juego
      de plataformas y rompecabezas desarrollado por Jonathan Blow.
      Posteriormente se adaptó para Windows, Linux, Mac OS X y PS3. En el
      juego, los jugadores controlan a un hombre con la capacidad de
      manipular el flujo del tiempo, que se utiliza para resolver varios de
      los rompecabezas del juego. En 2020 se anunció una versión para PS4,
      PS5, Xbox One, Xbox Series X/S y Nintendo Switch.
    </p>`,
    summary:
      "Hoy veremos juegos que desprenden una calidad tremenda, tanta que no creerás que fueron hechos por una sola persona",
    wordCount: 837,
  },
  {
    category: "Inteligencia Artificial",
    title:
      "El papel de la inteligencia artificial en el desarrollo de videojuegos",
    editor: "Daniel Lizama",
    date: "Ene 11 2022",
    IMG: "https://images.squarespace-cdn.com/content/v1/5d0c74548c8e8f0001be73ba/1617244598037-MI0M0JV018J2H93BVTT3/IA+videojuegos.jpg?format=500w",
    IMGalt: "Foto de un chico usando gafas VR",
    id: 14,
    articleText: `<p>La inteligencia artificial (IA) ha revolucionado numerosos campos, y el desarrollo de videojuegos no es una excepción. En la industria del entretenimiento interactivo, la IA ha encontrado un espacio vital para potenciar la experiencia de juego, crear personajes realistas y desafiantes, y ofrecer mundos virtuales dinámicos y envolventes.</p>
    <h2 class="title">Mejora de la jugabilidad</h2>
    <img src="https://www.mundodeportivo.com/alfabeta/hero/2018/10/159367.alfabetajuega-the-witcher-1-110816-2.jpg?width=1200&aspect_ratio=16:9" alt="gameplay de The Witcher">
    <p>Uno de los principales aportes de la IA en los videojuegos es su capacidad para mejorar la jugabilidad. Los algoritmos de IA pueden analizar el comportamiento de los jugadores, adaptar la dificultad del juego en tiempo real y proporcionar desafíos adecuados para cada jugador. Además, la IA puede generar niveles procedurales, creando mundos únicos y evitando la repetición.</p>
    <h2 class="title">Personajes no jugables (NPCs) inteligentes</h2>
    <img src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1600/rkcpxgge7943hgtqu7wx.jpg" alt="NPCs">
    <p>La IA ha permitido la creación de personajes no jugables (NPCs) más inteligentes y realistas. Los NPCs pueden tomar decisiones basadas en su entorno, interactuar con los jugadores y mostrar comportamientos creíbles. Ya no se limitan a patrones predefinidos, sino que pueden aprender y adaptarse a medida que el jugador avanza en el juego.</p>
    <h2 class="title">Generación de contenido</h2>
    <img src="https://eu-images.contentstack.com/v3/assets/blt95b381df7c12c15d/blt397d9ddbc59f4bc8/611e9ccf9a154b63bef7feb7/q0Vcn7n.png?width=828&quality=80&format=webply&disable=upscale" alt="personajes procedurales">
    <p>La IA también ha demostrado ser una herramienta valiosa en la generación de contenido para videojuegos. Los algoritmos de generación procedural pueden crear mundos, paisajes, misiones y objetos de forma automática, ahorrando tiempo y recursos en el desarrollo. Esto permite la creación de juegos más grandes y variados.</p>
    <h2 class="title">Mejora de los gráficos y la física</h2>
    <img src="https://i.ytimg.com/vi/XCLSkFKTWyg/maxresdefault.jpg" alt="fisica en los videojuegos">
    <p>La IA ha desempeñado un papel importante en la mejora de los gráficos y la física en los videojuegos. Los algoritmos de aprendizaje automático pueden ayudar a generar imágenes más realistas, animaciones fluidas y efectos visuales impresionantes. Además, la IA puede simular la física de forma más precisa, lo que permite una interacción más realista con los objetos y el entorno del juego.</p>
    <h2 class="title">Inteligencia artificial en los juegos multijugador</h2>
    <img src="https://static.gosunoob.com/img/1/2019/10/how-to-tell-if-someone-is-a-bot-in-fortnite.jpg" alt="foto de Fortnite">
    <p>En los juegos multijugador, la IA también juega un papel importante. Puede ser utilizada para equilibrar las habilidades de los jugadores, detectar comportamientos fraudulentos o inapropiados, y proporcionar asistentes virtuales que ayuden a los jugadores en su progreso.</p>
    <h2 class="title">El futuro de la IA en los videojuegos</h2>
    <img src="https://i0.wp.com/syncedreview.com/wp-content/uploads/2020/06/20170513_STD002_0-1.jpg?resize=1280%2C580&ssl=1" alt="IA de videojuegos">
    <p>El papel de la inteligencia artificial en el desarrollo de videojuegos seguirá evolucionando. Se espera que los avances en aprendizaje automático y algoritmos más complejos permitan crear mundos virtuales aún más realistas, personajes más inteligentes y desafiantes, y experiencias de juego más inmersivas.</p>`,
    summary:
      "El avance de las IAs podría cambiar el rumbo de los videojuegos también",
    wordCount: 352,
  },

  {
    category: "Programación",
    title: "Código Facilito lanza curso de Kaboom.js",
    editor: "Daniel Lizama",
    date: "Agosto 21 2021",
    IMG: "https://codigofacilito.com/system/courses/thumbnails/000/000/358/original/kaboomjs.jpg?1628782111",
    IMGalt: "Foto promocional del curso de Kaboom.js",
    id: 15,
    articleText: `<p>Código Facilito es una plataforma de aprendizaje enfocada en la programación. Si bien, el catálogo de cursos de videojuegos disponibles en la página no es muy extenso, esto probablemente cambie con la introducción de cursos como este, el de Kaboom.js.
    El curso es impartido por la profesora Aylin Galindo. Desarrolladora enfocada en gráficas computacionales. Y la página cita que: </p>
    <div class="blockquote blockquote-bordered">
      <p class="blockquote-text"> Este curso es ideal para personas con poca experiencia en programación que quieran introducirse de una manera amigable al game development.</p>
    </div>
   <h2 class="article-title">¿Qué es Kaboom.js?</h2>
   <p>Kaboom.js es una biblioteca de JavaScript para el desarrollo de juegos HTML5 creada por Replit. Se destaca por su enfoque divertido y sencillo, lo que la convierte en una excelente opción tanto para principiantes como para desarrolladores experimentados que desean crear juegos rápidos y dinámicos.</p>
   <h3 class="article-title">Características principales de Kaboom.js:</h3>
   <ol>
    <li><b class="bold-text">Sintaxis sencilla</b>: Kaboom.js utiliza una sintaxis clara y fácil de entender que permite a los desarrolladores concentrarse en la lógica del juego en lugar de complicadas estructuras de código.</li>
    <li><b class="bold-text">Física integrada</b>: Con la física integrada en Kaboom.js, puedes agregar colisiones realistas, gravedad y movimiento suave a tus objetos del juego con solo unas pocas líneas de código.</li>
    <li><b class="bold-text">Facilidad para el manejo de sprites</b>: Kaboom.js hace que el manejo de sprites sea muy sencillo. Puedes cargar imágenes o utilizar formas básicas y animarlas con facilidad, lo que te permite dar vida a tus personajes y elementos del juego.</li>
    <li><b class="bold-text">Sistema de componentes</b>: Kaboom.js utiliza un sistema de componentes inspirado en las entidades-componentes-sistemas (ECS) que permite una fácil reutilización y organización del código del juego.</li>
    <li><b class="bold-text">Biblioteca extensible:</b> Kaboom.js cuenta con una amplia variedad de módulos y plugins que te permiten agregar características adicionales a tu juego, como controles de teclado, efectos de sonido, generación procedural de niveles y más.</li>
   </ol>
   <h2 class="article-title">¿Cómo comenzar con Kaboom.js?</h2>
   <img src="https://i.ytimg.com/vi/zo3crHnFGho/maxresdefault.jpg" alt="Demo de algo que se puede hacer con Kaboom.js">
   <p>Aquí hay una guía rápida para comenzar con Kaboom.js:</p>
   <ol>
   <li><b class="bold-text">Configuración inicial</b>: Agrega el script de Kaboom.js a tu página HTML y crea un archivo JavaScript separado para tu código de juego.</li>
  <li> <b class="bold-text">Creación del lienzo</b>: Inicializa el lienzo del juego utilizando el método kaboom(). Puedes especificar el tamaño del lienzo y otras opciones según tus necesidades.</li>
  <li> <b class="bold-text">Cargar y mostrar elementos</b>: Carga y muestra elementos del juego, como imágenes de sprites, fondos y otros elementos visuales utilizando los métodos proporcionados por Kaboom.js.</li>
  <li><b class="bold-text">Agregar interactividad</b>: Utiliza eventos y funciones para agregar interactividad al juego, como detectar colisiones, manejar la entrada del jugador y controlar el estado del juego.</li>
  <li><b class="bold-text">Experimenta y diviértete</b>: Kaboom.js ofrece una amplia documentación y ejemplos para ayudarte a explorar y experimentar con diferentes características y funcional
  </ol>

  <h3 class="article-title">Conclusión</h3>
 <p>Kaboom.js es una biblioteca emocionante y fácil de usar que te permite crear juegos HTML5 de forma rápida y sencilla. No es mala opción si ya sabes Javascript y quieres hacer un juego 2D sin tener que aprender otro lenguaje de programación.</p>
 <iframe width="560" height="315" src="https://www.youtube.com/embed/jcoiEpzD3yc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 <p>Aquí un ejemplo de un juego hecho con este motor. Lamentablemente casi todo el contenido que vas a encontrar sobre el motor está en inglés así que aparte del curso de Código Facilito, no encontrarás mucho más contenido en castellano. Pero eso no quita que sea una excelente opción para desarrollar videojuegos con Javascript.</p> `,
    summary: "Este interesante motor te permite crear increíbles juegos 2D",
    wordCount: 524,
  },
];

//Aquí creamos los thumbnails que van en el index.

function generateNewsThumbnails() {
  for (let i = 0; i < 8; i++) {
    let thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    thumbnail.innerHTML = `
    <div class="thumbnail-image-container">
    <a href="articulo.html?content=${thumbnailData[i].id}">${thumbnailData[i].title}
     <img src="${thumbnailData[i].IMG}" alt="${thumbnailData[i].IMGalt}">
     </a>
    
      <div class="news-summary-wrapper">
      <h3 class="category">${thumbnailData[i].category}</h3>
      <h2 class="thumbnail-title">
      <a href="articulo.html?content=${thumbnailData[i].id}">${thumbnailData[i].title}</a>
    </h2>
      <p class="editor-name">${thumbnailData[i].editor}<span> -</span>
      <span class="date">${thumbnailData[i].date}</span>
    </p>
    </div></div>`;
    featuredGrid.appendChild(thumbnail);
  }
}

generateNewsThumbnails();

//Ahora creamos lo necesario para generar el artículo en base a la noticia seleccionada.

//Aquí generamos el artículo.

function generateArticle(articleID) {
  const article = document.querySelector(".article");
  const randomIndex = pickRandomNumber(0, thumbnailData.length);
  const randomTitle = thumbnailData[randomIndex].title;
  let articleContainer = document.createElement("div");
  articleContainer.innerHTML = `
   <h1 class="article-header">${thumbnailData[articleID].title}</h1>
        <img
          src="${thumbnailData[articleID].IMG}"
          alt="${thumbnailData[articleID].IMGalt}"
        />
        <p>Por <a href="contacto.html" class="article-editor-name">${
          thumbnailData[articleID].editor
        }</a> en <a href="noticias.html" class="article-category">${
    thumbnailData[articleID].category
  }</a></p>
       <p class="article-date">${
         thumbnailData[articleID].date
       } <span>・${Math.ceil(
    thumbnailData[articleID].wordCount / 200
  )} minutos de lectura</span></p>
        <div id="social">
          <a class="facebookBtn smGlobalBtn" href="#"></a>
          <a class="twitterBtn smGlobalBtn" href="#"></a>
          <a class="googleplusBtn smGlobalBtn" href="#"></a>
          <a class="linkedinBtn smGlobalBtn" href="#"></a>
          <a class="pinterestBtn smGlobalBtn" href="#"></a>
          <a class="tumblrBtn smGlobalBtn" href="#"></a>
          <a class="rssBtn smGlobalBtn" href="#"></a>
        </div>`;
  article.appendChild(articleContainer);
  article.innerHTML += thumbnailData[articleID].articleText;
  let relatedContent = document.createElement("div");
  relatedContent.classList.add("related-content");
  relatedContent.innerHTML = ` <h3>RELACIONADO:</h3>
    <div class="related-content-link"> 
    <a href="articulo.html?content=${randomIndex}"class="related-content-link-title">${randomTitle}</a>
    </div>`;
  article.appendChild(relatedContent);
  const commentSection = document.createElement("div");
  commentSection.classList.add("comment-section");

  //Aquí colocamos nombres de chicos para que haya variedad en los comentarios autogenerados.
  //Los obtuve con la API de Randomuser.me y los guardé en un array para no tener que depender del fetch cada vez.

  const maleNames = [
    "Gabriel Cortes",
    "David Martínez",
    "Francisco Sánchez",
    "Xavier Carrasco",
    "Roberto Alonso",
    "Mario Iglesias",
    "Francisco Bravo",
    "Luis Arias",
    "Eduardo Flores",
    "Lucas Moreno",
    "Roberto Pastor",
    "Mario Ortiz",
    "Antonio Rubio",
    "Roberto Pascual",
    "Enrique Vicente",
    "Gonzalo Navarro",
    "Miguel Montoya",
    "Rafael Pérez",
    "Rubén Francisco",
    "Luis Aldama",
    "Roberto Rangel",
    "Uriel Torres",
    "Mario Cáceres",
    "Iván Prieto",
    "Íker Loeza",
    "Andrés Urbano",
    "Samuel Robles",
  ];

  //Los nombres de chicas.
  const femaleNames = [
    "María Ortega",
    "Cristina Gutiérrez",
    "Laura García",
    "Lidia Moya",
    "Marta Aguilar",
    "Mireia Lorenzo",
    "Blanca Lozano",
    "Patricia Campos",
    "Sofía Rivas",
    "Lorena Cruz",
    "Alba Núñez",
    "Natalia Pascual",
    "Susana Barrios",
    "Gloria Fernández",
    "Raquel Ortiz",
    "Aurora López",
    "Leire Pérez",
    "Verónica Jiménez",
    "Rocío Díaz",
    "Berta Sánchez",
    "Carla Martínez",
    "Clara García",
    "Irene Muñoz",
    "Pilar Soto",
    "Lola Morales",
    "Gema Torres",
    "Esther Medina",
    "Adriana Ramos",
    "Nuria Benítez",
    "Silvia Rubio",
    "Julia Castro",
    "Ana Hernández",
    "Elena Flores",
    "Mónica Gil",
    "Rosa Guerrero",
    "Alicia Romero",
    "Beatriz Moreno",
    "Carmen Vega",
    "Lidia Serrano",
  ];

  commentSection.innerHTML = `<h3>Comentarios (4)</h3>
    <hr>
    <div class="comment">
        <img class="avatar" src="https://randomuser.me/api/portraits/men/${pickRandomNumber(
          1,
          99
        )}.jpg" alt="Avatar">
        <div class="comment-text">
          <h3 class="user-name-male">
          ${
            maleNames[pickRandomNumber(0, maleNames.length)]
          }<span class="comment-text-date">Hace 4 días</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum tellus auctor quam consequat, sit amet mollis sem ultricies.</p>
        </div>
      </div>
      <div class="comment">
        <img class="avatar" src="https://randomuser.me/api/portraits/women/${pickRandomNumber(
          1,
          99
        )}.jpg" alt="Avatar">
        <div class="comment-text">
          <h3 class="user-name-female">
          ${
            femaleNames[pickRandomNumber(1, femaleNames.length)]
          } <span class="comment-text-date">Hace 3 días</span></h3> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum tellus auctor quam consequat, sit amet mollis sem ultricies.</p>
        </div>
      </div>
      <div class="comment">
        <img class="avatar" src="https://randomuser.me/api/portraits/men/${pickRandomNumber(
          1,
          99
        )}.jpg" alt="Avatar">
        <div class="comment-text">
          <h3 class="user-name-male">
          ${
            maleNames[pickRandomNumber(1, maleNames.length)]
          } <span class="comment-text-date">Hace 2 días</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img class="avatar" src="https://randomuser.me/api/portraits/women/${pickRandomNumber(
          1,
          99
        )}.jpg" alt="Avatar">
        <div class="comment-text">
          <h3 class="user-name-female">
          ${
            femaleNames[pickRandomNumber(1, femaleNames.length)]
          }<span class="comment-text-date">Hace 7 horas</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem facilis nam laudantium quibusdam natus.</p>
        </div>
      </div>`;

  article.appendChild(commentSection);

  const menNames = document.querySelectorAll(".user-name-male");
  const womenNames = document.querySelectorAll(".user-name-female");

  //Aquí colocamos un nombre de chico para sustituir posibles "undefined".
  menNames.forEach((e) => {
    e.textContent = `${maleNames[pickRandomNumber(0, maleNames.length)]}`;
    if (e.textContent === "undefined") {
      e.textContent = "Juan Pérez";
    }
  });

  //Y aquí lo mismo para las chicas
  womenNames.forEach((e) => {
    e.textContent = `${femaleNames[pickRandomNumber(0, femaleNames.length)]}`;
    if (e.textContent === "undefined") {
      e.textContent = "María García";
    }
  });
}
