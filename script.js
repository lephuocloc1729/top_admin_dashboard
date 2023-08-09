const menu = document.getElementById('menu');
// create new variable to know whether sidebar is closed or not
let isSideBarClosed = false;
// new variable shows that whether there is a category in menu selected
let isSelected = false;

//add functionality to menu
menu.addEventListener('click', () => closeSideBar());

function closeSideBar() {
  if (!isSideBarClosed){
    document.querySelector('.sidebar').style.width = '90px';
    isSideBarClosed = true;
  }
  else if (isSideBarClosed) {
    document.querySelector('.sidebar').style.width = '220px';
    isSideBarClosed = false;
  }
}

//make category in menu stay selected
const categories = document.querySelectorAll('.menu-list li');
categories.forEach(category => {
  category.addEventListener('click', () => {
    if (isSelected){
      const beingSelected = document.querySelector('.selected');
      beingSelected.classList.remove('selected');
      if (category === beingSelected){
        isSelected = false;
      }
      else {
        category.classList.add('selected');
      }
    }
    else {
      category.classList.add('selected');
      isSelected = true;
    }
  })
});
