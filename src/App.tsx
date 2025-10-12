import { PDFViewer } from "@react-pdf/renderer"
import { ResumeDocument } from "./Resume"

const APP = () => (
    <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
      <ResumeDocument />
    </PDFViewer>
);

export default APP;