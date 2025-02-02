import Component from './../../src/components/component.js';

class Footer extends Component {
    constructor(){
        super({
            template: `
                <footer>
                    <!-- Contact Section -->
                    <section id="contact">
                      <h2>Get in Touch</h2>
                      <p class="c-me">Contact me via:</p>
                      <ul>
                          <a href="https://mail.to">
                              <li>
                                  <img src="/.leresco/public/assets/images/email_icon.png" alt="Email icon" />
                                  <font>&nbsp;&nbsp;mj.leresco@gmail.com</font>
                              </li>
                          </a>
                          <a href="https://mail.to">
                              <li>
                                  <img src="/.leresco/public/assets/images/whatsapp_icon.png" alt="WhatsApp icon" />
                                  &nbsp;&nbsp;+2347032388715
                              </li>
                          </a>
                          <a href="https://mail.to">
                              <li>
                                  <img src="/.leresco/public/assets/images/phone_icon.png" alt="Phone icon" />
                                  &nbsp;&nbsp;+2347032388715
                              </li>
                          </a>
                      </ul>
                      OR
                      <form>
                        <input type="text" name="name" placeholder="Name">
                        <input type="email" name="email" placeholder="Email">
                        <textarea name="message" rows="7" placeholder="Message"></textarea>
                        <button>Send Message</button>
                      </form>
                    </section>
                    
                    <div id="social-media">
                    <h2>Social Media</h2>
                    <ul>
                        <li><a href="https://www.fb.com/l/6lp1kJRRR">
                            <img src="/.leresco/public/assets/images/facebook_icon.png" alt="WhatsApp icon" /><br />
                            <font class="sm-name" >Facebook</font>
                        </a></li>
                        <li><a href="(link unavailable)">
                            <img src="/.leresco/application/SPAs/portfolio/assets/images/x-icon.png" alt="WhatsApp icon" /><br />
                            <font class="sm-name" >Twitter</font>
                        </a></li>
                        <li><a href="(link unavailable)">
                            <img src="/.leresco/application/SPAs/portfolio/assets/images/instagram-icon.png" alt="WhatsApp icon" /><br />
                            <font class="sm-name" >Instagram</font>
                        </a></li>
                        <li><a href="https://whatsapp.com/channel/0029VaKvppHEVccBIfPvtj3a">
                            <img src="/.leresco/public/assets/images/whatsapp_icon.png" alt="WhatsApp icon" /><br />
                            <font class="sm-name" >WhatsApp</font>
                        </a></li>
                    </ul>
                    </div>
                    <p id="copyright"><font size="2" >Copyright &copy;2025 MJ-Leresco.  All rights reserved.</font></p>
                    
                </footer>
            `
        });
    }
}

export default Footer;
