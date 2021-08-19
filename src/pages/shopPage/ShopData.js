import DentalUnit from "../img/DentalUnit.jpg";
import autoclave from "../img/autoclave.jpg";
import xray from "../img/xray.png";
import bleaching from "../img/bleaching.jpg";
import compressor from "../img/compressor.jpg";
import handp from "../img/handp.png";


export const SHOPDATA= [
    {
        id: 1,
        name: 'Units',
        routename: 'units',
        items:[
            {
                name: "Dental Units",
                imgUrl: DentalUnit,
                id: 1,
                price: "0$",
            },
            {
                name: "Autoclaves",
                imgUrl: autoclave,
                id: 2,
                price: "0$",
            },
            {
                name: "Dental X-Rays",
                imgUrl: xray,
                id: 3,
                price: "0$",
            },
            {
                name: "Bleaching Machine",
                size: "large",
                imgUrl: bleaching,
                id: 4,
                price: "0$",
            },
            {
                name: "Compressors",
                size: "large",
                imgUrl: compressor,
                id: 5,
                price: "0$",
            },
            {
                name: "Hand Peices",
                size: "large",
                imgUrl: handp,
                id: 6,
                price: "0$",
            },
        ]
    }

]
      