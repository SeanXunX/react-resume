import {
    Text,
    View,
} from "@react-pdf/renderer";
import { createStyles } from "../styles";
import { BulletWithItem } from "./BulletPoints";

type ProjectsProps = {
    styles: ReturnType<typeof createStyles>;
}

export const Projects = ({ styles }: ProjectsProps) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.entry}>
            <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                    SmartPosts – AI-Powered Content Publishing Platform
                </Text>
                <Text style={styles.entryMeta}>Independent Developer</Text>
            </View>
            <Text style={styles.techStack}>
                Tech Stack: Gin, JWT, Gorm, MySQL, Redis, RabbitMQ, gRPC, Langchain, RAG, LangSmith, Docker, React
            </Text>
            <View style={styles.bulletList}>
                <BulletWithItem
                    styles={styles}
                    title="Authentication"
                    desc="Implemented stateless authentication using JWT middleware."
                />
                <BulletWithItem
                    styles={styles}
                    title="Database Storage"
                    desc="Used Grom to interact with MySQL, implementing CRUD operations for user information, community information, and post status."
                />
                <BulletWithItem
                    styles={styles}
                    title="Async Processing"
                    desc="Implemented RabbitMQ to offload time-consuming tasks, such as frequent voting updates to asynchronous queues, enhancing system performance and scalability."
                />
                <BulletWithItem
                    styles={styles}
                    title="AI Analysis Integration"
                    desc="Used gRPC for communication between Go backend and Python AI service, implementing a RAG agent to answer user questions on posts, with Server-Sent Events streaming AI-generated responses in real time."
                />
                <BulletWithItem
                    styles={styles}
                    title="Hot Post & Voting Feature"
                    desc="Used Redis ZSET to store voting data, implementing dynamic sorting through a composite scoring algorithm (vote count + time decay factor) to balance popular content with timeliness."
                />
                <BulletWithItem
                    styles={styles}
                    title="Cloud Deployment"
                    desc="Used Docker-compose to containerize all components."
                />
            </View>
        </View>
    </View>
);
