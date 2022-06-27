module.exports = {
    getDate: () => {
        const today = new Date();
        return today.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
    },
    getDay:() => {
        const today = new Date();
        return today.toLocaleString('en-US', { weekday: 'long' });
    },
}
