import routes from './routes.js';
import App from './../src/app.js';

const app = new App('app', routes);
const router = app.getRouter();

function navigateTo(to) {
    router.navigate(to);

}

app.init("/");
export {navigateTo};
