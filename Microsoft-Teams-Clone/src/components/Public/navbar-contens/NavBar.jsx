import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";
import "./common.css";
import ProductsListBox from "./ProductsListBox";
import FeaturesList from "./FeaturesList";
import Industries from "./Industries";
import Resources from "./Resources";

// import "bootstrap/dist/css/bootstrap.min.css";
export default function NavBar() {
  let [products, setProducts] = useState(false);
  let [features, setFeatures] = useState(false);
  let [industries, setindestries] = useState(false);
  let [resources, setresources] = useState(false);

  function handleProductsOnClick(event) {
    setProducts(!products);
    setFeatures(false);
    document.getElementById("nav-feature").style.backgroundColor = "white";
    setindestries(false);
    document.getElementById("nav-industries").style.backgroundColor = "white";
    setresources(false);
    document.getElementById("nav-res").style.backgroundColor = "white";

    if (!products)
      document.getElementById("nav-prod").style.backgroundColor = "#f2f2f2";
    else document.getElementById("nav-prod").style.backgroundColor = "white";
  }

  function handleFeaturesOnClick(event) {
    setFeatures(!features);
    setProducts(false);
    document.getElementById("nav-prod").style.backgroundColor = "white";
    setindestries(false);
    document.getElementById("nav-industries").style.backgroundColor = "white";
    setresources(false);
    document.getElementById("nav-res").style.backgroundColor = "white";
    if (!features)
      document.getElementById("nav-feature").style.backgroundColor = "#f2f2f2";
    else document.getElementById("nav-feature").style.backgroundColor = "white";
  }

  function handleIndustriesClick(event) {
    setindestries(!industries);
    setProducts(false);
    document.getElementById("nav-prod").style.backgroundColor = "white";
    setFeatures(false);
    document.getElementById("nav-feature").style.backgroundColor = "white";
    setresources(false);
    document.getElementById("nav-res").style.backgroundColor = "white";
    if (!industries)
      document.getElementById("nav-industries").style.backgroundColor =
        "#f2f2f2";
    else
      document.getElementById("nav-industries").style.backgroundColor = "white";
  }

  function handleOnResourceClick(event) {
    setresources(!resources);
    setProducts(false);
    document.getElementById("nav-prod").style.backgroundColor = "white";
    setFeatures(false);
    document.getElementById("nav-feature").style.backgroundColor = "white";
    setindestries(false);
    document.getElementById("nav-industries").style.backgroundColor = "white";
    if (!resources)
      document.getElementById("nav-res").style.backgroundColor = "#f2f2f2";
    else document.getElementById("nav-res").style.backgroundColor = "white";
  }
  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.navbarLeftUl}>
          <li>
            <img
              className={styles.microsoftLogo}
              src="../../images/RE1Mu3b.png"
              alt=""
            />
          </li>
          <li>|</li>
          <li className={styles.makeBold}>Teams</li>
          <li
            id="nav-prod"
            className={styles.dropDwon}
            onClick={() => handleProductsOnClick(event)}
          >
            Products <RiArrowDropDownFill />
          </li>
          <li
            id="nav-feature"
            className={styles.dropDwon}
            onClick={(event) => {
              handleFeaturesOnClick(event);
            }}
          >
            Features <RiArrowDropDownFill />
          </li>
          <li>Pricing</li>
          <li
            id="nav-industries"
            onClick={(event) => {
              handleIndustriesClick(event);
            }}
            className={styles.dropDwon}
          >
            Industries <RiArrowDropDownFill />
          </li>
          <li
            id="nav-res"
            onClick={(event) => {
              handleOnResourceClick(event);
            }}
            className={styles.dropDwon}
          >
            Resource
            <RiArrowDropDownFill />
          </li>
          <li>Support</li>
        </ul>

        <ul className={styles.navbarRightUl}>
          <li>Download Teams</li>
          <li className={styles.navBarSignInButton}>Sign in</li>
        </ul>
        {products && <ProductsListBox />}
        {features && <FeaturesList />}
        {industries && <Industries />}
        {resources && <Resources />}
      </nav>
    </>
  );
}
