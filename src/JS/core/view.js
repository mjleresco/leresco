class View {
    constructor(template) {
        this.template = template;
    }

    render(data) {
        let html = this.template;

        // Replace placeholders with data
        for (let key in data) {
            const value = data[key];
            html = html.replace(new RegExp(`{{${key}}}`, 'g'), value);
        }

        // Looping through arrays
        html = html.replace(/\{\{#each (.*?)\}\}(.*?)\{\{\/each\}\}/gs, (match, arrayName, content) => {
            const array = data[arrayName] || [];
            return array.map(item => this.renderItem(item, content)).join('');
        });

        // Handling conditional rendering
        html = html.replace(/\{\{#if (.*?)\}\}(.*?)\{\{\/if\}\}/gs, (match, condition, content) => {
            return data[condition] ? content : '';
        });

        return html;
    }

    renderItem(item, content) {
        let rendered = content;
        for (let key in item) {
            const value = item[key];
            rendered = rendered.replace(new RegExp(`{{${key}}}`, 'g'), value);
        }
        return rendered;
    }
}

export default View;