function setEndereco(enderecoText) {
    const enderecoContainer = document.getElementById('endereco');
    enderecoContainer.textContent = enderecoText;
}

function fetchEndereco() {
    const cep = document.getElementById('cepInput').value;
    const cepLimpo = cep.replace(/\D/g, '');
    
    if (cepLimpo.length !== 8) {
        setEndereco('Por favor, digite um CEP valido com 8 digitos.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`) 
        .then(response => response.json())
        .then( data => {
            if (data.erro) {
                setEndereco('CEP nao encontrado');
            } else {
                setEndereco(`Rua ${data.logradouro} - ${data.localidade}, ${data.uf}`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar o endereco: ', error);
            setEndereco('Erro ao carregar endereço.')
        });
}

document.getElementById('cepInput').addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        fetchEndereco();
    }
});