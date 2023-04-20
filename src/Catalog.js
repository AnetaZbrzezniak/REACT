import react from 'react';
import './Catalog.css';

class Catalog extends react.Component {
  render() {
    let title = "Katalog z dnia " + new Date().toLocaleDateString();
    let output = <><div className="Catalog"><h2>{title}</h2></div><div><b>UWAGA!</b></div></>
    return (
        output
    );
  }
}

export default Catalog;
//dzieki <> </> mozemy zwracac wiecej niz jeden element