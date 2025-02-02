class ErrorHandler {
    static handle(error) {
        // Log error to an external logging service or display it in a user-friendly way
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    }

    static logErrorToService(error) {
        // Example function to log errors to an external service
        // Example: Sentry, Rollbar, or custom backend
        fetch('/log-error', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message, stack: error.stack }),
        });
    }
}

export default ErrorHandler;