import { Component } from '@angular/core';
import { fs, vol } from 'memfs'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdfmake-gonzalo';



generatePdf(){
/*
  const json = {
    'assets/raichu': '1'
  };

  vol.fromJSON(json, '/app');
*/

  const documentDefinition = {
    content: ['This is for testing.',
    {
      image: 'https://miro.medium.com/fit/c/48/48/2*ZGhWrlO6hgYiK1LOM7GXSA.jpeg',
    }
  ]
  };
  pdfMake.createPdf(documentDefinition).open();
}



}

