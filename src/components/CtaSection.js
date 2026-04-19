"use client";

import { useState } from "react";

const buyInitialState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  property: "",
};

const listInitialState = {
  name: "",
  email: "",
  phone: "",
  yourLocation: "",
  propertyName: "",
  propertyLocation: "",
  propertyPrice: "",
};

export default function CtaSection({ initialForm = "buy" }) {
  const [buyForm, setBuyForm] = useState(buyInitialState);
  const [listForm, setListForm] = useState(listInitialState);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState("");
  const [activeForm, setActiveForm] = useState(initialForm === "list" ? "list" : "buy");

  const handleBuyChange = (event) => {
    const { name, value } = event.target;
    setBuyForm((current) => ({ ...current, [name]: value }));
  };

  const handleListChange = (event) => {
    const { name, value } = event.target;
    setListForm((current) => ({ ...current, [name]: value }));
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (selectedFiles.length > 5) {
      setUploadedFiles(selectedFiles.slice(0, 5));
      setUploadMessage("Only 5 images are allowed. First 5 images have been selected.");
      return;
    }

    setUploadedFiles(selectedFiles);
    setUploadMessage(
      selectedFiles.length > 0
        ? `${selectedFiles.length} image${selectedFiles.length > 1 ? "s" : ""} selected.`
        : "",
    );
  };

  const handleBuySubmit = (event) => {
    event.preventDefault();
    setUploadMessage("Buy property form is ready on frontend.");
    setBuyForm(buyInitialState);
  };

  const handleListSubmit = (event) => {
    event.preventDefault();
    setUploadMessage("List your property form is ready on frontend.");
    setListForm(listInitialState);
    setUploadedFiles([]);
  };

  return (
    <section id="faq" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[var(--accent)] px-6 py-12 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-2xl">
            <p className="section-kicker">Let&apos;s Talk</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Buy Property Or List Your Property With One Simple Step
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
              AreaProps helps you move from browsing to closing with clarity.
              Choose the form that matches your goal and fill in your details to
              get started from the frontend experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveForm("buy")}
                className={
                  activeForm === "buy"
                    ? "filter-pill filter-pill-active"
                    : "filter-pill"
                }
              >
                Buy Property
              </button>
              <button
                type="button"
                onClick={() => setActiveForm("list")}
                className={
                  activeForm === "list"
                    ? "filter-pill filter-pill-active"
                    : "filter-pill"
                }
              >
                List Your Property
              </button>
            </div>
          </div>

          <div className="cta-form-shell rounded-[2rem] bg-white p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:p-7">
            {activeForm === "buy" ? (
              <form className="space-y-4" onSubmit={handleBuySubmit}>
                <div>
                  <p className="section-kicker">Buy Property</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    Tell us what you want to buy
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={buyForm.name}
                      onChange={handleBuyChange}
                      placeholder="Enter your full name"
                      className="cta-input"
                      required
                    />
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={buyForm.email}
                      onChange={handleBuyChange}
                      placeholder="Enter your email"
                      className="cta-input"
                      required
                    />
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={buyForm.phone}
                      onChange={handleBuyChange}
                      placeholder="Enter your phone number"
                      className="cta-input"
                      required
                    />
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Location</span>
                    <input
                      type="text"
                      name="location"
                      value={buyForm.location}
                      onChange={handleBuyChange}
                      placeholder="Preferred location"
                      className="cta-input"
                      required
                    />
                  </label>
                </div>

                <label className="cta-field-wrap">
                  <span className="cta-field-label">Which Property You Want To Buy</span>
                  <textarea
                    name="property"
                    value={buyForm.property}
                    onChange={handleBuyChange}
                    placeholder="Describe the property you want to buy"
                    className="cta-textarea"
                    rows={4}
                    required
                  />
                </label>

                <button type="submit" className="primary-button">
                  Submit Buy Request
                </button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleListSubmit}>
                <div>
                  <p className="section-kicker">List Your Property</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    Share your property details
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={listForm.name}
                      onChange={handleListChange}
                      placeholder="Enter your full name"
                      className="cta-input"
                      required
                    />
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={listForm.email}
                      onChange={handleListChange}
                      placeholder="Enter your email"
                      className="cta-input"
                      required
                    />
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={listForm.phone}
                      onChange={handleListChange}
                      placeholder="Enter your phone number"
                      className="cta-input"
                      required
                    />
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Your Location</span>
                    <input
                      type="text"
                      name="yourLocation"
                      value={listForm.yourLocation}
                      onChange={handleListChange}
                      placeholder="Your city or area"
                      className="cta-input"
                      required
                    />
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Property Name</span>
                    <input
                      type="text"
                      name="propertyName"
                      value={listForm.propertyName}
                      onChange={handleListChange}
                      placeholder="Enter property name"
                      className="cta-input"
                      required
                    />
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Property Location</span>
                    <input
                      type="text"
                      name="propertyLocation"
                      value={listForm.propertyLocation}
                      onChange={handleListChange}
                      placeholder="Enter property location"
                      className="cta-input"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1fr_0.6fr]">
                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Add Your Property Images</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="cta-file-input"
                    />
                    <span className="cta-helper-text">
                      Upload up to 5 images for your property.
                    </span>
                    {uploadedFiles.length > 0 && (
                      <div className="cta-file-list">
                        {uploadedFiles.map((file) => (
                          <span key={`${file.name}-${file.lastModified}`} className="detail-pill">
                            {file.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </label>

                  <label className="cta-field-wrap">
                    <span className="cta-field-label">Property Price</span>
                    <input
                      type="number"
                      name="propertyPrice"
                      value={listForm.propertyPrice}
                      onChange={handleListChange}
                      placeholder="Enter price"
                      className="cta-input"
                      min="0"
                      required
                    />
                  </label>
                </div>

                <button type="submit" className="primary-button">
                  Submit Property
                </button>
              </form>
            )}

            {uploadMessage && (
              <p className="mt-4 text-sm font-medium text-[var(--muted)]">
                {uploadMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
