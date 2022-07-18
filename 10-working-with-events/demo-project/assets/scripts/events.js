const form = document.querySelector('form');
const button = document.querySelector('button');
const div = document.querySelector('div');
const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

window.addEventListener('scroll', event => {
    console.log(event)
})

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
});

button.addEventListener('click', event => {
    // With stop propagation we can stop bubbleing so upper elements event listener will not be triggered.
    event.stopPropagation();
    console.log('Button Clicked');
    console.log(event);
});

div.addEventListener('click', event => {
    console.log('Clicked Div')
    console.log(event);
});

// Event listener defined on list element but used for li elements inside it so this is Event delegation.
list.addEventListener('click', function(event) {
    event.target.closest('li').classList.toggle('highlight');
    console.log(this);
});

// Draggable list items 
listItems.forEach(element => {
    element.addEventListener('dragstart', event => {
        //event.dataTransfer.setData('text/plain', this.classList);
        event.dataTransfer.effectAllowed = 'move';
    })
});