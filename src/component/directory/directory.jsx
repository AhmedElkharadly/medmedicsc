import React from "react";
import "./directory-style.css";
import MenuItem from "../menuitem/menuitem-comp";
import DentalUnit from "../img/DentalUnit.jpg";
import autoclave from "../img/autoclave.jpg";
import xray from "../img/xray.png";
import bleaching from "../img/bleaching.jpg";
import compressor from "../img/compressor.jpg";
import handp from "../img/handp.png";

export class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "Dental Units",
          img: DentalUnit,
          id: 1,
          linkUrl: "dentalUnits",
        },
        {
          title: "Autoclaves",
          img: autoclave,
          id: 2,
          linkUrl: "Autoclaves",
        },
        {
          title: "Dental X-Rays",
          img: xray,
          id: 3,
          linkUrl: "X-Rays",
        },
        {
          title: "Bleaching Machine",
          size: "large",
          img: bleaching,
          id: 4,
          linkUrl: "Bleaching",
        },
        {
          title: "Compressors",
          size: "large",
          img: compressor,
          id: 5,
          linkUrl: "Compressors",
        },
        {
          title: "Hand Peices",
          size: "large",
          img: handp,
          id: 6,
          linkUrl: "HandPeices",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
