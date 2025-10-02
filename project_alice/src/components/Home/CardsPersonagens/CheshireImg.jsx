import CheshireCat from'../../../assets/Imagens/Home/ImageCheshireCat.svg';

const CheshireImg = () => {
  return (
    <div className="cheshireCatWrapper">
      <div className="cheshireBg"></div>
      <img src={CheshireCat} alt="Cheshire Cat" className="cheshireCatImg" />
    </div>
  );
};

export default CheshireImg;
