window.onload = function() {
    fetch('big.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('text-container').textContent = data;
        })
        .catch(error => console.error('Greška pri učitavanju datoteke:', error));
};
