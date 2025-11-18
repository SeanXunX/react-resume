import React from "react";
import {
    Page,
    Text,
    View,
    Document,
} from "@react-pdf/renderer";
import { createStyles } from "./styles";
import { EmailWithIcon, GitHubWithIcon, PhoneWithIcon } from "./components/SocialInfo";
import { Bullet, BulletWithItem } from "./components/BulletPoints";

const styles = createStyles("Helvetica");

export const ResumeDocument = () => (
    <Document title="Resume">
        <Page size="A4" style={styles.page}>
            <View style={styles.headerSection}>
                <Text style={styles.name}>Xun Xu</Text>
                <Text style={styles.role}>B.S. Candidate in Computer Science</Text>
                <View style={styles.contactRow}>
                    <EmailWithIcon email="seanxunx@outlook.com | 23307130122@m.fudan.edu.cn" styles={styles} />
                    <GitHubWithIcon username="seanxunx" styles={styles} />
                    <PhoneWithIcon phone="+86 172-0527-0561" styles={styles} />
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.column}>
                    {/* Education */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Education</Text>
                        <View style={styles.entry}>
                            <View style={styles.entryHeader}>
                                <Text style={styles.entryTitle}>B.S. Computer Science</Text>
                                <Text style={styles.entryMeta}>Sept. 2023 – Jun. 2027</Text>
                            </View>
                            <Text style={styles.entryMeta}>Fudan University</Text>
                            <View style={styles.bulletList}>
                                <Bullet styles={styles}>GPA: 3.66/4.0 · Merit Scholarship recipient.</Bullet>
                            </View>
                        </View>
                    </View>

                    {/* Skills */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        <View style={styles.entry}>
                            <View style={styles.bulletList}>
                                <BulletWithItem
                                    styles={styles}
                                    title="Golang"
                                    desc="Proficient; deep knowledge of slices/maps internals, goroutines & channels and context-based timeout control."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="Computer Science Fundamentals"
                                    desc="Familiar with data structures and algorithms, computer network protocols, and basic concepts of operating system."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="Databases"
                                    desc="Familiar with SQL storage engines, indexing and transaction/locking mechanisms; proficient in Redis data structures, persistence, and caching strategies."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="Containers & Deployment"
                                    desc="Skilled in Docker containerization and deployment workflows; experienced with image management, networking, and multi-service setups."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="Tools & System"
                                    desc="Proficient with Git version control and branching workflows; experienced with Linux system operations, basic configuration, and performance monitoring."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="LLM Application Development"
                                    desc="Familiar with large language model application design and agent development workflows; understand LangChain framework, Function Calling, and MCP concepts."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="Deep Learning Framework"
                                    desc="Skilled in PyTorch, capable of designing neural network architectures, training models, and performing inference for research and production tasks."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="Frontend Development"
                                    desc="Familiar with the React framework; capable of basic frontend development and API integration."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="AI-assisted Development"
                                    desc="Familiar with AI coding tools, such as Claude Code, for vibe coding."
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="Languages"
                                    desc="English - Fluent (TOEFL iBT 105); Mandarin - Native"
                                />
                            </View>
                        </View>
                    </View>

                    {/* Projects */}

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


                    {/* Experience */}

                    <Text break style={styles.sectionTitle}>Experience</Text>

                    <View style={styles.entry}>
                        <View style={styles.entryHeader}>
                            <Text style={styles.entryTitle}>
                                Research Intern, Fudan Vision and Learning Lab
                            </Text>
                            <Text style={styles.entryMeta}>Mar. 2025 - Jul. 2025</Text>
                        </View>
                        <View style={styles.bulletList}>
                            <Text style={styles.entryMeta}>Fudan University, Shanghai</Text>
                            <Bullet styles={styles}>
                                Assisted in optimizing visual segmentation models and improving
                                data processing pipelines.
                            </Bullet>
                            <Bullet styles={styles}>
                                Gained experience with <Text style={styles.techTerm}>PyTorch</Text>, <Text style={styles.techTerm}>Docker</Text>, and <Text style={styles.techTerm}>Linux</Text>-based remote development environments.
                            </Bullet>
                        </View>
                    </View>

                    <View style={styles.entry}>
                        <View style={styles.entryHeader}>
                            <Text style={styles.entryTitle}>
                                Research Intern, Fudan Artisan-Lab
                            </Text>
                            <Text style={styles.entryMeta}>Sept. 2024 - Mar. 2025</Text>
                        </View>
                        <Text style={styles.entryMeta}>Fudan University, Shanghai</Text>
                        <View style={styles.bulletList}>
                            <Bullet styles={styles}>
                                Contributed to the development of RAPx, a static analysis platform written in <Text style={styles.techTerm}>Rust</Text>. Focused on implementing control flow analysis to enable accurate extraction of program call graphs.
                            </Bullet>
                            <Bullet styles={styles}>
                                Authored detailed documentation to ensure clarity and
                                maintainability for future contributors.
                            </Bullet>
                        </View>
                    </View>


                </View>
            </View>
        </Page>
    </Document>
);
