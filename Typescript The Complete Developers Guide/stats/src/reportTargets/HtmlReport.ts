import fs from 'fs';

import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        // GENERATE HTML
        const html = `
             <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
             </div>
        `;
        // TURN HTML INTO .HTML FILE
        fs.writeFileSync('report.html', html);
    }
}
