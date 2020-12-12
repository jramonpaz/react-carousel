import City from "../Images/city.jpg";
import Salvador from "../Images/salvador.jpg";
import Ubc from "../Images/ubc.jpg";

export const images = [
  { title: "San Diego", subtitle: "This is San Diego", img: City },
  {
    title: "Salvador, Brazil",
    subtitle: "The Best City in the World",
    img: Salvador,
  },
  {
    title: "UBC (Vancouver)",
    subtitle: "The University of British Columbia",
    img: Ubc,
  },
];

/* 
  En ves de tener la imágenes fijas las vamos a carga desde la url:
  https://picsum.photos/v2/list
 */