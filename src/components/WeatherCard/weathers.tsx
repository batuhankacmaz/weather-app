import React from 'react';
import CloudyDay from '../../assets/images/static/cloudy-day-3.svg';
import Sky from '../../assets/images/static/day.svg';
import Rain from '../../assets/images/static/rainy-6.svg';
import Snow from '../../assets/images/static/snowy-6.svg';
import Default from '../../assets/images/static/day.svg';

const weatherTypes = {
  CLOUDS: CloudyDay,
  SKY: Sky,
  RAIN: Rain,
  SNOW: Snow,
  DEFAULT: Default,
};

export const weatherMap = new Map(Object.entries(weatherTypes));
