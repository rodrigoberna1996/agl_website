import Swiper from "swiper";
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

export function initSwiper(sliderName: string, swiperConfig: SwiperOptions) {
  return new Swiper(`.${sliderName}-swiper`, {
    modules: [Navigation, Pagination, Keyboard, Autoplay],
    observer: true,
    observeParents: true,
    speed: 700,
    loop: true,
    autoHeight: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    ...swiperConfig,
  });
}
