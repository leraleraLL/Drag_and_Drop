
const dragStart = target => {
    target.classList.add('dragging');
};

const dragEnd = target => {
    target.classList.remove('dragging');
};

const dragEnter = event => {
    event.currentTarget.classList.add('drop');
};

const dragLeave = event => {
    event.currentTarget.classList.remove('drop');
};

const drag = event => {
    event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
    event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
};

const drop = event => {
    document.querySelectorAll('.col-header').forEach(col => col.classList.remove('drop'));
    document.querySelector(`[data-id="${event.dataTransfer.getData('text/plain')}"]`).remove();

    event.preventDefault();
    event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html');
};

const allowDrop = event => {
    event.preventDefault();
};

document.querySelectorAll('.col-header').forEach(col => {
    col.addEventListener('dragenter', dragEnter);
    col.addEventListener('dragleave', dragLeave);
});

document.addEventListener('dragstart', e => {
    if (e.target.className.includes('item')) {
        dragStart(e.target);
    }
    

});

document.addEventListener('dragend', e => {
    if (e.target.className.includes('item')) {
        dragEnd(e.target);
    }
});

const inputBtn = document.querySelector('#one');
const input = document.querySelector('.text')
input.classList.add('hidden')
document.addEventListener('click', e => {
    input.classList.remove('hidden')
}
)
