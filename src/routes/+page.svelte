<svelte:head>
    <title>
        Logo
    </title>
    <meta name="description" content="Acab strona glowna">
    <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>

</svelte:head>

<style>
.hero {
  height: 80vh;
}

.hero-bg {
  background-image: linear-gradient( rgb(255,255,255,0.63),rgb(13,110,253,0.39)), url('/images/5.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  filter: sepia(30%) opacity(80%) saturate(80%) hue-rotate(190deg);
}

.card * {
  /* border-radius: 0; */
}

</style>

<section class="hero hero-bg d-flex align-items-center">
  <div class="container d-flex flex-column mb-5">
    <h1 class="display-6 mb-3">  
      <span class="display-4 text-primary">Czyszczenie</span> <span class="text-white"> tapicerek <br>
      materacy, krzeseł, dywanów. </span>
    </h1>
    <div class="d-flex gap-3 mt-3">
      <button class="btn btn-primary d-flex align-items-center gap-2">Czym sie zajmujemy

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down flex-shrink-0" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg>

      </button>
      <button class="btn btn-outline-light">
        Przykładowe realizacje
      </button>
    </div>
  </div>
</section>

<section>
  <div class="row">
    <div class="col-xl-4">
      <img width="400" class="img-fluid" src="/images/2.jpg" alt="">
    </div>
    <div class="col-xl-8">
      <h2>Krótko o nas</h2>
      <p>
        W ofercie naszej firmy znajduje się pranie tapicerki meblowej
        oraz czyszczenie dywanów. Do wykonania usuługi używamy sprzętów najlepszej klasy
        oraz profesjonalne środki czyszczące.
      </p>
      <p>
        Realizujemy zlecenia dla osób prywatnych i firm.
        Skontaktuj się z nami, aby dowiedzieć się więcej.
      </p>
      <p>
        Nasz cennik jest jasno sprecyzowany.
      </p>
    </div>
  </div>
</section>

<section class="container">
  <h3>Bezpłatny dojazd do klienta na terenie Łodzi</h3>
  <p class="text-muted">
    Koszt dojazdu poza granice miasta ustalany jest indywidualnie. 
  </p>
  <a href="#">Skontaktuj się w celu ustalenia ceny dojazdu</a>
</section>

<section class="py-5" style="background-color: #fafafa;">
  <div class="container">
    <h2 class="mb-5">Usługi</h2>
    <div class="row d-block" data-masonry={'{"percentPosition": true }'}>
      <div class="col-sm-6 col-lg-4 mb-4">
        <div class="card text-bg-primary text-center p-3">
          <p class="h5">Sprawdź aktualnie obowiązujący cennik</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 mb-4">
      <div class="card">
        <img src="/images/masonry1.jpg" alt="" class="" style="object-fit: cover; height:200px">

        <div class="card-body">
          <h5 class="card-title">Tapicerki meblowe</h5>
          <p class="card-text">
            Pranie i czyszczenie mebli tapicerowanych, zestawów wypoczynkowych,
            narożników, sof, wersalek, kanap, foteli, puf, poduszek meblowych.
          </p>
          <h6 class="card-price">
            CENA: 80 - 250 zł
          </h6>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="card">
        <img src="/images/masonry3.jpg" alt="" class="" style="object-fit: cover; height:200px">

        <div class="card-body">
          <h5 class="card-title">Materace i łóżka</h5>
          <p class="card-text">
            Czyszczenie materacy, sof i foteli rozkładanych, wersalek, tapczanów
          </p>
          <h6 class="card-price">
            CENA: 150 - 350 zł
          </h6>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="card">
        <img src="/images/masonry3.jpg" alt="" class="" style="object-fit: cover; height:200px">

        <div class="card-body">
          <h5 class="card-title">Fotele i krzesła</h5>
          <p class="card-text">
            Czyszczenie materacy, sof i foteli rozkładanych, wersalek, tapczanów
          </p>
          <h6 class="card-price">
            CENA: 50 - 150 zł
          </h6>
        </div>
      </div>
    </div>

    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="card d">
        <img src="/images/masonry1.jpg" alt="" class="" style="object-fit: cover; height:200px">
        <div class="card-body">
          <h5 class="card-title">Dywany i wykładziny</h5>
          <p class="card-text">
            Czyszczenie materacy, sof i foteli rozkładanych, wersalek, tapczanów
          </p>
          <h6 class="card-price">
            CENA: 200 - 450 zł
          </h6>
        </div>
      </div>
    </div>
    

    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="card bg-primary text-white">
        <div class="card-body">
          <h5 class="card-title">Pozostałe usługi wyceniane indywidualnie</h5>
          <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
          <button class="btn btn-outline-light d-flex align-items-center gap-2">Przykładowe realizacje
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down flex-shrink-0" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

  </div>
  </div>
</section>


