import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class UserListPlugInView extends LitElement { 
  static properties = {
    linkText: { type: String },
    isVisible: { type: Boolean },
    visibilityCondition: { type: Boolean }
  };

  static getMetaConfig() {
    return {
      controlName: 'Redirect List Item',
      fallbackDisableSubmit: false,
      groupName: 'Custom Controls',
      version: '1.4',
      properties: {
        linkText: {
          type: 'string',
          title: 'List Text',
          description: 'Text displayed in the list',
          defaultValue: 'User Name'
        },
        isVisible: {
          type: 'boolean',
          title: 'Is Visible',
          description: 'Controls the visibility of the list item',
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
    this.linkText = this.linkText || 'User Name';
    this.isVisible = this.isVisible !== undefined ? this.isVisible : true;
    this.visibilityCondition = this.visibilityCondition !== undefined ? this.visibilityCondition : true;
  }

  updateVisibility() {
    this.visibilityCondition = this.isVisible; // bisa dikembangkan sesuai kebutuhan
  }

  render() {
    this.updateVisibility();

    if (!this.visibilityCondition) {
      return html``;
    }

    return html`
      <style>
        li.list-item {
          list-style: none;
          margin: 6px 0;
          font-size: 16px;
          display: flex;
          align-items: center;
          color: #555;
        }
        svg.icon-user {
          width: 18px;
          height: 18px;
          margin-right: 8px;
          fill: #888888;
          flex-shrink: 0;
        }
      </style>
      <li class="list-item">
        <svg class="icon-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
        ${this.linkText}
      </li>
    `;
  }
}

customElements.define('userlist-plugin-view', UserListPlugInView);
