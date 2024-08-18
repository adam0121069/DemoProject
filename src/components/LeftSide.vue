<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-64 h-screen bg-indigo-600 text-white flex flex-col">
      <!-- Logo -->
      <div class="px-6 py-4 flex items-center">
        <svg class="h-8 w-8 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 7h6m0 0h12m-12 0v8m0-8l-6 6m6-6l6 6" />
        </svg>
        <span class="ml-3 text-xl font-bold">Dashboard</span>
      </div>

      <!-- Menu -->
      <nav class="flex-1 px-2 py-4 space-y-2">
        <a href="#" class="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-500">
          <svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <span class="ml-3">Dashboard</span>
        </a>
        <a href="#" class="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-500">
          <svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <span class="ml-3">Team</span>
        </a>
        <a href="#" class="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-500">
          <svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <span class="ml-3">Projects</span>
        </a>
        <a href="#" class="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-500">
          <svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <span class="ml-3">Calendar</span>
        </a>
        <!-- Add more menu items here -->
      </nav>

      <!-- Footer -->
      <div class="px-6 py-4">
        <a href="#" class="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-indigo-500">
          <svg class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <span class="ml-3">Settings</span>
        </a>
      </div>
    </div>

  </div>
</template>
