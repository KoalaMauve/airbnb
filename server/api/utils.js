function kelvin(kelvin) {
    celcius = parseInt((kelvin - 273.15).toFixed(0), 10)
    return celcius
}

module.exports = {
    kelvin
};