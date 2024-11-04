// Adiciona um evento de clique ao botão que copia o e-mail
document.getElementById('copy-email-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Impede que o link recarregue a página
    copiarEmail(); // Chama a função que copia o e-mail
});

// Função para copiar o e-mail para a área de transferência
function copiarEmail() {
    const email = 'vvictornunesdosantos@gmail.com'; // Define o e-mail a ser copiado

    // Verifica se a API de clipboard é suportada pelo navegador
    if (!navigator.clipboard) {
        alert('API de clipboard não suportada'); // Alerta se a API não for suportada
        return; // Sai da função
    }

    // Tenta copiar o e-mail para a área de transferência
    navigator.clipboard.writeText(email)
        .then(() => {
            alert('E-mail copiado: ' + email); // Alerta de sucesso após a cópia
        })
        .catch(err => {
            alert('Erro ao copiar o e-mail: ' + err); // Alerta em caso de erro
            console.error('Erro ao copiar: ', err); // Log do erro no console
        });
}
