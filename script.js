'use strict';

const stadiumSelect = document.getElementById('stadium');
const weather = document.getElementById('weather');

const weatherData = {
  kyocera: {
    name: '京セラドーム大阪',
    weather: '晴れ',
    temperature: 28
  },
  zozo: {
    name: 'ZOZOマリンスタジアム',
    weather: '雨',
    temperature: 30
  },
  miyagi: {
    name: '楽天モバイル 最強パーク宮城',
    weather: '曇り',
    temperature: 25
  },
  paypay: {
    name: 'みずほPaypayドーム福岡',
    weather: '晴れ',
    temperature: 32
  },
  escon: {
    name: 'エスコンフィールド HOKKAIDO',
    weather: '雪',
    temperature: 5
  },
  belluna: {
    name: 'ベルーナドーム',
    weather: '雨',
    temperature: 35
  }
};

for (const key in weatherData) {
  const option = document.createElement('option');

  option.value = key;
  option.textContent = weatherData[key].name;

  stadiumSelect.appendChild(option);
}

stadiumSelect.addEventListener("change", () => {
  const selectedStadium = stadiumSelect.value;
  if (selectedStadium === '') {
    weather.style.display = 'none';
    return;
  }
  const data = weatherData[selectedStadium];

  weather.innerHTML = `
    <h2>${data.name}</h2>
    <p>天気：${data.weather}</p>
    <p>気温：${data.temperature}℃</p>
  `;

  weather.style.display = 'block';
});


 