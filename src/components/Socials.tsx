import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

type Social = {
    icon: JSX.Element;
    path: string;
};

type SocialsProps = {
    containerSyles?: string;
    iconStyles?: string;
};

const socials: Social[] = [
    {
        icon: <FaGithub />,
        path: "https://github.com/kellerkatlin",
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/keller-katlin-pinedo-tocas-144532272/",
    },
    {
        icon: <FaXTwitter />,
        path: "https://x.com/KellerToca22048",
    },
];

export default function Socials({ containerSyles, iconStyles }: SocialsProps) {
    return (
        <div className={containerSyles}>
            {socials.map((social) => (
                <Link
                    className={iconStyles}
                    key={social.path}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    aria-label="social media"
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}
