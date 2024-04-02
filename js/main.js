"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
            Gallery filter
        --------------------*/
    $(".filter__controls li").on("click", function () {
      $(".filter__controls li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".product__filter").length > 0) {
      var containerEl = document.querySelector(".product__filter");
      var mixer = mixitup(containerEl);
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Search Switch
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
        Accordin Active
    --------------------*/
  $(".collapse").on("shown.bs.collapse", function () {
    $(this).prev().addClass("active");
  });

  $(".collapse").on("hidden.bs.collapse", function () {
    $(this).prev().removeClass("active");
  });

  //Canvas Menu
  $(".canvas__open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  /*-----------------------
        Hero Slider
    ------------------------*/
  $(".hero__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: [
      "<span class='arrow_left'><span/>",
      "<span class='arrow_right'><span/>",
    ],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false,
  });

  /*--------------------------
        Select
    ----------------------------*/
  $("select").niceSelect();

  /*-------------------
		Radio Btn
	--------------------- */
  $(
    ".product__color__select label, .shop__sidebar__size label, .product__details__option__size label"
  ).on("click", function () {
    $(
      ".product__color__select label, .shop__sidebar__size label, .product__details__option__size label"
    ).removeClass("active");
    $(this).addClass("active");
  });

  /*-------------------
		Scroll
	--------------------- */
  $(".nice-scroll").niceScroll({
    cursorcolor: "#0d0d0d",
    cursorwidth: "5px",
    background: "#e5e5e5",
    cursorborder: "",
    autohidemode: true,
    horizrailenabled: false,
  });

  /*------------------
        CountDown
    --------------------*/
  // For demo preview start
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  if (mm == 12) {
    mm = "01";
    yyyy = yyyy + 1;
  } else {
    mm = parseInt(mm) + 1;
    mm = String(mm).padStart(2, "0");
  }
  var timerdate = mm + "/" + dd + "/" + yyyy;

  $("#countdown").countdown(timerdate, function (event) {
    $(this).html(
      event.strftime(
        "<div class='cd-item'><span>%D</span> <p>Days</p> </div>" +
          "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" +
          "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" +
          "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"
      )
    );
  });

  /*------------------
		Magnific
	--------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*-------------------
		Quantity change
	--------------------- */
  var proQty = $(".pro-qty");
  proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
  proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
  proQty.on("click", ".qtybtn", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  var proQty = $(".pro-qty-2");
  proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
  proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
  proQty.on("click", ".qtybtn", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  /*------------------
        Achieve Counter
    --------------------*/
  $(".cn_num").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  function throwError(form, message) {
    $(form).find(".errors .errors__list").empty();
    if (message.length > 0) {
      $(form).find(".errors").removeClass("hidden");
      message.forEach((m) => {
        $(form)
          .find(".errors .errors__list")
          .append("<li>" + m + "</li>");
      });
    }
  }

  /*------------------------
        Profile
  --------------------------*/
  $(".profile #v-pills-tab a.nav-link").each((index, element) => {
    $(element).on("click", (event) => {
      event.preventDefault();
      $(".profile #v-pills-tab a.nav-link").removeClass("active");
      $(element).addClass("active");
      var tabPanes = $(".profile #v-pills-tabContent .tab-pane");
      tabPanes.removeClass(["active", "show"]);
      $(".profile #v-pills-tabContent " + $(element).attr("href")).addClass([
        "show",
        "active",
      ]);
    });
  });

  /*----------------------
    Signup
  -----------------------*/
  $(".signup__form form").on("submit", function (event) {
    event.preventDefault();

    var first_name = $(".signup__form .signup__first-name");
    var last_name = $(".signup__form .signup__last-name");
    var email = $(".signup__form .signup__email");
    var password = $(".signup__form .signup__password");
    var password_confirm = $(".signup__form .signup__password-confirm");
    $(this).find(".error").removeClass("error");

    var error_messages = [];

    if (first_name.val() == "") {
      first_name.addClass("error");
      error_messages.push("First name is required");
    }
    if (last_name.val() == "") {
      last_name.addClass("error");
      error_messages.push("Last name is required");
    }

    if (email.val() == "") {
      email.addClass("error");
      error_messages.push("Email is required");
    }
    if (password.val() == "") {
      password.addClass("error");
      error_messages.push("Password is required");
    }
    if (password_confirm.val() == "") {
      password_confirm.addClass("error");
      error_messages.push("Password confirm is required");
    }

    if (password.val() != password_confirm.val()) {
      password_confirm.addClass("error");
      error_messages.push("Passwords do not match");
    }

    if (error_messages.length > 0) {
      throwError(this, error_messages);
      return;
    }
    var user_profiles = JSON.parse(localStorage.getItem("user_profiles"));
    if (user_profiles == null) {
      user_profiles = [];
    }

    var user_profile = user_profiles.find((p) => p.email == email.val());
    if (!user_profile) {
      user_profiles.push({
        first_name: first_name.val(),
        last_name: last_name.val(),
        email: email.val(),
        password: password.val(),
        logged_in: false,
      });
      localStorage.setItem("user_profiles", JSON.stringify(user_profiles));
    } else {
      alert("Already registered");
    }
    first_name.val("");
    last_name.val("");
    email.val("");
    password.val("");
    password_confirm.val("");
  });

  /*---------------------------
            Login Form
  -----------------------------*/

  $(".login__form form").on("submit", function (event) {
    event.preventDefault();

    var email = $(".login__form .login__email");
    var password = $(".login__form .login__password");
    $(this).find(".error").removeClass("error");

    var error_messages = [];

    if (email.val() == "") {
      email.addClass("error");
      error_messages.push("Email is required");
    }
    if (password.val() == "") {
      password.addClass("error");
      error_messages.push("Password is required");
    }

    if (error_messages.length > 0) {
      throwError(this, error_messages);
      return;
    }

    var user_profiles = JSON.parse(localStorage.getItem("user_profiles"));
    if (user_profiles == null) {
      error_messages.push("User not registered");
      throwError(this, error_messages);
      return;
    }

    var user_profile = user_profiles.find(
      (p) => p.email == email.val() && p.password == password.val()
    );

    if (user_profile == null) {
      error_messages.push("Invalid email or password");
      throwError(this, error_messages);
      return;
    }
    user_profiles.find((p) => {
      if (p.email == user_profile.email) {
        p.logged_in = true;
      }
    });
    localStorage.setItem("user_profiles", JSON.stringify(user_profiles));
    localStorage.setItem("current_user", JSON.stringify(user_profile));
    email.val("");
    password.val("");
    checkLoginStatus();
  });

  $(".header__top__right .header__top__logout").on("click", logout);
  function logout() {
    var current_session = JSON.parse(localStorage.getItem("current_user"));
    var profiles = JSON.parse(localStorage.getItem("user_profiles"));
    if (profiles != null) {
      if (current_session != null) {
        profiles.filter((p) => {
          if (p.email == current_session.email) {
            p.logged_in = false;
          }
          return p;
        });
        localStorage.removeItem("current_user");
        clearCartProducts();
        checkLoginStatus();
      }
    }
  }

  // loadProducts();

  saveProducts([
    {
      title: "Product 1",
      price: 10,
      description: "Piqué Biker Jacket",
      image: "img/product/product-2.jpg",
      category: "clothing",
      quantity: 10,
      rating: 4,
      brand: "Gucci",
      product_meta: "sale",
    },
    {
      title: "Multi-pocket Chest Bag",
      price: 20,
      description: "Product 2 description",
      image: "img/product/product-3.jpg",
      category: "shoes",
      quantity: 20,
      rating: 5,
      brand: "Chanel",
      product_meta: "",
    },
    {
      title: "Diagonal Textured Cap",
      price: 30,
      description: "Product 3 description",
      image: "img/product/product-4.jpg",
      category: "bags",
      quantity: 30,
      rating: 3,
      brand: "Chanel",
      product_meta: "new",
    },
    {
      title: "Lether Backpack",
      price: 40,
      description: "Product 4 description",
      image: "img/product/product-5.jpg",
      category: "bags",
      quantity: 40,
      rating: 2,
      brand: "Louis Vuitton",
      product_meta: "",
    },
  ]);

  saveCategory("clothing");
  saveCategory("shoes");
  saveCategory("bags");
  saveBrand("Gucci");
  saveBrand("Chanel");
  saveBrand("Louis Vuitton");
})(jQuery);
function checkLoginStatus() {
  var current_session = JSON.parse(localStorage.getItem("current_user"));

  if (current_session != null && current_session.logged_in) {
    $(".header__top__right .header__top__login-meta").removeClass("hidden");
    $(".header__top__right .header__top__user-name").html(
      current_session.last_name
    );

    $(".header__top__right .header__top__login").addClass("hidden");
    return true;
  }
  return false;
}
function getCurrentUser() {
  var current_session = JSON.parse(localStorage.getItem("current_user"));
  if (!current_session) return false;
  return current_session;
}
checkLoginStatus();
function saveCategory(category) {
  var categories = JSON.parse(localStorage.getItem("categories"));
  if (categories == null) {
    categories = [];
  }
  categories.push(category);
  localStorage.setItem("categories", JSON.stringify(categories));
}
function loadCategories() {
  var categories = JSON.parse(localStorage.getItem("categories"));
  if (categories == null) {
    categories = [];
  }
  return categories;
}

function saveBrand(brand) {
  var brands = JSON.parse(localStorage.getItem("brands"));
  if (brands == null) {
    brands = [];
  }
  brands.push(brand);
  localStorage.setItem("brands", JSON.stringify(brands));
}
function loadBrands() {
  var brands = JSON.parse(localStorage.getItem("brands"));
  if (brands == null) {
    brands = [];
  }
  return brands;
}

function saveProducts(products) {
  localStorage.removeItem("products");
  products.forEach((product) => saveProduct(product));
}

function saveProduct(product) {
  var products = loadProducts();
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
}
function deleteProduct(product) {
  var products = loadProducts();
  products.filter((p) => {
    if (p.title != product.title) {
      return p;
    }
  });
  localStorage.setItem("products", JSON.stringify(products));
  return true;
}
function loadCartProducts() {
  var cart_products = JSON.parse(localStorage.getItem("cart_products"));
  if (cart_products == null) {
    cart_products = [];
  }
  return cart_products;
}
function clearCartProducts() {
  localStorage.removeItem("cart_products");
  updateNavCart();
}
function updateNavCart() {
  var navCart = $(".header__nav__option a")[2];
  var cart_products = loadCartProducts();
  var all_products = loadProducts();
  if (cart_products.length >= 1 && cart_products.length <= 9) {
    $(navCart).find("span").html(cart_products.length);
  } else if (cart_products.length >= 10) {
    $(navCart).find("span").html("9+");
  } else {
    $(navCart).find("span").html("0");
  }
  var total_price = 0;
  var navCartPrice = $(".header__nav__option .price");
  all_products.forEach((product, index) => {
    cart_products.forEach((cart_product) => {
      if (index == cart_product.index) {
        total_price += product.price * cart_product.quantity;
      }
    });
  });

  navCartPrice.html("$" + total_price);
}

function addToCartByIndex(i) {
  if (!checkLoginStatus()) {
    alert("Login First");
    return;
  }
  var current_user = JSON.parse(localStorage.getItem("current_user"));
  var all_products = loadProducts();
  var cart_products = loadCartProducts();

  var product = cart_products.find((p) => p.index == i);
  var quantity = parseInt(
    $(".product__details__cart__option .quantity input").val()
  );
  if (!product) {
    if (!quantity) quantity = 1;
    cart_products.push({ index: i, quantity: quantity });
  } else {
    cart_products.map((p) => {
      if (p.index == i) {
        var pr = all_products[i];
        if (pr.quantity != 0 && p.quantity < pr.quantity) {
          if (!quantity) quantity = 1;
          if (p.quantity + quantity <= pr.quantity) {
            p.quantity += quantity;
          }
        }
      }
    });
  }

  localStorage.setItem("cart_products", JSON.stringify(cart_products));
  updateNavCart();
}

function loadOrders() {
  var orders = JSON.parse(localStorage.getItem("orders"));
  if (orders == null) {
    orders = [];
  }
  return orders;
}

function loadCurrentUserOrders() {
  var orders = loadOrders();
  if (orders == null) {
    orders = [];
  }

  var user_orders = orders.filter((o) => o.email == getCurrentUser().email);
  return user_orders;
}
function saveOrder(order) {
  var orders = loadOrders();
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  clearCartProducts();
}
function updateOrderStatus(status) {
  var user_orders = loadCurrentUserOrders();
  user_orders.find((o) => {
    if (o.id == status.id) {
      o.status = status.status;
    }
  });
  localStorage.setItem("user_orders", JSON.stringify(user_orders));
}
function deleteOrder(order) {
  var user_orders = loadCurrentUserOrders();
  user_orders.filter((o) => {
    if (o.title != order.title) {
      return o;
    }
  });
  localStorage.setItem("user_orders", JSON.stringify(user_orders));
}

function saveWishlist(index) {
  var wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist == null) {
    wishlist = [];
  }
  wishlist.push(index);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
function loadWishlist() {
  var wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist == null) {
    wishlist = [];
  }
  return wishlist;
}
function checkWishListStatus(index) {
  var wishlist = loadWishlist();
  if (wishlist.includes(index)) {
    return '<i class="fa fa-heart"></i>';
  }
  return '<i class="fa fa-heart-o"></i>';
}
function deleteWishlist(index) {
  var wishlist = JSON.parse(localStorage.getItem("wishlist"));
  wishlist.filter((p) => {
    if (p != index) {
      return p;
    }
  });
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  return true;
}

function searchProduct(title) {
  var products = loadProducts();
  return products.find((p) => p.title == title);
}

function loadBestSellerProducts() {
  var products = loadProducts();
  return products.filter((p) => p.best_seller);
}
function loadNewArrivalProducts() {
  var products = loadProducts();
  return products.filter((p) => p.new_arrival);
}
function loadFeaturedProducts() {
  var products = loadProducts();
  return products.filter((p) => p.featured);
}
function loadProductsByCategory(category) {
  var products = loadProducts();
  return products.filter((p) => p.category == category);
}
function loadProductsByBrand(brand) {
  var products = loadProducts();
  return products.filter((p) => p.brand == brand);
}
function loadProductsByPrice(price) {
  var products = loadProducts();
  return products.filter((p) => p.price == price);
}
function loadProductsByTag(tag) {
  var products = loadProducts();
  return products.filter((p) => p.tag == tag);
}
function loadProducts() {
  var products = JSON.parse(localStorage.getItem("products"));
  if (products == null) {
    products = [];
  }
  return products;
}

function proQuantityInc(quantity) {
  var input = $(".product__details__cart__option .quantity input").val();
  if (!input) {
    input = $(".product__cart__item .pro-qty-2 input").val();
  }
  if (input < quantity) {
    $(".product__details__cart__option .quantity input").val(
      parseInt(input) + 1
    );
    $(".product__cart__item .pro-qty-2 input").val(parseInt(input) + 1);
  }
}
function proQuantityDec() {
  var input = $(".product__details__cart__option .quantity input").val();
  if (!input) {
    input = $(".product__cart__item .pro-qty-2 input").val();
  }
  if (input > 1) {
    $(".product__details__cart__option .quantity input").val(
      parseInt(input) - 1
    );
    $(".product__cart__item .pro-qty-2 input").val(parseInt(input) - 1);
  }
}

updateNavCart();
