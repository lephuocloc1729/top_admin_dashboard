const menu = document.getElementById('menu');
// create new variable to know whether sidebar is closed or not
let isSideBarClosed = false;
// new variable shows that whether there is a category in menu selected
let isSelected = false;

//add functionality to menu
menu.addEventListener('click', () => closeSideBar());

function closeSideBar() {
  if (!isSideBarClosed){
    document.querySelector('.sidebar').classList.add('closed');
    isSideBarClosed = true;
  }
  else if (isSideBarClosed) {
    document.querySelector('.sidebar').classList.remove('closed');
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
    if (!isSideBarClosed){
      closeSideBar();
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
let htmlForOrder = `
  <div class='thead order'>
    <div>Name</div>
    <div>Price</div>
    <div>Payment</div>
    <div class='status-box'>
      <div>Status</div>
    </div>
  </div>
`;
orderList.forEach(order => {
  let bg;
  if (order.status === 'In progress'){
    bg = '#04D9FF';
  } else if (order.status === 'Return'){
    bg = '#FF1818';
  } else if (order.status === 'Delivered'){
    bg = '#39FF14';
  }
  htmlForOrder += `
  <div class='order'>
    <div class='name'>
      ${order.name}
    </div>
    <div class='price'>
      ${order.price}
    </div>
    <div class='payment'>
      ${order.payment}
    </div>
    <div class='status-box'>
      <div class='status' style='--bg:${bg}'>
      ${order.status}
      </div>
    </div>
  </div>
  `
})
document.querySelector('.orders .body').innerHTML = htmlForOrder;

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

//render customers' information 
let htmlForCustomers = '';
customerList.forEach(customer => {
  htmlForCustomers += `
  <div class='customer'>
    <div class='name'>
      ${customer.name}
    </div>
    <div class='nationality'>
      ${customer.nationality}
    </div>
  </div>
  `
})
document.querySelector('.customers .body').innerHTML = htmlForCustomers;

// add color mode 
const colorMode = document.getElementById('color-mode');
colorMode.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('dark');
  if (document.querySelector('.dark')){
    document.getElementById('color-mode').innerHTML=`<ion-icon name="sunny"></ion-icon>` 
  } else {
    document.getElementById('color-mode').innerHTML=`<ion-icon name="moon-outline"></ion-icon>` 
  }
})

// close sidebar when clicking outside
document.querySelector('body').addEventListener('click', (e) => {
  if ((e.target.id !== 'sidebar') && (e.target.id !== 'menu-icon')){
    if(!isSideBarClosed){
      closeSideBar();
    }
  }
})