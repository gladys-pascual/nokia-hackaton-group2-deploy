import React from "react";

const WhichPhone = () => {
  return (
    <section className="which-phone-banner">
      <div className="which-phone-banner-left-column">
        <div className="which-phone-slogan-container">
          <h1 className="which-phone-slogan-text">Find the perfect phone for you.</h1>
        </div>
        <div>
          <div>
            <div className="which-phone-row">
              <div  className="which-phone-buttons">
                <h1 className="which-phone-buttons-text">Long life battery</h1>
              </div>
              <div className="which-phone-buttons">
                <h1 className="which-phone-buttons-text">Easy-to-use</h1>
              </div>
            </div>
            <div className="which-phone-row">
              <div className="which-phone-buttons">
                <h1 className="which-phone-buttons-text">Water Resistant</h1>
              </div>
              <div className="which-phone-buttons">
                <h1 className="which-phone-buttons-text">For the traveler</h1>
              </div>
            </div>
            <div>
              <div>
              
              </div>
              <div>

              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className="which-phone-banner-right-column"> 
        <div>
          <img src="/images/nokia-tough-filter-banner.png" alt="Nokia 800 Tough"/>
        </div>
      </div>
    </section>
  );
};

export default WhichPhone;
