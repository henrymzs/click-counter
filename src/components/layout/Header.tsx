import { Avatar, AvatarImage } from "@/components/ui/avatar"

function Header() {
    return (
        <header className="flex justify-end pt-2 px-4 gap-2">
            <a
                href="https://www.linkedin.com/in/henry-kaua/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar meu Linkedin"
            >
                <Avatar
                    className="
                        cursor-pointer
                        transition
                        hover:scale-105
                        hover:ring-2
                        hover:ring-blue-400
                    "
                >
                    <AvatarImage src="src/assets/image/linkedin.png" />
                </Avatar>
            </a>

            <a
                href="https://github.com/henrymzs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar meu GitHub"
            >
                <Avatar
                    className="
                        cursor-pointer
                        transition
                        hover:scale-105
                        hover:ring-2
                        hover:ring-black-400
                    "
                >
                    <AvatarImage src="src/assets/image/github-logo.png" />
                </Avatar>
            </a>
        </header>
    );
};

export default Header;