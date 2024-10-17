<script setup>
import { useRoute } from '#app';

const route = useRoute();

const {
  productName,
  productImage,
  productDescription,
  productPrice,
  productOldPrice,
} = route.query;
</script>

<template>
  <div class="product-details">
    <div class="product-image">
      <img :src="productImage" :alt="productName" />
    </div>
    <div class="product-info">
      <h1 class="product-name">{{ productName }}</h1>
      <p class="product-description">{{ productDescription }}</p>
      <div class="product-price">
        <span class="current-price">{{ productPrice }}</span>
        <span v-if="productOldPrice" class="old-price">{{
          productOldPrice
        }}</span>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
</template>

<style scoped>
.product-details {
  display: flex;
  width: full;
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
}

.product-image {
  flex: 1;
}

.product-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.product-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.current-price {
  font-size: 1.5rem;
  font-weight: bold;
}

.old-price {
  font-size: 1rem;
  text-decoration: line-through;
  color: #888;
}

.add-to-cart {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #333;
}

@media (max-width: 768px) {
  .product-details {
    flex-direction: column;
  }
}
</style>
