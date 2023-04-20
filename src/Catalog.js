import react from 'react';
import './Catalog.css';
import ProductList from './ProductList';

class Catalog extends react.Component {
  render() {
    let title = "Katalog z dnia " + new Date().toLocaleDateString();
    return (
        <>
        <div className="Catalog">
            <h2>{title}</h2>
                        {/* to jest komentarz */}
            {//to jest komentarz w JSX
            }
            </div>
        <div>
            <ProductList/>
        </div>
        </>
    );
  }
}

export default Catalog;
//dzieki <> </> mozemy zwracac wiecej niz jeden element