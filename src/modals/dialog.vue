<template>
    <div v-if="active">
   <div  class="fixed inset-0">
       <div class="bg-black opacity-50 inset-0 absolute z-0"></div>
       <div class="bg-white p-4 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div class="flex flex-col my-2.5 text-center">
                  <span class="text-sm text-gray-500 "> Are you sure you want to delete this contact?</span>
                  <div class="flex justify-between">
                      <button class="text-base px-9 py-3 text-white bg-blue-600 my-5"
                      @click="$emit('submit-click')"> Yes </button>
                      <button class="text-base px-9 py-3 text-white bg-blue-600 my-5"
                      @click="$emit('reject-click')"> No </button>
                  </div>
              </div>
       </div>  
   </div>
   </div>
</template>

<script>
export default {
    props:{
        active:
        {
            type:Boolean,
            default:false
        }
    }

}
</script>

<style>

</style>