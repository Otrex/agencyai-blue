<template> 
<div class="bg-[#F0F3FF]"> 

<div class="b-wrapper "> 
  <div class="pt-[12rem]"> 
    <div class="flex flex-col md:flex-row gap-[3rem] sm:gap-0"> 
      <div class="w-full pr-[2rem]">
        <h1 class="max-w-[106rem] m-auto mb-[2rem]">{{ hero.headline }}</h1>
        <p class="font-jakarta lg max-w-[106rem] m-auto">{{ hero.subHeadline }}</p>
        <div class=" mt-[3.6rem]"> 
          <a class="b-btn md px-[3rem] accent" :href="hero.btnLink">Get Started</a>
        </div>
      </div>
      <div class="w-full">
        <div class="relative z-[1]">
          <img class="absolute top-[-5rem] left-[-4rem] z-[-1]" src="/img/bubble4.svg" />
          <iframe
            class="max-w-[70rem] m-auto w-full aspect-[4/3] rounded-[2rem]"
            :data-src="hero.videoUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            :src="hero.videoUrl"
            vnb-frameid="4576"
          ></iframe>
          
          <img class="absolute top-[calc(100%_-_3rem)] left-[-4rem] w-[50%]" src="/img/bubble3.svg" />
        </div>
      </div>
    </div>
  </div>

  </div>

</div>
</template>

<script setup lang="ts"> 
import { WizardResponse } from '~/type';
const props = defineProps<{ data?: WizardResponse }>();

const hero = computed(() => {
  const headline = props.data?.agency_wizard.contact.introduction.intro_headline || "Unleash Your Brand Potential With Marketing Done Right";
  const subHeadline = props.data?.agency_wizard.contact.introduction.intro_desc || "Leverage Our Exceptional Services to boost your Online Business growth.";
  const btnLink = props.data?.agency_wizard.contact.introduction.intro_cta_button_link || "#";
  const videoUrl = props.data?.agency_wizard.contact.introduction.intro_video_url || "https://www.youtube.com/embed/s_o9v2EatW8?feature=oembed"
  return { headline, subHeadline, btnLink, videoUrl }
})
</script>

<style scoped> 
.bg-video {
  background: url(/img/video-bg.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
} 
</style>