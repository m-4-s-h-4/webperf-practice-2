import ContactForm from "./components/ContactForm";

function Home() {
  return (
    <main>
      <header className="site-header site-contact-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">Say Hi</h1>
              <strong className="text-white">
                We are happy to get in touch with you
              </strong>
            </div>
          </div>
        </div>
        <div className="overlay" />
      </header>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4">Leave a message</h2>
            </div>
            <div className="col-lg-6 col-12">
              <ContactForm />
            </div>
            <div className="col-lg-4 col-12 mx-auto mt-lg-5 mt-4">
              <h5>Weekdays</h5>
              <div className="d-flex mb-lg-3">
                <p>Monday to Friday</p>
                <p className="ms-5">10:00 AM - 08:00 PM</p>
              </div>
              <h5>Weekends</h5>
              <div className="d-flex">
                <p>Saturday and Sunday</p>
                <p className="ms-5">11:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="col-12">
              <h4 className="mt-5 mb-4">
                121 Einstein Loop N, Bronx, NY 10475, United States
              </h4>
              <div className="google-map pt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14920.891757756479!2d-73.83496372506556!3d40.8623107607295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28cbc17f4a0c3%3A0x9ae0f1e804a817d!2s121%20Einstein%20Loop%20N%2C%20Bronx%2C%20NY%2010475%2C%20USA!5e0!3m2!1sen!2sth!4v1650470337727!5m2!1sen!2sth"
                  width="100%"
                  height={300}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
