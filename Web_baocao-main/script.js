
const PRODUCTS = [
    {
        id: 1,
        name: "Áo Polo Nam Trắng Trơn Basic Cotton Premium",
        category: "polo",
        price: 350000,
        oldPrice: 450000,
        badge: "BEST SELLER",
        rating: 5,
        reviewsCount: 148,
        colors: [
            { name: "Trắng Pure", code: "#FFFFFF" },
            { name: "Đen Tuyền", code: "#000000" },
            { name: "Xanh Navy", code: "#1B263B" }
        ],
        sizes: ["S", "M", "L", "XL"],
        image: "images/polonam1.jpg",
        imageHover: "images/polonam1.jpg"
    },
    {
        id: 2,
        name: "Áo Polo Nam Đen Trơn Thêu Logo Ngực Minimalist",
        category: "polo",
        price: 380000,
        oldPrice: 480000,
        badge: "HOT",
        rating: 4.9,
        reviewsCount: 95,
        colors: [
            { name: "Đen", code: "#111111" },
            { name: "Xám Than", code: "#333333" },
            { name: "Trắng", code: "#FFFFFF" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/polonam2.jfif",
        imageHover: "images/polonam2.jfif"
    },
    {
        id: 3,
        name: "Áo Polo Nam Phối Màu Raglan Trắng Xanh Trẻ Trung",
        category: "polo",
        price: 360000,
        oldPrice: 460000,
        badge: "NEW",
        rating: 4.8,
        reviewsCount: 62,
        colors: [
            { name: "Trắng Phối Xanh", code: "#87CEEB" },
            { name: "Trắng Phối Đen", code: "#222222" },
            { name: "Trắng Phối Xám", code: "#A8A8A8" }
        ],
        sizes: ["M", "L", "XL"],
        image: "images/polonam3.jfif",
        imageHover: "images/polonam3.jfif"
    },
    {
        id: 4,
        name: "Áo Polo Nam Cổ Tàu Xám Ghi Cao Cấp",
        category: "polo",
        price: 390000,
        oldPrice: 490000,
        badge: "HOT",
        rating: 5,
        reviewsCount: 110,
        colors: [
            { name: "Xám Ghi", code: "#5A5A5A" },
            { name: "Đen", code: "#000000" },
            { name: "Xanh Rêu", code: "#4B5320" }
        ],
        sizes: ["S", "M", "L", "XL"],
        image: "images/polonam4.webp",
        imageHover: "images/polonam4.webp"
    },
    {
        id: 5,
        name: "Áo Polo Nam Kẻ Sọc Ngang Trắng Đen Phong Cách Vintage",
        category: "polo",
        price: 370000,
        oldPrice: 470000,
        badge: "SALE",
        rating: 4.9,
        reviewsCount: 78,
        colors: [
            { name: "Sọc Đen Kem", code: "#222222" },
            { name: "Sọc Xanh Kem", code: "#1D2D44" },
            { name: "Sọc Đỏ Kem", code: "#6B1D2F" }
        ],
        sizes: ["M", "L", "XL"],
        image: "images/polonam5.webp",
        imageHover: "images/polonam5.webp"
    },
    {
        id: 6,
        name: "Áo Polo Nam Họa Tiết Kim Cương Cổ Dệt Bo Tay",
        category: "polo",
        price: 420000,
        oldPrice: 520000,
        badge: "NEW",
        rating: 5,
        reviewsCount: 54,
        colors: [
            { name: "Trắng Họa Tiết", code: "#F0F0F0" },
            { name: "Xanh Họa Tiết", code: "#D0E1D4" },
            { name: "Xám Họa Tiết", code: "#CCCCCC" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/polonam6.jpg",
        imageHover: "images/polonam6.jpg"
    },
    {
        id: 7,
        name: "Áo Polo Nam Cổ Xẻ V Họa Tiết Muối Tiêu Độc Đáo",
        category: "polo",
        price: 410000,
        oldPrice: 510000,
        badge: "HOT",
        rating: 4.9,
        reviewsCount: 89,
        colors: [
            { name: "Xám Muối Tiêu", code: "#888888" },
            { name: "Xanh Muối Tiêu", code: "#5A738E" },
            { name: "Đen Muối Tiêu", code: "#333333" }
        ],
        sizes: ["M", "L", "XL"],
        image: "images/polonam7.jfif",
        imageHover: "images/polonam7.jfif"
    },
    {
        id: 9,
        name: "Áo Sơ Mi Kaki Nam Thêu Chữ Đen Khoác Ngoài",
        category: "so-mi",
        price: 420000,
        oldPrice: 520000,
        badge: "HOT",
        rating: 5,
        reviewsCount: 86,
        colors: [
            { name: "Đen", code: "#1A1A1A" },
            { name: "Xanh Kem", code: "#D8C8B8" },
            { name: "Xanh Rêu", code: "#4B5320" }
        ],
        sizes: ["M", "L", "XL"],
        image: "images/aosomikakitheuchumauden.jfif",
        imageHover: "images/aosomikakitheuchumauden.jfif"
    },
    {
        id: 10,
        name: "Áo Sơ Mi Kaki Dài Tay 2 Túi Ngực Phong Cách",
        category: "so-mi",
        price: 450000,
        oldPrice: 550000,
        badge: "NEW",
        rating: 5,
        reviewsCount: 64,
        colors: [
            { name: "Đen", code: "#111111" },
            { name: "Nâu Đất", code: "#6E473B" },
            { name: "Xanh Đen", code: "#1B263B" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/somikakidaytay.jpg",
        imageHover: "images/somikakidaytay.jpg"
    },
    {
        id: 11,
        name: "Áo Sơ Mi Dài Tay Họa Tiết Caro Trắng Đen Độc Đáo",
        category: "so-mi",
        price: 390000,
        oldPrice: 490000,
        badge: "SALE",
        rating: 4.8,
        reviewsCount: 52,
        colors: [
            { name: "Caro Đen Trắng", code: "#2B2B2B" },
            { name: "Caro Xanh Đen", code: "#0D1B2A" },
            { name: "Caro Đỏ Đen", code: "#581845" }
        ],
        sizes: ["S", "M", "L", "XL"],
        image: "images/aosomidaytaykehoatietmaxcoopy.jpg",
        imageHover: "images/aosomidaytaykehoatietmaxcoopy.jpg"
    },
    {
        id: 12,
        name: "Áo Sơ Mi Dài Tay Kẻ Sọc Mỏng Xám Ghi Kapo",
        category: "so-mi",
        price: 480000,
        oldPrice: 580000,
        badge: "HOT",
        rating: 5,
        reviewsCount: 110,
        colors: [
            { name: "Xám Ghi", code: "#5A5A5A" },
            { name: "Xanh Navy", code: "#1D2D44" },
            { name: "Trắng Kẻ", code: "#E0E1DD" }
        ],
        sizes: ["M", "L", "XL"],
        image: "images/aosomidaytaynamkapo.jpeg",
        imageHover: "images/aosomidaytaynamkapo.jpeg"
    },
    {
        id: 13,
        name: "Áo Sơ Mi Nam Dài Tay Họa Tiết Nhỏ Xanh Nhạt",
        category: "so-mi",
        price: 410000,
        oldPrice: 500000,
        badge: "NEW",
        rating: 4.9,
        reviewsCount: 45,
        colors: [
            { name: "Xanh Nhạt", code: "#87CEEB" },
            { name: "Trắng Họa Tiết", code: "#F8F9FA" },
            { name: "Hồng Phấn", code: "#FFB6C1" }
        ],
        sizes: ["M", "L", "XL"],
        image: "images/aosominamdaitayxanh.jpeg",
        imageHover: "images/aosominamdaitayxanh.jpeg"
    },
    {
        id: 14,
        name: "Áo Sơ Mi Nam Trắng Trơn Công Sở Premium",
        category: "so-mi",
        price: 490000,
        oldPrice: 590000,
        badge: "BEST SELLER",
        rating: 5,
        reviewsCount: 215,
        colors: [
            { name: "Trắng Pure", code: "#FFFFFF" },
            { name: "Xanh Nhạt", code: "#D0E1D4" },
            { name: "Đen Tuyền", code: "#000000" }
        ],
        sizes: ["S", "M", "L", "XL"],
        image: "images/aosomi1.jpg",
        imageHover: "images/aosomi1.jpg"
    },
    {
        id: 15,
        name: "Áo Sơ Mi Nam Trắng Oxford Dài Tay",
        category: "so-mi",
        price: 460000,
        oldPrice: 560000,
        badge: "HOT",
        rating: 4.9,
        reviewsCount: 98,
        colors: [
            { name: "Trắng Oxford", code: "#FFFFFF" },
            { name: "Xanh Blue Oxford", code: "#A9C9FF" },
            { name: "Xám Kem", code: "#E2E2E2" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/oxforddaytai.webp",
        imageHover: "images/oxforddaytai.webp"
    },
    {
        id: 16,
        name: "Quần Short Kaki Nam Khóa Kéo Cao Cấp",
        category: "quan",
        price: 280000,
        oldPrice: 380000,
        badge: "BEST SELLER",
        rating: 4.9,
        reviewsCount: 112,
        colors: [
            { name: "Vàng Kem", code: "#E6D7B8" },
            { name: "Đen Tuyền", code: "#111111" },
            { name: "Xanh Navy", code: "#1B263B" }
        ],
        sizes: ["29", "30", "31", "32", "34"],
        image: "images/quan1.jfif",
        imageHover: "images/quan1.jfif"
    },
    {
        id: 17,
        name: "Quần Short Thể Thao Nam Viền Trắng Dynamic",
        category: "quan",
        price: 190000,
        oldPrice: 270000,
        badge: "HOT",
        rating: 4.8,
        reviewsCount: 85,
        colors: [
            { name: "Đen", code: "#111111" },
            { name: "Xám Đậm", code: "#333333" },
            { name: "Xanh Đen", code: "#0B2545" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/quan2.jfif",
        imageHover: "images/quan2.jfif"
    },
    {
        id: 18,
        name: "Quần Dài Nam Ống Rộng Lưng Chun Phong Cách Basic",
        category: "quan",
        price: 320000,
        oldPrice: 420000,
        badge: "NEW",
        rating: 4.9,
        reviewsCount: 64,
        colors: [
            { name: "Kem Đũi", code: "#E8E3D5" },
            { name: "Trắng Mỡ Gà", code: "#F5F5DC" },
            { name: "Đen", code: "#1C1C1C" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/quan3.webp",
        imageHover: "images/quan3.webp"
    },
    {
        id: 19,
        name: "Quần Kaki Nam Dáng Rộng Ống Suông Thoải Mái",
        category: "quan",
        price: 350000,
        oldPrice: 450000,
        badge: "HOT",
        rating: 5,
        reviewsCount: 94,
        colors: [
            { name: "Xám Sáng", code: "#B0B0B0" },
            { name: "Xanh Rêu", code: "#4A5D4E" },
            { name: "Đen", code: "#000000" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/quan4.jfif",
        imageHover: "images/quan4.jfif"
    },
    {
        id: 20,
        name: "Quần Jean Nam Ống Rộng Wide Leg Wash Sáng Vintage",
        category: "quan",
        price: 450000,
        oldPrice: 580000,
        badge: "HOT",
        rating: 4.9,
        reviewsCount: 130,
        colors: [
            { name: "Xanh Wash Sáng", code: "#7393B3" },
            { name: "Xanh Cổ Điển", code: "#3B5998" },
            { name: "Xám Wash", code: "#555555" }
        ],
        sizes: ["28", "29", "30", "31", "32"],
        image: "images/quan5.webp",
        imageHover: "images/quan5.webp"
    },
    {
        id: 21,
        name: "Quần Jean Nam Slimfit Đen Tuyền Co Giãn",
        category: "quan",
        price: 390000,
        oldPrice: 490000,
        badge: "BEST SELLER",
        rating: 5,
        reviewsCount: 205,
        colors: [
            { name: "Đen Tuyền", code: "#000000" },
            { name: "Xám Khói", code: "#3A3A3A" },
            { name: "Xanh Đen", code: "#1A2536" }
        ],
        sizes: ["28", "29", "30", "31", "32", "34"],
        image: "images/quan6.jpg",
        imageHover: "images/quan6.jpg"
    },
    {
        id: 22,
        name: "Quần Jogger Kaki Nam Bo Gấu Dây Rút Thể Thao",
        category: "quan",
        price: 330000,
        oldPrice: 430000,
        badge: "SALE",
        rating: 4.8,
        reviewsCount: 76,
        colors: [
            { name: "Kem Kaki", code: "#D6C7B2" },
            { name: "Đen", code: "#111111" },
            { name: "Xanh Rêu", code: "#3B4D3C" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/quan7.jfif",
        imageHover: "images/quan7.jfif"
    },
    {
        id: 23,
        name: "Thắt Lưng Nam Da Thật Mặt Khóa Tự Động Cao Cấp",
        category: "phu-kien",
        price: 290000,
        oldPrice: 390000,
        badge: "BEST SELLER",
        rating: 4.9,
        reviewsCount: 142,
        colors: [
            { name: "Đen Tuyền", code: "#111111" }
        ],
        sizes: ["Freesize"],
        image: "images/phukien1.jfif",
        imageHover: "images/phukien1.jfif"
    },
    {
        id: 24,
        name: "Thắt Lưng Nam Da Bò Vân Safiano Mặt Khóa Kim Loại",
        category: "phu-kien",
        price: 320000,
        oldPrice: 420000,
        badge: "HOT",
        rating: 5,
        reviewsCount: 98,
        colors: [
            { name: "Đen", code: "#111111" },
            { name: "Nâu Đậm", code: "#3B2314" }
        ],
        sizes: ["Freesize"],
        image: "images/phukien2.webp",
        imageHover: "images/phukien2.webp"
    },
    {
        id: 25,
        name: "Kính Mát Nam Thời Trang Form Mắt Vuông Bo Tròn",
        category: "phu-kien",
        price: 250000,
        oldPrice: 350000,
        badge: "NEW",
        rating: 4.8,
        reviewsCount: 73,
        colors: [
            { name: "Đen Bóng", code: "#0B0B0B" }
        ],
        sizes: ["Freesize"],
        image: "images/phukien3.webp",
        imageHover: "images/phukien3.webp"
    },
    {
        id: 26,
        name: "Ví Nam Da Bò Dáng Đứng Nhiều Nhăn Tiện Lợi",
        category: "phu-kien",
        price: 280000,
        oldPrice: 380000,
        badge: "HOT",
        rating: 4.9,
        reviewsCount: 115,
        colors: [
            { name: "Đen Vân Hạt", code: "#1C1C1C" }
        ],
        sizes: ["Freesize"],
        image: "images/phukien4.webp",
        imageHover: "images/phukien4.webp"
    },
    {
        id: 27,
        name: "Ví Nam Da Cừu Dáng Ngang Cổ Điển",
        category: "phu-kien",
        price: 270000,
        oldPrice: 360000,
        badge: "BEST SELLER",
        rating: 5,
        reviewsCount: 160,
        colors: [
            { name: "Nâu Cacao", code: "#4A2E2B" }
        ],
        sizes: ["Freesize"],
        image: "images/phukien5.jfif",
        imageHover: "images/phukien5.jfif"
    },
    {
        id: 28,
        name: "Mũ Lưỡi Trai Nam Trơn Basic Cotton Thoáng Mát",
        category: "phu-kien",
        price: 120000,
        oldPrice: 180000,
        badge: "SALE",
        rating: 4.9,
        reviewsCount: 210,
        colors: [
            { name: "Đen Trơn", code: "#111111" }
        ],
        sizes: ["Freesize"],
        image: "images/phukien6.webp",
        imageHover: "images/phukien6.webp"
    },
    {
        id: 29,
        name: "Kính Mát Nam Chống Tia UV Tròng Vuông Hiện Đại",
        category: "phu-kien",
        price: 260000,
        oldPrice: 360000,
        badge: "HOT",
        rating: 4.8,
        reviewsCount: 88,
        colors: [
            { name: "Đen Nhám", code: "#222222" }
        ],
        sizes: ["Freesize"],
        image: "images/phukien7.webp",
        imageHover: "images/phukien7.webp"
    }
]

// ==========================================
// 2. BIẾN TOÀN CỤC & LOCALSTORAGE
// ==========================================
// Đọc danh sách giỏ hàng đã lưu trong LocalStorage, nếu không có thì gán mảng rỗng []
let cart = JSON.parse(localStorage.getItem('owen_cart_simplified')) || [];
let favorites = JSON.parse(localStorage.getItem('the_man_favorites') || '[]')
    .map(Number)
    .filter(Number.isFinite);
let activeCoupon = null; // Lưu coupon hiện tại đang dùng

// ==========================================
// 3. JQUERY READY HANDLER (CHẠY KHI TẢI XONG TRANG)
// ==========================================
$(document).ready(function() {
    // Cập nhật số trên badge giỏ hàng ngay khi tải trang
    updateCartBadge();
    
    // Nếu ở TRANG CHỦ (kiểm tra có grid sản phẩm không)
    if ($('#homepage-products-grid').length > 0) {
        renderProducts(PRODUCTS); // Đổ dữ liệu sản phẩm
        setupHomepageEvents();    // Thiết lập sự kiện chọn size, chọn màu
    }

    if ($('#product-catalog').length > 0) {
        setupProductSearch();
        applyProductFilters();
    }

    if ($('#auth-forms').length > 0) setupAccountPage();
    if ($('#products').length > 0) {
        $('#login, #register, .product-action').remove();
    }
    
    // Nếu ở TRANG GIỎ HÀNG (kiểm tra có bảng sản phẩm không)
    if ($('#cart-items-list').length > 0) {
        renderCart();             // Đổ dữ liệu giỏ hàng
    }
    
    // Sự kiện cuộn trang (Sticky navbar và nút Scroll to top)
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm').css('height', '70px');
        } else {
            $('.navbar').removeClass('shadow-sm').css('height', '75px');
        }
        
        // Hiện/ẩn nút cuộn lên đầu trang
        if ($(this).scrollTop() > 300) {
            $('#scroll-top-btn').fadeIn();
        } else {
            $('#scroll-top-btn').fadeOut();
        }
    });



});

function localized(value) {
    return typeof window.translate === 'function' ? window.translate(value) : value;
}

window.addEventListener('languagechange', function() {
    if ($('#homepage-products-grid').length > 0) renderProducts(PRODUCTS);
    if ($('#product-catalog').length > 0) applyProductFilters();
    if ($('#auth-forms').length > 0 && !$('#account-dashboard').prop('hidden')) {
        const account = JSON.parse(localStorage.getItem('the_man_account') || 'null');
        if (account) showAccountDashboard(account);
    }
    if ($('#cart-items-list').length > 0) renderCart();
    if (typeof window.applyLanguage === 'function') window.applyLanguage();
});

// ==========================================
// 4. HIỂN THỊ DANH SÁCH SẢN PHẨM Ở TRANG CHỦ
// ==========================================
function renderProducts(productsList) {
    const $grid = $('#homepage-products-grid');
    $grid.empty(); // Xóa sạch dữ liệu cũ
    
    if (productsList.length === 0) {
        $grid.html(`
            <div class="col-12 text-center py-5 text-muted">
                <i class="fas fa-search fa-3x mb-3"></i>
                <p>Không tìm thấy sản phẩm nào khớp với tìm kiếm.</p>
            </div>
        `);
        return;
    }
    
    // Lặp qua từng sản phẩm trong mảng
    $.each(productsList, function(index, product) {
        const badgeHTML = product.badge ? `<span class="badge bg-danger position-absolute top-0 start-0 m-3 z-3" style="font-size: 10px;">${product.badge}</span>` : '';
        const oldPriceHTML = product.oldPrice ? `<span class="text-decoration-line-through text-muted small ms-2">${formatPrice(product.oldPrice)}</span>` : '';
        
        // Tạo các nút chọn màu sắc tròn
        let colorsHTML = '';
        $.each(product.colors, function(cIdx, color) {
            const activeClass = cIdx === 0 ? 'selected' : '';
            colorsHTML += `
                <span class="color-dot ${activeClass}" 
                      style="background-color: ${color.code};" 
                      title="${color.name}" 
                      data-color="${color.name}">
                </span>
            `;
        });
        
        // Tạo các nút chọn kích cỡ vuông
        let sizesHTML = '';
        $.each(product.sizes, function(sIdx, size) {
            const activeClass = sIdx === 0 ? 'selected' : '';
            sizesHTML += `
                <button type="button" class="size-box ${activeClass}" data-size="${size}">
                    ${size}
                </button>
            `;
        });
        
        // Lấy màu và size mặc định là màu/size đầu tiên
        const defaultColor = product.colors[0].name;
        const defaultSize = product.sizes[0];
        
        // Chuỗi HTML hiển thị thẻ sản phẩm Bootstrap
        const cardHTML = `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="product-card card position-relative" 
                     id="product-${product.id}" 
                     data-id="${product.id}"
                     data-name="${product.name}"
                     data-price="${product.price}"
                     data-img="${product.image}"
                     data-selected-color="${defaultColor}" 
                     data-selected-size="${defaultSize}">
                    
                    ${badgeHTML}
                     
                    <!-- Khung ảnh hover -->
                    <div class="product-img-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="product-img w-100 h-100 object-fit-cover">
                        <button type="button"
                                class="favorite-btn ${isFavorite(product.id) ? 'is-favorite' : ''}"
                                data-product-id="${product.id}"
                                aria-label="${isFavorite(product.id) ? 'Bỏ khỏi yêu thích' : 'Thêm vào yêu thích'}"
                                aria-pressed="${isFavorite(product.id)}"
                                title="${isFavorite(product.id) ? 'Bỏ khỏi yêu thích' : 'Thêm vào yêu thích'}">
                            <i class="${isFavorite(product.id) ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                    
                    <!-- Thân thẻ thông tin -->
                    <div class="card-body p-3">
                        <span class="text-uppercase text-muted fw-bold" style="font-size: 10px;">
                            ${getCategoryLabel(product.category)}
                        </span>
                        <h5 class="card-title text-truncate h6 my-1" title="${product.name}">
                            ${product.name}
                        </h5>
                        
                        <!-- Đánh giá sao -->
                        <div class="text-warning small mb-2">
                            ${getRatingStars(product.rating)}
                            <span class="text-muted small">(${product.reviewsCount})</span>
                        </div>
                        
                        <!-- Giá sản phẩm -->
                        <div class="mb-3">
                            <span class="fw-bold text-danger">${formatPrice(product.price)}</span>
                            ${oldPriceHTML}
                        </div>
                        
                        <!-- Biến thể màu sắc & size -->
                        <div class="border-top pt-2">
                            <div class="mb-2">
                                <span class="d-block small text-muted mb-1">${localized('Màu:')}</span>
                                <div class="color-options-row">
                                    ${colorsHTML}
                                </div>
                            </div>
                            <div class="mb-3">
                                <span class="d-block small text-muted mb-1">${localized('Size:')}</span>
                                <div class="size-options-row">
                                    ${sizesHTML}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Hộp nút bấm hành động -->
                        <div class="row g-2">
                            <div class="col-6">
                                <button class="btn btn-outline-dark btn-sm w-100 py-2 small fw-semibold" onclick="handleAddToCart(${product.id})">
                                    <i class="fas fa-cart-plus me-1"></i> ${localized('Thêm giỏ')}
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-dark btn-sm w-100 py-2 small fw-semibold" onclick="handleBuyNow(${product.id})">
                                    ${localized('Mua ngay')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        $grid.append(cardHTML);
    });
}

// ==========================================
// 5. THIẾT LẬP SỰ KIỆN CLICK CHỌN BIẾN THỂ (JQUERY)
// ==========================================
function setupHomepageEvents() {
    $('#homepage-products-grid').on('click', '.favorite-btn', function() {
        const $button = $(this);
        const productId = Number($button.attr('data-product-id'));
        const favoriteIndex = favorites.indexOf(productId);
        const favorite = favoriteIndex === -1;

        if (favorite) {
            favorites.push(productId);
        } else {
            favorites.splice(favoriteIndex, 1);
        }
        localStorage.setItem('the_man_favorites', JSON.stringify(favorites));

        $button.toggleClass('is-favorite', favorite)
            .attr('aria-pressed', String(favorite))
            .attr('aria-label', favorite ? 'Bỏ khỏi yêu thích' : 'Thêm vào yêu thích')
            .attr('title', favorite ? 'Bỏ khỏi yêu thích' : 'Thêm vào yêu thích')
            .find('i')
            .toggleClass('fas', favorite)
            .toggleClass('far', !favorite);
    });

    // Sự kiện click chọn màu sắc
    // Dùng jQuery delegation để lắng nghe click trên .color-dot
    $('#homepage-products-grid').on('click', '.color-dot', function() {
        const $dot = $(this);
        const colorName = $dot.attr('data-color');
        const $card = $dot.closest('.product-card');
        
        // Cập nhật giá trị màu đã chọn vào thuộc tính data của thẻ sản phẩm
        $card.attr('data-selected-color', colorName);
        
        // Đổi trạng thái hiển thị viền tròn selected
        $dot.siblings().removeClass('selected');
        $dot.addClass('selected');
    });

    // Sự kiện click chọn size
    $('#homepage-products-grid').on('click', '.size-box', function() {
        const $box = $(this);
        const sizeName = $box.attr('data-size');
        const $card = $box.closest('.product-card');
        
        // Cập nhật giá trị size đã chọn vào data-selected-size
        $card.attr('data-selected-size', sizeName);
        
        // Đổi trạng thái background selected
        $box.siblings().removeClass('selected');
        $box.addClass('selected');
    });
}

// ==========================================
// 6. XỬ LÝ LỌC & TÌM KIẾM SẢN PHẨM (JQUERY)
// ==========================================
function filterCategory(categoryName) {
    // Đổi nút tab active
    $('#category-filter-tabs button').removeClass('active');
    
    // Tìm nút tương ứng và thêm class active
    $(`#category-filter-tabs button[onclick="filterCategory('${categoryName}')"]`).addClass('active');
    
    // Clear ô tìm kiếm
    $('#search-input').val('');
    
    if (categoryName === 'all') {
        renderProducts(PRODUCTS);
    } else {
        const filtered = PRODUCTS.filter(p => p.category === categoryName);
        renderProducts(filtered);
    }
}

function handleSearch() {
    const query = $('#search-input').val().trim().toLowerCase();
    if (!query) {
        renderProducts(PRODUCTS);
        return;
    }
    
    // Tắt trạng thái active của các nút filter
    $('#category-filter-tabs button').removeClass('active');
    
    // Tìm các sản phẩm có tên chứa từ khóa
    const filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) || 
        getCategoryLabel(p.category).toLowerCase().includes(query)
    );
    renderProducts(filtered);
}

// Lọc sản phẩm theo tên, khoảng giá, kích thước và màu sắc.
function applyProductFilters() {
    const queryParams = new URLSearchParams(window.location.search);
    const query = ($('#catalog-search').val() || queryParams.get('search') || '').trim().toLowerCase();
    if ($('#catalog-search').val() === '' && query) {
        $('#catalog-search').val(queryParams.get('search'));
    }
    const minPrice = Number($('#min-price').val()) || 0;
    const maxPriceValue = Number($('#max-price').val());
    const maxPrice = maxPriceValue > 0 ? maxPriceValue : Number.MAX_SAFE_INTEGER;
    const selectedSizes = $('#size-filters input:checked').map(function() {
        return this.value;
    }).get();
    const selectedColors = $('#color-filters input:checked').map(function() {
        return this.value.toLowerCase();
    }).get();
    const catalogCategory = $('#product-catalog').data('category');

    const filtered = PRODUCTS.filter(product => {
        const matchesCategory = !catalogCategory || product.category === catalogCategory;
        const matchesQuery = !query ||
            product.name.toLowerCase().includes(query) ||
            getCategoryLabel(product.category).toLowerCase().includes(query);
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesSize = selectedSizes.length === 0 ||
            selectedSizes.some(size => product.sizes.includes(size));
        const matchesColor = selectedColors.length === 0 ||
            product.colors.some(color => selectedColors.some(selectedColor =>
                color.name.toLowerCase().startsWith(selectedColor)
            ));

        return matchesCategory && matchesQuery && matchesPrice && matchesSize && matchesColor;
    });

    renderProducts(filtered);
    $('#catalog-result-count').text(`${filtered.length} ${localized('Sản phẩm').toLowerCase()}`);
}

function setupProductSearch() {
    const categoryByQuery = {
        polo: 'polo',
        quantay: 'quan',
        phukien: 'phu-kien',
        somi: 'so-mi'
    };
    const requestedCategory = new URLSearchParams(window.location.search).get('loai');
    const catalogCategory = categoryByQuery[requestedCategory] || '';

    $('#product-catalog').data('category', catalogCategory);
    $('#catalog-search, #min-price, #max-price').on('input', applyProductFilters);
    $('#size-filters input, #color-filters input').on('change', applyProductFilters);
    $('#reset-filters').on('click', function() {
        $('#catalog-search').val('');
        $('#min-price, #max-price').val('');
        $('#size-filters input, #color-filters input').prop('checked', false);
        applyProductFilters();
    });
}

function setupAccountPage() {
    const account = JSON.parse(localStorage.getItem('the_man_account') || 'null');
    if (account) showAccountDashboard(account);

    $('#register').on('submit', function(event) {
        event.preventDefault();
        const newAccount = {
            name: $('#register-name').val().trim(),
            email: $('#register-email').val().trim(),
            password: $('#register-password').val()
        };
        localStorage.setItem('the_man_account', JSON.stringify(newAccount));
        showAccountDashboard(newAccount);
    });

    $('#login').on('submit', function(event) {
        event.preventDefault();
        const saved = JSON.parse(localStorage.getItem('the_man_account') || 'null');
        const email = $('#login-email').val().trim();
        const password = $('#login-password').val();
        if (!saved || saved.email !== email || saved.password !== password) {
            $('#login-message').text('Email hoặc mật khẩu không chính xác.');
            return;
        }
        showAccountDashboard(saved);
    });

    $('#logout-button').on('click', function() {
        localStorage.removeItem('the_man_account');
        $('#account-dashboard').prop('hidden', true);
        $('#auth-forms').prop('hidden', false);
    });
}

function showAccountDashboard(account) {
    $('#profile-info').text(`${account.name} - ${account.email}`);
    renderFavorites();
    $('#auth-forms').prop('hidden', true);
    $('#account-dashboard').prop('hidden', false);
}

function isFavorite(productId) {
    return favorites.indexOf(Number(productId)) !== -1;
}

function renderFavorites() {
    const $favorites = $('#favorites');
    const favoriteProducts = favorites
        .map(productId => PRODUCTS.find(product => product.id === productId))
        .filter(Boolean);

    if (favoriteProducts.length === 0) {
        $favorites.html('<h2>Mục yêu thích</h2><p class="favorites-empty">Chưa có sản phẩm yêu thích.</p>');
        return;
    }

    $favorites.html(`
        <h2>Mục yêu thích</h2>
        <div class="favorites-list">
            ${favoriteProducts.map(product => `
                <article class="favorite-item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="favorite-item-info">
                        <h3>${product.name}</h3>
                        <p>${formatPrice(product.price)}</p>
                    </div>
                    <a href="search.html?loai=${product.category}" class="favorite-view-link">Xem sản phẩm</a>
                    <button type="button" class="favorite-remove" data-product-id="${product.id}" aria-label="Bỏ ${product.name} khỏi yêu thích">
                        <i class="fas fa-heart"></i>
                    </button>
                </article>
            `).join('')}
        </div>
    `);

    $favorites.off('click', '.favorite-remove').on('click', '.favorite-remove', function() {
        const productId = Number($(this).attr('data-product-id'));
        favorites = favorites.filter(id => id !== productId);
        localStorage.setItem('the_man_favorites', JSON.stringify(favorites));
        renderFavorites();
    });
}

// ==========================================
// 7. TOAST NOTIFICATION (THÔNG BÁO THÊM HÀNG)
// ==========================================
function showCustomToast(message, type = 'success') {
    const $container = $('#toast-container');
    if ($container.length === 0) return;
    
    // Tạo toast element mới bằng jQuery
    const $toast = $('<div class="custom-toast"></div>').addClass(type);
    const icon = type === 'success' ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger';
    
    $toast.html(`
        <div class="d-flex align-items-center gap-2">
            <i class="fas ${icon}"></i>
            <span>${message}</span>
        </div>
        <button class="btn-close ms-2" style="font-size: 10px;" aria-label="Close"></button>
    `);
    
    $container.append($toast);
    
    // Cho hiện mượt mà
    setTimeout(() => {
        $toast.addClass('show');
    }, 10);
    
    // Bắt sự kiện click nút tắt X của toast
    $toast.find('.btn-close').click(function() {
        $toast.removeClass('show');
        setTimeout(() => $toast.remove(), 300);
    });
    
    // Tự động ẩn sau 3 giây
    setTimeout(() => {
        $toast.removeClass('show');
        setTimeout(() => $toast.remove(), 300);
    }, 3000);
}

// Alert đăng nhập demo
function showLoginAlert() {
    showCustomToast("Chức năng thành viên sẽ được cập nhật sau!", "error");
}

// ==========================================
// 8. ĐỒNG BỘ VÀ LƯU GIỎ HÀNG (JQUERY & LOCALSTORAGE)
// ==========================================
function updateCartBadge() {
    // Tính tổng số lượng hàng trong giỏ
    let totalQty = 0;
    $.each(cart, function(idx, item) {
        totalQty += Number(item.quantity) || 0;
    });
    
    const $badges = $('#cart-count-badge, #cart-count-badge-mobile');
    $badges.text(totalQty);
    
    // Hiệu ứng nảy nhẹ khi thay đổi
    $badges.addClass('animate__animated animate__bounceIn');
    setTimeout(() => {
        $badges.removeClass('animate__animated animate__bounceIn');
    }, 500);
}

function saveCartToStorage() {
    localStorage.setItem('owen_cart_simplified', JSON.stringify(cart));
    updateCartBadge();
}

// Thêm sản phẩm vào giỏ hàng
function handleAddToCart(productId) {
    const $card = $(`#product-${productId}`);
    const name = $card.attr('data-name');
    const price = parseInt($card.attr('data-price'));
    const img = $card.attr('data-img');
    const color = $card.attr('data-selected-color');
    const size = $card.attr('data-selected-size');
    
    // Tìm xem sản phẩm có cùng màu và size đã có trong giỏ chưa
    let existingIndex = -1;
    $.each(cart, function(idx, item) {
        if (item.id === productId && item.color === color && item.size === size) {
            existingIndex = idx;
            return false; // dừng vòng lặp $.each
        }
    });
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: name,
            price: price,
            image: img,
            color: color,
            size: size,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    showCustomToast(`Đã thêm <strong>${name}</strong> (${color} / Size ${size}) vào giỏ hàng!`);
}

// Nút mua ngay (thêm rồi nhảy thẳng sang trang giỏ hàng)
function handleBuyNow(productId) {
    const $card = $(`#product-${productId}`);
    const name = $card.attr('data-name');
    const price = parseInt($card.attr('data-price'));
    const img = $card.attr('data-img');
    const color = $card.attr('data-selected-color');
    const size = $card.attr('data-selected-size');
    
    let existingIndex = -1;
    $.each(cart, function(idx, item) {
        if (item.id === productId && item.color === color && item.size === size) {
            existingIndex = idx;
            return false;
        }
    });
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: name,
            price: price,
            image: img,
            color: color,
            size: size,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    window.location.href = 'cart.html';
}

// ==========================================
// 9. HIỂN THỊ DANH SÁCH GIỎ HÀNG Ở TRANG CART
// ==========================================
function renderCart() {
    const $cartList = $('#cart-items-list');
    const $layout = $('#cart-layout-wrapper');
    const $emptyState = $('#cart-empty-template');
    
    if ($cartList.length === 0) return;
    
    $cartList.empty(); // Clear nội dung cũ
    
    // Nếu giỏ hàng hoàn toàn trống
    if (cart.length === 0) {
        $layout.attr('style', 'display: none !important;'); // Ẩn layout giỏ hàng
        $emptyState.show(); // Hiện khung trống
        return;
    }
    
    // Nếu có hàng, đảm bảo hiện layout và ẩn khung trống
    $layout.attr('style', 'display: flex !important;');
    $emptyState.hide();
    
    // Duyệt mảng cart để vẽ dòng table `<tr>` bằng jQuery
    $.each(cart, function(index, item) {
        const itemRowHTML = `
            <tr>
                <td>
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.image}" alt="${item.name}" class="rounded" style="width: 65px; height: 85px; object-fit: cover;">
                        <div>
                            <h6 class="mb-1 fw-bold text-dark small" style="line-height: 1.3;">${item.name}</h6>
                            <span class="text-muted d-block" style="font-size: 11px;">${localized('Màu:')} ${item.color} | ${localized('Size:')} ${item.size}</span>
                        </div>
                    </div>
                </td>
                <td class="text-center fw-semibold small">${formatPrice(item.price)}</td>
                <td class="text-center">
                    <!-- Nút tăng giảm số lượng -->
                    <div class="qty-group">
                        <button type="button" class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <input type="text" class="qty-input" value="${item.quantity}" readonly>
                        <button type="button" class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </td>
                <td class="text-end fw-bold text-dark small" style="padding-right: 15px;">
                    ${formatPrice(item.price * item.quantity)}
                </td>
                <td class="text-center">
                    <button class="btn-delete-item" onclick="removeItem(${index})" title="Xóa">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
        $cartList.append(itemRowHTML);
    });
    
    // Tính toán lại tổng số tiền hiển thị
    calculateCartTotals();
}

// Thay đổi số lượng cộng trừ
function changeQty(index, delta) {
    const newQty = cart[index].quantity + delta;
    
    if (newQty < 1) {
        removeItem(index);
        return;
    }
    
    cart[index].quantity = newQty;
    saveCartToStorage();
    renderCart();
}

// Xóa sản phẩm ra khỏi giỏ hàng
function removeItem(index) {
    const confirmDelete = confirm(`Bạn có muốn xóa sản phẩm "${cart[index].name}" khỏi giỏ hàng?`);
    if (!confirmDelete) return;
    
    cart.splice(index, 1);
    saveCartToStorage();
    renderCart();
    showCustomToast("Đã xóa sản phẩm thành công!");
}

// ==========================================
// 10. TÍNH TIỀN & XỬ LÝ MÃ GIẢM GIÁ (COUPON)
// ==========================================
function calculateCartTotals() {
    let subtotal = 0;
    $.each(cart, function(idx, item) {
        subtotal += item.price * item.quantity;
    });
    
    // Tính phí vận chuyển (Free ship nếu trên 500k, ngược lại là 30k)
    const shipping = subtotal >= 500000 ? 0 : 30000;
    
    // Tính số tiền giảm giá
    let discount = 0;
    if (activeCoupon) {
        if (activeCoupon.type === 'amount') {
            discount = activeCoupon.value;
        } else if (activeCoupon.type === 'percent') {
            discount = Math.round(subtotal * (activeCoupon.value / 100));
        }
        // Giảm tối đa bằng tạm tính
        if (discount > subtotal) discount = subtotal;
    }
    
    const grandTotal = subtotal + shipping - discount;
    
    // Cập nhật giá trị vào DOM bằng jQuery
    $('#summary-subtotal').text(formatPrice(subtotal));
    
    if (shipping === 0) {
        $('#summary-shipping').text("Miễn phí").addClass('text-success');
    } else {
        $('#summary-shipping').text(formatPrice(shipping)).removeClass('text-success');
    }
    
    if (discount > 0) {
        $('#summary-discount').text(`-${formatPrice(discount)}`);
        $('#summary-discount-row').attr('style', 'display: flex !important;'); // Hiện dòng giảm giá
    } else {
        $('#summary-discount-row').attr('style', 'display: none !important;'); // Ẩn dòng giảm giá
    }
    
    $('#summary-grand-total').text(formatPrice(grandTotal));
}

// Áp dụng mã giảm giá
function applyPromoCode() {
    const code = $('#promo-code-input').val().trim().toUpperCase();
    const $msg = $('#promo-message');
    
    if (!code) {
        showCustomToast("Vui lòng nhập mã giảm giá trước!", "error");
        return;
    }
    
    if (code === 'OWEN50') {
        activeCoupon = { code: 'OWEN50', type: 'amount', value: 50000 };
        $msg.text("Áp dụng mã OWEN50 thành công: Giảm 50.000đ").removeClass('text-danger').addClass('text-success');
        showCustomToast("Đã áp dụng mã giảm giá 50k!");
    } else if (code === 'KM10') {
        activeCoupon = { code: 'KM10', type: 'percent', value: 10 };
        $msg.text("Áp dụng mã KM10 thành công: Giảm 10% đơn hàng").removeClass('text-danger').addClass('text-success');
        showCustomToast("Đã áp dụng mã giảm giá 10%!");
    } else {
        activeCoupon = null;
        $msg.text("Mã giảm giá không chính xác!").removeClass('text-success').addClass('text-danger');
        showCustomToast("Mã giảm giá không hợp lệ!", "error");
    }
    
    calculateCartTotals();
}

// ==========================================
// 11. XỬ LÝ THANH TOÁN (MODAL BOOTSTRAP + JQUERY)
// ==========================================
function openCheckoutModal() {
    if (cart.length === 0) {
        showCustomToast("Không có hàng trong giỏ để thanh toán!", "error");
        return;
    }
    
    // Reset lại hiển thị các bước trong Modal
    $('#checkout-form-step').show();
    $('#checkout-success-step').hide();
    
    // Mở Bootstrap modal bằng hàm JavaScript của Bootstrap
    var modalElement = document.getElementById('checkout-modal');
    var modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modalInstance.show();
}

function closeCheckoutModal() {
    var modalElement = document.getElementById('checkout-modal');
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) modalInstance.hide();
}

// Đổi màu viền khung phương thức thanh toán đang chọn
function togglePaymentHighlight(method) {
    if (method === 'COD') {
        $('#payment-cod-label').addClass('border-primary bg-light').css('border-width', '2px');
        $('#payment-bank-label').removeClass('border-primary bg-light').css('border-width', '1px');
    } else {
        $('#payment-bank-label').addClass('border-primary bg-light').css('border-width', '2px');
        $('#payment-cod-label').removeClass('border-primary bg-light').css('border-width', '1px');
    }
}

// Xử lý gửi biểu mẫu đặt hàng
function submitOrder(event) {
    event.preventDefault(); // Ngăn trình duyệt reload lại trang
    
    // Đọc thông tin từ các input
    const name = $('#ship-name').val().trim();
    const phone = $('#ship-phone').val().trim();
    const email = $('#ship-email').val().trim();
    const address = $('#ship-address').val().trim();
    const payment = $('input[name="payment_method"]:checked').val();
    
    if (!name || !phone || !email || !address) {
        showCustomToast("Vui lòng điền đủ các thông tin bắt buộc!", "error");
        return;
    }
    
    // Tính tổng số tiền cuối cùng của đơn hàng
    let subtotal = 0;
    $.each(cart, function(idx, item) {
        subtotal += item.price * item.quantity;
    });
    const shipping = subtotal >= 500000 ? 0 : 30000;
    let discount = 0;
    if (activeCoupon) {
        if (activeCoupon.type === 'amount') discount = activeCoupon.value;
        else if (activeCoupon.type === 'percent') discount = Math.round(subtotal * (activeCoupon.value / 100));
        if (discount > subtotal) discount = subtotal;
    }
    const finalTotal = subtotal + shipping - discount;
    
    // Sinh ngẫu nhiên Mã đơn hàng
    const orderId = `OWEN-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Đổ dữ liệu đơn hàng vào màn hình biên lai thành công bằng jQuery
    $('#success-order-id').text(orderId);
    $('#success-customer-name').text(name);
    $('#success-customer-phone').text(phone);
    $('#success-customer-addr').text(address);
    $('#success-order-total').text(formatPrice(finalTotal));
    
    // Nếu chọn chuyển khoản BANK, bổ sung thêm khung thông tin ngân hàng
    if (payment === 'BANK') {
        const bankNoteHtml = `
            <div id="bank-info-container" class="alert alert-info text-start small mb-3" style="font-size: 11.5px; line-height: 1.5;">
                <strong class="d-block mb-1 text-primary"><i class="fas fa-university"></i> THÔNG TIN CHUYỂN KHOẢN:</strong>
                Ngân hàng: <strong>Vietcombank</strong><br>
                Số tài khoản: <strong>1028793082</strong><br>
                Chủ TK: <strong>CONG TY THOI TRANG OWEN</strong><br>
                Nội dung chuyển khoản: <strong class="text-danger">${orderId}</strong>
            </div>
        `;
        // Nếu chưa có bank info container thì chèn vào trước nút hoàn tất
        if ($('#bank-info-container').length === 0) {
            $('#checkout-success-step button').before(bankNoteHtml);
        }
    } else {
        // Nếu chọn COD thì ẩn thông tin chuyển khoản đi
        $('#bank-info-container').remove();
    }
    
    // Chuyển bước hiển thị trong Modal bằng jQuery show/hide
    $('#checkout-form-step').hide();
    $('#checkout-success-step').show();
    
    // Xóa sạch giỏ hàng & coupon sau khi đã mua thành công
    cart = [];
    activeCoupon = null;
    saveCartToStorage();
    
    // Reset lại các input ở trang giỏ hàng
    $('#promo-code-input').val('');
    $('#promo-message').text('');
    
    showCustomToast("Đặt hàng thành công!");
}

function closeSuccessAndRedirect() {
    closeCheckoutModal();
    // Quay về trang chủ
    window.location.href = 'web.html';
}

// Đăng ký nhận bản tin ở trang chủ
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = $('#newsletter-email').val();
    if (email) {
        showCustomToast(`Đăng ký thành công! Mã giảm giá 10% đã gửi tới: <strong>${email}</strong>`);
        $('#newsletter-email').val('');
    }
}

// ==========================================
// 12. CÁC HÀM TIỆN ÍCH PHỤ TRỢ (HELPER FUNCTIONS)
// ==========================================
// Lấy tên tiếng Việt của danh mục sản phẩm
function getCategoryLabel(category) {
    switch (category) {
        case 'so-mi': return localized('Sơ mi công sở');
        case 'polo': return localized('Áo Polo / T-Shirt');
        case 'quan': return localized('Quần tây & Quần kaki');
        case 'phu-kien': return localized('Phụ kiện da');
        default: return localized('Khác');
    }
}

// Trả về chuỗi icon sao vàng
function getRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star text-warning"></i>';
        } else if (i === fullStars && hasHalf) {
            stars += '<i class="fas fa-star-half-alt text-warning"></i>';
        } else {
            stars += '<i class="far fa-star text-warning"></i>';
        }
    }
    return stars;
}

// Định dạng số thành tiền tệ VND
function formatPrice(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

// Cuộn mượt lên đầu trang
function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

// --- PHẦN ĐỔI NGÔN NGỮ (GOM CHUNG VÀO SCRIPT.JS) ---
const translations = {
  vi: {
    home: "Trang chủ",
    about: "Về chúng tôi",
    support: "Hỗ trợ",
    cart: "Giỏ hàng",
    search: "Tìm kiếm",
    footer_desc: "Thời trang nam tối giản, hiện đại và dễ phối đồ.",
    store_address: "Địa chỉ cửa hàng: Trường Đại Học Cần Thơ"
  },
  en: {
    home: "Home",
    about: "About Us",
    support: "Support",
    cart: "Cart",
    search: "Search",
    footer_desc: "Minimalist, modern and easy-to-match men's fashion.",
    store_address: "Store Address: Can Tho University"
  }
};

function changeLanguage(lang) {
  localStorage.setItem('selected_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}

// Tự động chạy khi mở bất kỳ trang nào
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selected_lang') || 'vi';
  const langSelector = document.getElementById('language-selector');
  if (langSelector) {
    langSelector.value = savedLang;
  }
  changeLanguage(savedLang);
});

