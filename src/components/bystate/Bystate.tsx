"use client";
import { STATE_NAMES } from "@/config";
import "./bystate.css";

type StateProps = {
  stateCode: string;
  featuredEstates: any;
};

export default function LandPage({ stateCode, featuredEstates }: StateProps) {
  const stateName = STATE_NAMES.find(
    (item) => item.code === stateCode.toLowerCase(),
  )?.name;
  return (
    <>
      {/* Top Section */}
      <section className="section-top-map find_map_location">
        <div className="wrap-map">
          {stateName && (
            <h1 className="dynamic-title">Land for sale in {stateName}</h1>
          )}
        </div>
      </section>

      {/* Featured Estates */}
      {featuredEstates?.count > 0 && (
        <section className="flat-section slider_new flat-categories-1 arrow_shadow bg_color_1">
          <div className="container">
            <div className="box-title style-1 wow fadeInUp">
              <h3 className="title">Featured Estates in {stateName}</h3>

              <div className="row">
                {/* Card 1 */}
                {featuredEstates?.data?.map((item: any) => (
                  <div className="col-lg-3" key={item.estate_id}>
                    <a
                      href={`/${item.estate_slug}`}
                      className="homelengo-categories"
                    >
                      <div className="listing-card">
                        <div className="image_card">
                          <img src={item.image} alt={item.estate_name} />
                        </div>
                        <div className="info_content">
                          <h4>{item.estate_name}</h4>
                          <p className="location">
                            <i className="icon icon-mapPin"></i>
                            {item.suburb}, {item.state_code}
                          </p>
                          <p className="mb-2 lot-count">
                            {item.lot_count} lots available
                          </p>
                          <div className="price">
                            <span className="price_data">
                              <small>From</small>
                              {item.land_lowest_price}
                            </span>
                            <button className="btn-primary">
                              View Estate <i className="icon icon-arr-r"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}

                {/* Button */}
                <div className="col-lg-12">
                  <button className="all-listing-button">
                    View All Estates <i className="icon icon-arr-r"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Browse Region */}
      <section className="browse-region-section bg_color_2">
        <div className="container">
          <h2 className="browse-region-title">
            Browse Land for Sale By Region
          </h2>

          <div className="row g-4 justify-content-center">
            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="region-card">
                <img src="https://www.landsales.com.au/wp-content/uploads/2025/03/2530-huntley-illawarra-new-south-wales.jpg" alt="Sydney" />
                <h3 className="region-card-title">Sydney</h3>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="region-card">
                <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3630-shepparton-goulburn-valley-victoria.jpg" alt="Hunter Valley" />
                <h3 className="region-card-title">Hunter Valley</h3>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="region-card">
                <img src="https://www.landsales.com.au/wp-content/uploads/2025/09/2620-tralee-capital-new-south-wales.jpg" alt="Central Coast" />
                <h3 className="region-card-title">Central Coast</h3>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="region-card">
                <img src="https://www.landsales.com.au/wp-content/uploads/2025/03/2530-huntley-illawarra-new-south-wales.jpg" alt="Sydney" />
                <h3 className="region-card-title">Sydney</h3>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="region-card">
                <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3630-shepparton-goulburn-valley-victoria.jpg" alt="Hunter Valley" />
                <h3 className="region-card-title">Hunter Valley</h3>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="region-card">
                <img src="https://www.landsales.com.au/wp-content/uploads/2025/09/2620-tralee-capital-new-south-wales.jpg" alt="Central Coast" />
                <h3 className="region-card-title">Central Coast</h3>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="region-card">
                <img src="https://www.landsales.com.au/wp-content/uploads/2025/03/2530-huntley-illawarra-new-south-wales.jpg" alt="Sydney" />
                <h3 className="region-card-title">Sydney</h3>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <a href="#" className="region-card">
                <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3630-shepparton-goulburn-valley-victoria.jpg" alt="Hunter Valley" />
                <h3 className="region-card-title">Hunter Valley</h3>
              </a>
            </div>

            
            
          </div>
        </div>
      </section>

      {/* Latest land Listings */}
      <section className="flat-section slider_new flat-categories-1 arrow_shadow bg_color_3">
        <div className="container">
          <div className="box-title style-1 wow fadeInUp">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="title text-start">
                      Latest Land Listings in NSW
                    </h3>
                  </div>

                  {/* Card 1 */}
                  <div className="col-lg-4">
                    <a href="#" className="homelengo-categories">
                      <div className="listing-card">
                        <div className="image_card">
                          <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3340-darley-moorabool-victoria.jpg" alt="" />
                        </div>
                        <div className="info_content">
                          <h4>Lot 15 Gordon Street</h4>
                          <p className="location">
                            <i className="icon icon-mapPin"></i> Ashfield 5520
                          </p>
                          <div className="price">
                            <span className="price_data">$925,000</span>
                            <button className="btn-primary">
                              View Details <i className="icon icon-arr-r"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Card 2 */}
                  <div className="col-lg-4">
                    <a href="#" className="homelengo-categories">
                      <div className="listing-card">
                        <div className="image_card">
                          <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3630-shepparton-goulburn-valley-victoria.jpg" alt="" />
                        </div>
                        <div className="info_content">
                          <h4>Lot 9 Melbourne Avenue</h4>
                          <p className="location">
                            <i className="icon icon-mapPin"></i> Ashfield 5550
                          </p>
                          <div className="price">
                            <span className="price_data">$870,000</span>
                            <button className="btn-primary">
                              View Details <i className="icon icon-arr-r"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Card 1 */}
                  <div className="col-lg-4">
                    <a href="#" className="homelengo-categories">
                      <div className="listing-card">
                        <div className="image_card">
                          <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3340-darley-moorabool-victoria.jpg" alt="" />
                        </div>
                        <div className="info_content">
                          <h4>Lot 11 Gordon Street</h4>
                          <p className="location">
                            <i className="icon icon-mapPin"></i> Ashfield 5520
                          </p>

                          <div className="price">
                            <span className="price_data">$880,000</span>
                            <button className="btn-primary">
                              View Details <i className="icon icon-arr-r"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Card 2 */}
                  <div className="col-lg-4">
                    <a href="#" className="homelengo-categories">
                      <div className="listing-card">
                        <div className="image_card">
                          <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3630-shepparton-goulburn-valley-victoria.jpg" alt="" />
                        </div>
                        <div className="info_content">
                          <h4>Lot 53 Bland Street</h4>
                          <p className="location">
                            <i className="icon icon-mapPin"></i> Ashfield 5550
                          </p>

                          <div className="price">
                            <span className="price_data">$845,000</span>
                            <button className="btn-primary">
                              View Details <i className="icon icon-arr-r"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* Card 1 */}
                  <div className="col-lg-4">
                    <a href="#" className="homelengo-categories">
                      <div className="listing-card">
                        <div className="image_card">
                          <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3340-darley-moorabool-victoria.jpg" alt="" />
                        </div>
                        <div className="info_content">
                          <h4>Lot 40 Arthur Street</h4>
                          <p className="location">
                            <i className="icon icon-mapPin"></i> Ashfield 5520
                          </p>

                          <div className="price">
                            <span className="price_data">$799,000</span>
                            <button className="btn-primary">
                              View Details <i className="icon icon-arr-r"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Card 2 */}
                  <div className="col-lg-4">
                    <a href="#" className="homelengo-categories">
                      <div className="listing-card">
                        <div className="image_card">
                          <img src="https://www.landsales.com.au/wp-content/uploads/2025/11/3630-shepparton-goulburn-valley-victoria.jpg" alt="" />
                        </div>
                        <div className="info_content">
                          <h4>Lot 40 Elizabeth Street</h4>
                          <p className="location">
                            <i className="icon icon-mapPin"></i> Ashfield 5550
                          </p>
                          <div className="price">
                            <span className="price_data">$799,000</span>
                            <button className="btn-primary">
                              View Details <i className="icon icon-arr-r"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Button */}
                  <div className="col-lg-12">
                    <button className="all-listing-button">
                      View All Land <i className="icon icon-arr-r"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-3">
                <div className="side-sticky-img">
                  <img src="/images/sidebar-image-03.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}