import { Text, View } from "@react-pdf/renderer";
import { createStyles } from "../styles";
import { Item } from "./BulletPoints";

type SkillsProps = {
  styles: ReturnType<typeof createStyles>;
};

export const Skills = ({ styles }: SkillsProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Skills</Text>
    <View style={styles.entry}>
      <View style={styles.bulletList}>
        <Item
          styles={styles}
          title="Deep Learning & LLMs"
          desc="Strong understanding of neural network fundamentals. Proficient in building, training, and optimizing models using PyTorch."
        />
        <Item
          styles={styles}
          title="Agentic Frameworks"
          desc="Proficient in building LLM agents and workflows using LangChain. Experienced in implementing Function Calling and tool-use interfaces for ground model reasoning."
        />
        <Item
          styles={styles}
          title="Programming Languages"
          desc="Familiar with Python for research prototyping, experiment workflows, and data processing. Having strong expertise in Golang for building high-concurrency backend systems and solid foundation in C++."
        />
        <Item
          styles={styles}
          title="Tools & System"
          desc="Skilled in Docker containerization and managing complex Linux environments. Experienced in collaborative Git workflows."
        />
        <Item
          styles={styles}
          title="Languages"
          desc="English (Fluent - TOEFL 105), Mandarin (Native)."
        />
      </View>
    </View>
  </View>
);
