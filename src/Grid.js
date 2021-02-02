import React from 'react';

import '../src/styles/style.css';

import img01 from '../src/img/livro01.png';
import img02 from '../src/img/livro02.png';
import img03 from '../src/img/livro03.png';

function Grid() {
  return (
    <div className="container-fluid">
      <div className="customcontainer">
        <h1 className="text-center text-light">Título Container</h1>

        <div className="row col-lg-12 ml-auto mr-auto justify-content-between text-light subtitle">
          <a>Subtítulo esquerdo</a>
          <a>Subtítulo direito</a>
        </div>

        <div className="col-lg-12 text-center column">
          <div className="row text-light">
            <div className="col-sm">
              <div>Coluna 01</div>
              <img src={img01} />
              <div className="btnCustom">
                <a href="#" className="btn btn-link text-light">Descrição</a>
                <button type="button" className="btn btn-primary">Comprar</button>
              </div>
            </div>
            <div className="col-sm">
              <div>Coluna 02</div>
              <img src={img02} />
              <div className="btnCustom">
                <a href="#" className="btn btn-link text-light">Descrição</a>
                <button type="button" className="btn btn-primary">Comprar</button>
              </div>
            </div>
            <div className="col-sm">
              <div>Coluna 03</div>
              <img src={img03} />
              <div className="btnCustom">
                <a href="#" className="btn btn-link text-light">Descrição</a>
                <button type="button" className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Grid;