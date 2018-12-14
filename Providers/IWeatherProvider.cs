using System.Collections.Generic;
using asp.Models;

namespace asp.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
