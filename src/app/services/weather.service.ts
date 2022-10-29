import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import OpenWeatherMap from 'openweathermap-ts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient ) { }

  async getWeatherData(cityName: string) {

    const openWeather = new OpenWeatherMap({
      apiKey: environment.apiKey
    });

    openWeather.setUnits('metric');

    try {
      const weather = await openWeather.getCurrentWeatherByCityName({
        cityName: cityName,
        // state: 'Texas',
        // countryCode: 'US'
      });
      console.log('Weather object is', weather);
      return weather;
    } catch (error) {
      console.error('Error is ', error);
      return error;
    }

    // return openWeather
    // .getCurrentWeatherByCityName({
    // cityName: 'Cedar Park'
    // })
    // .then((weather) => {
    //   console.log('Weather object is', weather);
    //   return weather;
    // });

    // this.http.get(environment.weatherApiBaseUrl, {
    //   params: new HttpParams()
    //   .set('lat', 33.44)
    //   .set('lon', -94.04)
    //   .set('units', 'metric')
    //   .set('appid', environment.apiKey)
    // })
  }
}
