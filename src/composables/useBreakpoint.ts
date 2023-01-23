import { breakpointsTailwind } from "@vueuse/core";

export const useBreakpoint = () => {
  const breakPoints = useBreakpoints(breakpointsTailwind);

  const breakPoint = computed(() => {
    if (breakPoints.lg.value) return 3;
    else if (breakPoints.md.value) return 2;
    else return 1;
  });

  return { breakPoint };
};
