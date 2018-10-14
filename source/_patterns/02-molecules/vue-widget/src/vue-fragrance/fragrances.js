export const fallbackFrag = {
  id: 99999,
  names: {
    short: 'Fallback',
    long: 'Fallback Cologne',
  },
  cat: 'citrus',
  pizazz: 0,
  img: {
    combiner: 'limebasilmandarin.jpg',
    spectrum: 'spectrum-lime_basil.jpg',
  },
  price: {
    30: 68.0,
    100: 136.0,
  },
  companion: {
    warmer: undefined,
    fresher: undefined,
  },
  isStarter: false,
  isHighlighted: false,
  isChosen: false,
};

export default [
  {
    id: 10101,
    names: {
      short: 'Lemon Basil & Mandarin',
      long: 'Lemon Basil & Mandarin Cologne',
    },
    cat: 'citrus',
    pizazz: 0,
    img: {
      combiner: 'limebasilmandarin.jpg',
      spectrum: 'spectrum-lime_basil.jpg',
    },
    price: {
      30: 68.0,
      100: 136.0,
    },
    companion: {
      warmer: 9900,
      fresher: 10066,
    },
    isStarter: true,
  },
  {
    id: 9900,
    names: {
      short: 'Pomegranate Noir',
      long: 'Pomegranate Noir Cologne',
    },
    cat: 'fruity',
    pizazz: 0,
    img: {
      combiner: 'pomegranatenoir.jpg',
      spectrum: 'spectrum-pomegranate_noir.jpg',
    },
    price: {
      30: 68.0,
      100: 136.0,
    },
    companion: {
      warmer: undefined,
      fresher: 12553,
    },
    isStarter: true,
  },
  {
    id: 10041,
    names: {
      short: 'Grapefruit',
      long: 'Grapefruit Cologne',
    },
    cat: 'citrus',
    pizazz: 1,
    img: {
      combiner: 'grapefruit.jpg',
      spectrum: 'spectrum-grapefruit.jpg',
    },
    price: {
      30: 68.0,
      100: 136.0,
    },
    companion: {
      warmer: 27028,
      fresher: 10101,
    },
    isStarter: true,
  },
  {
    id: 10066,
    names: {
      short: 'Red Roses',
      long: 'Red Roses Cologne',
    },
    cat: 'light floral',
    pizazz: 1,
    img: {
      combiner: 'redroses.jpg',
      spectrum: 'spectrum-red_roses.jpg',
    },
    price: {
      30: 68.0,
      100: 136.0,
    },
    companion: {
      warmer: undefined,
      fresher: 15968,
    },
    isStarter: true,
  },
  {
    id: 12553,
    names: {
      short: 'English Pear & Fresia',
      long: 'English Pear & Fresia Cologne',
    },
    cat: 'fruity',
    pizazz: 1,
    img: {
      combiner: 'englishpear.jpg',
      spectrum: 'spectrum-english_pear_freesia.jpg',
    },
    price: {
      30: 68.0,
      100: 136.0,
    },
    companion: {
      warmer: 27028,
      fresher: 18848,
    },
    isStarter: true,
  },
  {
    id: 27028,
    names: {
      short: 'Peony & Blush Suede',
      long: 'Peony & Blush Suede Cologne',
    },
    cat: 'floral',
    pizazz: 1,
    img: {
      combiner: 'peonyblushsuede.jpg',
      spectrum: 'spectrum-peony_blush_suede.jpg',
    },
    price: {
      30: 68.0,
      100: 136.0,
    },
    companion: {
      warmer: 9900,
      fresher: 10041,
    },
    isStarter: true,
  },
  {
    id: 15968,
    names: {
      short: 'Earl Grey & Cucumber',
      long: 'Earl Grey & Cucumber Cologne',
    },
    cat: 'citrus',
    pizazz: 2,
    img: {
      combiner: 'earlgreycucumber.jpg',
      spectrum: 'spectrum-earl_grey_cucumber.jpg',
    },
    price: {
      30: 68.0,
      100: 136.0,
    },
    companion: {
      warmer: undefined,
      fresher: 10041,
    },
    isStarter: true,
  },
];
