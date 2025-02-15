document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    // Obtener el tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
  
    // Si hay un tema guardado, aplicarlo al cargar la página
    if (savedTheme) {
      body.classList.add(savedTheme);
    }
  
    // Escuchar el evento click en el botón
    themeToggle.addEventListener('click', () => {
      // Alternar la clase dark-theme en el body
      body.classList.toggle('dark-theme');
  
      // Guardar el tema actual en localStorage
      const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
      localStorage.setItem('theme', currentTheme);
    });
  });