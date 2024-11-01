document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // Aqui você pode adicionar a lógica para validar os dados e enviar para o back-end
    console.log('Nome:', name);
    console.log('E-mail:', email);
  
    // Simulação de envio de dados (você deve substituir isso com uma chamada AJAX para o seu back-end)
    alert('Obrigado por se inscrever! O e-book será enviado para o seu e-mail.');
  
    // Limpar os campos após o envio
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });
  