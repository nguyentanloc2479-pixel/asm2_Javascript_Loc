var products = [
  {
    id: 1,
    name: "Tranh Mặt Trăng",
    price: 2500000000,
    image: "images/Mặt Trăng.webp",
    category: "Hành tinh",
    tag: "hot",
    description: "Bức tranh Mặt Trăng với nhiều chi tiết bề mặt thú vị.",
  },
  {
    id: 2,
    name: "Tranh Mưa sao băng",
    price: 12300000000,
    image: "images/Mưa sao băng.webp",
    category: "Vũ trụ",
    tag: "new",
    description: "Khoảnh khắc mưa sao băng rực sáng trên bầu trời đêm.",
  },
  {
    id: 3,
    name: "Tranh Ngân Hà",
    price: 290000000000,
    image: "images/Ngân Hà.webp",
    category: "Vũ trụ",
    tag: "hot",
    description: "Hình ảnh Ngân Hà đầy màu sắc dành cho góc học tập.",
  },
  {
    id: 4,
    name: "Tranh Sao Hải Vương",
    price: 1270000000000,
    image: "images/Sao Hải Vương.jpg",
    category: "Hành tinh",
    tag: "new",
    description: "Hình ảnh Sao Hải Vương màu xanh trong không gian.",
  },
  {
    id: 5,
    name: "Tranh Sao Hỏa",
    price: 26000000000,
    image: "images/Sao Hỏa.jpg",
    category: "Hành tinh",
    tag: "hot",
    description: "Bức tranh Sao Hỏa với sắc đỏ đặc trưng.",
  },
  {
    id: 6,
    name: "Tranh Sao Kim",
    price: 2400000000,
    image: "images/Sao Kim.jpg",
    category: "Hành tinh",
    tag: "sale",
    description: "Hình ảnh Sao Kim nổi bật với tông màu vàng cam.",
  },
  {
    id: 7,
    name: "Tranh Sao Mộc",
    price: 280000000000,
    image: "images/Sao Mộc.jpg",
    category: "Hành tinh",
    tag: "hot",
    description: "Bức tranh Sao Mộc với các dải mây đặc trưng.",
  },
  {
    id: 8,
    name: "Tranh Sao chổi",
    price: 300000000000,
    image: "images/Sao chổi.png",
    category: "Vũ trụ",
    tag: "new",
    description: "Hình ảnh sao chổi có phần đuôi sáng nổi bật.",
  },
  {
    id: 9,
    name: "Tranh Sao Thổ",
    price: 275000000000,
    image: "images/Sao Thổ.jpg",
    category: "Hành tinh",
    tag: "hot",
    description: "Bức tranh Sao Thổ cùng hệ thống vành đai nổi tiếng.",
  },
  {
    id: 10,
    name: "Tranh Sao Thiên Vương",
    price: 26500000000,
    image: "images/Sao Thiên Vương.webp",
    category: "Hành tinh",
    tag: "new",
    description: "Hình ảnh Sao Thiên Vương với sắc xanh dịu mắt.",
  },
  {
    id: 11,
    name: "Tranh Sao Thủy",
    price: 2300000000,
    image: "images/Sao Thủy.jpg",
    category: "Hành tinh",
    tag: "sale",
    description: "Bức tranh Sao Thủy với bề mặt nhiều màu sắc.",
  },
  {
    id: 12,
    name: "Tranh Trái Đất",
    price: 25000000000,
    image: "images/Trái Đất.jpg",
    category: "Hành tinh",
    tag: "hot",
    description: "Hình ảnh Trái Đất nhìn từ ngoài không gian.",
  },
  {
    id: 13,
    name: "Bộ tranh các hành tinh",
    price: 520000000000,
    image: "images/Sao Mộc.jpg",
    category: "Hành tinh",
    tag: "new",
    description: "Bộ tranh trang trí lấy cảm hứng từ các hành tinh.",
  },
  {
    id: 14,
    name: "Tranh Trăng đêm",
    price: 22000000000,
    image: "images/Mặt Trăng.webp",
    category: "Vũ trụ",
    tag: "sale",
    description: "Một góc nhìn khác về Mặt Trăng trong đêm tối.",
  },
  {
    id: 15,
    name: "Tranh Dải ngân hà",
    price: 3400000000000,
    image: "images/Ngân Hà.webp",
    category: "Vũ trụ",
    tag: "hot",
    description: "Bức tranh dải ngân hà cho người yêu thiên văn.",
  },
  {
    id: 16,
    name: "Tranh Bầu trời sao",
    price: 31000000000,
    image: "images/Mưa sao băng.webp",
    category: "Vũ trụ",
    tag: "new",
    description: "Bầu trời đêm đầy sao với ánh sáng lung linh.",
  },
  {
    id: 17,
    name: "Tranh Hành tinh xanh",
    price: 2450000000,
    image: "images/Sao Thiên Vương.webp",
    category: "Hành tinh",
    tag: "sale",
    description: "Sắc xanh của một hành tinh xa xôi.",
  },
  {
    id: 18,
    name: "Tranh Hành tinh đỏ",
    price: 255000000000,
    image: "images/Sao Hỏa.jpg",
    category: "Hành tinh",
    tag: "hot",
    description: "Trang trí không gian với hình ảnh hành tinh đỏ.",
  },
  {
    id: 19,
    name: "Tranh Sao chổi xanh",
    price: 330000000000,
    image: "images/Sao chổi.png",
    category: "Vũ trụ",
    tag: "new",
    description: "Hình ảnh sao chổi phát sáng trên nền trời đêm.",
  },
  {
    id: 20,
    name: "Tranh Hệ Mặt Trời",
    price: 150000000000000000,
    image: "images/Trái Đất.jpg",
    category: "Hành tinh",
    tag: "hot",
    description: "Bộ tranh chủ đề các hành tinh trong Hệ Mặt Trời.",
  },
];

var cart = readData("cart", []);
var users = readData("users", [
  { name: "Bạn dùng thử", email: "Loc@gmail.com", password: "123456" },
]);
var currentUser = readData("currentUser", null);
var selectedCategory = "Tất cả";
var toastTimer;

if (
  !users.some(function (user) {
    return user.email === "Loc@gmail.com";
  })
) {
  users.push({ name: "Bạn dùng thử", email: "Loc@gmail.com", password: "123456" });
  saveData("users", users);
}

function readData(key, defaultValue) {
  var savedValue = localStorage.getItem(key);
  if (savedValue === null) {
    return defaultValue;
  }

  try {
    return JSON.parse(savedValue);
  } catch (error) {
    console.error("Không thể đọc dữ liệu " + key + " từ localStorage.", error);
    return defaultValue;
  }
}

function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatPrice(price) {
  return price.toLocaleString("vi-VN") + "đ";
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    var entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[character];
  });
}

function findProduct(id) {
  return products.find(function (product) {
    return product.id === Number(id);
  });
}

function getCartCount() {
  return cart.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);
}

function getCartTotal() {
  return cart.reduce(function (total, item) {
    var product = findProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function showMessage(message) {
  var toast = document.getElementById("toast");
  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2200);
}

function updateHeader() {
  var count = document.getElementById("cartCount");
  var guestBox = document.getElementById("guestBox");
  var userBox = document.getElementById("userBox");
  var userName = document.getElementById("userName");
  var logoutButton = document.getElementById("logoutBtn");

  if (count) {
    count.textContent = getCartCount();
  }
  if (guestBox && userBox) {
    guestBox.classList.toggle("hidden", Boolean(currentUser));
    userBox.classList.toggle("hidden", !currentUser);
  }
  if (userName && currentUser) {
    userName.textContent = "Xin chào, " + currentUser.name;
  }
  if (logoutButton) {
    logoutButton.onclick = logout;
  }
}

function saveCart() {
  saveData("cart", cart);
  updateHeader();
  renderCart();
}

function addToCart(id) {
  var product = findProduct(id);
  if (!product) {
    showMessage("Không tìm thấy sản phẩm.");
    return;
  }

  var foundItem = cart.find(function (item) {
    return item.id === product.id;
  });
  if (foundItem) {
    foundItem.quantity++;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  saveCart();
  showMessage("Đã thêm sản phẩm vào giỏ hàng.");
}

function changeQuantity(id, amount) {
  var item = cart.find(function (cartItem) {
    return cartItem.id === Number(id);
  });
  if (!item) {
    return;
  }

  item.quantity += amount;
  if (item.quantity < 1) {
    item.quantity = 1;
  }
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(function (item) {
    return item.id !== Number(id);
  });
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

function productCard(product) {
  var tagLabels = { hot: "Nổi bật", new: "Mới", sale: "Ưu đãi" };
  var tag = tagLabels[product.tag]
    ? '<span class="tag tag-' + product.tag + '">' + tagLabels[product.tag] + "</span>"
    : "";

  return (
    '<article class="product-card">' +
    '<a class="product-img" href="Detail.html?id=' +
    product.id +
    '">' +
    tag +
    '<img src="' +
    escapeHTML(product.image) +
    '" alt="' +
    escapeHTML(product.name) +
    '">' +
    '</a><div class="product-info">' +
    '<span class="product-category">' +
    escapeHTML(product.category) +
    "</span>" +
    '<h3><a href="Detail.html?id=' +
    product.id +
    '">' +
    escapeHTML(product.name) +
    "</a></h3>" +
    '<p class="product-price">' +
    formatPrice(product.price) +
    "</p>" +
    '<div class="card-actions"><a class="btn btn-outline btn-small" href="Detail.html?id=' +
    product.id +
    '">Chi tiết</a><button class="btn btn-small" onclick="addToCart(' +
    product.id +
    ')">Thêm giỏ hàng</button></div></div></article>'
  );
}

function renderProductCards(list, target) {
  if (target) {
    target.innerHTML = list.map(productCard).join("");
  }
}

function initializeHome() {
  renderProductCards(
    products
      .filter(function (product) {
        return product.tag === "hot";
      })
      .slice(0, 4),
    document.getElementById("featuredList"),
  );

  renderProductCards(
    products
      .filter(function (product) {
        return product.tag === "new";
      })
      .slice(0, 4),
    document.getElementById("newList"),
  );
}

function initializeProducts() {
  var searchInput = document.getElementById("searchInput");
  var priceSelect = document.getElementById("priceSelect");
  var sortSelect = document.getElementById("sortSelect");
  var resetButton = document.getElementById("resetBtn");
  var categoryBox = document.getElementById("categoryBox");

  if (!searchInput || !priceSelect || !sortSelect || !categoryBox) {
    return;
  }

  var categories = ["Tất cả"].concat(
    products
      .map(function (product) {
        return product.category;
      })
      .filter(function (category, index, list) {
        return list.indexOf(category) === index;
      }),
  );

  categoryBox.innerHTML = categories
    .map(function (category) {
      return (
        '<button class="chip' +
        (category === selectedCategory ? " active" : "") +
        '" data-category="' +
        escapeHTML(category) +
        '">' +
        escapeHTML(category) +
        "</button>"
      );
    })
    .join("");

  categoryBox.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-category]");
    if (!button) {
      return;
    }
    selectedCategory = button.getAttribute("data-category");
    categoryBox.querySelectorAll(".chip").forEach(function (chip) {
      chip.classList.toggle("active", chip === button);
    });
    renderProducts();
  });

  searchInput.addEventListener("input", renderProducts);
  priceSelect.addEventListener("change", renderProducts);
  sortSelect.addEventListener("change", renderProducts);
  resetButton.addEventListener("click", function () {
    searchInput.value = "";
    priceSelect.value = "all";
    sortSelect.value = "default";
    selectedCategory = "Tất cả";
    categoryBox.querySelectorAll(".chip").forEach(function (chip) {
      chip.classList.toggle("active", chip.getAttribute("data-category") === selectedCategory);
    });
    renderProducts();
  });

  renderProducts();
}

function renderProducts() {
  var listElement = document.getElementById("productList");
  if (!listElement) {
    return;
  }

  var keyword = document.getElementById("searchInput").value.trim().toLowerCase();
  var price = document.getElementById("priceSelect").value;
  var sort = document.getElementById("sortSelect").value;
  var result = products.filter(function (product) {
    var matchesName = product.name.toLowerCase().indexOf(keyword) !== -1;
    var matchesCategory = selectedCategory === "Tất cả" || product.category === selectedCategory;
    var matchesPrice =
      price === "all" ||
      (price === "low" && product.price < 10000000000) ||
      (price === "mid" && product.price >= 10000000000 && product.price <= 100000000000) ||
      (price === "high" && product.price > 100000000000);
    return matchesName && matchesCategory && matchesPrice;
  });

  if (sort === "asc") {
    result.sort(function (first, second) {
      return first.price - second.price;
    });
  } else if (sort === "desc") {
    result.sort(function (first, second) {
      return second.price - first.price;
    });
  }

  document.getElementById("resultCount").textContent = "Tìm thấy " + result.length + " sản phẩm";
  document.getElementById("emptyMessage").classList.toggle("hidden", result.length !== 0);
  listElement.classList.toggle("hidden", result.length === 0);
  renderProductCards(result, listElement);
}

function initializeDetail() {
  var detailBox = document.getElementById("detailBox");
  if (!detailBox) {
    return;
  }

  var id = new URLSearchParams(window.location.search).get("id");
  var product = findProduct(id);
  if (!product) {
    detailBox.innerHTML =
      '<div class="empty-box"><h2>Không tìm thấy sản phẩm.</h2>' +
      '<a class="btn" href="products.html">Quay lại sản phẩm</a></div>';
    document.getElementById("relatedSection").classList.add("hidden");
    return;
  }

  detailBox.innerHTML =
    '<div class="detail"><div class="detail-img"><img src="' +
    escapeHTML(product.image) +
    '" alt="' +
    escapeHTML(product.name) +
    '"></div>' +
    '<div class="detail-info"><span class="product-category">' +
    escapeHTML(product.category) +
    "</span><h1>" +
    escapeHTML(product.name) +
    '</h1><p class="detail-price">' +
    formatPrice(product.price) +
    '</p><p class="detail-desc">' +
    escapeHTML(product.description) +
    '</p><p class="detail-list">✓ Tranh in màu sắc nét<br>✓ Đóng gói cẩn thận<br>✓ Giao hàng toàn quốc</p>' +
    '<button class="btn" onclick="addToCart(' +
    product.id +
    ')">Thêm vào giỏ hàng</button></div></div>';

  renderProductCards(
    products
      .filter(function (item) {
        return item.category === product.category && item.id !== product.id;
      })
      .slice(0, 4),
    document.getElementById("relatedList"),
  );
}

function renderCart() {
  var cartItems = document.getElementById("cartItems");
  if (!cartItems) {
    return;
  }

  var empty = document.getElementById("emptyCart");
  var wrapper = document.getElementById("cartWrapper");
  empty.classList.toggle("hidden", cart.length !== 0);
  wrapper.classList.toggle("hidden", cart.length === 0);
  if (cart.length === 0) {
    cartItems.innerHTML = "";
    return;
  }

  cartItems.innerHTML = cart
    .map(function (item) {
      var product = findProduct(item.id);
      if (!product) {
        return "";
      }
      return (
        '<div class="cart-item"><img src="' +
        escapeHTML(product.image) +
        '" alt="' +
        escapeHTML(product.name) +
        '"><div class="cart-name"><h3><a href="Detail.html?id=' +
        product.id +
        '">' +
        escapeHTML(product.name) +
        '</a></h3><span class="muted">' +
        formatPrice(product.price) +
        '</span></div><div class="qty"><button onclick="changeQuantity(' +
        product.id +
        ',-1)" aria-label="Giảm số lượng">−</button><span>' +
        item.quantity +
        '</span><button onclick="changeQuantity(' +
        product.id +
        ',1)" aria-label="Tăng số lượng">+</button></div><div class="cart-line-total">' +
        formatPrice(product.price * item.quantity) +
        '</div><button class="remove-btn" onclick="removeFromCart(' +
        product.id +
        ')" aria-label="Xóa sản phẩm">×</button></div>'
      );
    })
    .join("");

  updateSummary();
}

function updateSummary() {
  var subtotal = document.getElementById("subtotal");
  var total = document.getElementById("total");

  if (subtotal) subtotal.textContent = formatPrice(getCartTotal());
  if (total) total.textContent = formatPrice(getCartTotal());
}

function initializeCart() {
  var clearButton = document.getElementById("clearBtn");
  if (clearButton) clearButton.addEventListener("click", clearCart);
  renderCart();
}

function initializeRegister() {
  var form = document.getElementById("registerForm");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim().toLowerCase();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm").value;
    var errors = {
      nameError: name ? "" : "Vui lòng nhập họ và tên.",
      emailError: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email chưa đúng định dạng.",
    };
    var registered = users.some(function (user) {
      return user.email.toLowerCase() === email;
    });
    if (registered) errors.emailError = "Email này đã được đăng ký.";
    errors.passwordError = password.length >= 6 ? "" : "Mật khẩu cần ít nhất 6 ký tự.";
    errors.confirmError = confirmPassword === password ? "" : "Mật khẩu xác nhận chưa khớp.";

    Object.keys(errors).forEach(function (id) {
      document.getElementById(id).textContent = errors[id];
    });
    var hasError = Object.keys(errors).some(function (id) {
      return errors[id] !== "";
    });
    var formMessage = document.getElementById("formMessage");
    if (hasError) {
      formMessage.textContent = "Vui lòng kiểm tra lại thông tin.";
      formMessage.className = "msg error";
      return;
    }

    users.push({ name: name, email: email, password: password });
    saveData("users", users);
    formMessage.textContent = "Đăng ký thành công! Đang chuyển đến trang đăng nhập...";
    formMessage.className = "msg success";
    setTimeout(function () {
      window.location.href = "Login.html";
    }, 900);
  });
}

function initializeLogin() {
  var form = document.getElementById("loginForm");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var loginName = document.getElementById("email").value.trim().toLowerCase();
    var password = document.getElementById("password").value;
    var message = document.getElementById("formMessage");
    if (!loginName || !password) {
      message.textContent = "Vui lòng nhập đầy đủ email và mật khẩu.";
      message.className = "msg error";
      return;
    }

    var user = users.find(function (account) {
      return (
        (account.email.toLowerCase() === loginName || account.name.toLowerCase() === loginName) &&
        account.password === password
      );
    });
    if (!user) {
      message.textContent = "Email hoặc mật khẩu không chính xác.";
      message.className = "msg error";
      return;
    }

    currentUser = { name: user.name, email: user.email };
    saveData("currentUser", currentUser);
    message.textContent = "Đăng nhập thành công!";
    message.className = "msg success";
    setTimeout(function () {
      window.location.href = "index.html";
    }, 700);
  });
}

function logout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function initializeCheckout() {
  var form = document.getElementById("checkoutForm");
  if (!form) {
    return;
  }

  var empty = document.getElementById("checkoutEmpty");
  var wrapper = document.getElementById("checkoutWrapper");
  var done = document.getElementById("checkoutDone");
  if (!currentUser) {
    wrapper.classList.add("hidden");
    empty.classList.remove("hidden");
    empty.querySelector("h2").textContent = "Vui lòng đăng nhập để tiếp tục thanh toán.";
    var loginLink = empty.querySelector("a");
    loginLink.href = "Login.html";
    loginLink.textContent = "Đăng nhập";
    return;
  }
  if (cart.length === 0) {
    wrapper.classList.add("hidden");
    empty.classList.remove("hidden");
    return;
  }

  document.getElementById("fullName").value = currentUser.name;
  document.getElementById("email").value = currentUser.email;
  document.getElementById("orderItems").innerHTML = cart
    .map(function (item) {
      var product = findProduct(item.id);
      if (!product) return "";
      return (
        '<div class="order-item"><img src="' +
        escapeHTML(product.image) +
        '" alt="' +
        escapeHTML(product.name) +
        '"><div><h4>' +
        escapeHTML(product.name) +
        '</h4><span class="muted">Số lượng: ' +
        item.quantity +
        "</span></div><b>" +
        formatPrice(product.price * item.quantity) +
        "</b></div>"
      );
    })
    .join("");
  updateSummary();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) {
      return;
    }
    cart = [];
    saveData("cart", cart);
    wrapper.classList.add("hidden");
    done.classList.remove("hidden");
    updateHeader();
  });
}

function startApp() {
  updateHeader();
  initializeHome();
  initializeProducts();
  initializeDetail();
  initializeCart();
  initializeRegister();
  initializeLogin();
  initializeCheckout();
}

document.addEventListener("DOMContentLoaded", startApp);
