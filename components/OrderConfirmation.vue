<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const order = ref({
  customerEmail: '',
  shippingAddress: {},
  billingAddress: {},
  shippingMethod: {},
  paymentMethod: '',
  lastFourDigits: '',
  items: [],
  subtotal: '',
  extraItems: [],
  total: '',
});

onMounted(async () => {
  // Fetch order details using the order ID from the route
  const orderId = route.params.orderId;
  // Replace this with your actual API call
  const response = await fetch(`/api/orders/${orderId}`);
  order.value = await response.json();
});
</script>

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
          <router-link to="/category/tops" class="nav-link w-nav-link"
            >Tops</router-link
          >
          <router-link to="/category/bottoms" class="nav-link w-nav-link"
            >Bottoms</router-link
          >
          <router-link to="/category/accessories" class="nav-link w-nav-link"
            >Accessories</router-link
          >
          <router-link to="/contact" class="nav-link w-nav-link"
            >Contact</router-link
          >
        </nav>
        <!-- Cart component would go here -->
      </nav>
    </header>

    <main>
      <div class="hero_checkout">
        <h1 class="largeheading">Thank you for your order</h1>
      </div>

      <div class="order-confirmation-container">
        <div class="w-commerce-commerceorderconfirmation">
          <div class="order-confirmation-header-wrapper">
            <div class="div-block-4">
              <!-- Customer Information -->
              <div
                class="w-commerce-commercecheckoutcustomerinfosummarywrapper"
              >
                <div class="w-commerce-commercecheckoutsummaryblockheader">
                  <h4>Customer Information</h4>
                </div>
                <div class="w-commerce-commercecheckoutblockcontent">
                  <div class="w-commerce-commercecheckoutrow">
                    <div class="w-commerce-commercecheckoutcolumn">
                      <div class="w-commerce-commercecheckoutsummaryitem">
                        <label class="w-commerce-commercecheckoutsummarylabel"
                          >Email</label
                        >
                        <div>{{ order.customerEmail }}</div>
                      </div>
                    </div>
                    <div class="w-commerce-commercecheckoutcolumn">
                      <div class="w-commerce-commercecheckoutsummaryitem">
                        <label class="w-commerce-commercecheckoutsummarylabel"
                          >Shipping Address</label
                        >
                        <div>{{ order.shippingAddress.name }}</div>
                        <div>{{ order.shippingAddress.street }}</div>
                        <div>
                          {{ order.shippingAddress.city }},
                          {{ order.shippingAddress.state }}
                          {{ order.shippingAddress.zip }}
                        </div>
                        <div>{{ order.shippingAddress.country }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Shipping Method -->
              <div class="w-commerce-commercecheckoutshippingsummarywrapper">
                <div class="w-commerce-commercecheckoutsummaryblockheader">
                  <h4>Shipping Method</h4>
                </div>
                <div class="w-commerce-commercecheckoutblockcontent">
                  <div class="w-commerce-commercecheckoutrow">
                    <div class="w-commerce-commercecheckoutcolumn">
                      <div class="w-commerce-commercecheckoutsummaryitem">
                        <div>{{ order.shippingMethod.name }}</div>
                        <div>{{ order.shippingMethod.price }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Payment Info -->
              <div class="w-commerce-commercecheckoutpaymentsummarywrapper">
                <div class="w-commerce-commercecheckoutsummaryblockheader">
                  <h4>Payment Info</h4>
                </div>
                <div class="w-commerce-commercecheckoutblockcontent">
                  <div class="w-commerce-commercecheckoutrow">
                    <div class="w-commerce-commercecheckoutcolumn">
                      <div class="w-commerce-commercecheckoutsummaryitem">
                        <label class="w-commerce-commercecheckoutsummarylabel"
                          >Payment Info</label
                        >
                        <div>{{ order.paymentMethod }}</div>
                        <div>{{ order.lastFourDigits }}</div>
                      </div>
                    </div>
                    <div class="w-commerce-commercecheckoutcolumn">
                      <div class="w-commerce-commercecheckoutsummaryitem">
                        <label class="w-commerce-commercecheckoutsummarylabel"
                          >Billing Address</label
                        >
                        <div>{{ order.billingAddress.name }}</div>
                        <div>{{ order.billingAddress.street }}</div>
                        <div>
                          {{ order.billingAddress.city }},
                          {{ order.billingAddress.state }}
                          {{ order.billingAddress.zip }}
                        </div>
                        <div>{{ order.billingAddress.country }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Order Items -->
              <div
                class="w-commerce-commercecheckoutorderitemswrapper order-items"
              >
                <div class="w-commerce-commercecheckoutsummaryblockheader">
                  <h4>Items in Order</h4>
                </div>
                <div class="w-commerce-commercecheckoutblockcontent">
                  <ul class="w-commerce-commercecheckoutorderitemslist">
                    <li
                      v-for="item in order.items"
                      :key="item.id"
                      class="w-commerce-commercecheckoutorderitem"
                    >
                      <div>{{ item.name }}</div>
                      <div>Quantity: {{ item.quantity }}</div>
                      <div>{{ item.price }}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Order Summary -->
            <div class="div-block-5">
              <div
                class="w-commerce-commercecheckoutordersummarywrapper sticky_summary"
              >
                <div class="w-commerce-commercecheckoutsummaryblockheader">
                  <h4>Order Summary</h4>
                </div>
                <div class="w-commerce-commercecheckoutblockcontent">
                  <div class="w-commerce-commercecheckoutsummarylineitem">
                    <div>Subtotal</div>
                    <div>{{ order.subtotal }}</div>
                  </div>
                  <div
                    v-for="extraItem in order.extraItems"
                    :key="extraItem.id"
                    class="w-commerce-commercecheckoutordersummaryextraitemslistitem"
                  >
                    <div>{{ extraItem.name }}</div>
                    <div>{{ extraItem.price }}</div>
                  </div>
                  <div class="w-commerce-commercecheckoutsummarylineitem">
                    <div>Total</div>
                    <div class="w-commerce-commercecheckoutsummarytotal">
                      {{ order.total }}
                    </div>
                  </div>
                </div>
              </div>
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
        <router-link
          to="/privacy-policy"
          class="footer_nav_links w-inline-block"
        >
          <div>Privacy Policy</div>
        </router-link>
        <router-link
          to="/terms-conditions"
          class="footer_nav_links w-inline-block"
        >
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
/* You can add your styles here or in a separate CSS file */
/* ... */
</style>
