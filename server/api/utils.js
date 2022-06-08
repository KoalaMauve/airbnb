function kelvinToCelcius(kelvin) {
    celcius = parseInt((kelvin - 273.15).toFixed(0), 10)
    return celcius
}

function transformKelvin(object, keys) {
    object.data.list.forEach(element => {
        keys.forEach(key => {
            element.main[key] = kelvinToCelcius(element.main[key])
        });
    });

}

module.exports = {
    kelvinToCelcius,
    transformKelvin
};