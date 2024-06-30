<template>
  <div id="vue" class="transition duration-500 ease-in-out transform hover:scale-105">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-600">Password Generator</h1>
    <div class="mb-6">
      <label class="block text-lg font-medium text-gray-800 mb-2">Password Length</label>
      <input v-model.number="passwordLength" type="number" min="6" max="24"
             class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-3 w-full">
    </div>
    <div class="mb-6">
      <label class="block text-lg font-medium text-gray-800 mb-2">Include Uppercase Letters</label>
      <input v-model="includeUppercase" type="checkbox"
             class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-3">
    </div>
    <div class="mb-6">
      <label class="block text-lg font-medium text-gray-800 mb-2">Include Numbers</label>
      <input v-model="includeNumbers" type="checkbox"
             class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-3">
    </div>
    <div class="mb-6">
      <label class="block text-lg font-medium text-gray-800 mb-2">Include Special Characters</label>
      <input v-model="includeSpecialCharacters" type="checkbox"
             class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-3">
    </div>
    <button @click="generatePassword"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-500 ease-in-out transform hover:scale-105">Generate Password
    </button>
    <transition name="fade">
      <div v-if="generatedPassword" class="mt-6">
        <label class="block text-lg font-medium text-gray-800 mb-2">Generated Password</label>
        <textarea readonly
                  class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm p-3 w-full">{{ generatedPassword }}</textarea>
      </div>
    </transition>
  </div>
</template>



<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
