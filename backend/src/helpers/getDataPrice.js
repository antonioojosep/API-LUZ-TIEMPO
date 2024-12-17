import { API_URL, OPENWEATHERMAP_API_KEY } from "../config/config.js";


export const getDataPrices = async (url) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }
  
      const data = await response.json();
  
      const {
        included: [
          {
            attributes: { values },
          },
        ],
      } = data;
  
      return values;
    } catch (error) {
      console.error("Error al obtener datos", error);
    }
  };
  
  export const getDataPriceDays = async (url) => {
    try {
      const data = await getDataPrices(url);
  
      if (!data || data.length === 0) {
        throw new Error("No hay datos disponibles");
      }
  
      const mapDay = data.reduce((sum, { value, datetime }) => {
        const date = new Date(datetime);
        const day = date.getDate();
  
        sum.has(day) ? sum.set(day, sum.get(day) + value) : sum.set(day, value);
  
        return sum;
      }, new Map());

      return mapDay;

    } catch (error) {
      console.error("Error al calcular los precios diarios:", error);
    }
  };

  export const dataPriceDays = async () => {
    try {
        const data = await getDataPriceDays(API_URL);
        

        const arrDays = [];
        data.forEach((value, key) => {
          arrDays.push({
            day:key,
            price:value
          })
        })
        return arrDays;
      } catch (error) {
        console.error('error', error);
      }
}
  
 export const getPricesByFilters = async (hourStart, hourEnd, firstDay, lastDay) => {
   try {
     const url = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2024-01-${firstDay}T${hourStart}&end_date=2024-01-${lastDay}T${hourEnd}&time_trunc=hour`;
     const data = await getDataPrices(url);
  
     if (!data || data.length === 0) {
       throw new Error("No hay datos disponibles para esos filtros");
     }
     const arrDays = [];
        data.forEach((value, key) => {
          arrDays.push({
            day:key,
            price:value
          })
        })
        return arrDays;
   } catch (error) {
     console.error("Error al obtener datos por filtros:", error);
   }
 } 

 export const getWeather = async (city) => {
   try {
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
     const response = await fetch(url);
  
     if (!response.ok) {
       throw new Error("Error al obtener datos del clima", url);
     }
  
     const data = await response.json();
  
     return data;
   } catch (error) {
     console.error("Error al obtener datos del clima:", error);
   }
 }
  