function kelvinToCelcius(kelvin) {
    celcius = parseInt((kelvin - 273.15).toFixed(0), 10)
    return celcius
}

function transformKelvin(object, keys) {
    //Iterate on every element of the list
    object.data.list.forEach(element => {
        //Iterate on corresponding keys
        keys.forEach(key => {
            element.main[key] = kelvinToCelcius(element.main[key])
        });
    });

}

module.exports = {
    kelvinToCelcius,
    transformKelvin,
};