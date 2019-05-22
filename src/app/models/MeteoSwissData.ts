import { Weather } from './Weather';
import { Forecast } from './Forecast';

export interface MeteoSwissData {
    currentWeather: Weather;
    forecast: Forecast[];
}
