// pages/test/data.js

const Data = [
  { id: 1, title: "iPhone 15 Pro", category: "Mobile", price: 99999, rating: 4.8, stock: 20, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUAKu9mGDFvuVGhLeNx27k2bexgayj8TmK3cCoIUVpFCGIKDyi2_9xtwLHe9zP-495-lxXyAo62W7UwkC8GaMuznH4KlGAhTvOloQprFrIRlnWW8PF0A2emuGKrJ1zK7mhBILP8A&usqp=CAc" },

  { id: 2, title: "Samsung Galaxy S24", category: "Mobile", price: 85999, rating: 4.7, stock: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuRPe7mjEn-dt7NdTnjOsSOQ88l9OL5OUaox38w4V0g&s=10" },
  { id: 3, title: "MacBook Air M3", category: "Laptop", price: 124999, rating: 4.9, stock: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzFwInRm2zD107s7yu5j-ld-AzjqS8n2gZKxtKRT1lw&s=10" },
  { id: 4, title: "Dell XPS 13", category: "Laptop", price: 99999, rating: 4.6, stock: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItDth1iKWMKKqJCxO13RPdbk_x30fquUxxFxw_V8sew&s=10" },
  { id: 5, title: "Sony WH-1000XM5", category: "Headphones", price: 29999, rating: 4.8, stock: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_hhQvE6RUepVkxA8AkNti3Uo1mkqktg8FcCcwy05EA&s=10" },
  { id: 6, title: "Apple Watch Series 10", category: "Smart Watch", price: 45999, rating: 4.7, stock: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQgAbdh16zfhfeftRzG-YXI_B6zjHE1iv_kc0up9-2g&s=10" },
  { id: 7, title: "Canon EOS R50", category: "Camera", price: 69999, rating: 4.8, stock: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZcuUqCRapabiZoejAetxZzhKAxWlwQvKHlih8ugxzA&s=10" },
  // { id: 8, title: "Nike Air Max", category: "Shoes", price: 8999, rating: 4.5, stock: 40, image: "https://picsum.photos/300?random=8" },
  // { id: 9, title: "Adidas Hoodie", category: "Fashion", price: 2999, rating: 4.4, stock: 50, image: "https://picsum.photos/300?random=9" },
  { id: 10, title: "Gaming Keyboard", category: "Accessories", price: 4999, rating: 4.6, stock: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7WpEUZRr8Uf8JUrhlAsSZD0cykjJJWNB60pD7ahRIA&s=10" },
  { id: 11, title: "Gaming Mouse", category: "Accessories", price: 2499, rating: 4.5, stock: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUKjPW-JKCAglxL1DIl9hZLACEoPqYjTi3gHqnG9OQA&s=10" },
  { id: 12, title: "Bluetooth Speaker", category: "Electronics", price: 3999, rating: 4.7, stock: 28, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1Hja6_pBeNUuRUWdhzbkEfRM8yUqdjt5S0ubJcaCOg&s=10" },
  { id: 13, title: "Smart TV 55 Inch", category: "Electronics", price: 45999, rating: 4.8, stock: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQYkpD5wkGxMPgSKqKDVs_OyH24SNOwENcZO5pE8z-g&s=10" },
  { id: 14, title: "HP Pavilion Laptop", category: "Laptop", price: 68999, rating: 4.6, stock: 14, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49VZPqWqaeIwz1e6Jojcb5bvDb4XT0cPaI_0ImIgIOw&s=10" },
  { id: 15, title: "Lenovo ThinkPad", category: "Laptop", price: 79999, rating: 4.7, stock: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zKbO3Ei4La6JOfL7FCmJhANR2TWCbFs4kK9BTwrlpA&s=10" },
  { id: 16, title: "OnePlus 13", category: "Mobile", price: 54999, rating: 4.8, stock: 19, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToV0EuNSDn98BSgJPO5HuqaoA0UuUeUjpKtaVfgMcfWg&s=10" },
  { id: 17, title: "Realme GT", category: "Mobile", price: 32999, rating: 4.5, stock: 26, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHXHAH6VsFCX1FWXHgJhdSQY6E47114pYQL34EtSRrA&s=10" },
  { id: 18, title: "Boat Rockerz Headphones", category: "Headphones", price: 1999, rating: 4.4, stock: 45, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tdnlMDqhugEApWQqf-x-Y_-d4W2Y062lrxVatI9peA&s=10" },
  { id: 19, title: "Canon DSLR Camera", category: "Camera", price: 58999, rating: 4.7, stock: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29K4jGE7xAQhL5QyUyz75srFShN-2YT1QYqnw3JIo6Q&s=10" },
  { id: 20, title: "Apple iPad Air", category: "Tablet", price: 64999, rating: 4.9, stock: 13, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0H1Xfma8-NblRnCRi2lXVmLLX_ftO_JqOaZttxwJnA&s=10" },
  { id: 21, title: "Samsung Galaxy Tab S9", category: "Tablet", price: 58999, rating: 4.7, stock: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnrnIa4GriM2sV8acE5bwTMi6cfYQp1_9UcMqtrJpPg&s=10" },
  { id: 22, title: "Sony PlayStation 5", category: "Gaming", price: 54999, rating: 4.9, stock: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_yXphUDmc49-hGUTwYsMAzpA1YcoBdHlJtUEFiYIeg&s=10" },
 
];

export default Data;