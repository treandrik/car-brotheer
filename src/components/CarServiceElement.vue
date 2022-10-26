<template>
  <div class="todo__element element">
    <div class="element__description">
      <div class="element__km active">{{ data_array.when_km }} км</div>
      <div class="element__date">{{ data_array.when_date }}</div>
      <div class="element__car">{{ data_array.car }}</div>
    </div>
    <div class="element__replace">
      <ul>
        <li v-for="element in data_array.to_replace" :key="element">
          {{ element }}
        </li>
      </ul>
    </div>
    <div class="element__check">
      <ul>
        <li v-for="element in data_array.to_check" :key="element">
          {{ element }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarServiceElement",
  props: {
    data_array: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.todo__element {
  display: flex;
}

.element {
  justify-content: space-between;
  max-width: 680px;
  margin: 0 auto 45px auto;
  width: 100%;
  position: relative;
}

.element__description {
  margin: auto 0;
  position: relative;
}

.element__description div {
  margin-bottom: 10px;
  text-align: center;
  color: #8a8a8a;
}

.element__description:before {
  content: "";
  min-height: 87px;
  width: 1px;
  background-color: #d6d6d6;
  display: block;
  position: absolute;
  top: 0px;
  left: 184px;
}

.element__km {
  border: 1px solid #d6d6d6;
  padding: 5px;
  border-radius: 5px;
}

.element__date {
  border: 1px solid #d6d6d6;
  padding: 5px;
  border-radius: 5px;
}

.element__replace {
  background: rgba(244, 13, 13, 0.06);
  border-radius: 5px;
  padding: 37px 25px 25px 42px;
  position: relative;
  margin-left: 60px;
  width: 33%;
}

.element__description .active {
  background-color: #d6d6d6;
  color: #474747;
  position: relative;
}

.element__description .active:after {
  content: "";
  height: 1px;
  width: 64px;
  background-color: #d6d6d6;
  display: block;
  position: absolute;
  top: 11px;
  left: 119px;
}

.element__replace:before {
  content: "ЗАМЕНА";
  color: #f40d0d;
  font-weight: 700;
  top: 15px;
  left: 15px;
  position: absolute;
}

.element__check {
  background: rgba(255, 228, 133, 0.25);
  border-radius: 5px;
  padding: 37px 25px 25px 42px;
  position: relative;
  width: 33%;
}

.element__check:before {
  content: "ПРОВЕРКА";
  color: #ecb600;
  font-weight: 700;
  top: 15px;
  left: 15px;
  position: absolute;
}

.element__replace ul,
.element__check ul {
  line-height: 17px;
  list-style-type: circle !important;
}
</style>