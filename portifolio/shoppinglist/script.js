const addForm = document.getElementById('add-form');
const newItemInput = document.getElementById('new-item');
const shopList = document.getElementById('shop-list');
const clearButton = document.getElementById('clear-button');
const copyUrlButton = document.getElementById('copy-url-button');

function updateUrl() {
  const items = Array.from(shopList.children).map(li => li.innerText);
  const newPath = items.join(',');
  const basePath = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
  history.pushState({}, '', basePath + '/' + newPath);
}

function createListItem(itemText) {
  const li = document.createElement('li');
  li.innerText = itemText;
  li.onclick = () => {
    li.remove();
    updateUrl();
  };
  return li;
}

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const newItemText = newItemInput.value.trim();
  if (newItemText.length === 0) {
    return;
  }
  const newItem = createListItem(newItemText);
  shopList.appendChild(newItem);
  updateUrl();
  newItemInput.value = '';
});

const currentPath = window.location.pathname;
if (currentPath !== '/' && item !== 'index.html') {
  const lastSegment = currentPath.split('/').pop();
  const items = lastSegment.split(',');
  items.forEach(item => {
    const li = createListItem(item);
    shopList.appendChild(li);
  });
}

clearButton.addEventListener('click', () => {
  while (shopList.firstChild) {
    shopList.removeChild(shopList.firstChild);
  }
  updateUrl();
});

copyUrlButton.addEventListener('click', () => {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = window.location.href;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
  console.log('URL copied to clipboard');
});
//if (currentPath !== '/' && item !== 'index.html') {