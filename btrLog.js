import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class DisplayJsonTableBTR extends LitElement {
  static properties = {
    data: { type: String },
    visible: { type: Boolean },
    readOnly: { type: Boolean }
  };

  static getMetaConfig() {
    return {
      controlName: 'DisplayJsonTableBTR',
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
                    <th>Job Title</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Group</th>
                    <th>Company</th>
                    <th>Action</th>
                    <th>Date</th>
                    <th>Comment</th>
                    <th>Signature</th>
                  </tr>
                </thead>
                <tbody>
                  ${rows.map(row => html`
                    <tr>
                      <td>${row.job_title ?? ''}</td>
                      <td>${row.approver_name ?? ''}</td>
                      <td>${row.approver_email ?? ''}</td>
                      <td>${row.approver_department ?? ''}</td>
                      <td>${row.approver_group ?? ''}</td>
                      <td>${row.approver_company ?? ''}</td>
                      <td>${row.action_name ?? ''}</td>
                      <td>${row.action_date ? new Date(row.date).toLocaleString() : ''}</td>
                      <td>${row.comment ?? ''}</td>
                      <td>
                        ${row.action_signature
                          ? html`<img src="${row.action_signature}" alt="Signature" style="max-height: 100px;" />`
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

customElements.define('display-json-table-btr', DisplayJsonTableBTR);
