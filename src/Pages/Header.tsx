import { FaLinkedin } from "react-icons/fa"

const Header: React.FC = () => {

  return (
    <div className="container py-3 flex flex-row justify-end">
      <a href="https://www.linkedin.com/in/jason-goelzer-317a7731" target="_blank">
        <FaLinkedin className="text-xl" />
      </a>
    </div>

  )
}

export default Header
