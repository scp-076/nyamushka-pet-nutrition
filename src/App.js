import React from 'react';
import './package.scss';
import {Package} from "./Package";

function App() {

    return (
        <div className="App">
            <h2 className="title">Ты сегодня покормил кота?</h2>
            <div className="wrapper">

                <Package taste={'с фуа-гра'}
                         amount={10}
                         gift={<span>мышь в подарок</span>}
                         weight={<span>0,5</span>}
                         description={<span className="container__description">Печень утки разварная с артишоками.</span>}
                         disabled={false}
                />
                <Package taste={'с рыбой'}
                         amount={40}
                         gift={<><span className="bold-text">2 </span><span>мыши в подарок</span></>}
                         weight={<span>2</span>}
                         description={<span className="container__description">Головы щучьи с чесноком, да свежайшая сёмгушка.</span>}
                         disabled={false}
                />
                <Package taste={'с курой'}
                         amount={100}
                         gift={<><span className="bold-text">5 </span><span>мышей в подарок</span></>}
                         weight={<span className="filtered">5</span>}
                         description={<span className="container__description">Филе из цеплят с трюфелями в бульоне.</span>}
                         disabled={true}
                />

            </div>
        </div>
    );
}

export default App;
