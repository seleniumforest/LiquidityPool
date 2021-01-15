import numeral from 'numeral';

export let format = (number) => (numeral(number).format('0,0.000'));
export let constantProduct = (state) => (state.assets[0].count * state.assets[1].count);