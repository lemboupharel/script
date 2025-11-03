/**
 * script.js
 * Creates and displays a Moodle-styled verification modal 
 * (in French and with Moodle 4.5.0 Boost styling) entirely using JavaScript.
 * * NOTE: This script does NOT collect usernames or passwords for security reasons.
 * It simulates a confirmation alert for an administrative action.
 */

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Define Modal Content in French ---
    var title = 'Vérification d\'Action Administrative';
    var bodyMessage = 'Authentification Requis : Pour effectuer cette opération sensible sur Moodle 4.5.0, veuillez confirmer votre identité.';
    var footerNote = '*Ceci est un avertissement de sécurité. Si vous n\'avez pas initié cette action, annulez immédiatement.*';
    var confirmText = 'Continuer et Confirmer';
    var cancelText = 'Annuler l\'Action';

    // --- 2. Function to Create and Show the Modal ---
    function showAdminVerificationModal() {
        
        // Create the main modal container (simulating Bootstrap/Moodle 'modal fade show')
        var modal = document.createElement('div');
        modal.id = 'admin-verification-modal';
        modal.className = 'modal fade show d-block';
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'adminModalLabel');
        modal.setAttribute('aria-hidden', 'false');
        modal.setAttribute('aria-modal', 'true');
        // Set a high z-index to ensure it sits on top of everything
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow-x: hidden; overflow-y: auto; z-index: 1050;';

        // Create the modal dialog
        var dialog = document.createElement('div');
        dialog.className = 'modal-dialog modal-dialog-centered';
        dialog.setAttribute('role', 'document');

        // Create the modal content box
        var content = document.createElement('div');
        content.className = 'modal-content';

        // --- Header ---
        var header = document.createElement('div');
        header.className = 'modal-header';
        
        var headerTitle = document.createElement('h5');
        headerTitle.className = 'modal-title';
        headerTitle.id = 'adminModalLabel';
        headerTitle.innerHTML = '<i class="icon fa fa-exclamation-triangle fa-fw text-danger" aria-hidden="true"></i> <strong>' + title + '</strong>';
        
        header.appendChild(headerTitle);

        // --- Body ---
        var body = document.createElement('div');
        body.className = 'modal-body';
        body.innerHTML = '<p><strong>' + bodyMessage + '</strong></p>' +
                         '<p class="text-muted small">' + footerNote + '</p>';

        // --- Footer ---
        var footer = document.createElement('div');
        footer.className = 'modal-footer';

        var cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.className = 'btn btn-secondary';
        cancelButton.textContent = cancelText;
        cancelButton.addEventListener('click', function() {
            hideModal();
            console.log("Admin action cancelled.");
            // Optional: Show a browser alert for confirmation
            alert("Action Annulée."); 
        });

        var confirmButton = document.createElement('button');
        confirmButton.type = 'button';
        confirmButton.className = 'btn btn-primary';
        confirmButton.textContent = confirmText;
        confirmButton.addEventListener('click', function() {
            hideModal();
            console.log("Admin action confirmed. Proceeding...");
            // Optional: Show a browser alert for confirmation
            alert("Confirmation effectuée. L'action est en cours.");
        });

        footer.appendChild(cancelButton);
        footer.appendChild(confirmButton);

        // Assemble the modal
        content.appendChild(header);
        content.appendChild(body);
        content.appendChild(footer);
        dialog.appendChild(content);
        modal.appendChild(dialog);

        // --- 3. Create and Show Backdrop ---
        var backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        backdrop.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.5; z-index: 1040;';
        
        // --- 4. Append to Body and Display ---
        document.body.appendChild(modal);
        document.body.appendChild(backdrop);
        
        console.log("Styled admin verification modal displayed.");
        
        // --- Function to Hide Modal ---
        function hideModal() {
            modal.remove();
            backdrop.remove();
        }
    }
    
    // Execute the function to display the alert when the script loads
    showAdminVerificationModal();
});