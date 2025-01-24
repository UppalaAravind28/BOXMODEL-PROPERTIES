document.addEventListener('DOMContentLoaded', () => {
    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');

    setTimeout(() => {
        red.classList.remove('active');
        yellow.classList.add('active');
    }, 2000); // Turn yellow after 2 seconds

    setTimeout(() => {
        yellow.classList.remove('active');
        green.classList.add('active');
    }, 4000); 
});

// Initially activate red
document.getElementById('red').classList.add('active');