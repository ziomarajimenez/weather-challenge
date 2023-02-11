// Receives a timestamp in a 10 digit-format and returns the date in DD de MM de YYYY format.
export const convertToDate = (timestamp) => {
    let dateInThirteenDigits = new Date(timestamp*1000)
    let date = new Date(dateInThirteenDigits);
    let day = date.getDate().toString().padStart(2, "0");
    let monthNumber = date.getMonth() + 1;
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let month =   monthNames[monthNumber - 1]
    let year = date.getFullYear();

    return `${day} de ${month} de ${year}`;
}

// Receives a timestamp in a 10 digit-format and return a day of the week.
export const convertToDayOfWeek = (timestamp) => {
    let date = new Date(parseInt(timestamp, 10) * 1000);
    let daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return daysOfWeek[date.getUTCDay()];
}

   // const debounce = (fn, delay) => {
    //     let timerId;
    //     return function() {
    //         clearTimeout(timerId);
    //         timerId = setTimeout(() => {
    //             fn.apply(this, arguments);
    //         }, delay);
    //     };
    // }

export const  debounce = (fn, delay) => {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, ...args);
        }, delay);
    };
}