document.getElementById('shopping-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const newItem = {
        Nombre: document.getElementById('name').value,
        Descripcion: document.getElementById('description').value,
        Fecha: document.getElementById('date').value,
        EsCompletado: document.getElementById('isCompleted').checked
    };
    
    await fetch('http://localhost:3000/crear-lista', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
    });
    
    loadItems();
});

async function loadItems() {
    const pendingItemsRes = await fetch('http://localhost:3000/pendientes');
    const pendingItems = await pendingItemsRes.json();
    
    const completedItemsRes = await fetch('http://localhost:3000/completados');
    const completedItems = await completedItemsRes.json();
    
    const pendingList = document.getElementById('pending-items');
    pendingList.innerHTML = '';
    pendingItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.Nombre} - ${item.Descripcion}`;
        pendingList.appendChild(li);
    });

    const completedList = document.getElementById('completed-items');
    completedList.innerHTML = '';
    completedItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.Nombre} - ${item.Descripcion}`;
        completedList.appendChild(li);
    });
}

loadItems();
