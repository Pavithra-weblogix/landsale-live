"use client";

type EstateListingsProps = {
  data: any;
  state?: string;
  region?: string;
  suburb?: string;
};

export default function EstateListings({
  data,
  state,
  region,
  suburb,
}: EstateListingsProps) {
  return (
    <>
      {/* Top Section */}
      <section className="section-top-map find_map_location">
        <div className="wrap-map">
          <h1 className="dynamic-title">Estate Listings</h1>
        </div>
      </section>

      {/* Featured Estates */}
      {data?.count > 0 && (
        <section className="flat-section slider_new flat-categories-1 arrow_shadow bg_color_1">
          <div className="container">
            <div className="box-title style-1 wow fadeInUp">
              <h3 className="title">Estates</h3>

              <div className="row">
                {/* Card 1 */}
                {data?.data?.map((item: any) => (
                  <div className="col-lg-3" key={item.estate_id}>
                    <a
                      href={`/estate/${item.estate_slug}`}
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

                <div className="col-lg-12"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
