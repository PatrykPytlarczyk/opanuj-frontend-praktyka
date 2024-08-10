<script lang="ts">
  import { fetchWeather } from '../lib/LocationFetcher';
  import { LocationWeather, USLocationWeather } from '../models/LocationWeather';
  import WeatherPreview from './WeatherPreview.svelte';
  import { convertUSWeatherData } from '../lib/USWeatherDataConverter.ts';

  let weather: LocationWeather;
  let error: boolean = false;

  $: canShowWeather = weather?.weatherDetails?.length > 0 && !error;

  async function onLocationChange(event: KeyboardEvent) {
    const locationQuery = (event.target as HTMLInputElement).value;
    try {
      const result = await fetchWeather(locationQuery);
      if (result?.weatherDetails) {
        weather = isCountryUS(result) ? convertUSWeatherData(result) : result;
        error = false;
      }
    } catch {
      console.error(`Failed to fetch weather for ${locationQuery}`);
      error = true;
    }
  }

  function isCountryUS(weather: LocationWeather | USLocationWeather): weather is USLocationWeather {
    return weather.country === 'US';
  }

</script>

<main>
  <div class="bg-white rounded-xl p-4 shadow-lg">
    <div class="text-center">
      <h1 class="text-2xl py-4 text-center">🌞 Hello, Weather! 🌦️</h1>
      <p>
        <span class="text-xs bg-blue-400 p-2 rounded-md text-white"
        >Weather in EU!</span
        >
        <span class="text-xs bg-red-400 p-2 rounded-md text-white"
        >NEW: Weather in US!</span
        >
      </p>
    </div>
    <input
      type="text"
      class="mt-4 p-4 border border-gray-200 w-full rounded-xl"
      placeholder="Location"
      on:keyup={onLocationChange}
    />
  </div>
  <div>
    {#if canShowWeather}
      <WeatherPreview {weather} />
    {:else if (error)}
      <p class="text-xl font-bold mt-4">Oops... No weather data available!</p>
    {/if}
  </div>
</main>
