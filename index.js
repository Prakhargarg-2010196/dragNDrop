
let draggableItems = document.querySelectorAll('.drag-item');
// Assigning unique ids to the draggable items list
for (let i = 0; i < draggableItems.length; i++){
    draggableItems[i].setAttribute('id', i);
}
// Add event listeners to the the draggable items
draggableItems.forEach((draggableItem) => {
    draggableItem.addEventListener("dragstart", (e) => {
        console.log("dragstart");// add the dragging class to the element being dragged.
        e.target.classList.add("dragging");
        // clear the drag data stored in the cache.
        // e.dataTransfer.clearData();
        // set new data to the drag 
        e.dataTransfer.setData('text/plain', e.target.id);
    });
    draggableItem.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');// remove the dragging class after being dropped.
    })
}
);
const dropContainer = document.querySelector('.drop-container');
dropContainer.addEventListener('dragover', (e) => {
    console.log('dragging over');
    e.preventDefault();// to allow drop feature.
    
})
dropContainer.addEventListener('drop', function (e) {
    
    // fetches the id we set during the drag of the draggable elements
    let draggedItemid = e.dataTransfer.getData('text/plain');
    console.log(draggedItemid);
    // Retrieve the dragged data
    let draggedItem = document.getElementById(draggedItemid);
    // draggedItem.classList.remove('dragging');
    e.target.appendChild(draggedItem);
})
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload())