
const items = [
    {
        id: 1,
        name: 'Pudge',
        image: 'public/pudge.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam a dui feugiat feugiat eu eu justo. Quisque ac consectetur ligula.',
        action: 'До окончания акции: ',
        time: '24 дня 16 часов'
    },

    {
        id: 2,
        name: 'Techies',
        image: 'public/techies.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam a dui feugiat feugiat eu eu justo. Quisque ac consectetur ligula.',
        action: 'До окончания акции: ',
        time: '14 дней 16 часов'
    },

    {
        id: 3,
        name: 'Tinker',
        image: 'public/tinker.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam a dui feugiat feugiat eu eu justo. Quisque ac consectetur ligula.',
        action: 'До окончания акции: ',
        time: '10 дней 9 часов'
    },

    {
        id: 4,
        name: 'Juggernaut',
        image: 'public/yurnero.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam a dui feugiat feugiat eu eu justo. Quisque ac consectetur ligula.',
        action: 'До окончания акции: ',
        time: '4 дня 0 часов'
    },
    
    {
        id: 5,
        name: 'Night Stalker',
        image: 'public/night_stalker.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam a dui feugiat feugiat eu eu justo. Quisque ac consectetur ligula.',
        action: 'Акция истекла',
        time: ''
    },

    {
        id: 6, 
        name: 'Terrorblade',
        image: 'public/tb.png',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget quam a dui feugiat feugiat eu eu justo. Quisque ac consectetur ligula.',
        action: 'Акция истекла',
        time: ''
    },

];


function createElements() {
    const elementsContainer = document.querySelector(".elements-container");
  
    items.forEach((item) => {
      const elementDiv = document.createElement("div");
      const containerDiv = document.createElement("div"); 
      const image = document.createElement("img");
      const button = document.createElement("button");
      const action = document.createElement("p");
      const time = document.createElement("p");
      const infoCard = document.createElement("div"); 
      const headerInfo = document.createElement("h1"); 
      const bodyInfo = document.createElement("div"); 
  
      image.src = item.image;
      image.alt = item.name;
      button.textContent = item.name;
      action.textContent = item.action;
      time.textContent = item.time;
      headerInfo.textContent = item.name; 
      bodyInfo.textContent = item.info;
  
      
      elementDiv.classList.add("element");
      containerDiv.classList.add("element-container"); 
      image.classList.add("element-image");
      button.classList.add("element-button");
      infoCard.classList.add("info-card"); 
      headerInfo.classList.add("header-info"); 
      bodyInfo.classList.add("body-info"); 
  

      containerDiv.appendChild(image);
  
      infoCard.appendChild(headerInfo);
      infoCard.appendChild(bodyInfo);
  
      containerDiv.appendChild(infoCard);
      elementDiv.appendChild(containerDiv);
  
      elementDiv.appendChild(button);
      elementDiv.appendChild(action);
      elementDiv.appendChild(time);
      elementsContainer.appendChild(elementDiv);
    });
  
    let isVisible = false; 
  
    function handleButtonClick(event) {
      const button = event.target;
      const elementDiv = button.parentElement;
      const infoCard = elementDiv.querySelector(".info-card");
  
      if (!isVisible) {
        infoCard.style.display = "block";
        infoCard.style.animation = "fadeIn 0.5s forwards";
      } else {
        infoCard.style.animation = "fadeOut 0.5s forwards";
      }
  
      isVisible = !isVisible; 
    }
  
    const buttons = document.querySelectorAll(".element-button");
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
  }
  
  document.addEventListener("DOMContentLoaded", createElements);
  
