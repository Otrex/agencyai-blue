<template> 
  <div id="footer" class="bg-[#F0F3FF] text-black pt-[14rem]"> 
    <div class="flex flex-col sm:flex-row pb-[5rem] b-wrapper gap-[2rem]">
      <div class="w-full">
        <div class="max-w-[18rem] max-h-[5rem]"> 
          <img :src="logo" class="w-full h-full object-cover" />
        </div>
      </div>
      <div class="w-full">
        <p class="text-[#626262] mb-[1rem]">Address:</p>
        <p class="font-semibold">{{ footer.address }}</p>
      </div>
      <div class="w-full">
        <div class="w-full mb-[1rem]">
          <p class="text-[#626262] mb-[1rem]">Phone:</p>
          <p class="font-semibold">{{ footer.phone }}</p>
        </div>
        <div class="w-full">
          <p class="text-[#626262] mb-[1rem]">Email:</p>
          <p class="font-semibold">{{ footer.email }}</p>
        </div>
      </div>
      <div class="w-full">
        <div class="w-full">
          <p class="text-[#626262] mb-[1rem]">Connect with us:</p>
          <ul class="flex flex-row gap-[2.6rem]"> 
            <li>
              <a :href="footer.facebook" id="fb" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1317_3281)">
                <path d="M4.38226 0C1.95468 0 0 1.95468 0 4.38226V19.6178C0 22.0453 1.95468 24 4.38226 24H12.6398V14.6175H10.1588V11.2395H12.6398V8.35351C12.6398 6.08611 14.1057 4.00426 17.4825 4.00426C18.8497 4.00426 19.8608 4.13551 19.8608 4.13551L19.7813 7.29002C19.7813 7.29002 18.7501 7.28028 17.625 7.28028C16.4073 7.28028 16.212 7.84135 16.212 8.77279V11.2395H19.878L19.7183 14.6175H16.212V24H19.6177C22.0453 24 24 22.0454 24 19.6178V4.38228C24 1.9547 22.0453 2.4e-05 19.6177 2.4e-05H4.38223L4.38226 0Z" fill="#9BA9FA"/>
                </g>
                <defs>
                <clipPath id="clip0_1317_3281">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </a></li>

            <li>
              <a :href="footer.instagram" id="ins" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1317_3283)">
                <path d="M12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z" fill="#9BA9FA"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2L0 16.8C0 18.7096 0.758569 20.5409 2.10883 21.8912C3.45909 23.2414 5.29044 24 7.2 24H16.8C18.7096 24 20.5409 23.2414 21.8912 21.8912C23.2414 20.5409 24 18.7096 24 16.8V7.2C24 5.29044 23.2414 3.45909 21.8912 2.10883C20.5409 0.758569 18.7096 0 16.8 0L7.2 0ZM6.4 12C6.4 10.5148 6.99 9.09041 8.0402 8.0402C9.09041 6.99 10.5148 6.4 12 6.4C13.4852 6.4 14.9096 6.99 15.9598 8.0402C17.01 9.09041 17.6 10.5148 17.6 12C17.6 13.4852 17.01 14.9096 15.9598 15.9598C14.9096 17.01 13.4852 17.6 12 17.6C10.5148 17.6 9.09041 17.01 8.0402 15.9598C6.99 14.9096 6.4 13.4852 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z" fill="#9BA9FA"/>
                </g>
                <defs>
                <clipPath id="clip0_1317_3283">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </a></li>


            <li>
              <a :href="footer.twitter" id="tw" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.8372 5.14419C22.9659 5.54027 22.0266 5.80055 21.0534 5.92503C22.0492 5.32525 22.8187 4.37466 23.1809 3.23168C22.2416 3.79751 21.2005 4.19359 20.1028 4.41992C19.2087 3.44669 17.9526 2.88086 16.5267 2.88086C13.8673 2.88086 11.6945 5.05365 11.6945 7.7357C11.6945 8.12046 11.7398 8.49391 11.819 8.84473C7.79025 8.64103 4.20288 6.70588 1.81507 3.77487C1.39636 4.48782 1.15871 5.32525 1.15871 6.20795C1.15871 7.89413 2.00745 9.38792 3.32018 10.2367C2.5167 10.2367 1.7698 10.0103 1.11344 9.67084V9.70479C1.11344 12.0587 2.7883 14.0277 5.00636 14.4691C4.29424 14.664 3.54662 14.6911 2.82225 14.5483C3.12962 15.513 3.73158 16.3572 4.54353 16.9621C5.35548 17.567 6.33657 17.9022 7.34891 17.9207C5.63288 19.2792 3.50577 20.0135 1.31714 20.0029C0.932373 20.0029 0.547607 19.9803 0.162842 19.935C2.313 21.3157 4.87056 22.1191 7.60919 22.1191C16.5267 22.1191 21.4268 14.7181 21.4268 8.30153C21.4268 8.08651 21.4268 7.88281 21.4155 7.6678C22.3661 6.9888 23.1809 6.12873 23.8372 5.14419Z" fill="#9BA9FA"/>
                </svg>

            </a></li>

            <li>
              <a :href="footer.linkedin" id="ln" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1317_3288)">
                <path d="M4.70556 0.00585938C2.12036 0.00585938 0.0045166 2.12165 0.0045166 4.70691V19.2951C0.0045166 21.8803 2.12031 23.9954 4.70556 23.9954H19.2937C21.879 23.9954 23.994 21.8803 23.994 19.2951V4.70691C23.994 2.1217 21.879 0.00585938 19.2937 0.00585938H4.70556ZM5.88795 3.96461C7.1275 3.96461 7.89101 4.77836 7.91458 5.84801C7.91458 6.89405 7.12745 7.73067 5.86397 7.73067H5.84072C4.62476 7.73067 3.83883 6.8941 3.83883 5.84801C3.83883 4.77838 4.64854 3.96461 5.88792 3.96461H5.88795ZM16.5699 8.96405C18.9538 8.96405 20.7408 10.5222 20.7408 13.8705V20.1213H17.118V14.2896C17.118 12.8242 16.5936 11.8244 15.2825 11.8244C14.2816 11.8244 13.685 12.4982 13.4231 13.1492C13.3274 13.3821 13.3039 13.7074 13.3039 14.0332V20.1213H9.68103C9.68103 20.1213 9.72857 10.2426 9.68103 9.2197H13.3046V10.7635C13.7861 10.0207 14.6473 8.96403 16.5699 8.96403V8.96405ZM4.05253 9.22049H7.6754V20.1213H4.05253V9.22049Z" fill="#9BA9FA"/>
                </g>
                <defs>
                <clipPath id="clip0_1317_3288">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>


            </a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="b-wrapper text-[#7D7D7D] border-t p-[3.2rem] border-[#D4D4D4] text-center border-solid">
      © {{agencyName}} {{ new Date().getFullYear() }}. All rights reserved.
    </div>
  </div>
</template>

<script setup lang="ts"> 
import { WizardResponse } from '~/type';
const props = defineProps<{ data?: WizardResponse }>();
const agencyName = computed(() => props.data?.agency_wizard.website_details.agencyName || "AgencyAI")

const logo = computed(() => props.data?.agency_wizard.website_details.logo || '/img/logo.svg');
const footer = computed(() => {
  const address = props.data?.agency_wizard.contact.address.address1 || props.data?.agency_wizard.contact.address.address2 || "48180, Eureka Rd, Taylor, Michigan, USA";
  const city = props.data?.agency_wizard.contact.address.city || "City";
  const phone = props.data?.agency_wizard.contact.address.phone || "(734) 287-6619"
  const email = props.data?.agency_wizard.contact.address.email || "info@agency.com"
  const linkedin = props.data?.agency_wizard.contact.socials.linkedin || "#";
  const facebook = props.data?.agency_wizard.contact.socials.facebook || "#";
  const instagram = props.data?.agency_wizard.contact.socials.instagram || "#";
  const twitter = props.data?.agency_wizard.contact.socials.youtube || "#";
  return {
    address,
    instagram,
    linkedin,
    facebook,
    twitter,
    phone,
    email,
    city
  }
})
</script>

<style> 
    
</style>