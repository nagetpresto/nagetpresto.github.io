import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class DisplayJsonTableTCODES extends LitElement {
  static properties = {
    data: { type: String },
    visible: { type: Boolean },
    readOnly: { type: Boolean }
  };

  static getMetaConfig() {
    return {
      controlName: 'DisplayJsonTableTCODES',
      fallbackDisableSubmit: false,
      groupName: 'Custom Controls',
      version: '1.0',
      properties: {
        data: {
          type: 'string',
          title: 'Data',
          description: 'Paste array string here',
          defaultValue: '[]'
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
        }
      },
      standardProperties: {
        visible: true,
        readOnly: true
      }
    };
  }

  constructor() {
    super();
    this.data = '[]';
    this.visible = true;
    this.readOnly = false;
  }

  get parsedData() {
    try {
      const parsed = JSON.parse(this.data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  render() {
    if (!this.visible) return null;

    const rows = this.parsedData;

    return html`
      <style>
        .table-container {
          overflow-x: auto;
          width: 100%;
        }
        table {
          border-collapse: collapse;
          min-width: 1000px;
          font-family: sans-serif;
          margin-top: 10px;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
          font-size: 14px;
          white-space: nowrap;
        }
        th {
          background-color: #f0f0f0;
        }
        a {
          color: #0066cc;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .no-data {
          font-family: sans-serif;
          color: #666;
          font-size: 14px;
        }
      </style>

      ${rows.length === 0
        ? html`<div class="no-data">No data available</div>`
        : html`
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Role/TCode</th>
                    <th>Action By</th>
                    <th>Action Date</th>
                    <th>Signature</th>
                  </tr>
                </thead>
                <tbody>
                  ${rows.map(row => html`
                    <tr>
                      <td>${row.approver_department ?? ''}</td>
                      <td>${row.job_title ?? ''}</td>
                      <td>${row.approver_name ?? ''}</td>
                      <td>${row.action_date ? new Date(row.action_date).toLocaleString() : ''}</td>
                      <td>
                        ${row.action_signature
                          ? html`<img src="${row.action_signature}" alt="Signature" style="max-height: 50px;" />`
                          : ''}
                      </td>

                    </tr>
                  `)}
                </tbody>
              </table>
            </div>
          `
      }
    `;
  }
}

customElements.define('display-json-table-tcodes', DisplayJsonTableTCODES);
