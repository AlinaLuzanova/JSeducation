//... - распаковывает массив, объект. Сохраняется не поссылке, не изменяет исходный объект
const cities = ['sochi','moscow','spb'];
const bestCities = ['ekb', ...cities, 'kazan'];
console.log(bestCities)