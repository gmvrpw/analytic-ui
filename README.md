# Аналитика (Front-end | [Back-end](https://github.com/IWillBurn/analytics_service))
## Участники
* [Боярников Александр Алексеевич](https://github.com/gmvrpw) (front-end)
* [Боярников Евгений Алексеевич](https://github.com/IWillBurn) (back-end)
## Как это запустить?
### NodeJS
Установите программную платформу nodejs для вашей системы с [официального сайта](https://nodejs.org/en/) 
### Склонируйте репозиторий
```shell
git clone https://github.com/gmvrpw/analytic-ui
cd analytic-ui
```
### Установите зависимости
```shell
npm i
```
### Укажите пути до back-end сервера
Измените .env.production и .env.development так, чтобы они соответсвовали расположению вашего back-end сервера
```text
REACT_APP_REST_BASE_URL=http://192.168.1.105:8080/api
REACT_APP_SCRIPTS_BASE_URL=http://192.168.1.105:8080/api/scripts
```
### Запустите приложение
Запуск приложения осуществляется одним из скриптов, предоставляемых [Create React App](https://github.com/facebook/create-react-app), например:
```shell
npm run start
```
### Все готово!
Перейдите на [localhost:3000/unit](localhost:3000/unit) и посмотрите, что умеет система!