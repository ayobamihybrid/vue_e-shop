// server/api/products.js
export default defineEventHandler((event) => {
  const data = {
    bottoms: [
      {
        id: 'mdlr_b1x9f2k7m3',
        name: 'Lucien Stripe Knit Volley Short',
        image:
          'https://cdn.prod.website-files.com/5c7b453c9254e9017fc1c0d8/5c7b8de6ced3c77eaee0e8d6_UOLucienStripeKnitVolleyShort.jpeg',
        price: '39.00',
        desc: `Easy pull on + go short in an allover vertical stripe pattern. Soft textured cotton
            is cut in a silhouette that hits above the knee with a split hem, featuring an elastic
            waist + adjustable exterior drawstring for a comfortable fit.
            Complete with front slip pockets and back patch pockets. Get them only at Urban Outfitters.`,
        sizes: ['S', 'M', 'L', 'XL'],
      },
    ],
    tops: [
      {
        id: 'mdlr_t1p8h4j5n6',
        name: 'Long Sleeve Patterned Flannel Shirt',
        image:
          'https://cdn.prod.website-files.com/5c7b453c9254e9017fc1c0d8/5c7b8d96eaea1d5b789691e0_UOLongSleevePatternedFlannelShirt2.jpeg',
        price: '29.00',
        oldPrice: '54.00',
        desc: `Long sleeve patterned flannel shirt from Urban Outfitters.
             Full-length front button closure with pointed collar. Finished with rounded hem + patch pocket at chest.`,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      },
    ],
    accessories: [
      {
        id: 'mdlr_a1c3v5d4g6',
        name: 'Vibes Sport Sock',
        image:
          'https://cdn.prod.website-files.com/5c7b453c9254e9017fc1c0d8/5c7b8c42ee88072a51b9175c_VibesSportsStock.jpeg',
        price: '10.00',
        oldPrice: '14.00',
        desc: 'Major Vibes all day in these crew-length knit socks, complete with ribbing at ankle.',
      },

      {
        id: 'mdlr_a1c3v5d4g62',
        name: 'Vibes Sport Sock2',
        image:
          'https://cdn.prod.website-files.com/5c7b453c9254e9017fc1c0d8/5c7b8c42ee88072a51b9175c_VibesSportsStock.jpeg',
        price: '8.80',
        oldPrice: '14.00',
        desc: 'Major Vibes all day in these crew-length knit socks, complete with ribbing at ankle 2.0.',
      },
    ],
  };

  return data;
});
