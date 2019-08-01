<template>
    <input
            type="text"
            ref="datepicker"
            class="form-control"
            :value="value"
            :placeholder="placeholder">
</template>

<script>
  import flatpickr from "flatpickr";
  import "flatpickr/dist/flatpickr.css";

  export default {
    name: "DatePicker",
    props: {
      value: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        default: "Chose date"
      }
    },
    data: function () {
      return {
        dp: null
      };
    },
    mounted() {
      this.initDatePicker();
    },
    watch: {
      value: function () {
        this.updateDatePicker();
      }
    },
    methods: {
      updateDatePicker: function () {
        if (this.dp) {
          this.dp.setDate(this.value)
        }
      },
      initDatePicker: function () {
        this.dp = flatpickr(this.$refs.datepicker, {
          dateFormat: "d.m.Y",
          onChange: (selectedDates, dateStr) => {
            this.$emit("input", dateStr)
          }
        })
      }
    }
  };
</script>