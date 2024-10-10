<script setup>
import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    name: 'Product 1',
    price: '$19.99',
    image: '/images/beanie.jpeg',
    url: '/product/1',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$29.99',
    oldPrice: '$39.99',
    image: '/images/beanie.jpeg',
    url: '/product/2',
  },
  {
    id: 2,
    name: 'Product 3',
    price: '$29.99',
    oldPrice: '$39.99',
    image: '/images/beanie.jpeg',
    url: '/product/2',
  },
  {
    id: 2,
    name: 'Product 4',
    price: '$29.99',
    oldPrice: '$39.99',
    image: '/images/beanie.jpeg',
    url: '/product/2',
  },
  {
    id: 2,
    name: 'Product 5',
    price: '$29.99',
    oldPrice: '$39.99',
    image: '/images/beanie.jpeg',
    url: '/product/2',
  },
  {
    id: 2,
    name: 'Product 6',
    price: '$29.99',
    oldPrice: '$39.99',
    image: '/images/beanie.jpeg',
    url: '/product/2',
  },
  {
    id: 2,
    name: 'Product 7',
    price: '$29.99',
    oldPrice: '$39.99',
    image: '/images/beanie.jpeg',
    url: '/product/2',
  },
  {
    id: 2,
    name: 'Product 8',
    price: '$29.99',
    oldPrice: '$39.99',
    image: '/images/beanie.jpeg',
    url: '/product/2',
  },
]);

const subscription = ref({
  firstName: '',
  lastName: '',
  email: '',
});

const subscriptionSuccess = ref(false);
const subscriptionError = ref(false);

const seeCollection = () => {
  console.log('Showing collection');
};

const submitSubscription = () => {
  console.log('Submitting subscription', subscription.value);

  setTimeout(() => {
    if (Math.random() > 0.5) {
      subscriptionSuccess.value = true;
      subscriptionError.value = false;
    } else {
      subscriptionSuccess.value = false;
      subscriptionError.value = true;
    }
  }, 1000);
};
</script>

<template>
  <div>
    <header>
      <div class="navbar w-nav">
        <a href="/" class="brand w-nav-brand">
          <h1 class="logo">MDLR</h1>
          <h2 class="logo subhead">Online Store</h2>
        </a>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <NuxtLink to="/" class="nav-link w-nav-link">Home</NuxtLink>
          <NuxtLink to="/category/tops" class="nav-link w-nav-link"
            >Tops</NuxtLink
          >
          <NuxtLink to="/category/bottoms" class="nav-link w-nav-link"
            >Bottoms</NuxtLink
          >
          <NuxtLink to="/category/accessories" class="nav-link w-nav-link"
            >Accessories</NuxtLink
          >
          <NuxtLink to="/contact" class="nav-link w-nav-link">Contact</NuxtLink>
        </nav>
        <Cart />
      </div>
    </header>

    <main>
      <div class="hero_home">
        <div class="hero_content">
          <h3 id="blotter" class="topheading">Now in Stores</h3>
          <h1 id="blotter" class="largeheading">New SS19 Collection</h1>
          <p class="paragraph cc-large cc-w90">
            Discover the new Coats, Shirt, Pants, Shorts and Accessories
            <strong>MODULAR</strong> has to offer.
          </p>
          <a
            href="#"
            class="button w-inline-block"
            @click.prevent="seeCollection"
          >
            <div class="button_textlink">See Collection</div>
          </a>
        </div>
        <div class="hero_photo"></div>
      </div>

      <div class="section">
        <div class="aboutus">
          <h1 class="section_title">About MODULAR</h1>
          <p>
            We are a lifestyle retailer dedicated to inspiring customers through
            a unique combination of product, creativity and cultural
            understanding. Founded in 1970 in a small space across the street
            from the University of Pennsylvania.<br /><br />‍<strong
              >Modular</strong
            >
            now operates over 200 stores in the United States, Canada and
            Europe, offering experiential retail environments and a well-curated
            mix men's product assortments.
          </p>
        </div>
      </div>

      <div>
        <div class="w-dyn-list">
          <div v-if="products.length" role="list" class="w-dyn-items w-row">
            <div
              v-for="product in products"
              :key="product.id"
              role="listitem"
              class="product w-dyn-item w-col w-col-3"
            >
              <a :href="product.url" class="link-block w-inline-block">
                <img :alt="product.name" :src="product.image" />
                <div class="productinfo">
                  <div class="productinfo_title">{{ product.name }}</div>
                  <div class="productinfo_price">
                    <div class="pricenow">{{ product.price }}</div>
                    <div v-if="product.oldPrice" class="pricewas">
                      {{ product.oldPrice }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div v-else class="w-dyn-empty">
            <div>No items found.</div>
          </div>
        </div>
      </div>

      <div class="subscribe">
        <div>
          <h1 class="section_title">Subscribe</h1>
          <div class="form">
            <form @submit.prevent="submitSubscription" class="form-2">
              <input
                v-model="subscription.firstName"
                class="subscribe_input w-input"
                maxlength="256"
                placeholder="First Name"
                type="text"
                id="name-2"
              />
              <input
                v-model="subscription.lastName"
                class="subscribe_input w-input"
                maxlength="256"
                placeholder="Last Name"
                type="text"
                id="email-3"
                required
              />
              <input
                v-model="subscription.email"
                class="subscribe_input w-input"
                maxlength="256"
                placeholder="E-Mail"
                type="email"
                id="email-2"
                required
              />
              <input
                type="submit"
                class="button subscribe_button w-button"
                value="Subscribe"
              />
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
        <a href="/" class="brand w-nav-brand">
          <h1 class="logo footer_logo">MODULAR</h1>
        </a>
      </div>
      <div class="footer_nav">
        <NuxtLink to="/privacy-policy" class="footer_nav_links w-inline-block">
          <div>Privacy Policy</div>
        </NuxtLink>
        <NuxtLink
          to="/terms-conditions"
          class="footer_nav_links w-inline-block"
        >
          <div>Terms &amp; Conditions</div>
        </NuxtLink>
        <NuxtLink to="/shipping" class="footer_nav_links w-inline-block">
          <div>Shipping</div>
        </NuxtLink>
        <NuxtLink to="/returns" class="footer_nav_links w-inline-block">
          <div>Returns</div>
        </NuxtLink>
      </div>
      <div class="footer_social">
        <a href="#" class="footer_social_links w-inline-block">
          <img
            src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a1bd99ee56a2889c0b6_bxl-facebook.svg"
            alt="Facebook"
          />
        </a>
        <a href="#" class="footer_social_links w-inline-block">
          <img
            src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a26d99ee54c7189c0b9_bxl-twitter.svg"
            alt="Twitter"
          />
        </a>
        <a href="#" class="footer_social_links w-inline-block">
          <img
            src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a2bd99ee560bf89c0bb_bxl-instagram.svg"
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
::-moz-selection {
  background: #fece05;
}
::selection {
  background: #fece05;
}

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
</style>
