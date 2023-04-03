'use strict';
//step 5 => Used local browser storage to save data gotten from the historical data

const saxonyMeanTemp = [-0.8, 0.0, -1.2, 0.1, 0.2, 1.2, 3.3];
const hesseMeanTemp = [0.0, 0.7, -0.4, 0.9, 1.0, 1.9, 3.5];
const bavariaMeanTemp = [-1.5, -0.7, -0.5, 0.9, 1.0, 1.8, 3.6];

localStorage.setItem('saxony', JSON.stringify(saxonyMeanTemp));
localStorage.setItem('hesse', JSON.stringify(hesseMeanTemp));
localStorage.setItem('bavaria', JSON.stringify(bavariaMeanTemp));
