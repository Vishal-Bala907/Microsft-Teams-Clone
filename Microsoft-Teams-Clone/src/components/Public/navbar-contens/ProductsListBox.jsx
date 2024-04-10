import React from "react";

export default function ProductsListBox() {
  return (
    <>
      <span className="products-span">
        <ul className="products-ul">
          <li className="hover-effect">
            <h3>Teams For</h3>
          </li>
          <li className="hover-effect">Small & medium businesses</li>
          <li className="hover-effect">Enterprice</li>
          <li className="hover-effect">Home</li>
          <li className="hover-effect">Education</li>
          <li className="hover-effect">See all</li>
        </ul>

        <ul className="products-ul">
          <li className="hover-effect">
            <h3>Team phone</h3>
          </li>
          <li className="hover-effect">Teams phone</li>
          <li className="hover-effect">VOIP</li>
          <li className="hover-effect">PBX</li>
          <li className="hover-effect">Video calling</li>
          <li className="hover-effect">Business phones</li>
          <li className="hover-effect">Contact center</li>
        </ul>
      </span>
    </>
  );
}
