import "./connect.css";
import programmers from "../../images/programmers.png";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Connect = () => {
	return (
		<div className="connect" id="connect">
			<div className="connectContainer">
				<div className="connectCenter">
					<img src={programmers} alt="" />
					{/* <div className="connectText">
						<h2>Get In Touch</h2>
					</div> */}

					<div className="me">
						<article className="contact-option">
							<RiMessengerLine className="contact-option-icon" />
							<h4>Messenger</h4>
							<h5>Saif Toema</h5>
							<a
								href="https://m.me/mohmad.ahmed.9066389/"
								target="_blank"
								className="moh"
							>
								Send a Massage
							</a>
						</article>
						<article className="contact-option">
							<BsWhatsapp className="contact-option-icon" />
							<h4>WhatsApp</h4>
							<h5>+20 1127128836</h5>
							<a
								href="https://api.whatsapp.com/send?=+201127128836"
								target="_blank"
								className="moh"
							>
								Send a Massage
							</a>
						</article>
						<article className="contact-option">
							<FaLinkedinIn className="contact-option-icon" />
							<h4>LinkedinIn</h4>
							<h5>Seif Teima</h5>
							<a
								href="https://www.linkedin.com/in/seif-teima-0102a2253/"
								target="_blank"
								className="moh"
							>
								Send a Massage
							</a>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Connect;
