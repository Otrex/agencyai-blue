<template> 
  <div class="bg-[#F0F3FF] text-black py-[10rem]">
    <div class="b-wrapper">
      <h2 class=" text-center mb-[8rem] text-black">Our Services</h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[2rem] gap-y-[9rem]"> 
        <template v-for="(service, idx) in services" :key="idx">
          <article> 
            <div class="flex flex-col"> 
              <div class=""> 
                <img :src="service.image" class=" rounded-t-[1.2rem] h-[20rem] w-full object-cover" :alt="service.image" />
              </div>
              <div class="px-[3.6rem] py-[2rem]">
                <p class=" text-[--accent-100] leading-[3rem] mb-[1.5rem] font-bold">{{ service.title }}</p>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </article>
        </template>
      </div>

      <div class="text-center mt-[6rem]"> 
        <a class="b-btn md !bg-[#FD9C06] font-semibold text-black">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { WizardResponse } from '~/type';
const props = defineProps<{ data?: WizardResponse }>();

const services = computed(() => {
  const served = props.data?.agency_wizard.services.map(s => ({
    description: s.description,
    image: s.metaImage || "",
    title: s.name,
  }))

  return (served || []).length ? served : [
    {
      title: "Copywriting",
      image: "/img/bg1.jpg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    },
    {
      title: "Scriptwriting",
      image: "/img/i1.jpeg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    },
    {
      title: "Copywriting",
      image: "/img/bg1.jpg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    },
    {
      title: "Scriptwriting",
      image: "/img/i1.jpeg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    },
    {
      title: "Copywriting",
      image: "/img/bg1.jpg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    },
    {
      title: "Scriptwriting",
      image: "/img/i1.jpeg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    },
    {
      title: "Copywriting",
      image: "/img/bg1.jpg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    },
    {
      title: "Scriptwriting",
      image: "/img/i1.jpeg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    },
    {
      title: "Copywriting",
      image: "/img/bg1.jpg",
      description: "At [COMPANY NAME], we understand that navigating the complexities of the digital age can be daunting. ",
    }
  ]
})
</script>

<style> 
    
</style>