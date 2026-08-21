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
        return {initDate: initialDate.toLocaleDateString("co-CO", options), actualDate: new Date(actualDate).toLocaleDateString("co-CO", options), diff: diff}
    }else{
        const endDate= new Date(dateEnd);
        const msEndDate = endDate.getTime();
        let diff =(msEndDate - msInitialDate) / day
        return {initDate: initialDate.toLocaleDateString("co-CO", options), endDate: endDate.toLocaleDateString("co-CO", options), diff: diff}
    }
}