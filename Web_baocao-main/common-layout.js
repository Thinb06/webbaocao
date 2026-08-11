(function() {
    const translations = {
        'Trang chủ': 'Home',
        'Sơ mi': 'Shirts',
        'Áo Polo': 'Polo Shirts',
        'Quần Nam': 'Men\'s Trousers',
        'Phụ kiện': 'Accessories',
        'Về chúng tôi': 'About us',
        'Hỗ trợ': 'Support',
        'Tài khoản': 'Account',
        'Giỏ hàng': 'Cart',
        'Đăng nhập': 'Log in',
        'Đăng ký': 'Register',
        'Thông tin': 'Profile',
        'Yêu thích': 'Favorites',
        'Tìm sản phẩm...': 'Search products...',
        'Tìm kiếm': 'Search',
        'Mở menu': 'Open menu',
        'Lên đầu': 'Back to top',
        'Liên kết nhanh': 'Quick links',
        'Sản phẩm': 'Products',
        'Liên hệ': 'Contact',
        'Địa chỉ': 'Address',
        'LIÊN KẾT NHANH': 'QUICK LINKS',
        'LIÊN HỆ': 'CONTACT',
        'ĐỊA CHỈ': 'ADDRESS',
        'Màu:': 'Color:',
        'Size:': 'Size:',
        'Màu sắc': 'Color',
        'Số sản phẩm': 'Products',
        'Về chúng tôi | THE MAN': 'About us | THE MAN',
        'Hỗ trợ | THE MAN': 'Support | THE MAN',
        'Giỏ hàng | THE MAN': 'Cart | THE MAN',
        'Tìm kiếm sản phẩm | THE MAN': 'Search products | THE MAN',
        'THE MAN. STUDIO - Thời trang nam tối giản': 'THE MAN. STUDIO - Minimal menswear',
        'Thời gian': 'Hours',
        'Xin cảm ơn': 'Thank you',
        'Khám phá ngay': 'Explore now',
        'Thêm giỏ': 'Add to cart',
        'Mua ngay': 'Buy now',
        'Sơ mi công sở': 'Office shirts',
        'Áo Polo / T-Shirt': 'Polo / T-Shirt',
        'Quần tây & Quần kaki': 'Trousers & khakis',
        'Phụ kiện da': 'Leather accessories',
        'Khác': 'Other',
        'Khung vị trí dành cho thông điệp chiến dịch hoặc bộ sưu tập mới.': 'A space for campaign messages or new collections.',
        '4 danh mục sản phẩm': '4 product categories',
        'Thời trang nam tối giản, hiện đại và dễ phối đồ.': 'Minimal, modern menswear that is easy to style.',
        'Địa chỉ cửa hàng: Trường Đại Học Cần Thơ': 'Store address: Can Tho University',
        'Chi nhánh: Trường Đại Học Cần Thơ': 'Branch: Can Tho University',
        'Thông tin khác: Trường Đại Học Cần Thơ': 'Other information: Can Tho University',
        'Thời gian: 24/7': 'Hours: 24/7',
        'Địa chỉ': 'Address',
        'Mang đến những sản phẩm thời trang nam đơn giản, hiện đại và dễ phối đồ.': 'We offer simple, modern and easy-to-style menswear.',
        'Mang đến sản phẩm chất lượng, giá hợp lý và phong cách hiện đại.': 'Quality products, fair prices and modern style.',
        'Trở thành thương hiệu thời trang nam được nhiều người trẻ yêu thích.': 'To become a menswear brand loved by young people.',
        'Chất lượng, uy tín, đơn giản và đặt khách hàng làm ưu tiên.': 'Quality, trust, simplicity and customer-first service.',
        'Khoảng 2 - 5 ngày làm việc.': 'Around 2–5 business days.',
        'Có, trong vòng 7 ngày.': 'Yes, within 7 days.',
        'Có thể kiểm tra trước khi thanh toán.': 'Yes, you can inspect it before payment.',
        'Danh Mục Nổi Bật': 'Featured Categories',
        'danh mục sản phẩm': 'product categories',
        'Áo Polo / T-shirt': 'Polo / T-shirt',
        'Quần Tây Kaki': 'Khaki Trousers',
        'Phụ Kiện': 'Accessories',
        'Áo Sơ mi': 'Shirts',
        'Tìm kiếm sản phẩm': 'Search products',
        'Từ khóa': 'Keyword',
        'Tên sản phẩm...': 'Product name...',
        'Khoảng giá (VNĐ)': 'Price range (VND)',
        'Từ': 'From',
        'Đến': 'To',
        'Kích thước': 'Size',
        'Màu sắc': 'Color',
        'Trắng': 'White',
        'Đen': 'Black',
        'Xám': 'Gray',
        'Kem': 'Cream',
        'Nâu': 'Brown',
        'Xóa bộ lọc': 'Clear filters',
        'Về chúng tôi': 'About us',
        'Tài khoản | THE MAN': 'Account | THE MAN',
        'Tài khoản của tôi': 'My account',
        'Thông tin cá nhân': 'Personal information',
        'Mục yêu thích': 'Favorites',
        'Chưa có sản phẩm yêu thích.': 'No favorite products yet.',
        'Tạo tài khoản': 'Create an account',
        'Họ tên': 'Full name',
        'Mật khẩu': 'Password',
        'Đăng xuất': 'Log out',
        'Giỏ hàng của bạn': 'Your cart',
        'Giỏ hàng của bạn đang trống': 'Your cart is empty',
        'Tiếp tục mua sắm': 'Continue shopping',
        'Mua sắm ngay': 'Shop now',
        'Sản phẩm': 'Product',
        'Đơn giá': 'Unit price',
        'Số lượng': 'Quantity',
        'Thành tiền': 'Total',
        'TÓM TẮT ĐƠN HÀNG': 'ORDER SUMMARY',
        'Mã giảm giá (Coupon)': 'Discount code (Coupon)',
        'Nhập OWEN50 hoặc KM10': 'Enter OWEN50 or KM10',
        'Áp dụng': 'Apply',
        'Tạm tính:': 'Subtotal:',
        'Phí vận chuyển:': 'Shipping:',
        'Giảm giá:': 'Discount:',
        'Tổng cộng:': 'Grand total:',
        'Tiến hành thanh toán': 'Proceed to checkout',
        'Thông Tin Giao Hàng': 'Shipping information',
        'Họ và tên *': 'Full name *',
        'Số điện thoại *': 'Phone number *',
        'Địa chỉ email *': 'Email address *',
        'Địa chỉ nhận hàng *': 'Shipping address *',
        'Phương thức thanh toán *': 'Payment method *',
        'Thanh toán khi nhận hàng (COD)': 'Cash on delivery (COD)',
        'Nhận hàng tại nhà rồi thanh toán tiền mặt.': 'Pay in cash when your order arrives.',
        'Chuyển khoản ngân hàng': 'Bank transfer',
        'Chuyển tiền nhanh qua số tài khoản hoặc QR.': 'Transfer quickly via bank account or QR code.',
        'Xác nhận đặt hàng': 'Confirm order',
        'ĐẶT HÀNG THÀNH CÔNG!': 'ORDER PLACED SUCCESSFULLY!',
        'Mã đơn hàng:': 'Order ID:',
        'Khách hàng:': 'Customer:',
        'Địa chỉ giao:': 'Delivery address:',
        'Tổng thanh toán:': 'Total payment:',
        'Quay lại mua sắm': 'Back to shopping',
        'TRUNG TÂM HỖ TRỢ': 'HELP CENTER',
        'Câu hỏi thường gặp': 'Frequently asked questions',
        'Liên hệ': 'Contact',
        'Sứ mệnh': 'Mission',
        'Tầm nhìn': 'Vision',
        'Giá trị': 'Values',
        'Thông tin cửa hàng': 'Store information',
        'Tên cửa hàng': 'Store name',
        'Điện thoại': 'Phone',
        'Địa chỉ': 'Address',
        'Nhận liền tay khuyến mãi hôm nay. Nhập mã OWEN50 để giảm 50k và mã KM10 để giảm 10% cho tất cả sản phẩm có trong cửa hàng !!': 'Get today offer now. Use OWEN50 for 50K off or KM10 for 10% off all products in store!'
    };

    window.siteLanguage = localStorage.getItem('the_man_language') || 'vi';
    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    window.translate = function(value) {
        return window.siteLanguage === 'en' && translations[value] ? translations[value] : value;
    };
    function translatePage() {
        document.documentElement.lang = window.siteLanguage;
        document.querySelectorAll('[data-language-toggle]').forEach(function(button) {
            button.textContent = window.siteLanguage === 'en' ? 'VI' : 'EN';
            button.setAttribute('aria-label', window.siteLanguage === 'en' ? 'Switch to Vietnamese' : 'Switch to English');
        });
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        textNodes.forEach(function(node) {
            if (!originalText.has(node)) originalText.set(node, node.nodeValue);
            const source = originalText.get(node);
            const trimmed = source.trim();
            node.nodeValue = translations[trimmed] && window.siteLanguage === 'en'
                ? source.replace(trimmed, translations[trimmed])
                : source;
        });
        document.querySelectorAll('[placeholder]').forEach(function(element) {
            if (!originalAttributes.has(element)) originalAttributes.set(element, {});
            const attributes = originalAttributes.get(element);
            if (!attributes.placeholder) attributes.placeholder = element.getAttribute('placeholder');
            const value = attributes.placeholder;
            element.setAttribute('placeholder', window.siteLanguage === 'en' && translations[value] ? translations[value] : value);
        });
        document.querySelectorAll('[aria-label]').forEach(function(element) {
            if (!originalAttributes.has(element)) originalAttributes.set(element, {});
            const attributes = originalAttributes.get(element);
            if (!attributes.ariaLabel) attributes.ariaLabel = element.getAttribute('aria-label');
            const value = attributes.ariaLabel;
            element.setAttribute('aria-label', window.siteLanguage === 'en' && translations[value] ? translations[value] : value);
        });
        if (!document.body.dataset.originalTitle) document.body.dataset.originalTitle = document.title;
        document.title = window.siteLanguage === 'en' && translations[document.body.dataset.originalTitle]
            ? translations[document.body.dataset.originalTitle]
            : document.body.dataset.originalTitle;
    }
    window.applyLanguage = translatePage;
    window.addEventListener('click', function(event) {
        const button = event.target.closest('[data-language-toggle]');
        if (!button) return;
        window.siteLanguage = window.siteLanguage === 'en' ? 'vi' : 'en';
        localStorage.setItem('the_man_language', window.siteLanguage);
        translatePage();
        window.dispatchEvent(new Event('languagechange'));
    });

    const bootstrapCss = 'lib/bootstrap/bootstrap.min.css';
    const iconsCss = 'lib/fontawesome/css/all.min.css';
    const interCss = 'lib/fonts/font.css';

    [bootstrapCss, iconsCss, interCss].forEach(function(href) {
        if (!document.querySelector(`link[href="${href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        }
    });

    if (!document.querySelector('script[src*="bootstrap.bundle"]')) {
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'lib/bootstrap/bootstrap.bundle.min.js';
        document.body.appendChild(bootstrapScript);
    }

    const header = `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white border-bottom">
            <div class="container-fluid px-md-5">
                <a class="navbar-brand" href="web.html">THE MAN<span>.</span></a>
                <div class="navbar-mobile-actions d-flex align-items-center ms-auto me-2 d-lg-none">
                    <button type="button" class="language-toggle" data-language-toggle aria-label="Switch to English">EN</button>
                    <div class="account-menu">
                        <a href="taikhoan.html" class="btn btn-link p-0 text-dark" aria-label="Tài khoản" aria-haspopup="true">
                            <i class="far fa-user fs-5"></i>
                        </a>
                        <div class="account-dropdown" role="menu">
                            <a href="taikhoan.html#login" role="menuitem">Đăng nhập</a>
                            <a href="taikhoan.html#register" role="menuitem">Đăng ký</a>
                            <a href="taikhoan.html#profile" role="menuitem">Thông tin</a>
                            <a href="taikhoan.html#favorites" role="menuitem">Yêu thích</a>
                        </div>
                    </div>
                    <a href="cart.html" class="cart-btn-nav p-1" aria-label="Giỏ hàng">
                        <i class="fas fa-shopping-bag"></i><span class="cart-badge" id="cart-count-badge-mobile">0</span>
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#owenNavbar" aria-label="Mở menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="owenNavbar">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="web.html">Trang chủ</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html?loai=somi">Sơ mi</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html?loai=polo">Áo Polo</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html?loai=quantay">Quần Nam</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html?loai=phukien">Phụ kiện</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">Về chúng tôi</a></li>
                        <li class="nav-item"><a class="nav-link" href="hotro.html">Hỗ trợ</a></li>
                    </ul>
                    <form class="d-flex align-items-center gap-0" style="width:220px;" action="search.html" method="get">
                        <input name="search" type="search" class="form-control form-control-sm" placeholder="Tìm sản phẩm..." aria-label="Tìm sản phẩm">
                        <button class="btn btn-outline-dark btn-sm" type="submit" aria-label="Tìm kiếm"><i class="fas fa-search"></i></button>
                    </form>
                    <button type="button" class="language-toggle" data-language-toggle aria-label="Switch to English">EN</button>
                    <div class="navbar-actions d-none d-lg-flex">
                        <div class="account-menu">
                            <a href="taikhoan.html" class="btn btn-link p-0 text-dark nav-link" aria-label="Tài khoản" aria-haspopup="true">
                                <i class="far fa-user fs-5"></i>
                            </a>
                            <div class="account-dropdown" role="menu">
                                <a href="taikhoan.html#login" role="menuitem">Đăng nhập</a>
                                <a href="taikhoan.html#register" role="menuitem">Đăng ký</a>
                                <a href="taikhoan.html#profile" role="menuitem">Thông tin</a>
                                <a href="taikhoan.html#favorites" role="menuitem">Yêu thích</a>
                            </div>
                        </div>
                        <a href="cart.html" class="cart-btn-nav" aria-label="Giỏ hàng">
                            <i class="fas fa-shopping-bag"></i><span class="cart-badge" id="cart-count-badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>`;

 
    document.addEventListener('DOMContentLoaded', function() {
        const oldHeader = document.querySelector('header');
        if (oldHeader) {
            oldHeader.outerHTML = `${header}
                <div class="promo-announcement" role="status">
                    <span class="promo-announcement-text">Nhận liền tay khuyến mãi hôm nay. Nhập mã OWEN50 để giảm 50k và mã KM10 để giảm 10% cho tất cả sản phẩm có trong cửa hàng !!</span>
                </div>`;
        }
        translatePage();
    });
})();

$(document).ready(function() {
    // Tạo sẵn mã HTML cho nút chọn ngôn ngữ
    const langSwitcherHTML = `
        <div class="language-switcher d-inline-block me-2 align-middle">
            <select id="language-select" class="form-select form-select-sm" style="width: auto; display: inline-block;">
                <option value="vi">VN</option>
                <option value="en">EN</option>
            </select>
        </div>
    `;

    // Tự động chèn vào khu vực chứa icon hoặc menu ở header của mọi trang
    if ($('header .nav-icons').length > 0) {
        $('header .nav-icons').prepend(langSwitcherHTML);
    } else if ($('header').length > 0) {
        $('header').append(langSwitcherHTML);
    }

    // Đọc trạng thái ngôn ngữ đã lưu trước đó (nếu có)
    const savedLang = localStorage.getItem('site_language') || 'vi';
    $('#language-select').val(savedLang);

    // Lắng nghe sự kiện khi người dùng đổi ngôn ngữ
    $(document).on('change', '#language-select', function() {
        const selectedLang = $(this).val();
        localStorage.setItem('site_language', selectedLang);
        // Gọi hàm dịch trang của bạn ở đây (nếu có)
        location.reload(); // Hoặc load lại trang để áp dụng ngôn ngữ mới
    });
});

(function() {
    const bootstrapCss = 'lib/bootstrap/bootstrap.min.css';
    const iconsCss = 'lib/fontawesome/css/all.min.css';
    const interCss = 'lib/fonts/font.css';

    [bootstrapCss, iconsCss, interCss].forEach(function(href) {
        if (!document.querySelector(`link[href="${href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        }
    });

    if (!document.querySelector('script[src*="bootstrap.bundle"]')) {
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'lib/bootstrap/bootstrap.bundle.min.js';
        document.body.appendChild(bootstrapScript);
    }

    const header = `
        <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white border-bottom">
            <div class="container-fluid px-md-5">
                <a class="navbar-brand" href="web.html">THE MAN<span>.</span></a>
                <div class="d-flex align-items-center gap-3 ms-auto me-2 d-lg-none">
                    <a href="taikhoan.html" class="btn btn-link p-0 text-dark" aria-label="Tài khoản">
                        <i class="far fa-user fs-5"></i>
                    </a>
                    <a href="cart.html" class="cart-btn-nav p-1" aria-label="Giỏ hàng">
                        <i class="fas fa-shopping-bag"></i><span class="cart-badge" id="cart-count-badge-mobile">0</span>
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#owenNavbar" aria-label="Mở menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="owenNavbar">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="web.html" data-i18n="nav-home">Trang chủ</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html?loai=somi" data-i18n="nav-shirt">Sơ mi</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html?loai=polo" data-i18n="nav-polo">Áo Polo</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html?loai=quantay" data-i18n="nav-pants">Quần Nam</a></li>
                        <li class="nav-item"><a class="nav-link" href="search.html?loai=phukien" data-i18n="nav-accessories">Phụ kiện</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html" data-i18n="nav-about">Về chúng tôi</a></li>
                        <li class="nav-item"><a class="nav-link" href="hotro.html" data-i18n="nav-support">Hỗ trợ</a></li>
                    </ul>
                    <form class="d-flex align-items-center gap-0" style="width:220px;" action="search.html" method="get">
                        <input name="search" type="search" class="form-control form-control-sm" placeholder="Tìm sản phẩm..." aria-label="Tìm sản phẩm" data-i18n-placeholder="search-placeholder">
                        <button class="btn btn-outline-dark btn-sm" type="submit" aria-label="Tìm kiếm"><i class="fas fa-search"></i></button>
                    </form>
                    <div class="d-flex align-items-center gap-3">
                        <a href="taikhoan.html" class="btn btn-link p-0 text-dark nav-link d-none d-lg-flex" aria-label="Tài khoản">
                            <i class="far fa-user fs-5"></i>
                        </a>
                        <a href="cart.html" class="cart-btn-nav p-1 ms-2 d-none d-lg-flex" aria-label="Giỏ hàng">
                            <i class="fas fa-shopping-bag"></i><span class="cart-badge" id="cart-count-badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>`;

    document.addEventListener('DOMContentLoaded', function() {
        const oldHeader = document.querySelector('header');
        if (oldHeader) oldHeader.outerHTML = header;
    });
})();

// ================= BỘ TỪ ĐIỂN VÀ XỬ LÝ ĐA NGÔN NGỮ =================
const siteTranslations = {
    vi: {
        "nav-home": "Trang chủ",
        "nav-shirt": "Sơ mi",
        "nav-polo": "Áo Polo",
        "nav-pants": "Quần Nam",
        "nav-accessories": "Phụ kiện",
        "nav-about": "Về chúng tôi",
        "nav-support": "Hỗ trợ",
        "search-placeholder": "Tìm sản phẩm...",
        "cart-title": "Giỏ hàng của bạn",
        "checkout-btn": "Tiến hành thanh toán"
    },
    en: {
        "nav-home": "Home",
        "nav-shirt": "Shirts",
        "nav-polo": "Polo Shirts",
        "nav-pants": "Pants",
        "nav-accessories": "Accessories",
        "nav-about": "About Us",
        "nav-support": "Support",
        "search-placeholder": "Search products...",
        "cart-title": "Your Cart",
        "checkout-btn": "Proceed to Checkout"
    }
};

function applyTranslations(lang) {
    const dict = siteTranslations[lang];
    if (!dict) return;

    // Dịch các thẻ có text (data-i18n)
    $('[data-i18n]').each(function() {
        const key = $(this).attr('data-i18n');
        if (dict[key]) {
            $(this).text(dict[key]);
        }
    });

    // Dịch các ô input có placeholder (data-i18n-placeholder)
    $('[data-i18n-placeholder]').each(function() {
        const key = $(this).attr('data-i18n-placeholder');
        if (dict[key]) {
            $(this).attr('placeholder', dict[key]);
        }
    });
}

$(document).ready(function() {
    // 1. Tạo sẵn mã HTML cho nút chọn ngôn ngữ
    const langSwitcherHTML = `
        <div class="language-switcher d-inline-block me-2 align-middle">
            <select id="language-select" class="form-select form-select-sm" style="width: auto; display: inline-block;">
                <option value="vi">VN</option>
                <option value="en">EN</option>
            </select>
        </div>
    `;

    // 2. Tự động chèn vào header của mọi trang
    if ($('header .nav-icons').length > 0) {
        $('header .nav-icons').prepend(langSwitcherHTML);
    } else if ($('header').length > 0) {
        $('header').append(langSwitcherHTML);
    }

    // 3. Đọc ngôn ngữ đã lưu và áp dụng ngay khi trang vừa tải
    const savedLang = localStorage.getItem('site_language') || 'vi';
    $('#language-select').val(savedLang);
    applyTranslations(savedLang);

    // 4. Lắng nghe sự kiện thay đổi ngôn ngữ mà không cần reload lại trang
    $(document).on('change', '#language-select', function() {
        const selectedLang = $(this).val();
        localStorage.setItem('site_language', selectedLang);
        applyTranslations(selectedLang);
    });
});


