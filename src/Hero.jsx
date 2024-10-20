import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            inventore, iusto officia aperiam consequatur illo a voluptatibus
            doloremque iste, numquam culpa natus, animi labore vitae?
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
