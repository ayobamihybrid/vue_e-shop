<template>
  <div>
    <header>
      <nav class="navbar w-nav">
        <router-link to="/" class="brand w-nav-brand">
          <h1 class="logo">MDLR</h1>
          <h2 class="logo subhead">Online Store</h2>
        </router-link>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <router-link to="/" class="nav-link w-nav-link">Home</router-link>
          <router-link to="/category/tops" class="nav-link w-nav-link">Tops</router-link>
          <router-link to="/category/bottoms" class="nav-link w-nav-link">Bottoms</router-link>
          <router-link to="/category/accessories" class="nav-link w-nav-link">Accessories</router-link>
          <router-link to="/contact" class="nav-link w-nav-link">Contact</router-link>
        </nav>
        <CartComponent />
        <div class="menu-button w-nav-button">
          <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7ca89f9254e93c10c36dd8_bx-menu-alt-right.svg" alt="Menu" />
        </div>
      </nav>
    </header>

    <main>
      <div class="hero_checkout">
        <h1 class="largeheading">{{ categoryTitle }}</h1>
      </div>

      <div class="w-dyn-list">
        <div v-if="products.length" role="list" class="w-dyn-items w-row">
          <div v-for="product in products" :key="product.id" role="listitem" class="product w-dyn-item w-col w-col-3">
            <router-link :to="`/product/${product.id}`" class="link-block w-inline-block">
              <img :alt="product.name" :src="product.imageUrl" />
              <div class="productinfo">
                <div class="productinfo_title">{{ product.name }}</div>
                <div class="productinfo_price">
                  <div class="pricenow">{{ product.currentPrice }}</div>
                  <div v-if="product.originalPrice" class="pricewas">{{ product.originalPrice }}</div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div v-else class="w-dyn-empty">
          <div>No items found.</div>
        </div>
      </div>

      <div class="subscribe">
        <div>
          <h1 class="section_title">Subscribe</h1>
          <div class="form">
            <form @submit.prevent="submitSubscription" class="form-2">
              <input v-model="subscription.firstName" class="subscribe_input w-input" maxlength="256" placeholder="First Name" type="text" id="name-2" />
              <input v-model="subscription.lastName" class="subscribe_input w-input" maxlength="256" placeholder="Last Name" type="text" id="email-3" required />
              <input v-model="subscription.email" class="subscribe_input w-input" maxlength="256" placeholder="E-Mail" type="email" id="email-2" required />
              <button type="submit" class="button subscribe_button w-button">
                Subscribe
              </button>
            </form>
            <div v-if="subscriptionSuccess" class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div v-if="subscriptionError" class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer_brand">
        <router-link to="/" class="brand w-nav-brand">
          <h1 class="logo footer_logo">MODULAR</h1>
        </router-link>
      </div>
      <div class="footer_nav">
        <router-link to="/privacy-policy" class="footer_nav_links w-inline-block">
          <div>Privacy Policy</div>
        </router-link>
        <router-link to="/terms-conditions" class="footer_nav_links w-inline-block">
          <div>Terms &amp; Conditions</div>
        </router-link>
        <router-link to="/shipping" class="footer_nav_links w-inline-block">
          <div>Shipping</div>
        </router-link>
        <router-link to="/returns" class="footer_nav_links w-inline-block">
          <div>Returns</div>
        </router-link>
      </div>
      <div class="footer_social">
        <a href="#" class="footer_social_links w-inline-block">
          <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a1bd99ee56a2889c0b6_bxl-facebook.svg" alt="Facebook" />
        </a>
        <a href="#" class="footer_social_links w-inline-block">
          <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a26d99ee54c7189c0b9_bxl-twitter.svg" alt="Twitter" />
        </a>
        <a href="#" class="footer_social_links w-inline-block">
          <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a2bd99ee560bf89c0bb_bxl-instagram.svg" alt="Instagram" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CartComponent from './CartComponent.vue';

const route = useRoute();
const categoryTitle = ref('');
const products = ref([]);
const subscription = ref({ firstName: '', lastName: '', email: '' });
const subscriptionSuccess = ref(false);
const subscriptionError = ref(false);

onMounted(async () => {
  // Fetch category details and products using the category ID from the route
  const categoryId = route.params.categoryId;
  // Replace these with your actual API calls
  const categoryResponse = await fetch(`/api/categories/${categoryId}`);
  const categoryData = await categoryResponse.json();
  categoryTitle.value = categoryData.name;

  const productsResponse = await fetch(`/api/categories/${categoryId}/products`);
  products.value = await productsResponse.json();
});

const submitSubscription = async () => {
  try {
    // Replace this with your actual subscription logic
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(subscription.value)
    });
    if (!response.ok) throw new Error('Subscription failed');
    subscriptionSuccess.value = true;
    subscriptionError.value = false;
  } catch (error) {
    subscriptionSuccess.value = false;
    subscriptionError.value = true;
  }
};
</script>

<style scoped>
.subscribe_input {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  outline: none;
}

.w-input,
.w-select {
  border-top: none;
  border-left: none;
  border-right: none;
}

.w-input::placeholder {
  color: #333;
  opacity: 0.3;
}

/* Add more styles as needed */
</style>