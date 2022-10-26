<template>
  <div class="garage__element car">
    <div class="car__delete-button" style="position: absolute">
      <a class="red" href="">✕</a>
    </div>
    <div class="car__first-row">
      <div class="car__img">
        <img :src="imageData" alt="" />
      </div>
      <div class="car__info">
        <div class="car__name bold">
          {{ car.car_brand }} {{ car.car_model }}
          {{ car.car_generation != "base" ? car.car_generation : "" }}
          {{ car.car_modification }}
        </div>
        <div class="car__trip bold">
          Текущий пробег:
          <div class="car__trip-numbers">{{ car.car_trip }}</div>
          км <a href="" class="button add-trip">+</a>
        </div>
        <div class="car__next-visit">
          <div>
            Следующий визит в автосервис через
            <div class="km-next-visit">? км</div>
          </div>
          <div>
            или
            <div class="days-next-visit">? дней</div>
          </div>
          <a class="button button-alert">Напоминание о визите установлено</a>
        </div>
      </div>
    </div>

    <div class="car__second-row">
      <div>
        <div class="car__vin">
          VIN: <span id="car_vin">{{ car.car_vin }}</span>
        </div>
        <a href="" class="button-find-zap"
          >Найти запчасти и расходники по VIN</a
        >
        <div class="car__prod-year">
          Год выпуска:
          <span id="car-prod-year">{{ car.car_production_year }}</span>
        </div>
        <div class="car__engine">
          Двигатель: <span id="car-prod-year">{{ car.car_engine }}</span>
        </div>
      </div>
      <div>
        <div class="car__region">
          Регион:
          <a href="">{{ selectRegion }}</a>
        </div>
        <a href="" class="button button-call-evacuator">Вызвать эвакуатор</a>
      </div>
    </div>
  </div>
</template>

<script>
import regions from "@/utils/regions"; //import regions vocabluary
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default {
  name: "CarInGarage",
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageData: "",
    };
  },
  computed: {
    selectRegion() {
      let region = this.car.car_region;
      if (regions[region] && regions[region] != 0) {
        return regions[region];
      } else {
        return "Не указан";
      }
    },
  },
  created() {
    this.getCarImage();
  },
  methods: {
    getCarImage() {
      var vm = this;
      const storage = getStorage();
      const currentCar = this.car;
      const imageNameInFirebase =
        "images/cars/" +
        currentCar.car_brand +
        "/" +
        currentCar.car_model +
        "_" +
        currentCar.car_generation +
        ".jpg";
      console.log(imageNameInFirebase);
      getDownloadURL(ref(storage, imageNameInFirebase)).then((url) => {
        vm.imageData = url;
        return url;
      });
    },
  },
};
</script>

<style>
.scroller .car {
  scroll-snap-align: start;
}

.car {
  position: relative;
  margin-top: 30px;
}

.car:before {
  content: "";
  width: 300px;
  height: 1px;
  background-color: #d6d6d6;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}

.car__delete-button {
  position: absolute;
  right: 14px;
  top: 11px;
}

.car__first-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.car__img {
  margin: auto;
}

@media (max-width: 1728px) {
  .car__img {
    width: 315px;
  }
}

@media (max-width: 1575px) {
  .car__img {
    width: 200px;
  }
}

.car__img img {
  width: 100%;
  max-width: 315px;
}

.car__info {
  margin-top: 35px;
  margin-right: 10px;
}

.car__trip {
  margin-top: 20px;
  display: flex;
  line-height: 20px;
  color: #8a8a8a;
}

.car__trip-numbers {
  font-size: 20px;
  color: #474747;
  margin: 0 10px;
  margin-top: -5px;
  margin-bottom: 5px;
  border: 1px solid #8a8a8a;
  padding-top: 3px;
  padding-left: 5px;
  padding-right: 3px;
  border-radius: 5px;
  letter-spacing: 0.2em;
}

.add-trip {
  display: block;
  margin-top: -7px;
  border: 1px solid #8a8a8a;
  border-radius: 5px;
  color: #8a8a8a;
  padding: 6px 10px;
  margin-left: 10px;
  transition: all 0.1s ease;
}

.add-trip:hover {
  color: white;
  background-color: #f40d0d;
  border: 1px solid #f40d0d;
}

.car__next-visit {
  display: flex;
  flex-direction: column;
  text-align: right;
  color: #8a8a8a;
  margin: 20px 0;
}

.button-alert {
  text-align: center;
  border-radius: 7px;
  background-color: #00944d;
  color: white;
}

.km-next-visit {
  color: #474747;
  background-color: #ffe485;
  padding: 5px;
  display: inline;
  border-radius: 5px;
}

.days-next-visit {
  display: inline;
  line-height: 45px;
  color: white;
  background-color: #00944d;
  padding: 5px;
  border-radius: 5px;
}

/* --------------------------------- */
.car__second-row {
  display: flex;
  margin-top: 25px;
  justify-content: space-around;
  flex-wrap: wrap;
}

.car__vin {
  color: #8a8a8a;
  text-align: center;
  border: 1px solid #1c84ff;
  border-radius: 5px 5px 0 0;
  padding: 10px 5px;
}

.button-find-zap {
  background-color: #1c84ff;
  border-radius: 0 0 5px 5px;
  padding: 10px;

  color: white;
  display: block;
  margin-bottom: 15px;
}

.button-find-zap:hover {
  background-color: #186bd1;
  transition: all 0.1s ease;
}

.car__prod-year {
  color: #8a8a8a;
  padding-left: 10px;
  margin-bottom: 5px;
}

.car__engine {
  color: #8a8a8a;
  padding-left: 10px;
}

.car__region {
  color: #8a8a8a;
}

.car__region a {
  color: #f75353;
  text-decoration: underline;
}

.button-call-evacuator {
  background-color: #ffe485;
  display: block;
  margin-top: 10px;
  text-align: center;
}

.button-call-evacuator:hover {
  background-color: #f0d576;
}
</style>