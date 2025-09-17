import './styles.css';

      // Dark/Light Mode Toggle
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');
    const themeText = document.querySelector('.theme-text');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
            if (themeText) themeText.textContent = 'Modo Claro';
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            if (themeText) themeText.textContent = 'Modo Claro';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
            if (themeText) themeText.textContent = 'Modo Escuro';
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
 