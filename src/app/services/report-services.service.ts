import { ElementRef, Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import * as moment from 'moment';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  templateHTML = '';
  constructor() {}

  generateTemplateHtml(tableData: any): any {
    return;
  }

  printTable(tableData: any, tableView: ElementRef, totalAmount: string): void {
    let doc = new jsPDF('p', 'mm', 'a4');

    html2canvas(tableView.nativeElement).then((canvas) => {
      let fileWidth = 180;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const contents = canvas.toDataURL('image/png');

      doc.text('Report', 10, 20);
      doc.text(moment().format('LLLL'), 100, 20);
      doc.addImage(contents, 'PNG', 10, 25, fileWidth, fileHeight);
      doc.text('Total Amount: ' + totalAmount, 10, fileHeight + 30);
      doc.save('ace-print-test.pdf');
    });
  }
}
