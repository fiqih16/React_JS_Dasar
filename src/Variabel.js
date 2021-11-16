import React from 'react';

// const harga = 3000;

// var harga = 20000;
// if (true) {
//   var harga = 5000;
// }

let harga = 20000;
if (true) {
  let harga = 5000;
}

export const Variabel = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  );
};

export default Variabel;
