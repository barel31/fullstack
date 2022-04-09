exports.getDate = getDate = function () {
    const today = new Date();
    return today.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
}

exports.getDay = getDay = function () {
    const today = new Date();
    return today.toLocaleString('en-US', { weekday: 'long' });;
}
