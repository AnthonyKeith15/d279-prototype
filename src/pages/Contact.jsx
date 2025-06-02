import './Contact.css'; 
export default function Contact() {
  return (
    <div>
      <main className="container">
        <h1>Schedule a Pet Consultation</h1>
        <p className="subtitle">
          Connect with our certified pet experts (“Pexperts”) for personalized advice tailored to your pet’s unique needs.
        </p>

        <div className="form-wrapper">
          <form className="consultation-form">
            <fieldset>
              <legend>Your Consultation Details</legend>

              <section>
                <h3>🧑 Your Information</h3>
                <label htmlFor="firstName">First Name*<input id="firstName" type="text" required /></label>
                <label htmlFor="lastName">Last Name*<input id="lastName" type="text" required /></label>
                <label htmlFor="email">Email Address*<input id="email" type="email" required /></label>
                <label htmlFor="phone">Phone Number*<input id="phone" type="tel" required /></label>
                <label htmlFor="timeZone">Your Time Zone
                  <select id="timeZone" required>
                    <option value="">Select your time zone</option>
                  </select>
                </label>
              </section>

              <section>
                <h3>🐾 Pet Information</h3>
                <label htmlFor="petName">Pet’s Name*<input id="petName" type="text" required /></label>
                <label htmlFor="petType">Pet Type*
                  <select id="petType" required>
                    <option value="">Select pet type</option>
                  </select>
                </label>
                <label htmlFor="breed">Breed (if applicable)<input id="breed" type="text" /></label>
                <label htmlFor="petAge">Pet’s Age*<input id="petAge" type="number" min="0" required /> Years</label>
                <label htmlFor="concerns">What specific concerns would you like to discuss?*
                  <textarea id="concerns" required></textarea>
                </label>
              </section>

              <section>
                <h3>🕓 Preferred Consultation Time</h3>
                <label htmlFor="preferredDate">Preferred Date*<input id="preferredDate" type="date" required /></label>
                <label htmlFor="preferredTime">Preferred Time*
                  <select id="preferredTime" required>
                    <option value="">Select a time</option>
                  </select>
                </label>
              </section>

              <section>
                <h3>🗨️ Consultation Preferences</h3>
                <label><input type="radio" name="method" required /> Video Call (Zoom, Google Meet)</label>
                <label><input type="radio" name="method" /> Phone Call</label>
                <label><input type="checkbox" /> Yes, send me helpful pet care tips and updates</label>
                <label><input type="checkbox" required /> I agree to the <a href="#">terms and conditions</a>*</label>
              </section>
            </fieldset>
            <button type="submit">Schedule My Consultation</button>
          </form>

          <aside className="sidebar">
            <section>
              <h3>Why Choose Our Pexperts?</h3>
              <ul>
                <li>✔️ Certified animal behavior specialists</li>
                <li>✔️ Evidence-based advice tailored to your pet</li>
                <li>✔️ Convenient virtual consultations</li>
                <li>✔️ Follow-up resources and support</li>
              </ul>
            </section>

            <section>
              <h3>Meet Our Pexperts</h3>
              <p><strong>Dr. Sarah Wilson</strong><br />Feline Behavior Specialist</p>
              <p><strong>Mark Thompson</strong><br />Canine Training Expert</p>
              <p><strong>Dr. Amelia Rodriguez</strong><br />Exotic Pet Specialist</p>
            </section>

            <section className="contact-box">
              <h3>Need Help?</h3>
              <p>Have questions about our consultation services?<br />Our team is here to assist you.</p>
              <p><strong>(555) 123-4567</strong><br />
                <a href="mailto:support@paradigmpets.com">support@paradigmpets.com</a>
              </p>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
