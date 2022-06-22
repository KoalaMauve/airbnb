import React, { useEffect, useState, TextField } from 'react';
function ModifListe(props) {

    function Plus(props) {
        const copy = [...props.ListeVilles]
        copy[props.index] += 1
        props.listev(copy)
        return (
            <>
                <div>
                    <button onClick={Plus}>+</button>
                </div>
            </>
        )
    }
}
export default ModifListe;