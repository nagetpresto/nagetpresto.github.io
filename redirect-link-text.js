import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

// Define the component
export class RedirectLinkPlugIn extends LitElement {

  static properties = {
    linkText: { type: String },
    redirectUrl: { type: String },
    isVisible: { type: Boolean },
    // Add a property to control visibility dynamically
    visibilityCondition: { type: Boolean }
  };

  // Return a promise for contract changes
  static getMetaConfig() {
    return {
      controlName: 'Redirect Link Text',
      fallbackDisableSubmit: false,
      groupName: 'Custom Controls',
      version: '1.2',
      properties: {
        linkText: {
          type: 'string',
          title: 'Link Text',
          description: 'Text displayed on the link',
          defaultValue: 'Edit this item'
        },
        redirectUrl: {
          type: 'string',
          title: 'Redirect URL',
          description: 'The URL to redirect to when the link is clicked',
          defaultValue: 'https://www.example.com'
        },
        isVisible: {
          type: 'boolean',
          title: 'Is Visible',
          description: 'Controls the visibility of the link',
          defaultValue: true
        },
        visibilityCondition: {
          type: 'boolean',
          title: 'Visibility Condition',
          description: 'Runtime condition to control visibility',
          defaultValue: true
        }
      }
    };
  }

  constructor() {
    super();
    this.linkText = this.linkText || 'Edit this item';
    this.redirectUrl = this.redirectUrl || 'https://www.example.com';
    this.isVisible = this.isVisible !== undefined ? this.isVisible : true;
    this.visibilityCondition = this.visibilityCondition !== undefined ? this.visibilityCondition : true;
  }

  // Method to update visibility based on runtime condition
  updateVisibility() {
    this.visibilityCondition = this.isVisible; // Default to isVisible initially
    // Add logic here to dynamically update visibilityCondition based on form state
  }

  render() {
    // Update visibility before rendering
    this.updateVisibility();

    if (!this.visibilityCondition) {
      return html``; // Render nothing if not visible
    }

    return html`
      <style>
        .redirect-link {
          display: inline-flex;
          align-items: center;
          color: #007bff;
          text-decoration: none;
          font-size: 16px;
        }

        .redirect-link:hover {
          text-decoration: underline;
        }

        .icon-pencil {
          margin-right: 8px;
          width: 16px;
          height: 16px;
          fill: currentColor;
        }
      </style>
      <a href="${this.redirectUrl}" class="redirect-link" target="_blank">
        <svg class="icon-pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M12.146 0.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-8.486 8.486a.5.5 0 0 1-.224.13l-4 1a.5.5 0 0 1-.62-.62l1-4a.5.5 0 0 1 .13-.224l8.486-8.486zM11.207 3l-1.5-1.5L1 10.207V12h1.793L11.207 3z"/>
        </svg>
        ${this.linkText}
      </a>
    `;
  }
}

// Registering the web component
const elementName = 'redirectlink-plugin-text';
customElements.define(elementName, RedirectLinkPlugIn);