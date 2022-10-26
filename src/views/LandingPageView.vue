<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__contianer _container">
        <div class="header__title">Гордое название конторы</div>
        <div class="header__subtitle">
          <span>Помощник в техническом обслужвании Вашего автомобиля</span>
        </div>
        <div class="header__icon-row">
          <div class="header__icon-item icon-item">
            <div class="icon-item__image">
              <img :src="require('@/assets/img/header__icon1.png')" alt="" />
              <div class="icon-item__text">
                Расскажем и напомним, когда пришло время обслужить агрегаты
                Вашего автомобиля
              </div>
            </div>
          </div>
          <div class="header__icon-item icon-item">
            <div class="icon-item__image">
              <img :src="require('@/assets/img/header__icon2.png')" alt="" />
              <div class="icon-item__text">
                Поможем подобрать оптимальную станцию технического обслуживания
              </div>
            </div>
          </div>
          <div class="header__icon-item icon-item">
            <div class="icon-item__image">
              <img :src="require('@/assets/img/header__icon3.png')" alt="" />
              <div class="icon-item__text">
                Сохраним историю обслуживания - полезно для сервиса и поможет
                при продаже
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="how">
      <div class="how__container _container">
        <div class="how__title red">Как происходит работа с сервисом?</div>
        <div class="how__row">
          <div class="how__item-box how__one">
            Вы проходите несложную регистрацию - она нужна для сохранения данных
            об автомобиле и истории технического обслуживания, а так же для
            уведомлений Вас о предстоящем ТО.
          </div>
          <div class="how__item-arrow">
            <img :src="require('@/assets/img/how_arrow.svg')" alt="" />
          </div>

          <div class="how__item-box how__two">
            Заполняете данные об автомобиле или предоставляете VIN-номер (указан
            в СТС и ПТС) и мы заполним профиль автомобиля за Вас!
          </div>
          <div class="how__item-arrow">
            <img :src="require('@/assets/img/how_arrow.svg')" alt="" />
          </div>

          <div class="how__item-box how__three">
            Записываете текущий пробег автомобиля, по желанию настраиваете
            уведомления о предстоящих ТО.
          </div>
          <div class="how__item-arrow">
            <img :src="require('@/assets/img/how_arrow.svg')" alt="" />
          </div>

          <div class="how__item-box how__four">
            Готово! Теперь не нужно думать, когда пора ехать в сервис,
            достаточно заглянуть на наш сайт ;)
          </div>
        </div>

        <div class="how__payless-row">
          <div class="how__icon-free">
            <img :src="require('@/assets/img/icon-free.svg')" alt="" />
          </div>
          <div class="how__text-free">
            Все наши услуги - <span class="red">бесплатные</span>. Взамен мы
            просим заполнять журнал технического обслуживания и сообщать о
            поломках, чтобы помочь нам составить самые точные базы и карты
            обслуживания для автомобилистов!
          </div>
        </div>
      </div>
    </div>

    <div class="search">
      <div class="search__container _container">
        <div class="search__title red">
          Просмотр регламентных работ без регистрации
        </div>
        <div class="search__form-row">
          <div class="search__form-text">
            Конечно, это возможно. Просто воспользуйтесь формой. Укажите
            интересующий Вас автомобиль, дополнительные параметры и жмите на
            кнопку!
          </div>
          <div class="search__form-form">
            <input type="text" placeholder="Производитель" />
            <input type="text" placeholder="Модель" />
            <a href="" class="button search__form-button"
              >Поиск регламента по обслуживанию</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LandingPageView",
};
</script>

<style>
.header {
  background-size: cover;
  padding: 210px 0 70px;
}

.header__contianer {
}

.header__title {
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-size: 64px;
  font-weight: bold;
}

.header__subtitle {
  text-align: center;
  color: #f40d0d;
  font-size: 32px;
  margin: 25px 0;
}

.header__subtitle span {
  background: white;
  padding: 11px;
  border-radius: 7px;
}

.header__icon-row {
  display: flex;
  justify-content: space-around;
  margin: 90px 0;
}

.header__icon-item {
  max-width: 200px;
}

.icon-item {
  text-align: center;
}

.icon-item__image {
}

.icon-item__text {
  color: white;
  font-size: 16px;
  line-height: 19px;
  margin: 10px 0;
  letter-spacing: 0.03em;
}

/*----------------------------------------------------------*/

.how {
}

.how__container {
}

.how__title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
}

.how__title:before {
  content: "";
  display: block;
  width: 168px;
  background-color: rgba(0, 0, 0, 0.24);
  height: 1px;
  margin: 35px auto;
}

.how__row {
  display: flex;
  margin-top: 60px;
}

.how__item-box {
  border: 1px solid rgba(71, 71, 71, 0.42);
  border-radius: 5px;
  padding: 15px 10px 15px 33px;
  color: #474747;
  line-height: 19px;
  position: relative;
  max-width: 307px;
}

.how__one:before,
.how__two:before,
.how__three:before,
.how__four:before {
  position: absolute;
  top: 15px;
  left: 15px;
}

.how__one:before {
  content: "1.";
}

.how__two:before {
  content: "2.";
}

.how__three:before {
  content: "3.";
}

.how__four:before {
  content: "4.";
}

.how__item-box:nth-child(2):before {
  content: "2.";
  position: absolute;
  top: 15px;
  left: 15px;
}

.how__item-arrow {
  margin: auto 20px;
}

.how__payless-row {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 70px;
}

.how__icon-free {
}

.how__text-free {
  font-size: 16px;
  margin: auto 0;
  margin-left: 30px;
}

/*----------------------------------------------------------*/

.search {
}

.search__container {
}

.search__title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
}

.search__title:before {
  content: "";
  display: block;
  width: 168px;
  background-color: rgba(0, 0, 0, 0.24);
  height: 1px;
  margin: 55px auto;
}

.search__form-row {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}

.search__form-text {
  max-width: 540px;
  font-size: 16px;
  text-align: center;
  padding-right: 55px;
  margin: auto 0;
}

.search__form-form {
  display: flex;
  flex-direction: column;
}

.search__form-form input {
  border: 1px solid #5b5b5b;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
}

.search__form-button {
  background-color: #f40d0d;
  border-radius: 5px;
  padding: 10px;
  color: white;
  border: 1px solid #f40d0d;
  transition: all 0.1s ease;
  font-weight: 700;
}

.search__form-button:hover {
  background-color: white;
  color: #f40d0d;
  border: 1px solid #f40d0d;
}
</style>