import React from "react";
import BackButton from '../BackButton';
import ChapterSearch from '../../components/Filters/ChapterSearch';
import ChapterText from '../../components/Filters/ChapterText';
import Character from "../../components/ChapterBook/Character";

import chapeleiroMaluco from '../../assets/Imagens/CapituloPage/ImageChapeleiroMaluco.svg';
import '../../styles/CapituloPage.css';

export default function Chapter() {
  return (
    <div className="chapterContainer">
      <BackButton />
      <Character img={chapeleiroMaluco} alt="Chapeleiro" />
      <ChapterSearch />
      <div className="chapterTexts">
        <ChapterText text={`Alice já estava cansada de ficar sentada no banco sem nada para fazer...`} />
        <ChapterText text={`Não havia nada de tão incrível nisso. Alice também não achou nada de mais...`} />
      </div>
    </div>
  );
}
