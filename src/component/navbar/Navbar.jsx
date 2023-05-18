import "./navbar.css";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
	return (
		<div>
			<div className="nav">
				<div className="container">
					<a href="/" className="a">
						PORTFOLIO
					</a>
					<ul>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#project">Projects</a>
						</li>
						<li>
							<a href="#connect">Connect</a>
						</li>
						<div className="icons">
							<a
								className="link2"
								href="https://www.linkedin.com/in/seif-teima-0102a2253/"
								target="_blank"
							>
								<FaLinkedinIn className="icon1" />
							</a>
							<a
								className="link2"
								href="https://www.messenger.com/t/100012611160645/"
								target="_blank"
							>
								<BsMessenger className="icon" />
							</a>
							<a
								className="link2"
								href="https://github.com/Toema04"
								target="_blank"
							>
								<AiFillGithub className="icon3" />
							</a>
						</div>
						<a href="#connect" className="button">
							let's connect
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
