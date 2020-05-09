import React, {useState} from 'react';

export const Package = (props) => {
    const [state, setState] = useState({selected: false})

    const cls = ['package'];
    if (state.selected) {
        cls.push('package-selected')
    }

    return (
        <div className={props.disabled ? "container disabled" : "container"}>
            <div className={state.selected ? cls.join(' ') : "package"}
                 onClick={props.disabled ? () => setState({selected: false}) : () => setState({selected: !state.selected})}>
                <div className="package-text">
                    <span className="package-text__description">Сказочное заморское явство</span>
                    <h2 className="package-text__heading">Нямушка</h2>
                    <h3 className="package-text__taste">{props.taste}</h3>
                    <span className="package-text__portion-amount"><span className="bold-text">{props.amount} </span>порций</span>
                    <span className="package-text__gift">{props.gift}</span>
                </div>
                <div className={state.selected ? "package__weight selected" : "package__weight"}>{props.weight}<span
                    className={props.disabled ? "package__weight-kg filtered" : "package__weight-kg"}>кг</span></div>
            </div>
            { state.selected ? <span>{props.description}</span>
               : props.disabled
                    ? <span className="container__description yellow-text">Печалька, {props.taste} закончился</span>
                    : <span className="container__description">Чего сидишь? Порадуй котэ, <strong
                        onClick={() => setState({selected: !state.selected})}>купи</strong></span>
            }

        </div>
    )
}