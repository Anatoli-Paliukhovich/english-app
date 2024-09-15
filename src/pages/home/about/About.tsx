import Slider from "../../../components/UI/slider/Slider";

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h2 className="_title">
          Pride of <span className="_title-decor">our</span> school
        </h2>
        <Slider></Slider>
        <p className="_text">
          Our students are always ready to help each other, creating a friendly
          and supportive atmosphere in the classroom.
        </p>
      </div>
    </div>
  );
}
