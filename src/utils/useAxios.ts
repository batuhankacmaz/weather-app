import React from 'react';
import { RootObject } from '../data/data.type';
import axios from 'axios';
import { IWeather } from '../context/global.state';

export interface IFilteredData {
  cityName: string;
  weathers: IWeather[];
}

export async function getWeathersData(cityName: string) {
  try {
    const { data } = await axios.get<RootObject>(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&country=TR&days=7&key=${process.env.REACT_APP_API_KEY}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const filteredWeathers = data.data.map((item) => {
      return {
        weatherForecast: item.weather.description,
        minTemperature: item.min_temp,
        maxTemperature: item.max_temp,
        datetime: item.datetime,
      };
    });
    const filteredData: IFilteredData = {
      cityName: data.city_name,
      weathers: filteredWeathers,
    };
    return filteredData;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log('err message:', err.message);
      return err.message;
    } else {
      console.log('unexcepted error:', err);
      return 'An unexpected error occurred';
    }
  }
}
