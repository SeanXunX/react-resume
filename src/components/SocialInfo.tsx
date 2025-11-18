import { Text, View, Svg, Path, Link } from '@react-pdf/renderer';
import { createStyles } from '../styles';


type IconProps = {
    styles: ReturnType<typeof createStyles>;
};

type EmailProps = {
    email: string;
} & IconProps;

export const EmailWithIcon = ({ email, styles }: EmailProps) => (
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
} & IconProps;

export const GitHubWithIcon = ({ username, styles }: GitHubProps) => (
    <View style={styles.githubContainer}>
        <Svg style={styles.githubIcon} viewBox="0 0 24 24">
            <Path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                fill="#0b5394"
            />
        </Svg>
        <Link src={`https://github.com/${username}`} style={styles.githubText}>
            {`github.com/${username}`}
        </Link>
    </View >
);

type PhoneProps = {
    phone: string;
} & IconProps;

export const PhoneWithIcon = ({ phone, styles }: PhoneProps) => (
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
