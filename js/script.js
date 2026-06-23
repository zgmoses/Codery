// ========== MOBILE NAVIGATION ==========
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navActions = document.getElementById("navActions");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu?.classList.toggle("active");
      navActions?.classList.toggle("active");
    });
  }

  // Tutup menu saat link diklik (opsional)
  document.querySelectorAll(".cd-nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger?.classList.remove("active");
      navMenu?.classList.remove("active");
      navActions?.classList.remove("active");
    });
  });
});

// ========== LEARNING PATH FILTER ==========
function initLearningPathFilter() {
  const chips = document.querySelectorAll(".cd-lp-chip");
  const cards = document.querySelectorAll(".cd-lp-card");
  const emptyState = document.getElementById("lpEmpty");
  const resetBtn = document.getElementById("lpResetFilter");

  let activeFilter = "semua";

  function updateCards() {
    let visible = 0;
    cards.forEach((card) => {
      const category = card.dataset.category;
      const match = activeFilter === "semua" || category === activeFilter;
      card.style.display = match ? "" : "none";
      if (match) visible++;
    });
    if (emptyState) {
      emptyState.style.display = visible === 0 ? "block" : "none";
    }
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.dataset.filter;
      updateCards();
    });
  });

  resetBtn?.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    const semua = document.querySelector('.cd-lp-chip[data-filter="semua"]');
    semua?.classList.add("active");
    activeFilter = "semua";
    updateCards();
  });
}

// ========== ANIMATE CARDS ON LOAD (untuk halaman learning path & courses) ==========
function animateCards(selector) {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.06}s`;
    card.classList.add("cd-card-animate-in");
  });
}

// Jalankan inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  // Learning path filter
  if (document.querySelector(".cd-lp-filter")) {
    initLearningPathFilter();
    animateCards(".cd-lp-card");
  }

  // Courses (jika ada) – sudah ada di courses.html, tapi kita tambahkan animasi ulang jika diperlukan
  if (document.querySelector(".cd-courses-grid-section")) {
    animateCards(".cd-course-card");
  }
});
