import React from "react";
import { Document, Page } from "react-pdf";
import "pdfjs-dist/build/pdf.worker.js";
function PDFViewer({ pdfUrl }) {
  const [numPages, setNumPages] = React.useState(null);

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}

export default PDFViewer;
