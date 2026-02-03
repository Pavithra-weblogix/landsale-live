"use client";

import { LAND_OPTIONS, LISTING_TYPES, PRICE_OPTIONS } from "@/config";
import { buildUrlFromFilters } from "@/lib/utils/filters/buildUrlFromFilters";
import { parseFiltersFromUrl } from "@/lib/utils/filters/parseFiltersFromUrl";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SearchFilterBar() {
  const [openFilters, setOpenFilters] = useState(false);

  const [search, setSearch] = useState("");

  const [priceMin, setPriceMin] = useState("");
  const [draftPriceMin, setDraftPriceMin] = useState("");

  const [priceMax, setPriceMax] = useState("");
  const [draftPriceMax, setDraftPriceMax] = useState("");

  const [landMin, setLandMin] = useState("");
  const [draftLandMin, setDraftLandMin] = useState("");

  const [landMax, setLandMax] = useState("");
  const [draftLandMax, setDraftLandMax] = useState("");

  const [listingType, setListingType] = useState("");
  const [draftListingType, setDraftListingType] = useState("");

  const modalRef = useRef(null);

  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filteredMinOptions = PRICE_OPTIONS.filter((v) => {
    if (v === "Any") return true;
    if (!draftPriceMax) return true;
    return Number(v) <= Number(draftPriceMax);
  });

  const filteredMaxOptions = PRICE_OPTIONS.filter((v) => {
    if (v === "Any") return true;
    if (!draftPriceMin) return true;
    return Number(v) >= Number(draftPriceMin);
  });

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpenFilters(false);
      }
    };
    if (openFilters) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openFilters]);
  useEffect(() => {
    if (openFilters) {
      setDraftPriceMin(priceMin);
      setDraftPriceMax(priceMax);
      setDraftLandMin(landMin);
      setDraftLandMax(landMax);
      setDraftListingType(listingType);
    }
  }, [openFilters]);

  useEffect(() => {
    if (openFilters) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup (important for route change / unmount)
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openFilters]);

  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpenFilters(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (!params?.slug) return;

    const filters = parseFiltersFromUrl(params.slug);

    setPriceMin(filters.min_price?.toString() || "");
    setPriceMax(filters.max_price?.toString() || "");
  }, [params]);

  useEffect(() => {
    const typeFromQuery = (searchParams.get("type") || "").toLowerCase();
    const isValidType = LISTING_TYPES.some(
      (item) => item.value === typeFromQuery,
    );

    setListingType(isValidType ? typeFromQuery : "");
  }, [searchParams]);

  useEffect(() => {
    if (!priceMin || !priceMax) return;
    if (Number(priceMin) > Number(priceMax)) {
      setPriceMin("");
      setPriceMax("");
    }
  }, [priceMin, priceMax]);

  const clearFilters = () => {
    setDraftPriceMin("");
    setDraftPriceMax("");
    setDraftLandMin("");
    setDraftLandMax("");
    setDraftListingType("");
  };

  const activeFilterCount = [
    priceMin || priceMax ? 1 : 0,
    listingType ? 1 : 0,
  ].reduce((totalCount, currentItem) => totalCount + currentItem, 0);

  const applyFilters = () => {
    const priceMinVal = draftPriceMin;
    const priceMaxVal = draftPriceMax;
    const landMinVal = draftLandMin;
    const landMaxVal = draftLandMax;
    const listingTypeVal = draftListingType;

    setPriceMin(priceMinVal);
    setPriceMax(priceMaxVal);
    setLandMin(landMinVal);
    setLandMax(landMaxVal);
    setListingType(listingTypeVal);

    if (
      priceMinVal &&
      priceMaxVal &&
      Number(priceMinVal) > Number(priceMaxVal)
    ) {
      // Min price cannot be greater than Max price
      return;
    }

    const filters = {
      min_price: priceMinVal ? Number(priceMinVal) : undefined,
      max_price: priceMaxVal ? Number(priceMaxVal) : undefined,
    };
    const segment = buildUrlFromFilters(filters);

    const cleanPath = pathname
      .split("/")
      .filter((part) => !/^(over-|under-|between-)/.test(part))
      .join("/");

    const query = new URLSearchParams(window.location.search);

    if (listingTypeVal) {
      query.set("type", listingTypeVal);
    } else {
      query.delete("type");
    }

    query.delete("clickid");

    const queryString = query.toString();

    const finalUrl =
      `${cleanPath}${segment === "/" ? "" : segment}` +
      (queryString ? `?${queryString}` : "");

    router.push(finalUrl);
    setOpenFilters(false);
  };

  return (
    <>
      <div className="srpBar">
        {/* Search input */}
        <div className="srpSearchWrap">
          <span className="icon">
            <i className="icon icon-search search-icon"></i>
          </span>
          <input
            className="srpSearchInput"
            placeholder="Search region, suburb or postcode"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Pills */}
        <div className="actions">
          <button
            className="pillBtn pillPrimary"
            onClick={() => setOpenFilters(true)}
          >
            {activeFilterCount > 0 && (
              <span className="pillCount">{activeFilterCount}</span>
            )}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 12.375V3.4375M5.5 12.375C5.86467 12.375 6.21441 12.5199 6.47227 12.7777C6.73013 13.0356 6.875 13.3853 6.875 13.75C6.875 14.1147 6.73013 14.4644 6.47227 14.7223C6.21441 14.9801 5.86467 15.125 5.5 15.125M5.5 12.375C5.13533 12.375 4.78559 12.5199 4.52773 12.7777C4.26987 13.0356 4.125 13.3853 4.125 13.75C4.125 14.1147 4.26987 14.4644 4.52773 14.7223C4.78559 14.9801 5.13533 15.125 5.5 15.125M5.5 15.125V18.5625M16.5 12.375V3.4375M16.5 12.375C16.8647 12.375 17.2144 12.5199 17.4723 12.7777C17.7301 13.0356 17.875 13.3853 17.875 13.75C17.875 14.1147 17.7301 14.4644 17.4723 14.7223C17.2144 14.9801 16.8647 15.125 16.5 15.125M16.5 12.375C16.1353 12.375 15.7856 12.5199 15.5277 12.7777C15.2699 13.0356 15.125 13.3853 15.125 13.75C15.125 14.1147 15.2699 14.4644 15.5277 14.7223C15.7856 14.9801 16.1353 15.125 16.5 15.125M16.5 15.125V18.5625M11 6.875V3.4375M11 6.875C11.3647 6.875 11.7144 7.01987 11.9723 7.27773C12.2301 7.53559 12.375 7.88533 12.375 8.25C12.375 8.61467 12.2301 8.96441 11.9723 9.22227C11.7144 9.48013 11.3647 9.625 11 9.625M11 6.875C10.6353 6.875 10.2856 7.01987 10.0277 7.27773C9.76987 7.53559 9.625 7.88533 9.625 8.25C9.625 8.61467 9.76987 8.96441 10.0277 9.22227C10.2856 9.48013 10.6353 9.625 11 9.625M11 9.625V18.5625"
                stroke="#161E2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Filters
          </button>

          {/* Search CTA */}
          <button className="searchBtn">Search</button>
          <button className="pillBtn mapBtn">
            <i className="icon icon-map-trifold"></i> Map
          </button>
        </div>
      </div>

      {/* Overlay */}
      {openFilters && <div className="overlay" />}

      {/* Filters Modal */}
      {openFilters && (
        <div className="filterModal" ref={modalRef}>
          <div className="modalHeader">
            <h3>Filters</h3>
            <button className="closeBtn" onClick={() => setOpenFilters(false)}>
              ✕
            </button>
          </div>

          <div className="modalBody">
            {/* Price */}
            <div className="filterGroup">
              <div className="filterTitle">Price</div>
              <div className="filterGrid">
                <div>
                  <label>Min</label>
                  <select
                    className="form-select"
                    value={draftPriceMin}
                    onChange={(e) => setDraftPriceMin(e.target.value)}
                  >
                    {filteredMinOptions.map((v) => (
                      <option key={v} value={v === "Any" ? "" : v}>
                        {v === "Any" ? "Any" : `$${Number(v).toLocaleString()}`}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Max</label>
                  <select
                    className="form-select"
                    value={draftPriceMax}
                    onChange={(e) => setDraftPriceMax(e.target.value)}
                  >
                    {filteredMaxOptions.map((v) => (
                      <option key={v} value={v === "Any" ? "" : v}>
                        {v === "Any" ? "Any" : `$${Number(v).toLocaleString()}`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <hr></hr>

            {/* Land size */}
            <div className="filterGroup">
              <div className="filterTitle">Land size (m²)</div>
              <div className="filterGrid">
                <div>
                  <label>Min</label>
                  <select
                    className="form-select"
                    value={draftLandMin}
                    onChange={(e) => setDraftLandMin(e.target.value)}
                  >
                    {LAND_OPTIONS.map((v) => (
                      <option key={v} value={v === "Any" ? "" : v}>
                        {v === "Any" ? "Any" : `${v} m²`}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Max</label>
                  <select
                    className="form-select"
                    value={draftLandMax}
                    onChange={(e) => setDraftLandMax(e.target.value)}
                  >
                    {LAND_OPTIONS.map((v) => (
                      <option key={v} value={v === "Any" ? "" : v}>
                        {v === "Any" ? "Any" : `${v} m²`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <hr></hr>

            {/* Land size */}
            <div className="filterGroup">
              <div className="filterTitle">Listing Type</div>
              <div className="filterGrid">
                <div>
                  <select
                    className="form-select"
                    value={draftListingType}
                    onChange={(e) => setDraftListingType(e.target.value)}
                  >
                    {LISTING_TYPES.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="modalFooter">
            <button className="clearBtn" onClick={clearFilters}>
              Clear
            </button>
            <button className="applyBtn" onClick={applyFilters}>
              Apply
            </button>
          </div>
        </div>
      )}
    </>
  );
}
