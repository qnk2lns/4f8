const createSlug = (text) => text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");


const generateOrderId = (productName, quantity) => `ORD-${productName.toUpperCase().slice(0, 3)}-${quantity}-${productName.length}`;


const formatPrice = (price, currency = "VND") => new Intl.NumberFormat(currency === "VND" ? "vi-VN" : "en-US",
    {
        style: "currency",
        currency,
    }).format(price);


const buildProductUrl = (baseUrl, product) => `${baseUrl}/${createSlug(product.category)}/${createSlug(product.name)}?id=${product.id}`;


console.log([createSlug("MacBook Pro 2024"),    // "macbook-pro-2024"
createSlug("Bàn Phím Cơ RGB"),   // "bn-phm-c-rgb"  ← tiếng Việt mất dấu là bình thường
createSlug("iPhone 15 Pro Max!!!")  // "iphone-15-pro-max"
])

console.log([generateOrderId("MacBook Pro", 2),  // "ORD-MAC-2-11"
generateOrderId("iPhone 15", 5),  // "ORD-IPH-5-9"
generateOrderId("Bàn phím cơ", 1)  // "ORD-BÀN-1-11"
])

console.log([formatPrice(2000000, "VND"),   // "2.000.000 ₫"
formatPrice(2000, "USD"),      // "$2,000.00"
formatPrice(500000)           // "500.000 ₫"  (mặc định VND)
])

const baseUrl = "https://shop.vn";
const product = { name: "MacBook Pro 2024", id: 101, category: "laptop" };
console.log(buildProductUrl(baseUrl, product));  // "https://shop.vn/laptop/macbook-pro-2024-101"