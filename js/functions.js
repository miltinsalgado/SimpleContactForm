function showFormData(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var message = document.getElementById("message").value;

    alert("\nDados recebidos: \n\nNome: " + name + "\nE-mail: " + email + "\nTelefone: " + tel + "\nMensagem: " + message);
}