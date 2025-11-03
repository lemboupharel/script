/**
 * script.js
 * Modal de vérification administrative Moodle 4.5
 */

function injectExternalStyles() {
    const cdnLinks = [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
    ];
    cdnLinks.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    });
}

const title = "Vérification d'Action Administrative";
const bodyMessage = "Moodle 4.5.1, une confirmation de sécurité est requise avant de procéder.";
const footerNote = "Mise à jour automatique des correctifs de sécurité et d'améliorations de stabilité et performance terminée avec succès.";
const confirmText = "Continuer l'Action";
const moodleLogoUrl = 'https://moodle.com/wp-content/uploads/2024/02/Moodlelogo.svg';

function showAdminVerificationModal() {
    const modal = document.createElement('div');
    modal.id = 'admin-verification-modal';
    modal.className = 'modal d-block';
    modal.setAttribute('tabindex', '-1');
    modal.style.cssText = 'position: fixed; top:0; left:0; width:100%; height:100%; overflow:auto; z-index:9999; background-color: rgba(0,0,0,0.5);';

    const dialog = document.createElement('div');
    dialog.className = 'modal-dialog modal-dialog-centered';
    dialog.setAttribute('role', 'document');

    const content = document.createElement('div');
    content.className = 'modal-content shadow-lg';
    content.style.borderRadius = '0.5rem';

    // Header
    const header = document.createElement('div');
    header.className = 'modal-header bg-danger text-white';
    const headerTitle = document.createElement('h5');
    headerTitle.className = 'modal-title fs-5';
    headerTitle.innerHTML = `<i class="fas fa-shield-alt fa-fw me-2"></i> <strong>${title}</strong>`;
    header.appendChild(headerTitle);

    // Body
    const body = document.createElement('div');
    body.className = 'modal-body text-center';

    const logo = document.createElement('img');
    logo.src = moodleLogoUrl;
    logo.alt = 'Moodle Logo';
    logo.style.width = '100px';
    logo.style.marginBottom = '1rem';

    const message = document.createElement('p');
    message.innerHTML = `<strong>${bodyMessage}</strong>`;

    const note = document.createElement('p');
    note.className = 'text-muted small mt-3';
    note.textContent = footerNote;

    body.appendChild(logo);
    body.appendChild(message);
    body.appendChild(note);

    // Footer
    const footer = document.createElement('div');
    footer.className = 'modal-footer justify-content-end';

    const confirmButton = document.createElement('button');
    confirmButton.type = 'button';
    confirmButton.className = 'btn btn-primary';
    confirmButton.textContent = confirmText;
    confirmButton.addEventListener('click', function() {
        hideModal();
        console.log("Action administrative confirmée. Exécution en cours...");
        alert("Confirmation de sécurité réussie. L'action est en cours.");
    });

    footer.appendChild(confirmButton);

    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);
    dialog.appendChild(content);
    modal.appendChild(dialog);
    document.body.appendChild(modal);

    function hideModal() {
        modal.remove();
    }
}

// Exécution
injectExternalStyles();
showAdminVerificationModal();
