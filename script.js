/**
 * script.js
 * * Demonstrates how to create a themed, core Moodle alert 
 * for an administrator action confirmation.
 * This script uses the Moodle core/notification module to display 
 * a modal dialog instead of a basic browser alert().
 */

// Define the AMD module for Moodle
define(['core/notification'], function(Notification) {
    
    /**
     * Display a verification/confirmation dialogue to the administrator.
     */
    var AdminVerification = {
        init: function() {
            // Check if the user is in an admin context or has permissions 
            // (You would add real Moodle capabilities checks here in a real plugin)
            var isAdmin = true; 

            if (isAdmin) {
                this.showConfirmationAlert();
            }
        },

        showConfirmationAlert: function() {
            var title = 'Action d\'administration requise'; // Administration action required
            var message = 'Veuillez confirmer votre identité pour exécuter cette action. Voulez-vous continuer ?'; // Please confirm your identity to perform this action. Do you wish to continue?
            var options = {
                title: title,
                message: message,
                ok: 'Confirmer', // Confirm
                cancel: 'Annuler' // Cancel
            };

            // Display a Moodle confirmation dialog (themed modal)
            Notification.confirm(options)
                .then(function(result) {
                    if (result) {
                        // Logic if the administrator clicks 'Confirmer' (Confirm)
                        console.log("Admin action confirmed. Proceeding...");
                        // A real implementation would now send a request to a secure server endpoint.
                        Notification.alert({
                             message: "Action confirmée. La tâche a été lancée.",
                             type: 'success'
                        });
                    } else {
                        // Logic if the administrator clicks 'Annuler' (Cancel)
                        console.log("Admin action cancelled.");
                        Notification.alert({
                             message: "Action annulée par l'administrateur.",
                             type: 'warning'
                        });
                    }
                });
        }
    };

    // Attach the init function to Moodle's page load process
    return {
        init: function() {
            AdminVerification.init();
        }
    };
});