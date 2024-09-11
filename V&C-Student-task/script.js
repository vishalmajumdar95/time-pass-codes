// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.chessboard td');
    let selectedPiece = null;

    cells.forEach(cell => {
        cell.addEventListener('dragstart', handleDragStart);
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('drop', handleDrop);
    });

    function handleDragStart(e) {
        if (e.target.innerText) {
            selectedPiece = e.target.innerText;
            e.dataTransfer.setData('text/plain', e.target.id);
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const target = e.target;
        if (selectedPiece) {
            target.innerText = selectedPiece;
            const origin = document.getElementById(e.dataTransfer.getData('text/plain'));
            origin.innerText = '';
            selectedPiece = null;
        }
    }
});
