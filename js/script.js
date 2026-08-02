document.addEventListener('DOMContentLoaded', function () {
    // Dynamic year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log('Aleksandr Gladskoy — Software Engineer');
});