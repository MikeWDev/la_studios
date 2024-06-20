import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import TextLine from "@/components/TextLine";

const ContactPage = () => {
  return (
    <section>
      <div className="contact container">
        <div className="heading">
          <TextLine />
          <h2>get in touch</h2>
          <TextLine />
        </div>
        <div className="content-con">
          <div className="text-con">
            <div className="contact-info">
              <h3>contact me</h3>
              <p>
                Lorem ipsum dolor sit amet. Quo ullam rerum quo dolorem iste aut
                maxime ...Lorem ipsum dolor sit amet. Quo ullam rerum quo
                dolorem iste aut maxime ...Lorem ipsum dolor sit amet. Quo ullam
                rerum quo dolorem iste aut maxime ...Lorem ipsum dolor sit amet.
                Quo ullam rerum quo dolorem iste aut maxime ...Lorem ipsum dolor
                sit amet. Quo ullam rerum quo dolorem iste aut maxime ...
              </p>
            </div>
            <div className="slogan">
              <h3>"Where Vision Meets Precision."</h3>
            </div>
            <Socials />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
