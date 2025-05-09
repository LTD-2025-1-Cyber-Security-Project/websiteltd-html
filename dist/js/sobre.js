document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");
  const progressFill = document.querySelector(".progress-fill");

  let currentIndex = 0;
  let slideInterval;
  const autoSlideDelay = 5000; // 5 segundos

  // Inicializa o carrossel
  function initializeCarousel() {
    updateSlides();
    startAutoSlide();

    // Configura botões e indicadores
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    indicators.forEach((indicator) => {
      indicator.addEventListener("click", function () {
        currentIndex = parseInt(this.dataset.index);
        updateSlides();
        resetAutoSlide();
      });
    });

    // Pausa o intervalo quando o mouse está sobre o carrossel
    const carouselContainer = document.querySelector(
      ".carousel-container"
    );
    carouselContainer.addEventListener("mouseenter", stopAutoSlide);
    carouselContainer.addEventListener("mouseleave", startAutoSlide);
  }

  // Atualiza a exibição dos slides
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });

    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });

    // Atualiza a barra de progresso
    const progress = ((currentIndex + 1) / slides.length) * 100;
    progressFill.style.transform = `translateX(${-100 + progress}%)`;
  }

  // Avança para o próximo slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
    resetAutoSlide();
  }

  // Volta para o slide anterior
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
    resetAutoSlide();
  }

  // Inicia a apresentação automática
  function startAutoSlide() {
    if (!slideInterval) {
      slideInterval = setInterval(nextSlide, autoSlideDelay);
    }
  }

  // Para a apresentação automática
  function stopAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = null;
  }

  // Reseta o temporizador
  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Efeito hover para features
  const featureItems = document.querySelectorAll(".feature-item");
  featureItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      featureItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.style.opacity = "0.7";
        }
      });
    });

    item.addEventListener("mouseleave", function () {
      featureItems.forEach((otherItem) => {
        otherItem.style.opacity = "1";
      });
    });
  });

  // Inicializa o carrossel
  initializeCarousel();

  // Adiciona animação paralaxe na imagem
  document.addEventListener("mousemove", function (e) {
    const activeImage = document.querySelector(
      ".carousel-slide.active img"
    );
    if (activeImage) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      activeImage.style.transform = `scale(1.05) translate(${xAxis}px, ${yAxis}px)`;
    }
  });
});