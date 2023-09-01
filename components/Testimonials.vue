<template> 
  <div class="py-[14rem] pt-[8rem]"> 
    <div class="b-wrapper" >
      <h2 class="text-center mb-[6.4rem] max-w-[58rem] mx-auto text-black">What Our Partners Are saying</h2>

      <div class="grid sm:grid-cols-2 gap-[2rem] text-black">
        <template v-for="(testimonial, idx) in testimonials" :key="idx">
          <div class="flex-none w-full bg-white border-[#9BA9FA] border-solid border py-[5.5rem] px-[4.5rem] rounded-[2.1rem]">
            <div class="mb-[4rem]"> {{ testimonial.description }} </div>
            <div class="flex items-center gap-3"> 
              <div class="w-[6.4rem] aspect-square ">
                <img :src="testimonial.image" class="w-full h-full object-cover rounded-full" alt="testimonial.image" />
              </div>
              <div>{{ testimonial.title }}</div>
            </div>
          </div>
        </template>
        
        <!-- ... more items ... -->
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { WizardResponse } from '~/type';
const props = defineProps<{ data?: WizardResponse }>();

const testimonials = computed(() => {
  const served = props.data?.agency_wizard.testimonials.map(s => ({
    description: s.description,
    image: s.metaImage || "",
    title: s.name,
  }))

  return (served || []).length ? served : [
    {
      image: "/img/help.jpeg",
      title: "John D., CEO, Tizz Company",
      description: "[COMPANY NAME] transformed our online presence, delivering exceptional results. Highly recommended!"
    },
    {
      image: "/img/help.jpeg",
      title: "John D., CEO, Tizz Company",
      description: "[COMPANY NAME] transformed our online presence, delivering exceptional results. Highly recommended!"
    },
    {
      image: "/img/help.jpeg",
      title: "John D., CEO, Tizz Company",
      description: "[COMPANY NAME] transformed our online presence, delivering exceptional results. Highly recommended!"
    },
    {
      image: "/img/help.jpeg",
      title: "John D., CEO, Tizz Company",
      description: "[COMPANY NAME] transformed our online presence, delivering exceptional results. Highly recommended!"
    },
  ]
})

</script>

<style> 
    
</style>