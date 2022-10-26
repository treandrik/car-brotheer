<template>
  <div class="page">
    <div class="page__container _container">
      <div class="page__left">
        <CarServiceTimeline v-bind:list="maintenances" />
      </div>
      <div class="page__right">
        <Garage v-bind:cars_in_garage="cars_in_garage" />
        <div class="page__additional additional"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CarServiceTimeline from "@/components/CarServiceTimeline";
import Garage from "@/components/Garage";

export default {
  name: "ServiceView",
  components: {
    CarServiceTimeline,
    Garage,
  },
  data() {
    return {
      maintenances: [
        {
          car: "BMW X1 F49 2019",
          when_km: 21000,
          when_date: "21.11.2022",
          to_replace: [
            "Масло в двигателе",
            "Заливная пробка",
            "Салонный фильтр",
            "Топливный фильтр",
          ],
          to_check: ["Тормозные колодки", "Уровень антифриза"],
        },
        {
          car: "HAVAL Jolion 2020",
          when_km: 121000,
          when_date: "21.11.2023",
          to_replace: [
            "Масло в КПП",
            "Сальники КПП",
            "Сажевый фильтр",
            "Тормозная жидкость",
          ],
          to_check: ["Тормозные колодки", "Уровень антифриза"],
        },
      ],
      cars_in_garage: [
        {
          car_brand: "HAVAL",
          car_model: "Dargo",
          car_modification: "2.0 AT",
          car_production_year: "2021",
          car_engine: "XBCHN20M Бензин",
          car_trip: 18680,
          car_vin: "XTX9948938594835OET",
          car_region: 61,
          car_generation: "base",
        },
        {
          car_brand: "BMW",
          car_model: "X1",
          car_modification: "X18D",
          car_production_year: "2017",
          car_engine: "B40B47 2.0 Дизель",
          car_trip: 130650,
          car_vin: "KEX12331243245425EE",
          car_region: 47,
          car_generation: "F48",
        },
      ],
    };
  },
};
</script>

<style>
.page__left {
  width: 55%;
}

.page__right {
  width: 45%;
  display: flex;
  flex-direction: column;
}

.page__additional {
  box-shadow: 0px 8px 24px 2px rgb(54 59 100 / 8%);
  border-radius: 7px;
  padding: 25px;
  margin-left: 15px;
  margin-top: -5px;
  height: calc(50vh - 300px);
}
</style>