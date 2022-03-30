// import gauche from './img/gauche.webp';
// import droite from './img/droite.svg';
// import haut from './img/haut.svg';
// import BocalDroite from './img/lebocaldroite.svg';
// import BocalGauche from './img/lebocalgauche.svg';

const Gauche = ({ width = 'auto', height = '25%', position = 'absolute' }) => {
  return (
    <img
      src="./img/gauche.webp"
      alt="logo"
      style={{
        width,
        height,
        position,
        zIndex: '1',
        bottom: '0',
        transform: 'translate(-105%,-35%)',
      }}
    />
  );
};
const Droite = ({ width = 'auto', height = '25%', position = 'absolute' }) => {
  return (
    <img
      src="./img/droite.svg"
      alt="logo"
      style={{
        width,
        height,
        position,
        zIndex: '-1',
        right: '0',
        transform: 'translateY(-5%) translateX(-65%)',
      }}
    />
  );
};
const Haut = ({ width = 'auto', height = '17em', position = 'absolute' }) => {
  return (
    <img
      src="./img/haut.svg"
      alt="logo"
      style={{
        width,
        height,
        position,
        zIndex: '-1',
        top: '0',
        transform: 'translateY(32%)',
      }}
    />
  );
};
const BDroite = ({
  width = 'auto',
  height = '13em',
  position = 'absolute',
}) => {
  return (
    <img
      src="./img/lebocaldroite.svg"
      alt="logo"
      style={{
        width,
        height,
        position,
        zIndex: '1',
        bottom: '0',
        transform: 'translateY(-33%) translateX(400%)',
      }}
    />
  );
};
const BGauche = ({
  width = 'auto',
  height = '11em',
  position = 'absolute',
}) => {
  return (
    <img
      src="./img/lebocalgauche.svg"
      alt="logo"
      style={{
        width,
        height,
        position,
        zIndex: '1',
        bottom: '0',
        transform: 'translateY(-40%) translateX(370%)',
      }}
    />
  );
};

export { Gauche, Droite, Haut, BDroite, BGauche };
