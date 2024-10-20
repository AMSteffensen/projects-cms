import heroImg from "./assets/hero.svg";
import styled from "styled-components";

const HeroSection = styled.section`
  background: #f4f4f4;
  padding: 3rem 0;
`;

const HeroCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.div`
  max-width: 600px;
`;

const HeroHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const ImgContainer = styled.div`
  max-width: 400px;
`;

const HeroImg = styled.img`
  width: 100%;
  height: auto;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroCenter>
        <HeroTitle>
          <HeroHeading>Contentful CMS</HeroHeading>
          <HeroParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            inventore, iusto officia aperiam consequatur illo a voluptatibus
            doloremque iste, numquam culpa natus, animi labore vitae?
          </HeroParagraph>
        </HeroTitle>
        <ImgContainer>
          <HeroImg src={heroImg} alt="Hero Image" />
        </ImgContainer>
      </HeroCenter>
    </HeroSection>
  );
};

export default Hero;
