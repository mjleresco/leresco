import Widget from './widget.js';

class NavigationMenu extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <nav class="jsap-widget-navigation-menu">
          <ul>
            ${data.items.map((item) => `
              <li>
                <a href="${item.href}">${item.text}</a>
                ${item.submenu ? `
                  <ul>
                    ${item.submenu.items.map((submenuItem) => `
                      <li>
                        <a href="${submenuItem.href}">${submenuItem.text}</a>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
              </li>
            `).join('')}
          </ul>
        </nav>
      `,
      styles: `
        .jsap-widget-navigation-menu {
          background-color: #333;
          color: #fff;
          padding: 20px;
        }
        .jsap-widget-navigation-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .jsap-widget-navigation-menu li {
          position: relative;
        }
        .jsap-widget-navigation-menu a {
          color: #fff;
          text-decoration: none;
        }
        .jsap-widget-navigation-menu a:hover {
          color: #ccc;
        }
        .jsap-widget-navigation-menu ul ul {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #333;
        }
        .jsap-widget-navigation-menu li:hover ul {
          display: block;
        }
      `,
    });
  }
}

export default NavigationMenu;
/*
import NavigationMenu from './navigation-menu.js';

const navigationMenu = new NavigationMenu({
  id: 'my-navigation-menu',
  data: {
    items: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'About',
        href: '/about',
        submenu: {
          items: [
            {
              text: 'Our Team',
              href: '/about/team',
            },
            {
              text: 'Our Mission',
              href: '/about/mission',
            },
          ],
        },
      },
      {
        text: 'Contact',
        href: '/contact',
      },
    ],
  },
});

*/