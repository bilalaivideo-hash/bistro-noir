'use strict';
const menu = {
  signatures: [ ['Beef Wellington','A signature centrepiece','POPULAR'], ['Cordon Bleu','A Bistro Noir favourite','POPULAR'], ['Chicken Parmigiana','Comfort at the table','POPULAR'], ['Short Ribs','For an unhurried evening',''] ],
  pasta: [ ['Rigatoni with Truffle','Pasta',''], ['Penne Arrabbiata','Pasta','POPULAR'], ['Truffle Burrata Pizza','Pizza','POPULAR'], ['Genovese Pizza','Pizza','POPULAR'] ],
  sweet: [ ['Sticky Toffee Pudding','Something sweet to finish',''], ['Strawberry Shrub','A refreshing accompaniment',''], ['Tomato Soup','To begin','POPULAR'], ['Bread Basket','For the table',''] ]
};
const items = document.getElementById('menu-items');
function renderMenu(category) {
  items.replaceChildren(...menu[category].map(([name, description, tag], index) => {
    const row = document.createElement('article'); row.className = 'menu-item';
    const number = document.createElement('span'); number.className = 'number'; number.textContent = String(index + 1).padStart(2, '0');
    const copy = document.createElement('div'); const title = document.createElement('h3'); title.textContent = name;
    const detail = document.createElement('p'); detail.textContent = description; copy.append(title,detail);
    const badge = document.createElement('span'); badge.className = 'tag'; badge.textContent = tag;
    row.append(number,copy,badge); return row;
  }));
}
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-category]').forEach(other => {other.classList.toggle('active', other === button); other.setAttribute('aria-pressed', String(other === button));});
  renderMenu(button.dataset.category);
}));
renderMenu('signatures');
const toggle = document.querySelector('.nav-toggle'); const navigation = document.getElementById('navigation');
function closeNavigation(){navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
toggle.addEventListener('click', () => {const opened = navigation.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', event => {if(event.key === 'Escape' && navigation.classList.contains('open')){closeNavigation();toggle.focus();}});
