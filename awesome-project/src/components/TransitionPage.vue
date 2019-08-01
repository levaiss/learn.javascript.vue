<template>
    <transition :name="transitionName">
        <slot/>
    </transition>
</template>

<script>
  const DEFAULT_TRANSITION = "slide-left";

  export default {
    name: "TransitionPage",
    data: function () {
      return {
        transitionName: DEFAULT_TRANSITION
      }
    },
    created() {
      this.$router.beforeEach((to, from, next) => {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;

        let transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';

        this.transitionName = transitionName || DEFAULT_TRANSITION;

        next();
      });
    }
  }
</script>

<style lang="scss" scoped>
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.5s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }

    .slide-left-leave-active,
    .slide-right-leave-active {
        position: absolute;
        width: 100%;
        height: auto;
        left: 0;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-2em, 0);
    }
</style>