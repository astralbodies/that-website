import styled from 'styled-components';
import { below } from '../../utilities';

const Container = styled.div`
  padding: 5rem;
  background-color: ${props =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors.backgroundColor};
  color: ${props =>
    props.fontColor
      ? props.theme.colors.fonts[props.fontColor]
      : props.theme.colors.fonts.dark};
  position: relative;
  display: block;
  // overflow: hidden;
  width: 100vw;

  ${below.xsmall`
    padding: 5rem 1rem;
  `}
`;

const DetailContainer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${below.med`
    flex-direction: column;
    text-align: center;
    max-width: 700px;
    align-items: center;

    img {
      margin: 1rem 0;
    }
  `};
`;

const ContainerInner = styled.div`
  margin: auto;
  max-width: 140rem;

  ${below.xsmall`
    max-width: 30rem;
  `}
`;

const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-top: 0;
  line-height: 1.2;
  font-family: 'Great Vibes', cursive;
  margin-bottom: ${props => (props.subtitle ? '0' : '3rem')};

  .normal {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 2.8rem;
  }

  .highlight {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${below.med`
    margin-bottom: 1rem;
  `};
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: 400;
  position: relative;
  top: -0.8rem;
`;

const Trees = styled.img`
  position: absolute;
  top: -5rem;
  z-index: 10;
  width: 11rem;
  left: 48vw;
  overflow: visible;
`;

const ContentSection = props => {
  return (
    <Container
      backgroundColor={props.backgroundColor}
      fontColor={props.fontColor}
    >
      {props.hasTrees && <Trees src="/svgs/THAT-Trees.svg" />}
      <ContainerInner>
        <DetailContainer>{props.children}</DetailContainer>
      </ContainerInner>
    </Container>
  );
};

export default ContentSection;
