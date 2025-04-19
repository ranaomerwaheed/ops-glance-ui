
import { useState } from 'react';
import { Cloud, Search, CloudRainWind, CloudSun, Thermometer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
}

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) {
      toast.error('Please enter a city name');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeather(data);
      toast.success(`Weather data loaded for ${city}`);
    } catch (error) {
      toast.error('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/50 to-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">Weather Forecast</h1>
        
        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-white/80 border-primary/20"
          />
          <Button 
            onClick={fetchWeather}
            disabled={loading}
            className="gap-2"
          >
            {loading ? (
              <Cloud className="animate-spin" />
            ) : (
              <>
                <Search className="w-4 h-4" />
                Search
              </>
            )}
          </Button>
        </div>

        {weather && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="text-primary" />
                  Temperature
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">
                  {Math.round(weather.main.temp)}°C
                </p>
                <p className="text-sm text-muted-foreground">
                  Feels like: {Math.round(weather.main.feels_like)}°C
                </p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CloudSun className="text-primary" />
                  Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground capitalize">
                  {weather.weather[0].main}
                </p>
                <p className="text-sm text-muted-foreground capitalize">
                  {weather.weather[0].description}
                </p>
              </CardContent>
            </Card>

            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CloudRainWind className="text-primary" />
                  Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Humidity: {weather.main.humidity}%
                </p>
                <p className="text-lg">
                  Wind: {weather.wind.speed} m/s
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
