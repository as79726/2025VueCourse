const button1 = document.querySelector('button');
const input1 = document.querySelector('input');
const list1 = document.querySelector('ul');
function addPlan() {
    const value = input1.value;
    const item = document.createElement('li');
    item.textContent = value;
    list1.appendChild(item);
    console.log(value);
    input1.value = '';
}
button1.addEventListener('click', addPlan);
