import { Text, View } from "@react-pdf/renderer";
import { createStyles } from "../styles";
import { Bullet } from "./BulletPoints";

type ExperienceProps = {
  styles: ReturnType<typeof createStyles>;
};

export const InternExperience = ({ styles }: ExperienceProps) => (
  <>
    <Text style={styles.sectionTitle}>Intern Experience</Text>

    <View style={styles.entry}>
      <View style={styles.entryHeader}>
        <Text style={styles.entryTitle}>
          Xiaohongshu (RedNote) - SWE Intern, NoSQL Infra Group
        </Text>
        <Text style={styles.entryMeta}>Nov. 2025 - Feb. 2026</Text>
      </View>
      <Text style={styles.entryMeta}>
        Shanghai, China
      </Text>
      <View style={styles.bulletList}>
        <Bullet styles={styles}>
          Led the engineering implementation of an LLM-based AIOps Agent
          designed to assist cluster diagnosis and maintenance; leveraged
          Function Calling mechanisms to bridge Large Language Models with
          internal infrastructure APIs.
        </Bullet>
        <Bullet styles={styles}>
          Contributed to the NoSQL Cloud Data Management Platform by developing backend
          microservices for cluster management, including automated
          scaling and rolling version upgrades.
        </Bullet>
      </View>
    </View>
  </>
);

export const ResearchExperience = ({ styles }: ExperienceProps) => (
  <>
    <Text style={styles.sectionTitle}>Research Experience</Text>

    <View style={styles.entry}>
      <View style={styles.entryHeader}>
        <Text style={styles.entryTitle}>
          G-MemLLM: Gated Latent Memory Augmentation for LLMs
        </Text>
        <Text style={styles.entryMeta}>Jun. 2025 - Sept. 2025</Text>
      </View>
      <View style={styles.bulletList}>
        <Bullet styles={styles}>
          Proposed a latent memory–augmented architecture that couples a frozen
          LLM backbone with a trainable memory bank, using a GRU-style gated
          update rule to selectively preserve or overwrite memory slots during
          long-context reasoning.
        </Bullet>
        <Bullet styles={styles}>
          Implemented memory encoding, cross-attention retrieval, gated
          consolidation, and injection into LLM hidden states, enabling
          persistent multi-hop fact retention.
        </Bullet>
      </View>
    </View>
  </>
);
