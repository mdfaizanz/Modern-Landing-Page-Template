// Text Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, observerOptions);

window.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll(
    "h1, h2, h3, p, .icon, .hero, .about, .highlights, .features, .what-u-get, .who-is",
  );
  textElements.forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });

  // Image Conatiner 

  const featureItem = document.querySelectorAll(".features-list li");
  const featureImage = document.querySelector(".image-container img");

  if (featureItem.length && featureImage) {
    const setActiveItem = (activeItem) => {
      featureItem.forEach((item) =>
        item.classList.toggle("active", item === activeItem),
      );
    };

    featureItem.forEach((item) => {
      item.addEventListener("click", () => {
        const nextSrc = item.dataset.src;
        if (!nextSrc || featureImage.src.endsWith(nextSrc)) return;

        featureImage.classList.add("fade-out");
        setTimeout(() => {
          featureImage.src = nextSrc;
          featureImage.classList.remove("fade-out");
          featureImage;
          setTimeout(() => {
            featureImage.classList.remove("fade-in");
          }, 320);
        }, 220);

        setActiveItem(item);
      });
    });
  }
});
