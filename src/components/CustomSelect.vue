<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <span class="badge">{{ badge }}</span>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    badge: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 35px;
  line-height: 35px;
  /* margin-right: 14px; */
  min-width: 195px;
  font-size: 13px;
  margin-top: 34px;
  color: #5b5b5b;
}

.custom-select:before {
  content: "";
}

.custom-select .selected {
  background-color: white;
  border-radius: 5px;
  border: 1px solid #5b5b5b;
  color: rgb(0, 0, 0);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #5b5b5b;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 16px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #5b5b5b transparent transparent transparent;
}

.custom-select .items {
  color: rgb(0, 0, 0);
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #bbbbbb;
  border-left: 1px solid #bbbbbb;
  border-bottom: 1px solid #bbbbbb;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: rgb(10, 10, 10);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #fa4a4a;
  color: white;
}

.selectHide {
  display: none;
}
.badge {
  position: absolute;
  top: -30px;
  left: 7px;
  font-weight: 700;
  color: #8a8a8a;
}
</style>
