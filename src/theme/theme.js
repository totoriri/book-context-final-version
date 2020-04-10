// import { injectGlobal } from 'styled-components';

export const themes = {
  happy: {
    title:"happy",
    primary: 'rgb(75,156,111)',
    secondary: 'rgb(210, 229, 147)',
    modal:'rgba(210,229,147,0.6)',
    fontHeader: 'Old Standard TT, sans, sans-serif',
    fontBody: 'Nunito, sans-serif'
  },
  excited: {
    title:"excited,funny,",
    primary: '#fcad03',
    secondary: 'rgba(255, 204, 0, 0.75)',
    modal:'rgba(255,204,0,0.4)',
    fontHeader: 'Enriqueta, sans-serif',
    fontBody: 'Exo 2, sans, sans-serif'
  },
  sad: {
    title:"Sadness,sad,dissapointed",
    primary: 'rgb(0,119,179)',
    secondary: 'rgb(124,185,232)',
    modal:'rgba(124,185,232,0.5)',
    fontHeader: 'Kaushan Script, sans, sans-serif',
    fontBody: 'Headland One, sans-serif'
  },
  angry:{
    title:"angry,mad",
    primary: ' rgb(211, 91, 111)',
    secondary: 'rgba(211, 91, 111, 0.376)',
    modal:'rgba(211,91,111,0.2)',
    fontHeader: 'Kaushan Script, sans, sans-serif',
    fontBody: 'Headland One, sans-serif'
  }
};

// injectGlobal`
//   @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT:400,700|Enriqueta:400,700|Exo+2:400,700|Kaushan+Script:400,700|Headland+One:400,700|Nunito:400,700');

//   body {
//     padding: 0;
//     margin: 0;
//   }
// `;
