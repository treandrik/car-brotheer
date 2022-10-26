<template>
  <div class="add-car">
    <div class="add-car__container">
      <div class="add-car__left">
        <img class="add-car__image" :src="imageSrc" alt="" />
      </div>
      <div class="add-car__right right">
        <div class="right__col1">
          <CustomSelect
            :options="['BMW', 'HAVAL', 'Toyota']"
            :default="'Выбрать производителя'"
            :badge="'Производитель'"
            class="select"
            v-on:input="myAlert1"
          />
          <CustomSelect
            :options="['X1', 'X2', 'X3']"
            :default="'Выбрать модель'"
            :badge="'Модель'"
            class="select"
          />
          <CustomSelect
            :options="['F48', 'E84']"
            :default="'Выбрать поколение'"
            :badge="'Поколение'"
            class="select"
          />
        </div>
        <div class="right__col2">
          <CustomSelect
            :options="['sDrive18i', 'xDrive18d']"
            :default="'Выбрать модификацию'"
            :badge="'Модификация'"
            class="select"
          />
          <CustomSelect
            :options="['sDrive18i', 'xDrive18d']"
            :default="'Выбрать год выпуска'"
            :badge="'Год выпуска'"
            class="select"
          />
          <div class="right__vin-wrapper">
            <span class="badge">VIN-номер</span
            ><input placeholder="VIN" class="vin" type="text" />
          </div>
        </div>

        <span class="add_car-subtitle">
          Все нужные данные Вы можете найти в Свидетельстве о регистрации ТС
        </span>
        <a href="" class="button button-add-car" style="flex-shrink: 0">
          Добавить автомобиль в мой гараж
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "@/components/CustomSelect";

export default {
  name: "AddCar",
  components: {
    CustomSelect,
  },
  props: ["imageSrc"],
  data() {
    return {
      myAlert: "11",
    };
  },
  methods: {
    myAlert1(value) {
      console.log(value);
      this.myAlert = value;
    },
  },
};
</script>

<style>
.select-wrapper {
  display: flex;
  padding: 25px;
}
.add-car__container {
  display: flex;
  max-width: 659px;
  margin-top: 15px;
}
.add-car__image {
  max-width: 235px;
  min-width: 235px;
}
.right {
  display: flex;
  flex-wrap: wrap;
}
.right__col1 {
  display: flex;
  flex-direction: column;
  margin-right: 32px;
}
.right__col2 {
  display: flex;
  flex-direction: column;
}
.vin {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 35px;
  line-height: 35px;
  min-width: 195px;
  font-size: 13px;
  margin-top: 34px;
  color: black;
  border-radius: 5px;
  border: 1px solid #5b5b5b;
  padding-left: 14px;
  text-transform: uppercase;
}
.badge {
  position: absolute;
  top: 16px;
  left: 7px;
  font-weight: 700;
  color: #8a8a8a;
}
.right__vin-wrapper {
  position: relative;
}
.add_car-subtitle {
  font-style: italic;
  font-size: 12px;
  margin: 15px 0;
  color: #8a8a8a;
}

.button-add-car {
  text-align: center;
  border-radius: 7px;
  background-color: #00944d;
  color: white;
  max-height: 32px;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
}
</style>