function menuShow() {
  const menuMobile = document.querySelector(".menu");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");

    document.querySelector(".icon").src = "./imgs/menu_black.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "./imgs/close.svg";
  }
}

function menuHide() {
  document.querySelector(".icon").src = "./imgs/menu_black.svg";
  document.querySelector(".menu").classList.remove("open");
}



// dark theme buttom

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

function lightDark() {
  const menu = document.querySelector('.menu')
  const header = document.getElementById('header');
  const link1 = document.getElementById('link1');
  const link2 = document.getElementById('link2');
  const link3 = document.getElementById('link3');
  const link4 = document.getElementById('link4');
  const link5 = document.getElementById('link5');
  const link6 = document.getElementById('link6');
  
  const menuLink1 = document.getElementById('menu-link1');
  const menuLink2 = document.getElementById('menu-link2');
  const menuLink3 = document.getElementById('menu-link3');
  const menuLink4 = document.getElementById('menu-link4');
  const menuLink5 = document.getElementById('menu-link5');
  const menuLink6 = document.getElementById('menu-link6');



  if (menu.classList.contains("dark")) {
    menu.classList.remove("dark")
  } else {
    menu.classList.add("dark")
  }

  if (header.classList.contains("dark")) {
    header.classList.remove("dark")
  } else {
    header.classList.add("dark")
  }

// sections

  // (eu sei que se eu fizesse uma function usando laço simplificaria, mas teria que rever como faz)


  if (link1.classList.contains("dark")) {
    link1.classList.remove("dark")
  } else {
    link1.classList.add("dark")
  }

  if (link2.classList.contains("dark")) {
    link2.classList.remove("dark")
  } else {
    link2.classList.add("dark")
  }

  if (link3.classList.contains("dark")) {
    link3.classList.remove("dark")
  } else {
    link3.classList.add("dark")
  }

  if (link4.classList.contains("dark")) {
    link4.classList.remove("dark")
  } else {
    link4.classList.add("dark")
  }

  if (link5.classList.contains("dark")) {
    link5.classList.remove("dark")
  } else {
    link5.classList.add("dark")
  }

  if (link6.classList.contains("dark")) {
    link6.classList.remove("dark")
  } else {
    link6.classList.add("dark")
  }

  // menu


  if (menuLink1.classList.contains("dark")) {
    menuLink1.classList.remove("dark")

  } else {
    menuLink1.classList.add("dark")
  }

  if (menuLink2.classList.contains("dark")) {
    menuLink2.classList.remove("dark")

  } else {
    menuLink2.classList.add("dark")
  }

  if (menuLink3.classList.contains("dark")) {
    menuLink3.classList.remove("dark")

  } else {
    menuLink3.classList.add("dark")
  }

  if (menuLink4.classList.contains("dark")) {
    menuLink4.classList.remove("dark")

  } else {
    menuLink4.classList.add("dark")
  }
  if (menuLink5.classList.contains("dark")) {
    menuLink5.classList.remove("dark")

  } else {
    menuLink5.classList.add("dark")
  }
  if (menuLink6.classList.contains("dark")) {
    menuLink6.classList.remove("dark")

  } else {
    menuLink6.classList.add("dark")
  }


}

// function fontSwap() {
//   const menuMobile = document.querySelector('.menu');
//   const header = document.getElementById('header');
//   const section = document.querySelector('.section');
//   const menuLink = document.querySelector('.menu-link');

//   if (menuMobile.classList.contains("light-font")) {
//     menuMobile.classList.remove("light-font")
//   } else {
//     menuMobile.classList.add("light-font")
//   }

//   if (header.classList.contains("light-font")) {
//     header.classList.remove("light-font")
//   } else {
//     header.classList.add("light-font")
//   }

//   if (section.classList.contains("light-font")) {
//     section.classList.remove("light-font")
//   } else {
//     section.classList.add("light-font")
//   }

//   if (menuLink.classList.contains("light-font")) {
//     menuLink.classList.remove("light-font")
//   } else {
//     menuLink.classList.add("light-font")
//   }
// }