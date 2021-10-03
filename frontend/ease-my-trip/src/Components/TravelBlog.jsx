import React from "react";
import "../style/travelblog.css";

const TravelBlog = () => {
  return (
    <>
      <div className="top" style={{ marginBottom: "30px" }}>
        Travel Blog
      </div>
      <div className="container1">
        <div class="new_ofr_hp2">
          <div class="new_ofr_hp_img-rc">
            <img
              src="https://www.easemytrip.com/images/offer-img/cordelia-cruise-hp.jpg"
              alt="Blog"
            />
          </div>
          <div class="new_hp_text spc-pd">
            <p class="hp_pra">All You Need To Know About Cordelia Cruise</p>
            <div class="hp_vld">
              <p class="timeIcn"></p>
              September 13, 2021
            </div>
          </div>
        </div>
        <div class="new_ofr_hp2">
          <div class="new_ofr_hp_img-rc">
            <img
              src="https://www.easemytrip.com/images/offer-img/future-cloud-computing-hp.jpg"
              alt="Blog"
            />
          </div>
          <div class="new_hp_text spc-pd">
            <p class="hp_pra">
              The Role Of Cloud Computing In Shaping The Future Of The Travel
              Industry
            </p>
            <div class="hp_vld">
              <p class="timeIcn"></p>
              September 6, 2021
            </div>
          </div>
        </div>
        <div class="new_ofr_hp2">
          <div class="new_ofr_hp_img-rc">
            <img
              src="https://www.easemytrip.com/images/offer-img/future-of-cruise-hp.jpg"
              alt="Blog"
            />
          </div>
          <div class="new_hp_text spc-pd">
            <p class="hp_pra">
              How Technology Will Help Cruise Lines Restart Operations
              Post-Pandemic
            </p>
            <div class="hp_vld">
              <p class="timeIcn"></p>
              August 25, 2021
            </div>
          </div>
        </div>

        <div class="new_ofr_hp2">
          <div class="new_ofr_hp_img-rc">
            <img
              src="https://www.easemytrip.com/images/offer-img/places-in-france-hp.jpg"
              alt="Blog"
            />
          </div>
          <div class="new_hp_text spc-pd">
            <p class="hp_pra">
              Discover Europe In A New Light With Our France Tourism Packages
            </p>
            <div class="hp_vld">
              <p class="timeIcn"></p>
              August 19, 2021
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { TravelBlog };
