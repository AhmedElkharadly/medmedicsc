import React from "react";
import "./directory-style.css";
import { MenuItem } from "../menuitem/menuitem-comp";
import DentalUnit from "../img/DentalUnit.jpg";
import autoclave from "../img/autoclave.jpg";
import xray from "../img/xray.jpg";
import bleaching from "../img/bleaching.jpg";
import compressor from "../img/compressor.jpg";

export class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "Dental Units",
          img: DentalUnit,
          id: 1,
        },
        {
          title: "Autoclaves",
          img: autoclave,
          id: 2,
        },
        {
          title: "Dental X-Rays",
          img: xray,
          id: 3,
        },
        {
          title: "Bleaching Machine",
          size: "large",
          img: bleaching,
          id: 4,
        },
        {
          title: "Compressors",
          size: "large",
          img: compressor,
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, img, id, size }) => (
          <MenuItem key={id} img={img} title={title} size={size} />
        ))}
      </div>
    );
  }
}
