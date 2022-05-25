import React from 'react';
function ModifListe(props) {
    function Plus() {
        const copy = [...props.listev]
        copy[props.index] += 1
        props.listev(copy)
    }
    function Supprimer() {
        const copy = [...props.listev]
        copy.splice(props.index, 1)
        props.listev(copy)
    }
    return (
        <>
            <div>
                {props.ville}
                <button onClick={Plus}>+</button>
                <button onClick={Supprimer}>-</button>
            </div>
        </>
    )
}
export default ModifListe;