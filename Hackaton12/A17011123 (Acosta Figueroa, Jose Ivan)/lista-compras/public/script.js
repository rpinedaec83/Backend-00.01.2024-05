document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.getElementById('create-form');
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');
    
    const fetchItems = async () => {
        const [pendingResponse, completedResponse] = await Promise.all([
            fetch('/pending'),
            fetch('/completed')
        ]);
        const pendingItems = await pendingResponse.json();
        const completedItems = await completedResponse.json();
        
        pendingList.innerHTML = pendingItems.map(item => `
            <li>
                ${item.nombre} - ${item.descripcion} - ${item.fecha}
                <button data-id="${item.id}" class="complete-btn">Marcar como completado</button>
            </li>
        `).join('');
        
        completedList.innerHTML = completedItems.map(item => `
            <li>${item.nombre} - ${item.descripcion} - ${item.fecha}</li>
        `).join('');
        
        document.querySelectorAll('.complete-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const id = e.target.getAttribute('data-id');
                await fetch(`/complete/${id}`, { method: 'POST' });
                fetchItems();
            });
        });
    };
    
    createForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(createForm);
        const data = {
            nombre: formData.get('nombre'),
            descripcion: formData.get('descripcion'),
            fecha: formData.get('fecha'),
            esCompletado: formData.get('esCompletado') === 'on'
        };
        
        await fetch('/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        createForm.reset();
        fetchItems();
    });
    
    fetchItems();
});
