import { API_URL } from "../config/config.js";


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
      
      const arrDays = [];
        mapDay.forEach((value, key) => {
          arrDays.push({
            day:key,
            price:value
          })
        })
        return arrDays;

    } catch (error) {
      console.error("Error al calcular los precios diarios:", error);
    }
  };

  export const dataPriceDays = getDataPriceDays(API_URL);
  
  
  