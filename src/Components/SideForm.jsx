import React from 'react';

const SideForm = () => {
  return (
    <div id="side-contact-form" class="">
    <div class="stickyForm rounded" id="" autocomplete="off">
        <button class="btn">Enquire Now</button>
        <div id="stickForm" class="form_sticky">
            <p class="text-center text-white text-capitalize"><strong>Register here and avail <br/>the <span
                        class="text-danger">best Offers!!</span></strong> </p>
            <label for="name">
                <input type="text" name="side-name" id="side-name" placeholder="Name" required=""
                    aria-required="true" />
                <span id="side-name-info" class="text-danger"></span>
            </label>
            <label for="phone">
                <input type="text" name="side-phone" id="side-phone" placeholder="Phone" required=""
                    aria-required="true" />
                <span id="side-phone-info" class="text-danger"></span>
            </label>
            <label for="email">
                <input type="email" name="side-email" id="side-email" placeholder="Email" required=""
                    aria-required="true"/>
                <span id="side-email-info" class="text-danger"></span>
            </label>
             {/* <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" /> */}
            <div class="btn-group">
                <input type="submit" name="submit" value="Send Message" onClick="sendSideContact();" id="submit"
                    class="_animate"></input>

            </div>
            <div id="side-mail-status"></div>
        </div>
    </div>
</div>

  );
};

export default SideForm;
