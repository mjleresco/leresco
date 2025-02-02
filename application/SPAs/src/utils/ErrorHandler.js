class ErrorHandler {
    static handle(error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
        ErrorHandler.logErrorToService(error);
    }

    static logErrorToService(error) {
        fetch('/log-error', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message, stack: error.stack }),
        });
    }

    static trackError(error) {
        // Example: track error with Google Analytics
        ga('send', 'exception', error.message);
    }

    static reportError(error) {
        // Example: report error to a custom backend
        fetch('/report-error', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message, stack: error.stack }),
        });
    }
}

export default ErrorHandler;