import React from 'react';
import {
  Container, ContainImage, ContainText,
} from './Styles';

export function CardVideo() {
  return (
    <Container>
      <ContainImage>
        <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="" />
      </ContainImage>
      <ContainText>
        <h2>titulo</h2>
        <p>testetes teste teste teste teste</p>
      </ContainText>
    </Container>
  );
}
