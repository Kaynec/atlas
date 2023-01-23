import { Ref } from "vue";

export const useCarousel = (target: Ref<HTMLElement>) => {
  // initially The functions are gonna be empty
  const forward = ref(() => {
    return;
  });
  const backward = ref(() => {
    return;
  });

  const changeHowManyAreVisible = (): Promise<number> => {
    const children = Array.from(target.value.querySelectorAll(".child-item"));

    return new Promise((resolve) => {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          // Every Time We Start A new Instance It should reset the scroll amount
          let count = 0;

          entries.forEach((entry) => {
            if (entry.isIntersecting) count++;
          });
          resolve(count);
          // Disconnecting This Instance
          intersectionObserver.disconnect();
        },
        {
          threshold: 0.5,
        }
      );

      children.forEach((child) => intersectionObserver.observe(child));
    });
  };

  //
  onMounted(() => {
    // We Are Watching The ones That Are Visible In The Viewport And Just sliding between that element

    // we call This initially So That it can calculate How Much To forward/backward

    // And on Resize

    forward.value = async () => {
      const amount = await changeHowManyAreVisible();
      console.log(amount);

      const width = target.value.getBoundingClientRect().width;

      const left = target.value.scrollLeft + width;
      target.value.scroll({
        left,
        behavior: "smooth",
      });
    };

    backward.value = async () => {
      const amount = await changeHowManyAreVisible();

      console.log(amount);
      const width = target.value.getBoundingClientRect().width;

      const left = target.value.scrollLeft - width;

      target.value.scroll({
        left,
        behavior: "smooth",
      });
    };
    //
  });

  return {
    forward,
    backward,
  };
};
