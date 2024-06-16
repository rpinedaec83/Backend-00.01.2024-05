     // número de ejercicios
     const totalButtons = 40;

     // contenedor
     const container = document.getElementById('buttons-container');

     for (let i = 1; i <= totalButtons; i++) {
         const button = document.createElement('button');
         button.type = 'button';
         button.innerText = `Ejercicio ${String(i).padStart(2, '0')}`;
         button.setAttribute('onclick', `ejercicio${String(i).padStart(2, '0')}()`);
         container.appendChild(button);
     }

