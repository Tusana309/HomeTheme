const SUN_FLOWER = '#f1c40f';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#ecf0f1';

const common = {
 PRIMARY: SUN_FLOWER,
 SUCCESS: EMERALD,
 ERROR: ALIZARIN,
};

const light = {
 ...common,
 BACKGROUND: CLOUDS,
 TEXT: MIDNIGHT_BLUE,
};

const dark = {
 ...common,
 BACKGROUND: MIDNIGHT_BLUE,
 TEXT: CLOUDS,
};

export const colors = {light, dark};