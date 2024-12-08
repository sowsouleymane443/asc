document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les données
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const profession = document.getElementById('profession').value;

    // Message de confirmation
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `
        <p>Merci, <strong>${prenom} ${nom}</strong> !</p>
        <p>Votre inscription a bien été reçue. Nous vérifierons votre paiement sous peu.</p>
    `;
    confirmationMessage.style.color = "green";

    // Réinitialise le formulaire
    document.getElementById('registrationForm').reset();
});
