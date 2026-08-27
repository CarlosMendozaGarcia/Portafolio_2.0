export default function CalculateMeasure(size: number) {

    let divisores: number[] = [];
    const limite = Math.floor(Math.sqrt(size));
    for (let i = 1; i<=limite ; i++){
        if(size % i === 0){
            divisores.push(i)
        }
    }

    const height = divisores[divisores.length - 1];
    let width = size / height;
    return {height, width}
}