const API_URL = "https://api.spacexdata.com/v3";


export function getAllLaunches(){
    try {
        const response = await fetch(`$ {API_URL}/launches`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
    }

export async function getLauchByFlightNumber(fligthNumber){
try {
    const response = await fetch (`${API_URL}/lauches/${fligthNumber}`);
    const data = await response.json();
    return data;
}      catch (error) {
    console.error(error);
}
}
