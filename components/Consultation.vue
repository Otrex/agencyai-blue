<template> 
<div id="consult" class="relative"> 
  <div class="w-full absolute h-[50%] bg-[#F0F3FF] z-[-1]">&nbsp;</div>
  <div class="py-[10rem] b-wrapper"> 
    <div class="w-full flex-col sm:flex-row !text-white rounded-[3.6rem] mx-auto bg-[--accent-100] flex gap-[3rem]">
      <div class="w-full">
        <div class="rounded-l-[3.6rem] h-full overflow-hidden">
          <img :src="image" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="flex w-full flex-col px-[5.5rem] pl-[2.3rem] py-[5.1rem] w-full gap-[2rem]">
        <h2 class=" text-white">Get Free Consultation</h2>
        <p class="font-jakarta">Fill out your details Below to get a free Consultation.</p>
        <div class="w-full">
          <div v-html="consult" class="b-force"></div>
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script setup lang="ts"> 
import { WizardResponse } from '~/type';

const props = defineProps<{ data?: WizardResponse }>();
const consult = computed(() => {
  return props.data?.agency_wizard.leads_collector || `
    <div class="mb-[2rem]"> 
      <input class="b-input" placeholder="Full Name" />
    </div>
    <div class="mb-[4rem]"> 
      <input class="b-input" placeholder="Email Address" />
    </div>
    <div> 
      <a class="b-btn md !bg-white text-[--accent-100]">Get Started</a>
    </div>
  `
})

const image = computed(() => {
  return props.data?.agency_wizard.leads_image || '/img/leads.png';
})
</script>

<style> 
    
</style>