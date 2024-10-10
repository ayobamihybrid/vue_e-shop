<template>
  <div>
    <header>
      <nav class="navbar w-nav">
        <NuxtLink to="/" class="brand w-nav-brand">
          <h1 class="logo">MDLR</h1>
          <h2 class="logo subhead">Online Store</h2>
        </NuxtLink>
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
        <div class="menu-button w-nav-button">
          <img
            src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7ca89f9254e93c10c36dd8_bx-menu-alt-right.svg"
            alt="Menu"
          />
        </div>
      </nav>
    </header>

    <main>
      <div class="hero_checkout">
        <h1 class="largeheading">Checkout</h1>
      </div>

      <div class="checkout-form">
        <div class="w-commerce-commercelayoutmain div-block-2">
          <form
            @submit.prevent="submitOrder"
            class="w-commerce-commercecheckoutcustomerinfowrapper"
          >
            <!-- Customer Info Section -->
            <div class="w-commerce-commercecheckoutblockheader">
              <h4>Customer Info</h4>
              <div>* Required</div>
            </div>
            <fieldset class="w-commerce-commercecheckoutblockcontent">
              <label for="email" class="w-commerce-commercecheckoutlabel"
                >Email *</label
              >
              <input
                v-model="customerInfo.email"
                class="w-commerce-commercecheckoutemailinput checkout_input"
                type="email"
                name="email"
                required
              />
            </fieldset>

            <!-- Shipping Address Section -->
            <div class="w-commerce-commercecheckoutblockheader">
              <h4>Shipping Address</h4>
              <div>* Required</div>
            </div>
            <fieldset class="w-commerce-commercecheckoutblockcontent">
              <label for="fullName" class="w-commerce-commercecheckoutlabel"
                >Full Name *</label
              >
              <input
                v-model="shippingAddress.fullName"
                class="w-commerce-commercecheckoutshippingfullname checkout_input"
                name="fullName"
                type="text"
                required
              />

              <label
                for="streetAddress"
                class="w-commerce-commercecheckoutlabel"
                >Street Address *</label
              >
              <input
                v-model="shippingAddress.streetAddress"
                class="w-commerce-commercecheckoutshippingstreetaddress checkout_input"
                name="streetAddress"
                type="text"
                required
              />

              <input
                v-model="shippingAddress.streetAddressOptional"
                class="w-commerce-commercecheckoutshippingstreetaddressoptional checkout_input"
                name="streetAddressOptional"
                type="text"
              />

              <div class="w-commerce-commercecheckoutrow">
                <div class="w-commerce-commercecheckoutcolumn">
                  <label for="city" class="w-commerce-commercecheckoutlabel"
                    >City *</label
                  >
                  <input
                    v-model="shippingAddress.city"
                    class="w-commerce-commercecheckoutshippingcity checkout_input"
                    name="city"
                    type="text"
                    required
                  />
                </div>
                <div class="w-commerce-commercecheckoutcolumn">
                  <label for="state" class="w-commerce-commercecheckoutlabel"
                    >State/Province</label
                  >
                  <input
                    v-model="shippingAddress.state"
                    class="w-commerce-commercecheckoutshippingstateprovince checkout_input"
                    name="state"
                    type="text"
                  />
                </div>
                <div class="w-commerce-commercecheckoutcolumn">
                  <label for="zip" class="w-commerce-commercecheckoutlabel"
                    >Zip/Postal Code *</label
                  >
                  <input
                    v-model="shippingAddress.zip"
                    class="w-commerce-commercecheckoutshippingzippostalcode checkout_input"
                    name="zip"
                    type="text"
                    required
                  />
                </div>
              </div>

              <label for="country" class="w-commerce-commercecheckoutlabel"
                >Country *</label
              >
              <select
                v-model="shippingAddress.country"
                class="w-commerce-commercecheckoutshippingcountryselector checkout_input"
                name="country"
                required
              >
                <option
                  v-for="country in countries"
                  :key="country.value"
                  :value="country.value"
                >
                  {{ country.label }}
                </option>
              </select>
            </fieldset>

            <!-- Shipping Method Section -->
            <div class="w-commerce-commercecheckoutblockheader">
              <h4>Shipping Method</h4>
            </div>
            <fieldset>
              <div
                v-for="method in shippingMethods"
                :key="method.id"
                class="w-commerce-commercecheckoutshippingmethoditem"
              >
                <input
                  v-model="selectedShippingMethod"
                  :value="method.id"
                  type="radio"
                  name="shipping-method-choice"
                  required
                />
                <label :for="method.id">
                  <div
                    class="w-commerce-commercecheckoutshippingmethoddescriptionblock"
                  >
                    <div class="w-commerce-commerceboldtextblock">
                      {{ method.name }}
                    </div>
                    <div>{{ method.price }}</div>
                  </div>
                </label>
              </div>
            </fieldset>

            <!-- Payment Info Section -->
            <div class="w-commerce-commercecheckoutblockheader">
              <h4>Payment Info</h4>
              <div>* Required</div>
            </div>
            <fieldset class="w-commerce-commercecheckoutblockcontent">
              <label for="card-number" class="w-commerce-commercecheckoutlabel"
                >Card Number *</label
              >
              <div class="w-commerce-commercecheckoutcardnumber checkout_input">
                <input
                  v-model="paymentInfo.cardNumber"
                  type="text"
                  name="card-number"
                  required
                />
              </div>

              <div class="w-commerce-commercecheckoutrow">
                <div class="w-commerce-commercecheckoutcolumn">
                  <label for="expiry" class="w-commerce-commercecheckoutlabel"
                    >Expiration Date *</label
                  >
                  <input
                    v-model="paymentInfo.expiry"
                    class="w-commerce-commercecheckoutcardexpirationdate checkout_input"
                    type="text"
                    name="expiry"
                    required
                  />
                </div>
                <div class="w-commerce-commercecheckoutcolumn">
                  <label for="cvc" class="w-commerce-commercecheckoutlabel"
                    >Security Code *</label
                  >
                  <input
                    v-model="paymentInfo.cvc"
                    class="w-commerce-commercecheckoutcardsecuritycode checkout_input"
                    type="text"
                    name="cvc"
                    required
                  />
                </div>
              </div>
            </fieldset>

            <!-- Billing Address Toggle -->
            <div class="w-commerce-commercecheckoutbillingaddresstogglewrapper">
              <input
                v-model="billingSameAsShipping"
                id="billing-address-toggle"
                type="checkbox"
                class="w-commerce-commercecheckoutbillingaddresstogglecheckbox"
              />
              <label
                for="billing-address-toggle"
                class="w-commerce-commercecheckoutbillingaddresstogglelabel"
              >
                Billing address same as shipping
              </label>
            </div>

            <!-- Billing Address Section (shown if different from shipping) -->
            <div
              v-if="!billingSameAsShipping"
              class="w-commerce-commercecheckoutbillingaddresswrapper"
            >
              <!-- Add billing address fields similar to shipping address -->
            </div>

            <!-- Order Items Section -->
            <div
              class="w-commerce-commercecheckoutorderitemswrapper order-items"
            >
              <div class="w-commerce-commercecheckoutsummaryblockheader">
                <h4>Items in Order</h4>
              </div>
              <fieldset class="w-commerce-commercecheckoutblockcontent">
                <div
                  v-for="item in orderItems"
                  :key="item.id"
                  class="w-commerce-commercecheckoutorderitem"
                >
                  <div>{{ item.name }}</div>
                  <div>Quantity: {{ item.quantity }}</div>
                  <div>{{ item.price }}</div>
                </div>
              </fieldset>
            </div>
          </form>
        </div>

        <!-- Order Summary Section -->
        <div class="w-commerce-commercelayoutcontainer container w-container">
          <div class="w-commerce-commercelayoutsidebar sticky_summary">
            <div class="w-commerce-commercecheckoutordersummarywrapper">
              <div class="w-commerce-commercecheckoutsummaryblockheader">
                <h4>Order Summary</h4>
              </div>
              <fieldset class="w-commerce-commercecheckoutblockcontent">
                <div class="w-commerce-commercecheckoutsummarylineitem">
                  <div>Subtotal</div>
                  <div>{{ orderSummary.subtotal }}</div>
                </div>
                <div
                  v-for="item in orderSummary.extraItems"
                  :key="item.id"
                  class="w-commerce-commercecheckoutordersummaryextraitemslistitem"
                >
                  <div>{{ item.name }}</div>
                  <div>{{ item.price }}</div>
                </div>
                <div class="w-commerce-commercecheckoutsummarylineitem">
                  <div>Total</div>
                  <div class="w-commerce-commercecheckoutsummarytotal">
                    {{ orderSummary.total }}
                  </div>
                </div>
              </fieldset>
            </div>
            <button
              @click="placeOrder"
              class="w-commerce-commercecheckoutplaceorderbutton button place-order"
              :disabled="isProcessing"
            >
              {{ isProcessing ? 'Processing...' : 'Place Order' }}
            </button>
            <div
              v-if="errorMessage"
              class="w-commerce-commercecheckouterrorstate"
            >
              <div class="w-checkout-error-msg">{{ errorMessage }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <!-- Footer content (same as in previous components) -->
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

// Reactive state
const customerInfo = reactive({
  email: '',
});

const shippingAddress = reactive({
  fullName: '',
  streetAddress: '',
  streetAddressOptional: '',
  city: '',
  state: '',
  zip: '',
  country: '',
});

const paymentInfo = reactive({
  cardNumber: '',
  expiry: '',
  cvc: '',
});

const billingSameAsShipping = ref(true);
const selectedShippingMethod = ref('');
const isProcessing = ref(false);
const errorMessage = ref('');

// Mock data (replace with actual data fetching)
const countries = ref([
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  // Add more countries...
]);

const shippingMethods = ref([
  { id: 'standard', name: 'Standard Shipping', price: '$5.00' },
  { id: 'express', name: 'Express Shipping', price: '$15.00' },
]);

const orderItems = ref([
  { id: 1, name: 'Product 1', quantity: 2, price: '$29.99' },
  { id: 2, name: 'Product 2', quantity: 1, price: '$19.99' },
]);

const orderSummary = computed(() => ({
  subtotal: '$79.97',
  extraItems: [{ id: 'shipping', name: 'Shipping', price: '$5.00' }],
  total: '$84.97',
}));

// Methods
const placeOrder = async () => {
  isProcessing.value = true;
  errorMessage.value = '';

  try {
    // Implement order placement logic here
    // This could involve API calls, validation, etc.
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
    console.log('Order placed successfully');
    // Redirect to order confirmation page or show success message
  } catch (error) {
    console.error('Error placing order:', error);
    errorMessage.value =
      'There was an error processing your order. Please try again.';
  } finally {
    isProcessing.value = false;
  }
};

// You might want to add more methods for form validation, etc.
</script>

<style scoped>
/* Add your scoped styles here */
.checkout_input {
  /* Style your input fields */
}

.button {
  /* Style your buttons */
}

/* Add more styles as needed */
</style>
