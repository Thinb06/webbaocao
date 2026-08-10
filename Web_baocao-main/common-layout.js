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


