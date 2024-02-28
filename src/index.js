// import myDefaultExport1 from '../dist/bundle.js';

import { heavyFunction } from './heavyFunction';

function logger() {
  console.log('sss--logger- rollup built');
}

function logger2() {
  console.log('sss--logger2- rollup built');
}
function logger3() {
  console.log('sss--logger3- rollup built');
}
function logger4() {
  console.log('sss--logger4- rollup built');
}

// export default logger;
// console.log('ss1');
const myDefaultExport = () => {
  // Your default export logic here
  console.log('sss111');
  // logger();
  // logger2();
  // logger3();
  // logger4();
  // myDefaultExport1();
  // const result = heavyFunction(1000);
  // console.log('Heavy Function Result:', result);
};
export default myDefaultExport;
// export default myDefaultExport();
