function filterMovies(language) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (language === "all" || card.dataset.lang === language) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}



