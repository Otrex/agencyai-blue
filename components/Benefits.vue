<template> 
  <div class="py-[17rem] text-black">
    <div class="b-wrapper">
      <h2 class="max-w-[73rem] mb-[8rem] text-black m-auto text-center">Benefits of {{agencyName}} Services</h2>
      <div class=""> 
        <div class="w-full grid sm:grid-cols-2 gap-[2rem]">
          <template v-for="(benefit, idx) in split(benefits)" :key="idx" >
            <div class="border border rounded-[1.5rem] border-[#8D9CDA] border-solid px-[5rem] py-[3rem]"> 
              <div v-for="(_benefit, _idx) in benefit" class="mb-[3rem]" :key="_idx" > 
                <div class="py-[2.3rem] px-[1.6rem]">
                  <p class="text-[--accent-100] font-bold mb-[1rem]">{{ _benefit.title }}</p>
                  <p>{{ _benefit.description }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { WizardResponse } from '~/type';
const props = defineProps<{ data?: WizardResponse }>();

const agencyName = computed(() => props.data?.agency_wizard.website_details.agencyName || 'Our')
const benefits = computed(() => {
  const served = props.data?.agency_wizard.service_benefits.map(e => ({
    description: e.description,
    title: e.name,
  }));

  return (served || []).length ? served : [
    {
      title: "Expertise",
      description: "Our seasoned professionals bring 15years+ of industry experience to the table."
    },
    {
      title: "Targeted Engagement",
      description: "With our unique voice, we connect with your audience, driving loyalty and relationships from your customers so they keep coming back."
    },
    {
      title: "Comprehensive Services",
      description: "Our seasoned professionals bring 15years+ of industry experience to the table."
    },
    {
      title: "Results-Driven",
      description: "Our seasoned professionals bring 15years+ of industry experience to the table."
    },
    {
      title: "Long-Term Partnership",
      description: "We aim to become your trusted long-term marketing partner."
    },
    {
      title: "Increased Visibility",
      description: "Our seasoned professionals bring 15years+ of industry experience to the table."
    },
  ]
});

function split<T extends Record<string, any>>(arr?: T[]) {
  if (!arr) return [];
  const arr1: T[] = []
  const arr2: T[] = []
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      arr1.push(arr[i])
    } else {
      arr2.push(arr[i])
    }
  }

  return [arr1, arr2]
}
</script>

<style> 
    
</style>