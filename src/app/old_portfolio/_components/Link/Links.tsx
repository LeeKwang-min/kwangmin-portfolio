import {
  FaBlog,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
} from "react-icons/fa";
import Section from "../Common/Section";
import LinkCard from "./LinkCard";

function Links() {
  return (
    <Section id="links" title="LINKS" icon={<FaLink />} bgColor="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <LinkCard
          icon={<FaGithub size={24} />}
          title="GitHub"
          url="https://github.com/LeeKwang-min"
        />
        <LinkCard
          icon={<FaBlog size={24} />}
          title="Blog"
          url="https://kwangbong.tistory.com/"
        />
        <LinkCard
          icon={<FaLinkedin size={24} />}
          title="LinkedIn"
          url="https://www.linkedin.com/in/%EA%B4%91%EB%AF%BC-%EC%9D%B4-660a5a295/"
        />
        <LinkCard
          icon={<FaInstagram size={24} />}
          title="Instagram"
          url="https://www.instagram.com/lee_kwangbong/"
        />
      </div>
    </Section>
  );
}

export default Links;
