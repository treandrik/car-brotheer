<template>
  <div class="page__todo todo">
    <!--  -->
    <div class="todo__header">
      <div class="todo__title red bold">График работ по обслуживанию</div>
      <div class="todo__buttons">
        <a href="" class="button button-gray">История обслуживания</a>
        <a href="" class="button button-add-event">Добавить событие →</a>
      </div>
    </div>
    <!--  -->
    <div class="todo__main-row">
      <CarServiceElement
        v-bind:data_array="element"
        v-for="element in list"
        :key="element"
      />
    </div>
  </div>
</template>

<script>
import CarServiceElement from "@/components/CarServiceElement";

export default {
  name: "CarServiceTimeline",
  components: {
    CarServiceElement,
  },
  props: ["list"],
};
</script>

<style>


.page__todo {
  box-shadow: 0px 8px 24px 2px rgba(54, 59, 100, 0.08);
  border-radius: 7px;
  padding: 25px;
  margin-bottom: 25px;
}

.todo__header {
  display: flex;
  justify-content: space-between;
}

.todo__title {
  font-size: 16px;
  text-transform: uppercase;
  line-height: 36px;
  margin-left: 16px;
}

.todo__buttons {
  display: flex;
}

.button-gray {
  border: 1px solid #5b5b5b;
  margin: 0 10px;
  margin: auto 10px auto 0 !important;
}

.button-add-event {
  border: 1px solid #5b5b5b;
  margin: 0 10px;
  margin: auto 10px auto 0 !important;
  display: block;
}

.button-gray:hover,
.button-add-event:hover {
  color: white;
  background-color: #5b5b5b;
}

.todo__main-row {
  overflow: auto;
  max-height: calc(100vh - 249px);
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>