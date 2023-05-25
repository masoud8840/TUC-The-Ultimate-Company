<template>
  <div class="vue-circle-progress" v-bind="wrapAttr">
    <svg v-bind="svgAttr" class="svg-wrapper">
      <circle v-bind="circleBgAttr" />
      <circle v-bind="circleFgAttr" />
    </svg>
    <div v-if="showPercent" class="current-percent">
      <template v-if="$slots.content">
        <slot name="content" :percent="currentPercent"></slot>
      </template>
      <p class="circular_progress-percentage" v-else>
        {{ currentPercent }}<span>%</span>
      </p>
    </div>
    <div class="circular_progress-subtitle">
      <p class="circular_progress-title">
        {{ $props.title }}
      </p>
      <span
        class="circular_progress-status_badge"
        :style="{
          color: getFillColor(),
          backgroundColor: `${getFillColor()}25`,
        }"
        >{{ $props.status }}</span
      >
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";

export default {
  name: "circular-progress",
  props: {
    status: {
      type: String,
      default: "Undefined",
    },
    title: {
      type: String,
      default: "Undefined",
    },
    size: {
      type: Number,
      default: 96,
    },
    borderWidth: {
      type: Number,
      default: 2,
    },
    borderBgWidth: {
      type: Number,
      default: 2,
    },
    emptyColor: {
      type: String,
      default: "#e9e9e9",
    },
    percent: {
      type: Number,
      default: 10,
    },
    linecap: {
      type: String,
      default: "round",
    },
    transition: {
      type: Number,
      default: 650,
    },
    showPercent: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const getFillColor = () => {
      if (props.percent < 25) {
        return "#ed4c5c";
      }
      if (props.percent >= 25 && props.percent < 50) {
        return "#edc800";
      }
      if (props.percent >= 50 && props.percent < 75) {
        return "#6600ff";
      }
      if (props.percent >= 75) {
        return "#00cc99";
      }
    };
    const circleRadiusBg = () => {
      let value = (props.size - props.borderBgWidth) * 0.5;
      if (props.borderWidth > props.borderBgWidth) {
        value -= (props.borderWidth - props.borderBgWidth) * 0.5;
      }
      return value;
    };

    const circleRadiusFg = () => {
      let value = (props.size - props.borderWidth) * 0.5;
      if (props.borderBgWidth > props.borderWidth) {
        value -= (props.borderBgWidth - props.borderWidth) * 0.5;
      }
      return value;
    };

    const circumference = 2 * Math.PI * circleRadiusFg();
    const offset = ref(circumference);
    const currentPercent = ref(0);

    const wrapStyle = {
      minHeight: props.size + "px",
      minWidth: props.size + "px",
      position: "relative",
    };

    const wrapAttr = {
      class: props.class,
      style: wrapStyle,
    };

    const svgAttr = {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      height: props.size,
      width: props.size,
    };

    const cx = props.size / 2;
    const cy = props.size / 2;

    const circleBgAttr = {
      cx,
      cy,
      r: circleRadiusBg(),
      fill: "none",
      stroke: `${getFillColor()}25`,
      "stroke-width": props.borderBgWidth,
    };

    const circleFgAttr = computed(() => ({
      cx,
      cy,
      r: circleRadiusFg(),
      fill: "none",
      stroke: getFillColor(),
      "stroke-width": props.borderWidth,
      "stroke-dasharray": circumference,
      "stroke-dashoffset": offset.value,
      "stroke-linecap": props.linecap,
    }));

    function updatePercent() {
      const percent = Math.round(props.percent);

      animateValue(percent);
    }

    function animateValue(to) {
      const step = to - currentPercent.value;
      const delay = props.transition / Math.abs(step);
      const counter = setInterval(() => {
        if (step > 0) {
          currentPercent.value += 1;
          if (currentPercent.value >= to) {
            clearInterval(counter);
          }
        } else {
          currentPercent.value -= 1;

          if (currentPercent.value <= to) {
            clearInterval(counter);
          }
        }

        offset.value = (circumference * (100 - currentPercent.value)) / 100;
      }, delay);
    }

    onMounted(() => {
      const percent = Math.round(props.percent);

      if (percent !== 0) {
        updatePercent();
      }
    });

    watch(
      () => props.percent,
      () => {
        updatePercent();
      }
    );

    return {
      svgAttr,
      circumference,
      currentPercent,
      circleBgAttr,
      circleFgAttr,
      wrapAttr,
      getFillColor,
    };
  },
};
</script>
