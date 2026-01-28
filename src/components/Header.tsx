import {
    Text,
    View,
} from "@react-pdf/renderer";
import { createStyles } from "../styles";
import { EmailWithIcon, GitHubWithIcon, PhoneWithIcon, WeChatWithIcon } from "./SocialInfo";

type HeaderProps = {
    name: string;
    role: string;
    email: string;
    username: string;
    phone: string;
    wechat: string;
    styles: ReturnType<typeof createStyles>;
}

export const Header = ({ name, email, username, phone, wechat, styles }: HeaderProps) => (
    <View style={styles.headerSection}>
        <Text style={styles.name}>{name}</Text>
        {/* <Text style={styles.role}>{role}</Text> */}
        <View style={styles.contactRow}>
            <EmailWithIcon email={email} styles={styles} />
            <GitHubWithIcon username={username} styles={styles} />
            <PhoneWithIcon phone={phone} styles={styles} />
            <WeChatWithIcon wechat={wechat} styles={styles} />
        </View>
    </View>
);
