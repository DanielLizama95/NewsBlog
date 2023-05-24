      //Primero ponemos el Javascript para mostrar y ocultar los botones de filtro.
      const filterIcon = document.getElementById("filter-icon");
      const filterButtons = document.querySelector(".filter-buttons-container");

      function toggleFilterButtons() {
        filterButtons.classList.toggle("hidden");
      }
      
      filterIcon.addEventListener("click", toggleFilterButtons);

      function generateAllNewsSection() {
        const allNewsContainer = document.querySelector(".all-news-container");

        for (let i = 0; i < thumbnailData.length; i++) {
          let container = document.createElement("div");
          container.classList.add("news-list-item-container");
          container.innerHTML = `
      <div class="image-container">
        <a href="articulo.html?content=${thumbnailData[i].id}">
        <img src="${thumbnailData[i].IMG}" alt="${thumbnailData[i].IMGalt}">
      </a>
      </div>
      <div class="text-container">
        <h2 class="title"> <a href="articulo.html?content=${thumbnailData[i].id}">${thumbnailData[i].title}</a></h2>
        <span class="editor">${thumbnailData[i].editor}</span>
        <span> - </span>
        <span class="article-date">${thumbnailData[i].date}</span>
        <p class="summary">${thumbnailData[i].summary}</p>
      </div>
    `;
          allNewsContainer.appendChild(container);
        }
      }
      generateAllNewsSection();

      // Y con esto filtramos las noticias a la preferencia del usuario.

      function filterNewsByCategory(newsData, category) {
        return newsData.filter((news) => news.category === category);
      }

      function generateFilteredNewsSection(category) {
        const filteredNews = filterNewsByCategory(thumbnailData, category);
        const allNewsContainer = document.querySelector(".all-news-container");
        const title = document.getElementById("all-news-title");
        title.innerHTML = `<h2 class="title" id="all-news-title">Todas las noticias sobre: <span>${category}</span></h2>`;
        // Eliminar el contenido existente del contenedor
        allNewsContainer.innerHTML = "";
        for (let i = 0; i < filteredNews.length; i++) {
          let container = document.createElement("div");
          container.classList.add("news-list-item-container");
          container.innerHTML = `
      <div class="image-container">
        <a href="articulo.html?content=${thumbnailData[i].id}">
        <img src="${filteredNews[i].IMG}" alt="${filteredNews[i].IMGalt}">
      </a>
      </div>
      <div class="text-container">
        <h2 class="title"><a href="articulo.html?content=${filteredNews[i].id}">${filteredNews[i].title}</a></h2>
        <span class="editor">${filteredNews[i].editor}</span>
        <span> - </span>
        <span class="article-date">${filteredNews[i].date}</span>
        <p class="summary">${filteredNews[i].summary}</p>
      </div>
    `;
          allNewsContainer.appendChild(container);
        }
      }
      //Y esto es para restablecer los filtros.
      function resetFilters() {
  const allNewsContainer = document.querySelector(".all-news-container");
  allNewsContainer.innerHTML = ""; // Limpiar el contenedor de noticias
  // Generar todas las noticias sin filtrar
  for (let i = 0; i < thumbnailData.length; i++) {
    let container = document.createElement("div");
    const title = document.getElementById("all-news-title");
    title.innerHTML = `<h2 class="title" id="all-news-title">Todas las noticias:</h2>`;
    container.classList.add("news-list-item-container");
    container.innerHTML = `
      <div class="image-container">
        <a href="articulo.html?content=${thumbnailData[i].id}">
        <img src="${thumbnailData[i].IMG}" alt="${thumbnailData[i].IMGalt}">
      </a>
        </div>
      <div class="text-container">
        <h2 class="title"><a href="articulo.html?content=${thumbnailData[i].id}">${thumbnailData[i].title}</a></h2>
        <span class="editor">${thumbnailData[i].editor}</span>
        <span> - </span>
        <span class="article-date">${thumbnailData[i].date}</span>
        <p class="summary">${thumbnailData[i].summary}</p>
      </div>
    `;
    allNewsContainer.appendChild(container);
  }
}