<template>
  <div>
    <section class="py-16 bg-yellow-500 text-gray-900 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
      <div
        class="absolute inset-0 opacity-10"
        style="
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDM0TDAgNTBMMCA4NEwyOCAxMDBMNTYgODRMNTYgNTBMMjggMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+Cjwvc3ZnPg==');
          background-size: 56px 100px;
        "
      ></div>

      <div class="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          class="absolute bottom-0 w-full h-16 text-gray-50 transform rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div class="container mx-auto px-4 relative">
        <!-- Content of the CTA section -->
      </div>

      <div
        class="absolute top-10 right-10 w-16 h-16 text-yellow-800 opacity-10 transform rotate-12 hidden lg:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.2 17.4c-.4-.2-.8-.4-1.2-.5.2-.6.3-1.2.3-1.9 0-3.1-2.5-5.6-5.6-5.6-.5 0-1 .1-1.5.2 0-.1 0-.1.1-.2.5-1.1 1.1-1.9 1.9-2.4.8-.5 1.8-.7 3-.7 1.1 0 2 .2 2.7.7.7.5 1.2 1.2 1.6 2.1.3.9.5 2 .5 3.2 0 1.5-.2 2.8-.7 3.9-.3.8-.7 1.4-1.1 1.9-.4.5-.8.8-1.2 1-.4.2-.8.3-1.2.3-.2 0-.4 0-.6-.1.1-.3.1-.5.1-.8-.1-.1-.1-.1-.1-.1zM4.8 17.4c.4-.2.8-.4 1.2-.5-.2-.6-.3-1.2-.3-1.9 0-3.1 2.5-5.6 5.6-5.6.5 0 1 .1 1.5.2 0-.1 0-.1-.1-.2-.5-1.1-1.1-1.9-1.9-2.4-.8-.5-1.8-.7-3-.7-1.1 0-2 .2-2.7.7-.7.5-1.2 1.2-1.6 2.1-.3.9-.5 2-.5 3.2 0 1.5.2 2.8.7 3.9.3.8.7 1.4 1.1 1.9.4.5.8.8 1.2 1 .4.2.8.3 1.2.3.2 0 .4 0 .6-.1-.1-.3-.1-.5-.1-.8.1-.1.1-.1.1-.1z"
          />
          <path
            d="M12 22c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
          />
          <path
            d="M12 13c-.3 0-.5-.1-.7-.3l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.3 1.3 1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-2 2c-.2.2-.4.3-.7.3z"
          />
        </svg>
      </div>

      <div
        class="absolute bottom-10 left-10 w-12 h-12 text-yellow-800 opacity-10 transform -rotate-12 hidden lg:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.2 17.4c-.4-.2-.8-.4-1.2-.5.2-.6.3-1.2.3-1.9 0-3.1-2.5-5.6-5.6-5.6-.5 0-1 .1-1.5.2 0-.1 0-.1.1-.2.5-1.1 1.1-1.9 1.9-2.4.8-.5 1.8-.7 3-.7 1.1 0 2 .2 2.7.7.7.5 1.2 1.2 1.6 2.1.3.9.5 2 .5 3.2 0 1.5-.2 2.8-.7 3.9-.3.8-.7 1.4-1.1 1.9-.4.5-.8.8-1.2 1-.4.2-.8.3-1.2.3-.2 0-.4 0-.6-.1.1-.3.1-.5.1-.8-.1-.1-.1-.1-.1-.1zM4.8 17.4c.4-.2.8-.4 1.2-.5-.2-.6-.3-1.2-.3-1.9 0-3.1 2.5-5.6 5.6-5.6.5 0 1 .1 1.5.2 0-.1 0-.1-.1-.2-.5-1.1-1.1-1.9-1.9-2.4-.8-.5-1.8-.7-3-.7-1.1 0-2 .2-2.7.7-.7.5-1.2 1.2-1.6 2.1-.3.9-.5 2-.5 3.2 0 1.5.2 2.8.7 3.9.3.8.7 1.4 1.1 1.9.4.5.8.8 1.2 1 .4.2.8.3 1.2.3.2 0 .4 0 .6-.1-.1-.3-.1-.5-.1-.8.1-.1.1-.1.1-.1z"
          />
          <path
            d="M12 22c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
          />
          <path
            d="M12 13c-.3 0-.5-.1-.7-.3l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.3 1.3 1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-2 2c-.2.2-.4.3-.7.3z"
          />
        </svg>
      </div>
    </section>
    <section class="py-16 bg-yellow-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up Your Career?</h2>
          <p class="text-xl mb-8 text-yellow-100">
            Join thousands of developers who have successfully transitioned from junior to mid-level
            and beyond.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-lg font-medium text-lg shadow-lg transition duration-300"
            >
              Get Started for Free
            </button>
            <button
              class="bg-transparent border-2 border-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-lg font-medium text-lg transition duration-300"
            >
              View Learning Paths
            </button>
          </div>
          <p class="mt-6 text-sm text-yellow-100">
            No credit card required. Start with our free tier today.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
