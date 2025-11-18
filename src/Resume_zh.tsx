import {
    Page,
    Text,
    View,
    Document,
} from "@react-pdf/renderer";
import { createStyles } from "./styles";
import { EmailWithIcon, GitHubWithIcon, PhoneWithIcon } from "./components/SocialInfo";
import { Bullet, BulletWithItem } from "./components/BulletPoints";

const styles = createStyles("NotoSansSC");

export const ResumeDocument_zh = () => (
    <Document title="Resume_zh">
        <Page size="A4" style={styles.page}>
            <View style={styles.headerSection}>
                <Text style={styles.name}>许迅</Text>
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
                        <Text style={styles.sectionTitle}>教育背景</Text>
                        <View style={styles.entry}>
                            <View style={styles.entryHeader}>
                                <Text style={styles.entryTitle}>复旦大学</Text>
                                <Text style={styles.entryMeta}>2023年9月 – 2027年6月</Text>
                            </View>
                            <Text style={styles.entryMeta}>本科 | 计算机科学与技术</Text>
                            <View style={styles.bulletList}>
                                <Bullet styles={styles}>绩点: 3.66/4.0 (top 30%)</Bullet>
                                <Bullet styles={styles}>复旦大学本科生优秀学生奖学金</Bullet>
                            </View>
                        </View>
                    </View>

                    {/* Skills */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>技能</Text>
                        <View style={styles.entry}>
                            <View style={styles.bulletList}>
                                <BulletWithItem
                                    styles={styles}
                                    title="Golang"
                                    desc="熟练掌握Golang语言开发，深入理解slice、map底层实现，熟悉goroutine、channel实现高并发编程，掌握context上下文控制，了解GMP调度模型。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="计算机科学基础"
                                    desc="熟悉数据结构与算法、计算机网络协议和操作系统的基本概念。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="数据库"
                                    desc="熟悉MySQL存储引擎、索引、事务和锁机制；掌握Redis数据结构以及应用场景, 了解持久化和缓存策略。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="容器与部署"
                                    desc="熟悉Docker容器化和部署工作流程。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="工具与系统"
                                    desc="精通Git版本控制和分支工作流程；有Linux系统操作和基本配置经验。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="大语言模型应用开发"
                                    desc="了解大语言模型应用设计开发工作流程, 能使用LangChain框架;了解Function Calling, MCP, RAG及Agent等关键技术概念。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="深度学习框架"
                                    desc="掌握PyTorch，能够设计神经网络架构、训练模型并为研究和生产任务执行推理。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="前端开发"
                                    desc="了解React框架；能够进行基本的前端开发和API集成。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="AI辅助开发"
                                    desc="熟悉AI编码工具，如Claude Code、cursor，用于vibe coding。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="English"
                                    desc="Fluent (托福 TOEFL iBT 105)"
                                />
                            </View>
                        </View>
                    </View>

                    {/* Projects */}

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>项目经历</Text>
                        <View style={styles.entry}>
                            <View style={styles.entryHeader}>
                                <Text style={styles.entryTitle}>
                                    SmartPosts – AI驱动的内容发布平台
                                </Text>
                                <Text style={styles.entryMeta}>独立开发者</Text>
                            </View>
                            <Text style={styles.techStack}>
                                技术栈: Gin, JWT, Gorm, MySQL, Redis, RabbitMQ, gRPC, Langchain, RAG, LangSmith, Docker, React
                            </Text>
                            <View style={styles.bulletList}>
                                <BulletWithItem
                                    styles={styles}
                                    title="认证"
                                    desc="使用JWT中间件实现无状态认证。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="数据库存储"
                                    desc="使用Gorm与MySQL交互，实现对用户信息、社区信息和帖子状态的CRUD操作。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="异步处理"
                                    desc="实现RabbitMQ以分流耗时任务，例如将频繁的投票更新放入异步队列，从而提高系统性能和可伸缩性。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="AI分析集成"
                                    desc="使用gRPC在Go后端和Python AI服务之间进行通信，Agent使用RAG技术回答相关问题。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="热门帖子与投票功能"
                                    desc="ZSET存储投票数据，通过复合评分算法（投票数+时间衰减因子）实现动态排序。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="云部署"
                                    desc="使用Docker-compose容器化所有组件。"
                                />
                            </View>
                        </View>
                        <View style={styles.entry}>
                            <View style={styles.entryHeader}>
                                <Text style={styles.entryTitle}>
                                    RediGo – 基于Go的Redis实现
                                </Text>
                                <Text style={styles.entryMeta}>独立开发者</Text>
                            </View>
                            <Text style={styles.techStack}>
                                技术栈: Go, Docker, RESP
                            </Text>
                            <View style={styles.bulletList}>
                                <BulletWithItem
                                    styles={styles}
                                    title="核心功能"
                                    desc="实现了多种Redis核心数据结构，包括String, List, ZSet, Stream和Geospatial。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="高级特性"
                                    desc="支持主从复制（PSYNC）、RDB持久化、事务（MULTI/EXEC）和发布/订阅模式。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="并发安全"
                                    desc="使用Go的并发原语（goroutine和channel）确保线程安全，并为每个连接使用独立的goroutine处理，实现非阻塞I/O。"
                                />
                                <BulletWithItem
                                    styles={styles}
                                    title="容器化部署"
                                    desc="提供Dockerfile和Docker Hub镜像，支持通过Docker快速部署和运行。"
                                />
                            </View>
                        </View>
                    </View>


                    {/* Experience */}

                    {/*
                    <Text break style={styles.sectionTitle}>实习经历</Text>

                    <View style={styles.entry}>
                        <View style={styles.entryHeader}>
                            <Text style={styles.entryTitle}>
                                Fudan Vision and Learning Laboratory 实习
                            </Text>
                            <Text style={styles.entryMeta}>2025年3月 - 2025年7月</Text>
                        </View>
                        <View style={styles.bulletList}>
                            <Text style={styles.entryMeta}>复旦大学，上海</Text>
                            <Bullet styles={styles}>
                                协助优化视觉分割模型并改进数据处理流程。
                            </Bullet>
                            <Bullet styles={styles}>
                                获得了 <Text style={styles.techTerm}>PyTorch</Text>、 <Text style={styles.techTerm}>Docker</Text> 和基于 <Text style={styles.techTerm}>Linux</Text> 的远程开发环境的经验。
                            </Bullet>
                        </View>
                    </View>

                    <View style={styles.entry}>
                        <View style={styles.entryHeader}>
                            <Text style={styles.entryTitle}>
                                复旦大学Artisan-Lab研究实习生
                            </Text>
                            <Text style={styles.entryMeta}>2024年9月 - 2025年3月</Text>
                        </View>
                        <Text style={styles.entryMeta}>复旦大学，上海</Text>
                        <View style={styles.bulletList}>
                            <Bullet styles={styles}>
                                参与开发了用 <Text style={styles.techTerm}>Rust</Text> 编写的静态分析平台RAPx。专注于实现控制流分析，以实现程序调用图的精确提取。
                            </Bullet>
                            <Bullet styles={styles}>
                                撰写了详细的文档，以确保未来贡献者的清晰度和可维护性。
                            </Bullet>
                        </View>
                    </View>
                    */}

                </View>
            </View>
        </Page>
    </Document>
);
