import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../assets/harold-eggar-oIVpygLFUJg-unsplash.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
        />
        <TripData
          image={Trip1}
          heading="Trip in Thailand"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
        />
        <TripData
          image={Trip1}
          heading="Trip in Japan"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups."
        />
      </div>
    </div>
  );
}
export default Trip;
