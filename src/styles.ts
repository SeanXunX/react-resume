import { StyleSheet, Font } from "@react-pdf/renderer";
import NotoSansSC from "./assets/fonts/NotoSansSC-Regular.ttf";
import NotoSansSC_Bold from "./assets/fonts/NotoSansSC-Bold.ttf";

Font.register({
    family: "ABeeZee",
    src: "http://fonts.gstatic.com/s/abeezee/v9/JYPhMn-3Xw-JGuyB-fEdNA.ttf",
    fontStyle: "normal",
    fontWeight: 400,
});

Font.register({
    family: "NotoSansSC",
    fonts: [
        { src: NotoSansSC },
        { src: NotoSansSC_Bold, fontWeight: "bold" },
    ],
});

export const createStyles = (fontFamily: string) =>
    StyleSheet.create({
        bold: {
            fontWeight: "bold",
        },
        page: {
            padding: 32,
            fontSize: 11,
            fontFamily: fontFamily,
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
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: 5,
            marginBottom: 20,
            // textTransform: "uppercase",
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
            marginRight: 36,
            marginBottom: 4,
        },
        emailIcon: {
            width: 10,
            height: 10,
            marginRight: 4,
        },
        emailText: {
            fontSize: 11,
        },
        githubContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginRight: 36,
            marginBottom: 4,
        },
        githubIcon: {
            width: 10,
            height: 10,
            marginRight: 4,
        },
        githubText: {
            fontSize: 11,
            color: "#0b5394",
        },
        phoneContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginRight: 36,
            marginBottom: 4,
        },
        phoneIcon: {
            width: 10,
            height: 10,
            marginRight: 4,
        },
        phoneText: {
            fontSize: 11,
        },
        wechatContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginRight: 36,
            marginBottom: 4,
        },
        wechatIcon: {
            width: 10,
            height: 10,
            marginRight: 4,
        },
        wechatText: {
            fontSize: 11,
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
            fontSize: 12,
            fontWeight: "bold",
        },
        entryMeta: {
            fontSize: 10,
            color: "#555555",
            marginBottom: 2,
        },
        techStack: {
            fontSize: 9.5,
            color: "#666666",
            fontWeight: "bold",
            marginTop: 2,
            marginBottom: 4,
        },
        bulletList: {
            marginTop: 4,
        },
        bulletItem: {
            fontSize: 12,
            marginBottom: 6,
            lineHeight: 1.4,
            textAlign: "left",
        },
        tagList: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 6,
        },
        tag: {
            fontSize: 10,
            backgroundColor: "#e8f0fe",
            color: "#0b5394",
            paddingVertical: 2,
            paddingHorizontal: 6,
            borderRadius: 4,
            marginRight: 6,
            marginBottom: 4,
        },
        infoText: {
            fontSize: 10.5,
            marginBottom: 4,
            textAlign: "justify",
        },
        paragraph: {
            fontSize: 10.5,
            marginBottom: 4,
            lineHeight: 1.5,
            textAlign: "justify",
        },
        techTerm: {
            backgroundColor: "#e8e8e8",
            color: "#0b5394",
            fontWeight: 500,
            paddingHorizontal: 3,
            paddingVertical: 1,
            borderRadius: 2,
            fontSize: 10.5,
        },
    });
