setInterval(() => {
  const audioAdvert = document.querySelectorAll('.audio-advert_expanded');
  if (!audioAdvert[0].classList.contains('audio-advert_hidden')) {
    const audio = document.getElementsByClassName('audio-advert__video');
    const a = audio[0]?.querySelectorAll('div');
    for (let e of a) {
      if (e.style['z-index'] === '1') {          
        const arr = Array.from(e?.shadowRoot?.children[0]?.childNodes).filter(e => e.nodeName === 'DIV');
        const dialog = arr[arr.length - 1];
        if (!!dialog) { 
          dialog.children[1].children[0].children[0].children[0].click();
          dialog.children[1].children[0].children[0].children[1].click();  
        }
      }
    }
  }
}, 1000);

function f() {
  setTimeout(() => {
    const poster = document.querySelectorAll('.payment-plus-popup');
    const overlay = document.querySelectorAll('.overlay');
    const audioAdvert = document.querySelectorAll('.audio-advert');
    for (let e of poster) {
      e.style.display = 'none';
    }
    for (let e of overlay) {
      e.style.display = 'none';
    }
  }, 1500);
}