import { PDFViewer } from "@react-pdf/renderer";
import { ResumeDocument } from "../Resume";
import { Link } from 'react-router-dom';

const EnglishResume = () => (
  <>
    <Link to="/">
        <button style={{ position: 'absolute', bottom: 10, left: 10, zIndex: 10, padding: '10px 20px', cursor: 'pointer' }}>Back</button>
    </Link>
    <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
      <ResumeDocument />
    </PDFViewer>
  </>
);

export default EnglishResume;
