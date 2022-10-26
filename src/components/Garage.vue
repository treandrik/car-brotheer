<template>
  <div class="page__garage garage">
    <!-- Modal add car -->
    <vue-final-modal v-model="showModal">
      <button class="modal__close" @click="showModal = false">✕</button>
      <span>Добавление автомобиля</span>
      <hr class="hr" />
      <AddCar v-if="showModal" :imageSrc="addCarImageSrc" />
    </vue-final-modal>
    <!--  -->
    <div class="garadge__header">
      <div class="garage__title red bold">
        Мой гараж <span class="garage__count-cars">1</span>
      </div>
      <div class="garage__buttons">
        <a @click="shoModalAddCar()" class="button button-add-event"
          >Добавить автомобиль +</a
        >
      </div>
    </div>
    <!--  -->
    <div class="garage__row scroller">
      <CarInGarage
        v-bind:car="element"
        v-for="element in cars_in_garage"
        :key="element"
      />
    </div>
  </div>
</template>

<script>
import CarInGarage from "@/components/CarInGarage";
import AddCar from "@/components/AddCar";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default {
  name: "Garage",
  methods: {
    shoModalAddCar() {
      this.showModal = true;
      this.getAddCarImage();
    },
    getAddCarImage() {
      var vm = this;
      getDownloadURL(ref(getStorage(), "images/AddCar/docs.jpg")).then(
        (url) => {
          vm.addCarImageSrc = url;
          return url;
        }
      );
    },
  },
  data() {
    return {
      showModal: false,
      addCarImageSrc: "",
    };
  },
  components: {
    CarInGarage,
    AddCar,
  },
  props: ["cars_in_garage"],
};
</script>

<style>
.scroller {
  scroll-snap-type: y mandatory;
}

.page__garage {
  box-shadow: 0px 8px 24px 2px rgba(54, 59, 100, 0.08);
  border-radius: 7px;
  padding: 25px;
  margin-bottom: 25px;
  margin-left: 15px;
  max-height: 489px;
}

.garadge__header {
  display: flex;
  justify-content: space-between;
}

.garage__title {
  text-transform: uppercase;
  font-size: 16px;
  line-height: 32px;
}

.garage__count-cars {
  padding: 1px 5px 1px 5px;
  background-color: #f40d0d;
  color: white;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 12px;
  margin-top: -2px;
}

.garage__row {
  padding-bottom: 19px;
  overflow: auto;
  max-height: 90%;
  margin-top: 15px;
}
.vfm__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vfm__content {
  display: inline-block;
  padding: 42px;
  border-radius: 7px;
  background: #fff;
  position: relative;
  box-shadow: 0px 8px 24px 2px rgb(54 59 100 / 8%);
}
.modal__close {
  position: absolute;
  right: 17px;
  background-color: white;
  color: #f40d0d;
  top: 16px;
  font-size: 16px;
}

.hr {
  /* border-width: 2px; */
  height: 1px;
  background-color: #ededed;
  margin-top: 17px;
}
</style>

<style scoped>
.vfm__content span {
  font-size: 16px;
  color: #f40d0d;
  font-weight: 700;
  text-transform: uppercase;
}

.vfm__overlay {
  background-color: rgb(255 255 255 / 86%);
}
</style>