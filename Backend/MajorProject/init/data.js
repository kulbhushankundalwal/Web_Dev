const sampleListings = [
  {
    title: "Elegant Beachfront Villa",
    description:
      "Indulge in the serene beauty of India's coastline with this elegant beachfront villa. Perfect for a relaxing getaway.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern Apartment in Mumbai",
    description:
      "Experience the vibrant city of Mumbai from this modern and centrally located apartment.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Mountain Retreat in Himachal Pradesh",
    description:
      "Unplug and unwind in this peaceful mountain cabin located in the serene landscapes of Himachal Pradesh. It's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Manali",
    country: "India",
  },
  {
    title: "Historic Villa in Jaipur",
    description:
      "Experience the charm of Rajasthan in this beautifully restored historic villa. Explore the rich culture and history of Jaipur.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Secluded Treehouse Getaway in Kerala",
    description:
      "Live among the treetops in this unique treehouse retreat located amidst the lush landscapes of Kerala. A true nature lover's paradise.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Beachfront Paradise in Goa",
    description:
      "Step out of your door onto the sandy beaches of Goa. This beachfront villa offers the ultimate relaxation in India's paradise.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Goa",
    country: "India",
  },
  {
    title: "Rustic Cottage in Uttarakhand",
    description:
      "Spend your days amidst the natural beauty of Uttarakhand in this cozy rustic cottage. Perfect for nature enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 950,
    location: "Uttarakhand",
    country: "India",
  },
  {
    title: "Luxury Penthouse with City Views in Mumbai",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment in Mumbai.",
    image:
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 3600,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Ski-In/Ski-Out Chalet in Gulmarg",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet located in the beautiful landscapes of Gulmarg, Kashmir.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Safari Lodge in Jim Corbett National Park",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the diverse wildlife of Jim Corbett National Park up close.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 3800,
    location: "Jim Corbett National Park",
    country: "India",
  },
  {
    title: "Historic Houseboat in Kerala Backwaters",
    description:
      "Stay in a historic houseboat on the serene Kerala Backwaters. Experience the unique charm of Kerala's waterways.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Kerala Backwaters",
    country: "India",
  },
  {
    title: "Private Island Retreat in Andaman and Nicobar Islands",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience in the Andaman and Nicobar Islands.",
    image:
      "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 12000,
    location: "Andaman and Nicobar Islands",
    country: "India",
  },
  {
    title: "Charming Cottage in Ooty",
    description:
      "Escape to the picturesque landscapes of Ooty in this quaint and charming cottage with a stunning view.",
    image:
      "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Historic Haveli in Rajasthan",
    description:
      "Step back in time in this elegant historic haveli located in the heart of Rajasthan. Explore the rich heritage of the area.",
    image:
      "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Rajasthan",
    country: "India",
  },
  {
    title: "Beachfront Bungalow in Andhra Pradesh",
    description:
      "Relax on the sandy shores of Andhra Pradesh in this beautiful beachfront bungalow with a private pool.",
    image:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Andhra Pradesh",
    country: "India",
  },
  {
    title: "Mountain View Cabin in Uttarakhand",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin located in the picturesque Uttarakhand region of the Indian Himalayas.",
    image:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Uttarakhand",
    country: "India",
  },
  {
    title: "Art Deco Apartment in Kolkata",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in the cultural heart of Kolkata.",
    image:
      "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Kolkata",
    country: "India",
  },
  {
    title: "Tropical Villa in Kerala",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in the serene landscapes of Kerala.",
    image:
      "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Historic Palace in Jaipur",
    description:
      "Live like royalty in this historic palace located in the culturally rich city of Jaipur, Rajasthan. Explore the grandeur of the area.",
    image:
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 3800,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Desert Oasis in Rajasthan",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Rajasthan with a private pool.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 4300,
    location: "Rajasthan",
    country: "India",
  },
  {
    title: "Rustic Log Cabin in Himachal Pradesh",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Himachal Pradesh.",
    image:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Himachal Pradesh",
    country: "India",
  },
  {
    title: "Beachfront Villa in Goa",
    description:
      "Enjoy the crystal-clear waters of the Arabian Sea in this beautiful beachfront villa on the shores of Goa.",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Eco-Friendly Treehouse Retreat in Kerala",
    description:
      "Stay in an eco-friendly treehouse nestled in the lush forests of Kerala. It's the perfect escape for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 950,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Historic Cottage in Shimla",
    description:
      "Experience the charm of historic Shimla in this beautifully restored cottage with a panoramic view of the Himalayas.",
    image:
      "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto.format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Modern Apartment in Mumbai",
    description:
      "Explore the vibrant city of Mumbai from this modern and centrally located apartment.",
    image:
      "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Lakefront Cabin in Manali",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic landscapes of Manali in Himachal Pradesh.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Manali",
    country: "India",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Gulmarg",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous ski resort of Gulmarg.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto.format&fit=crop&w=800&q=60",
    price: 4200,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Secluded Beach House in Goa",
    description:
      "Escape to a secluded beach house on the coast of Goa. Surf, relax, and unwind in your own private paradise.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdvYSUyMGJvdXxlbnwwfHwwfHx8MA%3D%3D&auto.format&fit=crop&w=800&q=60",
    price: 3100,
    location: "Goa",
    country: "India",
  },
  {
    title: "Jungle Lodge in Bandipur National Park",
    description:
      "Experience the thrill of the jungle in this comfortable lodge on the outskirts of Bandipur National Park in Karnataka.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGpvbmxlJTIwbG9kZ2V8ZW58MHx8MHx8fHww&auto.format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Bandipur National Park",
    country: "India",
  },
  {
    title: "Tented Camp in Rann of Kutch",
    description:
      "Stay in a luxurious tented camp and explore the unique landscapes of the Rann of Kutch in Gujarat.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhbm58ZW58MHx8MHx8fHww&auto.format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Rann of Kutch",
    country: "India",
  },
];

module.exports = { data: sampleListings };
