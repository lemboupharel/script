/**
 * script.js
 * Création et affichage d'une boîte de dialogue modale de vérification administrative 
 * (en Français, style Moodle 4.5.0 Boost) entièrement en JavaScript.
 * * * NOTE DE SÉCURITÉ : L'alerte simule une confirmation d'action et ne demande AUCUN 
 * nom d'utilisateur ni mot de passe.
 */

//document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Injection des Styles Nécessaires (CDN) ---
    // Pour simuler le thème Boost de Moodle qui utilise Bootstrap et Font Awesome.
    function injectExternalStyles() {
        const cdnLinks = [
            // Bootstrap CSS (simule le look de base de Moodle Boost)
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
            // Font Awesome (pour les icônes Moodle, comme l'icône de danger)
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
        ];

        cdnLinks.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        });
    }

    // --- 2. Définition du Contenu du Modal en Français ---
    const title = 'Vérification d\'Action Administrative';
    const bodyMessage = 'Moodle 4.5.1, une confirmation de sécurité est **requise** avant de procéder.';
    const footerNote = '*Ceci est un avertissement de sécurité. Si vous n\'avez pas initié cette action, annulez immédiatement.*';
    const confirmText = 'Continuer l\'Action';
    const moodleLogoUrl = 'https://moodle.com/wp-content/uploads/2024/02/Moodlelogo.svg'; // Logo Moodle générique

    // --- 3. Fonction pour Créer et Afficher le Modal ---
    function showAdminVerificationModal() {
        
        // --- Modal Setup ---
        const modal = document.createElement('div');
        modal.id = 'admin-verification-modal';
        // Utilisation des classes Bootstrap/Moodle pour l'apparence
        modal.className = 'modal fade show d-block'; 
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow-x: hidden; overflow-y: auto; z-index: 9999; background-color: rgba(0, 0, 0, 0.5);'; // Remplacement de la classe backdrop par un style direct

        const dialog = document.createElement('div');
        dialog.className = 'modal-dialog modal-dialog-centered';
        dialog.setAttribute('role', 'document');

        const content = document.createElement('div');
        content.className = 'modal-content shadow-lg';
        content.style.borderRadius = '0.5rem'; // Ajouter un petit arrondi

        // --- Header ---
        const header = document.createElement('div');
        header.className = 'modal-header bg-danger text-white'; // Barre de titre rouge pour l'urgence
        
        const headerTitle = document.createElement('h5');
        headerTitle.className = 'modal-title fs-5';
        // Utilisation des icônes Font Awesome: fa-exclamation-triangle remplacé par fa-shield-alt pour la vérification
        headerTitle.innerHTML = '<i class="fas fa-shield-alt fa-fw me-2"></i> <strong>' + title + '</strong>';
        
        header.appendChild(headerTitle);

        // --- Body ---
        const body = document.createElement('div');
        body.className = 'modal-body text-center';

        const logo = document.createElement('img');
        logo.src = moodleLogoUrl;
        logo.alt = 'Moodle Logo';
        logo.style.width = '100px';
        logo.style.marginBottom = '1rem';

        const message = document.createElement('p');
        message.innerHTML = '<strong>' + bodyMessage + '</strong>';

        const note = document.createElement('p');
        note.className = 'text-muted small mt-3';
        note.innerHTML = footerNote;

        // Ajouter l'image de hack pour l'effet visuel (si l'utilisateur avait l'intention d'afficher un avertissement)
        // const hackImage = document.createElement('img');
        // hackImage.src = 'hack.png'; 
        // hackImage.style.width = '50px';
        // body.appendChild(hackImage);
        
        body.appendChild(logo);
        body.appendChild(message);
        body.appendChild(note);

        // --- Footer ---
        const footer = document.createElement('div');
        footer.className = 'modal-footer justify-content-between';


        const confirmButton = document.createElement('button');
        confirmButton.type = 'button';
        confirmButton.className = 'btn btn-primary';
        confirmButton.textContent = confirmText;
        confirmButton.addEventListener('click', function() {
            hideModal();
            console.log("Action administrative confirmée. Exécution en cours...");
            alert("Confirmation de sécurité réussie. L'action est en cours.");
        });

        footer.appendChild(cancelButton);
        footer.appendChild(confirmButton);

        // --- Assemblage Final ---
        content.appendChild(header);
        content.appendChild(body);
        content.appendChild(footer);
        dialog.appendChild(content);
        modal.appendChild(dialog);

        // Ajouter au corps du document
        document.body.appendChild(modal);
        
        // La simulation du 'backdrop' est faite via le style direct du modal (background-color: rgba(0, 0, 0, 0.5);)
        console.log("Modal de sécurité Moodle affiché.");
        
        // --- Fonction pour Cacher le Modal ---
        function hideModal() {
            modal.remove();
        }
    }
    
    // 1. Injecter les styles
    injectExternalStyles();
    // 2. Afficher le modal
    showAdminVerificationModal();
//});