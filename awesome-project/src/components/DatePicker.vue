<template>
  <input
    type="text"
    ref="datepicker"
    class="form-control"
    :value="date"
    :placeholder="placeholder"
  />
</template>

<script>
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "DatePicker",
  props: {
    date: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: "Chose date"
    }
  },
  data: function() {
    return {
      dp: null
    };
  },
  watch: {
    date: function() {
      this.updateDatePicker();
    }
  },
  mounted() {
    this.initDatePicker();
  },
  methods: {
    updateDatePicker: function() {
      if (this.dp) {
        this.dp.setDate(this.date);
      }
    },
    initDatePicker: function() {
      this.dp = flatpickr(this.$refs.datepicker, {
        dateFormat: "d.m.Y",
        onChange: (selectedDates, dateStr) => {
          this.$emit("update", dateStr);
        }
      });
    }
  }
};
</script>
