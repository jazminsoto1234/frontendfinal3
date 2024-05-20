document.addEventListener('DOMContentLoaded', async () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const button = document.getElementById('button');

    button.addEventListener('click', async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://lb-proyecto-1789007519.us-east-1.elb.amazonaws.com:8082/cliente', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener la lista de clientes');
            }

            const clients = await response.json();

            // Verificar las credenciales
            const client = clients.find(client => client.email === username.value && client.contrasena === password.value);

            if (client) {
                alert('Credenciales correctas');
                localStorage.setItem('userId', client.id);
                window.location.href = '/menu2';
                 
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error. Por favor, inténtalo de nuevo más tarde.');
        }
    });
});