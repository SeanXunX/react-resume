import React from "react";
import { Text } from "@react-pdf/renderer";
import { createStyles } from "../styles";

type Styles = ReturnType<typeof createStyles>;

export const Bullet = ({
    children,
    styles,
}: {
    children: React.ReactNode;
    styles: Styles;
}) => <Text style={styles.bulletItem}>• {children}</Text>;

type ItemProps = {
    title: string;
    desc: string;
    styles: Styles;
};

const techTerms = [
    "",
    // "JWT",
    // "Gorm",
    // "MySQL",
    // "Redis",
    // "RabbitMQ",
    // "gRPC",
    // "Go",
    // "Python",
    // "Docker",
    // "PyTorch",
    // "Rust",
    // "LangChain",
    // "RAG",
    // "Server-Sent Events",
    // "React",
];
const techTermsRegex = new RegExp(
    `(${techTerms.map((term) => `\\b${term}\\b`).join("|")})`,
    "gi"
);

const highlightTechTerms = (text: string) => {
    const parts = text.split(techTermsRegex);

    return parts
        .filter((part) => part)
        .map((part) => {
            const isTechTerm = techTerms.some(
                (term) => new RegExp(`^${term}$`, "i").test(part)
            );
            if (isTechTerm) {
                return { type: "tech" as const, content: part };
            }
            else {
                return { type: "text" as const, content: part };
            }
        });
};

export const BulletWithItem = ({ title, desc, styles }: ItemProps) => {
    const parts = highlightTechTerms(desc);

    return (
        <Text style={styles.bulletItem}>
            • <Text style={{ fontWeight: "bold" }}>{title}:</Text>{" "}
            {parts.map((part, idx) =>
                part.type === "tech" ? (
                    <Text key={idx} style={styles.techTerm}>
                        {part.content}
                    </Text>
                ) : (
                    <Text key={idx}>{part.content}</Text>
                )
            )}
        </Text>
    );
};
