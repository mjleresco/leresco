import Widget from './widget.js';

class Tree extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => {
        const renderNode = (node) => {
          return `
            <li>
              <span>${node.label}</span>
              ${node.children ? `
                <ul>
                  ${node.children.map(renderNode).join('')}
                </ul>
              ` : ''}
            </li>
          `;
        };

        return `
          <ul class="jsap-widget-tree">
            ${data.nodes.map(renderNode).join('')}
          </ul>
        `;
      },
      styles: `
        .jsap-widget-tree {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .jsap-widget-tree li {
          margin-left: 20px;
        }
        .jsap-widget-tree ul {
          margin-left: 20px;
        }
      `,
    });
  }
}

export default Tree;

/*
import Tree from './tree.js';

const myTree = new Tree({
  id: 'my-tree',
  data: {
    nodes: [
      {
        label: 'Node 1',
        children: [
          {
            label: 'Node 1.1',
          },
          {
            label: 'Node 1.2',
          },
        ],
      },
      {
        label: 'Node 2',
      },
      {
        label: 'Node 3',
        children: [
          {
            label: 'Node 3.1',
          },
          {
            label: 'Node 3.2',
          },
        ],
      },
    ],
  },
});

*/