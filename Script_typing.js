// Exemple simple pour un seul élément
function typeWriter(element, speed) {
  let text = element.innerHTML;
  element.innerHTML = '';
  element.style.visibility = 'visible'; // Rendre visible une fois l'effet lancé
  
  let i = 0;
  let timer = setInterval(function() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed );
}

// Utilisation
typeWriter(document.querySelector('div'), 1); // 50ms par lettre


