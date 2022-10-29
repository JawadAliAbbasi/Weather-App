import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'Islamabad';
  weatherData? : any;

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = '';   
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .then(weather => {
      console.log(weather);
      this.weatherData = weather;
    });
  }

}
