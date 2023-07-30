let items = document.querySelectorAll('.item');
console.log(items);
items.forEach(item => {
  item.addEventListener('mousemove', (e)=>{
    let positionPx = e.pageX - item.getBoundingClientRect().left;
    let positionX = (positionPx / item.offsetWidth) * 100;
    let positionPy = e.pageY - item.getBoundingClientRect().top;
    let positionY = (positionPy / item.offsetHeight) * 100;

    item.style.setProperty('--cX', -(positionX-50)/2+"px");
    item.style.setProperty('--cY', -(positionY-50)/2+"px");
    item.style.setProperty('--rX', (0.5)*(50 - positionY) + 'deg');
      item.style.setProperty('--rY', -(0.5) * (50 - positionX) + 'deg');
      item.style.setProperty('--scale', 1.1);
      let img = item.querySelector('img');
      img.style.setProperty('--offsetX', (positionX-50)/2+"px");
      img.style.setProperty('--offsetY', (positionY - 50)/2  + "px");
      img.style.setProperty('--cX', -(positionX-50)/5+"px");
      img.style.setProperty('--cY', -(positionY-50)/5+"px");
  });

  item.addEventListener('mouseout', ()=>{
    item.style.setProperty('--rX', '0deg');
    item.style.setProperty('--rY', '0deg');
    item.style.setProperty('--scale', 1);
      item.style.setProperty('--cX', '10px');
      item.style.setProperty('--cY', '10px');
      let img = item.querySelector('img');
      img.style.setProperty('--offsetX', 0);
      img.style.setProperty('--offsetY', 0);
      img.style.setProperty('--cX', 0);
      img.style.setProperty('--cY', 0);
  });
});
