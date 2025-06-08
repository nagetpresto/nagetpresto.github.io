import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class TagSelectInput extends LitElement {
  static properties = {
    label: { type: String },
    linkText: { type: String },
    selectedValues: { type: Array },
    inputValue: { type: String },
    filteredOptions: { type: Array },
    visible: { type: Boolean },
    readOnly: { type: Boolean },
    value: { type: String },
    required: { type: Boolean },
    invalid: { type: Boolean }
  };

  static getMetaConfig() {
    return {
      controlName: 'Tag Input Select 2',
      fallbackDisableSubmit: false,
      groupName: 'Custom Controls',
      version: '1.2',
      properties: {
        linkText: {
          type: 'string',
          title: 'Option List',
          defaultValue: '["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"]'
        },
        visible: {
          type: 'boolean',
          title: 'Visible',
          defaultValue: true
        },
        readOnly: {
          type: 'boolean',
          title: 'Read Only',
          defaultValue: false
        },
        required: {
          type: 'boolean',
          title: 'Required',
          defaultValue: false
        },
        value: {
          type: 'string',
          title: 'Selected Values',
          isValueField: true,
          defaultValue: '[]'
        }
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
        defaultValue: true,
        readOnly: true,
        required: true,
        visibility: true,
        value: true
      }
    };
  }

  constructor() {
    super();
    this.label = '';
    this.linkText = '["Apple","Banana","Cherry"]';
    this.selectedValues = [];
    this.inputValue = '';
    this.filteredOptions = [];
    this.visible = true;
    this.readOnly = false;
    this.value = '[]';
    this.required = false;
    this.invalid = false;
  }

  updated(changedProps) {
    if (changedProps.has('value') || changedProps.has('linkText')) {
      this.syncValueToTags();
    }
    if (changedProps.has('required')) {
      this.validate();
    }
  }

  syncValueToTags() {
    let validSelected = [];
    const options = this.parseOptions();
    try {
      const valArr = JSON.parse(this.value);
      if (Array.isArray(valArr)) {
        validSelected = valArr.filter(v => options.includes(v));
      }
    } catch {}
    this.selectedValues = validSelected;
    this.validate();
  }

  parseOptions() {
    try {
      const options = JSON.parse(this.linkText);
      return Array.isArray(options) ? options : [];
    } catch {
      return [];
    }
  }

  updateFilteredOptions() {
    const all = this.parseOptions();
    const q = this.inputValue.toLowerCase();
    this.filteredOptions = all.filter(o =>
      o.toLowerCase().includes(q) && !this.selectedValues.includes(o)
    );
  }

  handleInput(e) {
    this.inputValue = e.target.value;
    this.updateFilteredOptions();
  }

  handleKeyDown(e) {
    if (e.key === 'Backspace' && this.inputValue === '' && !this.readOnly) {
      this.selectedValues.pop();
      this.updateValue();
    } else if (e.key === 'Enter' && this.filteredOptions.length > 0 && !this.readOnly) {
      this.selectOption(this.filteredOptions[0]);
    }
  }

  selectOption(option) {
    if (this.readOnly) return;
    this.selectedValues = [...this.selectedValues, option];
    this.inputValue = '';
    this.updateFilteredOptions();
    this.updateValue();
  }

  removeTag(tag) {
    if (this.readOnly) return;
    this.selectedValues = this.selectedValues.filter(t => t !== tag);
    this.updateValue();
  }

  updateValue() {
    this.value = JSON.stringify(this.selectedValues);
    this.dispatchEvent(new CustomEvent('ntx-value-change', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));
    this.validate();
  }

  validate() {
    this.invalid = this.required && this.selectedValues.length === 0;
  }

  render() {
    if (!this.visible) return null;
    this.updateFilteredOptions();

    return html`
      <style>
        .container {
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }
        .label {
          font-weight: bold;
          margin-bottom: 4px;
        }
        .tag-container {
          border: 1px solid var(--border-color, #ccc);
          padding: 4px;
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          min-height: 40px;
          align-items: center;
          position: relative;
        }
        .tag-container.invalid {
          --border-color: red;
        }
        .tag {
          background-color: #eee;
          padding: 4px 8px;
          border-radius: 12px;
          display: flex;
          align-items: center;
        }
        .tag span {
          margin-right: 6px;
        }
        .tag button {
          border: none;
          background: none;
          cursor: pointer;
          font-size: 14px;
        }
        input {
          border: none;
          flex: 1;
          min-width: 120px;
          font-size: 14px;
          outline: none;
        }
        .dropdown {
          border: 1px solid #ccc;
          max-height: 150px;
          overflow-y: auto;
          background: white;
          position: absolute;
          z-index: 999;
          width: 100%;
          top: 100%;
          left: 0;
          box-sizing: border-box;
        }
        .dropdown div {
          padding: 6px 12px;
          cursor: pointer;
        }
        .dropdown div:hover {
          background: #f0f0f0;
        }
        .readonly input {
          background-color: #f9f9f9;
          pointer-events: none;
        }
        .readonly .dropdown {
          display: none;
        }
        .readonly .tag button {
          display: none;
        }
        .error-message {
          color: red;
          font-size: 12px;
          margin-top: 4px;
        }
      </style>

      <div class="container">
        ${this.label ? html`<div class="label">${this.label}</div>` : ''}
        <div
          class="tag-container ${this.readOnly ? 'readonly' : ''} ${this.invalid ? 'invalid' : ''}"
          @click=${() => this.shadowRoot.querySelector('input')?.focus()}
        >
          ${this.selectedValues.map(tag => html`
            <div class="tag">
              <span>${tag}</span>
              ${!this.readOnly ? html`<button @click=${() => this.removeTag(tag)}>×</button>` : ''}
            </div>
          `)}
          ${!this.readOnly ? html`
            <input
              .value=${this.inputValue}
              @input=${this.handleInput}
              @keydown=${this.handleKeyDown}
              placeholder="Type to search..."
              aria-invalid=${this.invalid ? 'true' : 'false'}
            />
          ` : ''}
        </div>

        ${this.invalid ? html`<div class="error-message">This field is required.</div>` : ''}

        ${!this.readOnly && this.filteredOptions.length > 0 && this.inputValue
          ? html`
            <div class="dropdown">
              ${this.filteredOptions.map(opt => html`
                <div @click=${() => this.selectOption(opt)}>${opt}</div>
              `)}
            </div>
          `
          : ''
        }
      </div>
    `;
  }
}

customElements.define('tag-select-input-2', TagSelectInput);
