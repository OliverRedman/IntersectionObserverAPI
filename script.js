'use strict';

function revealSection(entries, observer) {
  entries.forEach((entry) => {
    // if 40% of the item is present on the screen
    if (entry.isIntersecting) {
      console.log(entry.target, 'Is now visible');

      // adding the class that makes the item visible
      entry.target.classList.add('visible');

      // stop checking if the item is in view
      observer.unobserve(entry.target);
    }
  });
}
const intersectionObserver = new IntersectionObserver(revealSection, {
  // amount of the item that needs to be visible before it can become visible 0.4 = 40%
  threshold: 0.4,
});

// collecting all dom elements with a class of .item
const elements = [...document.querySelectorAll('.item')];
// for every element with the class of .item create observer
elements.forEach((element) => intersectionObserver.observe(element));
