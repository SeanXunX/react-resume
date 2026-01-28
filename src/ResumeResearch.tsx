import {
    Page,
    View,
    Document,
} from "@react-pdf/renderer";
import { createStyles } from "./styles";
import { Header } from "./components/Header";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { InternExperience, ResearchExperience } from "./components/Experience";

const styles = createStyles("Helvetica");

export const ResumeDocumentResearch = () => (
    <Document title="Resume">
        <Page size="A4" style={styles.page}>
            <Header
                name="Xun Xu"
                role="B.S. Candidate in Computer Science"
                email="seanxunx@outlook.com / 23307130122@m.fudan.edu.cn"
                username="seanxunx"
                phone="+86 172-0527-0561"
                wechat="SeanXunX"
                styles={styles}
            />

            <View style={styles.body}>
                <View style={styles.column}>
                    <Education styles={styles} />
                    <InternExperience styles={styles} />
                    <ResearchExperience styles={styles} />
                    <Skills styles={styles} />
                </View>
            </View>
        </Page>
    </Document>
);
