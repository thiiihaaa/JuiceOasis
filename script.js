document.getElementById("menu-toggle").addEventListener('click', function() { 
    let menutoggle = document.getElementById("overlay"); 

    if (overlay.style.visibility === 'visible') {
        overlay.style.visibility = 'hidden';
        overlay.style.animation = ''; // Remove animation when hiding
    } else {
        overlay.style.visibility = 'visible'; 
        overlay.style.animation = 'Anime1 3s ease forwards';
    }
});
