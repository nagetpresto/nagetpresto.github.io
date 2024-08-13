import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

// define the component
export class RedirectLinkPlugIn extends LitElement {

  static properties = {
    linkText: { type: String },
    redirectUrl: { type: String }
  };

  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Redirect Link Button',
      fallbackDisableSubmit: false,
      groupName: 'Custom Controls',
      version: '1.0',
      properties: {
        linkText: {
          type: 'string',
          title: 'Link Text',
          description: 'Text displayed on the link or button',
          defaultValue: 'Click here'
        },
        redirectUrl: {
          type: 'string',
          title: 'Redirect URL',
          description: 'The URL to redirect to when the link is clicked',
          defaultValue: 'https://www.example.com'
        }
      }
    };
  }

  constructor() {
    super();
    this.linkText = this.linkText || 'Click here';
    this.redirectUrl = this.redirectUrl || 'https://www.example.com';
  }

  render() {
    return html`
      <style>
        .redirect-link {
          display: inline-block;
          padding: 10px 20px;
          color: white;
          background-color: #007bff;
          text-decoration: none;
          border-radius: 5px;
          text-align: center;
        }

        .redirect-link:hover {
          background-color: #0056b3;
        }
      </style>
      <a href="${this.redirectUrl}" class="redirect-link" target="_blank">${this.linkText}</a>
    `;
  }
}

// registering the web component
const elementName = 'redirectlink-plugin-button';
customElements.define(elementName, RedirectLinkPlugIn);
