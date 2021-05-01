import React, { useState, useEffect } from 'react';

function Input(props) {
    const type = props.type;
    const [style, setStyle] = useState(type);

    useEffect(() => {
        if(type === "text" || type === "number") {
            setStyle("Styles.text");
        } else if(type === "range") {
            setStyle("Styles.range");
        }
    }, [type]);

    return (
        <label>
            { props.label }
            <input type={ props.type } className={ style } onChange={ event => props.value(event.target.value) } />
        </label>
    );
}

export default Input;