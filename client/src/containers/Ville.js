import React, { useEffect, useState } from 'react';
function Ville(props) {
    const [listev, setlistev] = useState([]);

    function addville() {
        const copy = [...props.listev]
        copy.push(1)
        setlistev(copy)
    }
    return (
        <div>
            <center>
                <button onClick={addville}>Ajouter</button>
                {listev.map((item, index) => {
                    return (
                        <><Ville listev={listev}></Ville></>
                    )
                }
                )
                }
            </center>
        </div>
    );
}
export default Ville;
