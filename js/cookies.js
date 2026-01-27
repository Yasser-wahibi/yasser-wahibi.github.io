
    const aviso = document.getElementById('aviso');
    const btnAceptar = document.getElementById('aceptar_Cockies');
    const claveLocalStorage = 'cookies-aceptadas';


    if (!localStorage.getItem(claveLocalStorage)) {
        aviso.style.display = 'block';
    } 
    else {
        aviso.style.display = 'none';
    }

    btnAceptar.addEventListener('click', () => {
        aviso.style.display = 'none';
        localStorage.setItem(claveLocalStorage, 'true');
    });

