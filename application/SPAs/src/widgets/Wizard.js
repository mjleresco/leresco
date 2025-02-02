import Widget from './widget.js';

class Wizard extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-wizard">
          <ul class="jsap-widget-wizard-steps">
            ${data.steps.map((step, index) => `
              <li class="${index === data.currentStep ? 'active' : ''}">
                <span>${step.label}</span>
              </li>
            `).join('')}
          </ul>
          <div class="jsap-widget-wizard-content">
            ${data.steps[data.currentStep].content}
          </div>
          <button class="jsap-widget-wizard-prev">Prev</button>
          <button class="jsap-widget-wizard-next">Next</button>
        </div>
      `,
      styles: `
        .jsap-widget-wizard {
          width: 80%;
          margin: 40px auto;
        }
        .jsap-widget-wizard-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
        .jsap-widget-wizard-steps li {
          margin-right: 20px;
          padding: 10px;
          border-bottom: 2px solid #ccc;
        }
        .jsap-widget-wizard-steps li.active {
          border-bottom-color: #337ab7;
        }
        .jsap-widget-wizard-content {
          margin-top: 20px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      `,
    });

    this.addEventListener('click', (event) => {
      if (event.target.classList.contains('jsap-widget-wizard-prev')) {
        this.prevStep();
      } else if (event.target.classList.contains('jsap-widget-wizard-next')) {
        this.nextStep();
      }
    });
  }

  prevStep() {
    const currentStep = this.options.data.currentStep;
    if (currentStep > 0) {
      this.options.data.currentStep--;
      this.render();
    }
  }

  nextStep() {
    const currentStep = this.options.data.currentStep;
    const totalSteps = this.options.data.steps.length;
    if (currentStep < totalSteps - 1) {
      this.options.data.currentStep++;
      this.render();
    }
  }
}

export default Wizard;

/*
import Wizard from './wizard.js';

const myWizard = new Wizard({
  id: 'my-wizard',
  data: {
    steps: [
      {
        label: 'Step 1',
        content: 'This is the content of step 1.',
      },
      {
        label: 'Step 2',
        content: 'This is the content of step 2.',
      },
      {
        label: 'Step 3',
        content: 'This is the content of step 3.',
      },
    ],
    currentStep: 0,
  },
});

*/