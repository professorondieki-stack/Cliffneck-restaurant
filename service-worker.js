<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#14532d">
  <meta name="description" content="Order delicious meals from CLIFFNECK RESTAURANT.">
  <title>CLIFFNECK RESTAURANT</title>

  <link rel="manifest" href="./manifest.json">

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f8faf7;
      color: #222;
      line-height: 1.6;
    }

    header {
      background: #14532d;
      color: white;
      padding: 18px 6%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    header h1 {
      font-size: 23px;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin-left: 15px;
      font-weight: bold;
    }

    .hero {
      min-height: 420px;
      padding: 80px 20px;
      text-align: center;
      color: white;
      background:
        linear-gradient(#0009, #0009),
        url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400")
        center/cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .hero h2 {
      font-size: 42px;
      margin-bottom: 15px;
    }

    .hero p {
      font-size: 18px;
      margin-bottom: 25px;
    }

    .btn {
      display: inline-block;
      background: #facc15;
      color: #222;
      padding: 12px 22px;
      border-radius: 7px;
      text-decoration: none;
      font-weight: bold;
      border: none;
      cursor: pointer;
    }

    section {
      padding: 55px 6%;
    }

    .section-title {
      text-align: center;
      color: #14532d;
      font-size: 30px;
      margin-bottom: 30px;
    }

    .menu {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 22px;
    }

    .food {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 3px 12px #00000012;
      padding-bottom: 18px;
      text-align: center;
    }

    .food img {
      width: 100%;
      height: 175px;
      object-fit: cover;
    }

    .food h3 {
      margin: 12px 8px 4px;
    }

    .price {
      color: #14532d;
      font-weight: bold;
      font-size: 19px;
      margin: 7px;
    }

    .food button {
      background: #14532d;
      color: white;
      padding: 10px 18px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 8px;
    }

    .about {
      background: #e8f3e9;
      text-align: center;
    }

    .about p {
      max-width: 700px;
      margin: auto;
    }

    .contact {
      text-align: center;
    }

    .contact p {
      margin: 10px;
    }

    footer {
      background: #123d25;
      color: white;
      text-align: center;
      padding: 22px;
    }

    @media (max-width: 600px) {
      header {
        justify-content: center;
        text-align: center;
      }

      nav a {
        margin: 5px 8px;
        display: inline-block;
      }

      .hero h2 {
        font-size: 32px;
      }
    }
  </style>
</head>

<body>

  <header>
    <h1>CLIFFNECK RESTAURANT</h1>

    <nav>
      <a href="#home">Home</a>
      <a href="#menu">Menu</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section class="hero" id="home">
    <h2>Welcome to CLIFFNECK</h2>
    <p>Fresh food, great taste and excellent service.</p>
    <a href="#menu" class="btn">View Our Menu</a>
  </section>

  <section id="menu">
    <h2 class="section-title">Our Food Menu</h2>

    <div class="menu">

      <div class="food">
        <img src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600" alt="Chicken and chips">
        <h3>Chicken & Chips</h3>
        <p class="price">KSh 650</p>
        <button onclick="orderFood('Chicken & Chips',650)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" alt="Beef burger">
        <h3>Beef Burger</h3>
        <p class="price">KSh 450</p>
        <button onclick="orderFood('Beef Burger',450)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600" alt="Fresh juice">
        <h3>Fresh Juice</h3>
        <p class="price">KSh 200</p>
        <button onclick="orderFood('Fresh Juice',200)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo- pizza-1565299624946-b28f40a0ae38?w=600" alt="Pizza">
        <h3>Pizza</h3>
        <p class="price">KSh 800</p>
        <button onclick="orderFood('Pizza',800)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo- pasta-1473093295043-cdd812d0e601?w=600" alt="Italian pasta">
        <h3>Italian Pasta</h3>
        <p class="price">KSh 550</p>
        <button onclick="orderFood('Italian Pasta',550)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=600" alt="Cheese burger">
        <h3>Cheese Burger</h3>
        <p class="price">KSh 500</p>
        <button onclick="orderFood('Cheese Burger',500)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600" alt="French fries">
        <h3>French Fries</h3>
        <p class="price">KSh 200</p>
        <button onclick="orderFood('French Fries',200)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600" alt="Chicken wings">
        <h3>Chicken Wings</h3>
        <p class="price">KSh 400</p>
        <button onclick="orderFood('Chicken Wings',400)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" alt="Fresh salad">
        <h3>Fresh Salad</h3>
        <p class="price">KSh 300</p>
        <button onclick="orderFood('Fresh Salad',300)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1513558161293-cdaf765edfd47?w=600" alt="Fresh lemonade">
        <h3>Fresh Lemonade</h3>
        <p class="price">KSh 180</p>
        <button onclick="orderFood('Fresh Lemonade',180)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600" alt="Iced coffee">
        <h3>Iced Coffee</h3>
        <p class="price">KSh 250</p>
        <button onclick="orderFood('Iced Coffee',250)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" alt="Fruit salad">
        <h3>Fruit Salad</h3>
        <p class="price">KSh 250</p>
        <button onclick="orderFood('Fruit Salad',250)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600" alt="Vegetable bowl">
        <h3>Vegetable Bowl</h3>
        <p class="price">KSh 350</p>
        <button onclick="orderFood('Vegetable Bowl',350)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600" alt="Fresh soup">
        <h3>Fresh Soup</h3>
        <p class="price">KSh 250</p>
        <button onclick="orderFood('Fresh Soup',250)">Order Now</button>
      </div>

      <div class="food">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600" alt="Fresh pastries">
        <h3>Fresh Pastries</h3>
        <p class="price">KSh 150</p>
        <button onclick="orderFood('Fresh Pastries',150)">Order Now</button>
      </div>

    </div>
  </section>

  <section class="about" id="about">
    <h2 class="section-title">About Us</h2>
    <p>
      Welcome to CLIFFNECK RESTAURANT. We serve delicious meals
      prepared with care. Our goal is to give every customer
      a great food experience.
    </p>
  </section>

  <section class="contact" id="contact">
    <h2 class="section-title">Contact Us</h2>
    <p><strong>Restaurant:</strong> CLIFFNECK RESTAURANT</p>
    <p><strong>Phone:</strong> 0141324469</p>
    <p>Place your order through WhatsApp.</p>
    <a class="btn" href="https://wa.me/254141324469" target="_blank">
      Chat With Us
    </a>
  </section>

  <footer>
    <p>© 2026 CLIFFNECK RESTAURANT. All rights reserved.</p>
  </footer>

  <script>
    function orderFood(food, price) {
      const phone = "254141324469";
      const message =
        `Hello CLIFFNECK RESTAURANT, I would like to order ${food}. Price: KSh ${price}.`;
      const url =
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

      window.open(url, "_blank");
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("./service-worker.js")
          .then(function () {
            console.log("CLIFFNECK app is ready");
          })
          .catch(function (error) {
            console.error("Service worker error:", error);
          });
      });
    }
  </script>

</body>
</html>
