function createSakura() {
  const sakura = document.createElement('div');
  sakura.classList.add('sakura');
  document.body.appendChild(sakura);

  const startX = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;

  sakura.style.left = startX + 'px';
  sakura.style.animationDuration = Math.random() * 4 + 5 + 's';
  sakura.style.animationDelay = delay + 's';

  sakura.addEventListener('animationiteration', () => {
    sakura.style.left = Math.random() * window.innerWidth + 'px';
  });
}

for (let i = 0; i < 30; i++) {
  createSakura();
}


setTimeout(function() {
        $('#help').animate({
          'right': '0px' 
        }, 3000);
      }, 1000); 
 var nouvelleDiv = $('<div>Je suis une nouvelle div</div>');
      nouvelleDiv.addClass('bubble');

      setTimeout(function() {
        $('body').append(nouvelleDiv);
      }, 5000);
