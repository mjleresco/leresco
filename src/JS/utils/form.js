const form = {
    validate(formData, rules) {
        const errors = {};

        for (let field in rules) {
            const value = formData[field];
            const rule = rules[field];

            if (rule.required && !value) {
                errors[field] = `${field} is required`;
            }

            if (rule.minLength && value.length < rule.minLength) {
                errors[field] = `${field} must be at least ${rule.minLength} characters long`;
            }

            if (rule.pattern && !rule.pattern.test(value)) {
                errors[field] = `${field} is invalid`;
            }
        }

        return errors;
    },

    submitForm(form, rules) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const errors = this.validate(data, rules);

        if (Object.keys(errors).length === 0) {
            // Form is valid, submit data (you can handle AJAX here)
            console.log('Form submitted:', data);
        } else {
            // Show errors
            console.log('Form errors:', errors);
        }
    }
};

export default form;