function ContactForm() {
  return (
    <form
      className="custom-form contact-form row"
      action="#"
      method="post"
      role="form"
    >
      <div className="col-lg-6 col-6">
        <label htmlFor="contact-name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          name="contact-name"
          id="contact-name"
          className="form-control"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="col-lg-6 col-6">
        <label htmlFor="contact-phone" className="form-label">
          Phone Number
        </label>
        <input
          type="telephone"
          name="contact-phone"
          id="contact-phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="form-control"
          placeholder="123-456-7890"
        />
      </div>
      <div className="col-12">
        <label htmlFor="contact-email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="contact-email"
          id="contact-email"
          pattern="[^ @]*@[^ @]*"
          className="form-control"
          placeholder="Your Email"
          required
        />
        <label htmlFor="contact-message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          rows={5}
          id="contact-message"
          name="contact-message"
          placeholder="Your Message"
          defaultValue={""}
        />
      </div>
      <div className="col-lg-5 col-12 ms-auto">
        <button type="submit" className="form-control">
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
