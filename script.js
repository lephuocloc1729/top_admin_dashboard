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

// create object generator for customers and orders
function customers(name, nationality) {
  this.name = name
  this.nationality = nationality
}

function orders(name, price, payment,status) {
  this.name = name
  this.price = price
  this.payment = payment
  this.status = status
}

// create objects for orders and customers
let orderList = [];
orderList.push(new orders('Refridgerator', '$1200', 'Paid', 'Delivered'))
orderList.push(new orders('Macbook Air M1', '$1000', 'Paid', 'In progress'))
orderList.push(new orders('Macbook Pro M1', '$2000', 'Due', 'In progress'))
orderList.push(new orders('Macbook Air M2', '$1500', 'Due', 'Return'))
orderList.push(new orders('Ipad Air', '$800', 'Paid', 'Return'))
orderList.push(new orders('Ipad Air', '$800', 'Paid', 'Return'))
orderList.push(new orders('Macbook Air M1', '$1000', 'Paid', 'In progress'))
orderList.push(new orders('Ipad Air', '$800', 'Due', 'In progress'))
orderList.push(new orders('Macbook Air M1', '$1000', 'Paid', 'In progress'))
orderList.push(new orders('Macbook Pro M2', '$3000', 'Paid', 'Delivered'))
orderList.push(new orders('Macbook Air M1', '$1000', 'Paid', 'In progress'))
orderList.push(new orders('Ipad Air', '$800', 'Due', 'In progress'))

// render these orders' information onto the page
let htmlForOrder = ''
orderList.forEach(order => {

})

// create customer's objects 
let customerList = [];
customerList.push(new customers('Hai Bang', 'Vietnam'))
customerList.push(new customers('Phuoc Loc', 'Vietnam'))
customerList.push(new customers('David', 'America'))
customerList.push(new customers('Roberto', 'Brazil'))
customerList.push(new customers('Ronaldo', 'Portugal'))
customerList.push(new customers('Alvarez', 'Argentina'))
customerList.push(new customers('Luke', 'Australia'))
customerList.push(new customers('Ben', 'Mexico'))
customerList.push(new customers('Alexandro', 'Italy'))

