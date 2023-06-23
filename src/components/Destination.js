import Mountain1 from "../assets/priscilla-du-preez-KoF1cXdF9Ws-unsplash.jpg";
import Mountain2 from "../assets/harold-eggar-oIVpygLFUJg-unsplash.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        img1={Mountain1}
        img2={Mountain1}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Lorem ipsum"
        text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        img1={Mountain2}
        img2={Mountain2}
      />
    </div>
  );
};
export default Destination;
