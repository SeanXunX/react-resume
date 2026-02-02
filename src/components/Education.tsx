import {
    Text,
    View,
} from "@react-pdf/renderer";
import { createStyles } from "../styles";
import { Bullet } from "./BulletPoints";

type EducationProps = {
    styles: ReturnType<typeof createStyles>;
}

export const Education = ({ styles }: EducationProps) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.entry}>
            <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>Fudan University - B.S. Computer Science</Text>
                <Text style={styles.entryMeta}>Sept. 2023 – Jun. 2027</Text>
            </View>
            <Text style={styles.entryMeta}>Shanghai, China</Text>
            <View style={styles.bulletList}>
                <Bullet styles={styles}>
    <Text>
        <Text style={styles.bold}>Avg. Score: 92/100</Text> (GPA: 3.68/4.0)
    </Text>
</Bullet>
                <Bullet styles={styles}>Recipient of <Text style={styles.bold}>Fudan University Outstanding Student Award</Text> with scholarship.</Bullet>
            </View>
        </View>
    </View>
);
