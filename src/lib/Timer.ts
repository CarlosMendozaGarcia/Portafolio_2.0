const minute = 1000*60;
const hour = minute*60;
const day = hour*24;

const options: Intl.DateTimeFormatOptions = {
    year:"numeric",
    month:"long",
    day:"numeric"
}
export default function Timer(dateStart:string, dateEnd?:string ){
    const initialDate = new Date(dateStart);
    const msInitialDate = initialDate.getTime();

    if(!dateEnd){
        const actualDate = Date.now()
        let diff = Math.floor((actualDate - msInitialDate) / day)
        return {initDay: initialDate.toLocaleDateString("es-CO", options), actualDay: new Date(actualDate).toLocaleDateString("es-CO", options), diff: diff}
    }else{
        const endDate= new Date(dateEnd);
        const msEndDate = endDate.getTime();
        let diff =(msEndDate - msInitialDate) / day
        return {initDay: initialDate.toLocaleDateString("es-CO", options), endDay: endDate.toLocaleDateString("es-CO", options), diff: diff}
    }
}