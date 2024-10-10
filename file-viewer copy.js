import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class FileDownloadPlugin extends LitElement {
  static properties = {
    fileObjectString: { type: String }
  };

  // Adding CSS for styling
  static styles = css`
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

    .no-files {
      font-family: Arial, sans-serif;
      color: #999;
      font-style: italic;
    }
  `;

  static getMetaConfig() {
    return {
      controlName: 'File Viewer 2',
      fallbackDisableSubmit: false,
      groupName: 'Custom Controls',
      version: '1.0',
      properties: {
        fileObjectString: {
          type: 'string',
          title: 'File Object String',
          description: 'A JSON string containing key-value pairs of file names, types, and Base64 encoded content.'
        }
      }
    };
  }

  getMimeType(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return 'application/pdf';
      case 'html':
        return 'text/html';
      case 'txt':
        return 'text/plain';
      case 'csv':
        return 'text/csv';
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      default:
        return 'application/octet-stream';
    }
  }

  generateFileLinks(fileObjectString) {
    const fileObject = JSON.parse(fileObjectString); // Convert the string to an object
  
    return html`
      ${Object.entries(fileObject).map(([fileName, fileLink], index, entries) => {
        let href;
        let mimeType = this.getMimeType(fileName);
  
        if (index === entries.length - 1) {
          href = "data:" + mimeType+ ";base64," + fileLink;
        } else {
          href = fileLink;
        }
  
        return html`
          <div>
            <a class="redirect-link" target="_blank" download="${fileName}" href="${href}">
                <svg class="icon-pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M12.146 0.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-8.486 8.486a.5.5 0 0 1-.224.13l-4 1a.5.5 0 0 1-.62-.62l1-4a.5.5 0 0 1 .13-.224l8.486-8.486zM11.207 3l-1.5-1.5L1 10.207V12h1.793L11.207 3z"/>
                </svg>
                Download ${fileName}
            </a>
          </div>
        `;
      })}
    `;
  }

  
  // generateFileLinks(fileObjectString) {
  //   const fileObject = JSON.parse(fileObjectString); // Convert the string to an object

  //   return html`
  //     ${Object.entries(fileObject).map(([fileName, base64Content]) => {
  //       const mimeType = this.getMimeType(fileName);
  //       return html`
  //         <div>
  //           <a class="redirect-link" download="${fileName}" href="${base64Content}">
  //               <svg class="icon-pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  //                   <path d="M12.146 0.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-8.486 8.486a.5.5 0 0 1-.224.13l-4 1a.5.5 0 0 1-.62-.62l1-4a.5.5 0 0 1 .13-.224l8.486-8.486zM11.207 3l-1.5-1.5L1 10.207V12h1.793L11.207 3z"/>
  //               </svg>
  //               Download ${fileName}
  //           </a>
  //         </div>
  //       `;
  //     })}
  //   `;
  // }

  render() {
    return html`
      <div>
        ${this.fileObjectString ? this.generateFileLinks(this.fileObjectString) : html`<p class="no-files">No files available</p>`}
      </div>
    `;
  }
}

// Registering the plugin as a custom element
const elementName = 'file-viewer-2';
customElements.define(elementName, FileDownloadPlugin);
