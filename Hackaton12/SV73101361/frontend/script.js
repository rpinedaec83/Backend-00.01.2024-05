document.addEventListener('DOMContentLoaded', () => {
    const pendingItemsList = document.getElementById('pendingItemsList');
    const completedItemsList = document.getElementById('completedItemsList');
    const addItemForm = document.getElementById('addItemForm');

    // Cargar items pendientes y completados al cargar la página
    loadItems();

    // Manejar el envío del formulario para añadir un item
    addItemForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const itemName = document.getElementById('itemName').value;
        const itemDescription = document.getElementById('itemDescription').value;
        const itemDate = document.getElementById('itemDate').value;

        const newItem = {
            nombre: itemName,
            descripcion: itemDescription,
            fecha: itemDate,
            es_completado: false  // Asegurarse de que el item se cree como pendiente
        };

        await fetch('http://localhost:4000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        });

        addItemForm.reset();
        loadItems();
    });

    // Función para cargar los items
    async function loadItems() {
        const pendingItemsResponse = await fetch('http://localhost:4000/items');
        const items = await pendingItemsResponse.json();

        const pendingItems = items.filter(item => !item.es_completado);
        const completedItems = items.filter(item => item.es_completado);

        displayItems(pendingItemsList, pendingItems, false);
        displayItems(completedItemsList, completedItems, true);
    }

    // Función para mostrar los items en la lista
    function displayItems(listElement, items, isCompleted) {
        listElement.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - ${item.descripcion} - ${item.fecha}`;

            if (!isCompleted) {
                const completeButton = document.createElement('button');
                completeButton.textContent = 'Marcar como Completado';
                completeButton.addEventListener('click', async () => {
                    await fetch(`http://localhost:4000/items/${item.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ es_completado: true })
                    });
                    loadItems();
                });
                li.appendChild(completeButton);
            }

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', async () => {
                const newName = prompt('Nuevo nombre:', item.nombre);
                const newDescription = prompt('Nueva descripción:', item.descripcion);
                const newDate = prompt('Nueva fecha (YYYY-MM-DD):', item.fecha);

                if (newName && newDate) {
                    await fetch(`http://localhost:4000/items/${item.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nombre: newName,
                            descripcion: newDescription,
                            fecha: newDate,
                            es_completado: item.es_completado
                        })
                    });
                    loadItems();
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', async () => {
                if (confirm(`¿Estás seguro de que deseas eliminar "${item.nombre}"?`)) {
                    await fetch(`http://localhost:4000/items/${item.id}`, {
                        method: 'DELETE'
                    });
                    loadItems();
                }
            });

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            listElement.appendChild(li);
        });
    }
});
