function showFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const message = document.getElementById("message").value;

    alert("\nDados recebidos: \n\nNome: " + name + "\nE-mail: " + email + "\nTelefone: " + tel + "\nMensagem: " + message);
}