import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Svg,
  Path,
} from "@react-pdf/renderer";

Font.register({
  family: "ABeeZee",
  src: "http://fonts.gstatic.com/s/abeezee/v9/JYPhMn-3Xw-JGuyB-fEdNA.ttf",
  fontStyle: "normal",
  fontWeight: 400,
});

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#2a2a2a",
    lineHeight: 1.4,
  },
  headerSection: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 12,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  role: {
    fontSize: 11,
    marginTop: 12,
    letterSpacing: 1,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  contactItem: {
    marginRight: 12,
    marginBottom: 4,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 4,
  },
  emailIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  emailText: {
    fontSize: 10,
  },
  githubContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 4,
  },
  githubIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  githubText: {
    fontSize: 10,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 4,
  },
  phoneIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  phoneText: {
    fontSize: 10,
  },
  body: {
    flexDirection: "row",
  },
  column: {
    width: "100%",
    paddingHorizontal: 12,
    borderRightColor: "#e0e0e0",
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0b5394",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  entry: {
    marginBottom: 10,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  entryTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  entryMeta: {
    fontSize: 9,
    color: "#555555",
    marginBottom: 2,
  },
  techStack: {
    fontSize: 8.5,
    color: "#666666",
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 4,
  },
  bulletList: {
    marginTop: 4,
  },
  bulletItem: {
    fontSize: 9.5,
    marginBottom: 6,
    lineHeight: 1.4,
    textAlign: "justify",
  },
  tagList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  tag: {
    fontSize: 9,
    backgroundColor: "#e8f0fe",
    color: "#0b5394",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 9.5,
    marginBottom: 4,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 9.5,
    marginBottom: 4,
    lineHeight: 1.5,
    textAlign: "justify",
  },
  techTerm: {
    backgroundColor: "#e8e8e8",
    color:"#0b5394",
    fontWeight: 500,
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 2,
    fontSize: 9.5,
  },
});

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <Text style={styles.bulletItem}>• {children}</Text>
);

type ItemProps = {
  title: string;
  desc: string;
};

const BulletWithItem = ({ title, desc }: ItemProps) => {
  const highlightTechTerms = (text: string) => {
    const techTerms = [
      'JWT', 'Gorm', 'MySQL', 'Redis', 'RabbitMQ', 'gRPC', 'Go', 'Python',
      'Docker', 'PyTorch', 'Rust', 'LangChain',
      'RAG', 'Server-Sent Events', 'ZSET', 'React'
    ];
    
    const parts = [];
    let lastIndex = 0;
    
    techTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
        }
        parts.push({ type: 'tech', content: match[0] });
        lastIndex = match.index + match[0].length;
      }
    });
    
    if (lastIndex < text.length) {
      parts.push({ type: 'text', content: text.slice(lastIndex) });
    }
    
    return parts.length > 0 ? parts : [{ type: 'text', content: text }];
  };
  
  const parts = highlightTechTerms(desc);
  
  return (
    <Text style={styles.bulletItem}>
      • <Text style={{ fontWeight: "bold" }}>{title}:</Text>{' '}
      {parts.map((part, idx) => 
        part.type === 'tech' ? (
          <Text key={idx} style={styles.techTerm}>{part.content}</Text>
        ) : (
          <Text key={idx}>{part.content}</Text>
        )
      )}
    </Text>
  );
};

type EmailProps = {
  email: string;
};

const EmailWithIcon = ({ email }: EmailProps) => (
  <View style={styles.emailContainer}>
    <Svg style={styles.emailIcon} viewBox="0 0 24 24">
      <Path
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="#0b5394"
      />
    </Svg>
    <Text style={styles.emailText}>{email}</Text>
  </View>
);

type GitHubProps = {
  username: string;
};

const GitHubWithIcon = ({ username }: GitHubProps) => (
  <View style={styles.githubContainer}>
    <Svg style={styles.githubIcon} viewBox="0 0 24 24">
      <Path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        fill="#0b5394"
      />
    </Svg>
    <Text style={styles.githubText}>{username}</Text>
  </View>
);

type PhoneProps = {
  phone: string;
};

const PhoneWithIcon = ({ phone }: PhoneProps) => (
  <View style={styles.phoneContainer}>
    <Svg style={styles.phoneIcon} viewBox="0 0 24 24">
      <Path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        fill="#0b5394"
      />
    </Svg>
    <Text style={styles.phoneText}>{phone}</Text>
  </View>
);

export const ResumeDocument = () => (
  <Document title="Resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.headerSection}>
        <Text style={styles.name}>Xun Xu</Text>
        <Text style={styles.role}>B.S. Candidate in Computer Science</Text>
        <View style={styles.contactRow}>
          <EmailWithIcon email="seanxunx@outlook.com | 23307130122@m.fudan.edu.cn" />
          <GitHubWithIcon username="github.com/seanxunx" />
          <PhoneWithIcon phone="+86 172-0527-0561" />
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
                <Bullet>GPA: 3.66/4.0 · Merit Scholarship recipient.</Bullet>
              </View>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.entry}>
              <View style={styles.bulletList}>
                <BulletWithItem
                  title="Golang"
                  desc="Proficient; deep knowledge of slices/maps internals, goroutines & channels and context-based timeout control."
                />
                <BulletWithItem
                  title="Computer Science Fundamentals"
                  desc="Familiar with data structures and algorithms, computer network protocols, and basic concepts of operating system."
                />
                <BulletWithItem
                  title="Databases"
                  desc="Familiar with SQL storage engines, indexing and transaction/locking mechanisms; proficient in Redis data structures, persistence, and caching strategies."
                />
                <BulletWithItem
                  title="Containers & Deployment"
                  desc="Skilled in Docker containerization and deployment workflows; experienced with image management, networking, and multi-service setups."
                />
                <BulletWithItem
                  title="Tools & System"
                  desc="Proficient with Git version control and branching workflows; experienced with Linux system operations, basic configuration, and performance monitoring."
                />
                <BulletWithItem
                  title="LLM Application Development"
                  desc="Familiar with large language model application design and agent development workflows; understand LangChain framework, Function Calling, and MCP concepts."
                />
                <BulletWithItem
                  title="Deep Learning Framework"
                  desc="Skilled in PyTorch, capable of designing neural network architectures, training models, and performing inference for research and production tasks."
                />
                <BulletWithItem
                  title="Frontend Development"
                  desc="Familiar with the React framework; capable of basic frontend development and API integration."
                />
                <BulletWithItem
                  title="AI-assisted Development"
                  desc="Familiar with AI coding tools, such as Claude Code, for vibe coding."
                />
                <BulletWithItem
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
                  title="Authentication"
                  desc="Implemented stateless authentication using JWT middleware."
                />
                <BulletWithItem
                  title="Database Storage"
                  desc="Used Grom to interact with MySQL, implementing CRUD operations for user information, community information, and post status."
                />
                <BulletWithItem
                  title="Async Processing"
                  desc="Implemented RabbitMQ to offload time-consuming tasks, such as frequent voting updates to asynchronous queues, enhancing system performance and scalability."
                />
                <BulletWithItem
                  title="AI Analysis Integration"
                  desc="Used gRPC for communication between Go backend and Python AI service, implementing a RAG agent to answer user questions on posts, with Server-Sent Events streaming AI-generated responses in real time."
                />
                <BulletWithItem
                  title="Hot Post & Voting Feature"
                  desc="Used Redis ZSET to store voting data, implementing dynamic sorting through a composite scoring algorithm (vote count + time decay factor) to balance popular content with timeliness."
                />
                <BulletWithItem
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
              <Bullet>
                Assisted in optimizing visual segmentation models and improving
                data processing pipelines.
              </Bullet>
              <Bullet>
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
              <Bullet>
                Contributed to the development of RAPx, a static analysis platform written in <Text style={styles.techTerm}>Rust</Text>. Focused on implementing control flow analysis to enable accurate extraction of program call graphs.
              </Bullet>
              <Bullet>
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
