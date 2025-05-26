$(document).ready(function() {
    // Initialize all carousels
    function initCarousels() {
        // Main carousel 1 - Enhanced with nav arrows and smartSpeed
        $('.owl-carousel-1').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 }
            }
        });

        // Trending carousel - Enhanced with nav arrows
        $(".tranding-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 2000,
            items: 1,
            dots: false,
            loop: true,
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 1 }
            }
        });

        // Top news carousel - Enhanced with nav arrows and smartSpeed
        $(".owl-carousel-2").owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });

        // Categories carousel - Enhanced with nav arrows and smartSpeed
        $("#categories-carousel").owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1200,
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                768: { items: 2 },
                992: { items: 4 }
            }
        });

        // Featured carousel - Enhanced with nav arrows and smartSpeed
        $('.featured-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            navText: [
                '<i class="fa fa-angle-left" aria-="true"></i>«',
                '»<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 }
            }
        });

    }

    // Back to top button from sample code
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Initialize carousel navigation
    function initCarouselNavigation() {
        // Navigation for carousel 1
        $('.carousel-prev').click(function() {
            $('.owl-carousel-1').trigger('prev.owl.carousel');
        });
        $('.carousel-next').click(function() {
            $('.owl-carousel-1').trigger('next.owl.carousel');
        });

        // Navigation for trending carousel
        $(".carousel-prev").click(function() {
            $(".tranding-carousel").trigger('prev.owl.carousel');
        });
        $(".carousel-next").click(function() {
            $(".tranding-carousel").trigger('next.owl.carousel');
        });

        // Navigation for top news carousel
        $(".top-news-prev").click(function() {
            $(".owl-carousel-2").trigger('prev.owl.carousel');
        });
        $(".top-news-next").click(function() {
            $(".owl-carousel-2").trigger('next.owl.carousel');
        });
    }

    // Form validation functions
    function validateEmail(email) {
        return email.includes('@');
    }

    function validateForm(form) {
        let isValid = true;
        const emailField = form.find('input[type="email"]');
        const emailValue = emailField.val();
        const emailValid = validateEmail(emailValue);
        
        if (!emailValid) {
            alert('Please include "@" in your email address.');
            isValid = false;
        }

        let invalidFields = [];
        form.find(':invalid').each(function() {
            const fieldName = $(this).attr('name') || 'field';
            invalidFields.push(fieldName);
        });

        if (invalidFields.length) {
            alert(`Please fill out the following fields: ${invalidFields.join(', ')}`);
            isValid = false;
        }

        return isValid;
    }

    function highlightErrors(form) {
        form.find(':invalid').each(function() {
            $(this).addClass('error');
        });
    }

    // Initialize forms
    function initForms() {
        const contactForm = $('#contact-form');
        const sendButton = $('.sendButton');

        // Disable send button initially
        sendButton.prop('disabled', true);

        // Check form validity on input
        contactForm.on('input', function() {
            const isFormValid = contactForm[0].checkValidity();
            sendButton.prop('disabled', !isFormValid);
        });

    }

    // Product listing functionality
    function initProductListing() {
        const products = [
            { id: 1, name: "TechMaster Pro Phone", price: 899.99, oldPrice: 999.99, rating: 4.5, reviews: 128, category: "smartphones", brand: "TechMaster", image: "imgs/product1.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-10-15" , class:"product-card" },
            { id: 2, name: "Quantum Ultra Laptop", price: 1290, oldPrice: null, rating: 5, reviews: 87, category: "laptops", brand: "Quantum", image: "imgs/product2.jpg", badge: "New", badgeClass: "bg-success", dateAdded: "2023-11-20" ,class:"product-card"},
            { id: 3, name: "Nexus Smart Watch", price: 249.99, oldPrice: 299.99, rating: 5, reviews: 215, category: "wearables", brand: "Nexus", image: "imgs/product3.jpg", badge: null, badgeClass: "", dateAdded: "2023-09-05",class:"product-card" },
            { id: 4, name: "Wireless Earbuds with screen", price: 179.99, oldPrice: 199.99, rating: 4.5, reviews: 176, category: "audio", brand: "Aurora", image: "imgs/product4.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-08-12" ,class:"product-card"},
            { id: 5, name: "TechMaster Tablet Pro", price: 499.99, oldPrice: null, rating: 4, reviews: 92, category: "tablets", brand: "TechMaster", image: "imgs/product5.png", badge: null, badgeClass: "", dateAdded: "2023-07-22",class:"product-card" },
            { id: 6, name: "Quantum Smart Speaker", price: 129.99, oldPrice: null, rating: 5, reviews: 143, category: "audio", brand: "Quantum", image: "imgs/product6.jpg", badge: "Limited", badgeClass: "bg-info", dateAdded: "2023-11-01" ,class:"product-card"},
            { id: 7, name: "Nexus Noise Cancelling Headphones", price: 349.99, oldPrice: null, rating: 4.5, reviews: 201, category: "audio", brand: "Nexus", image: "imgs/product7.jpg", badge: null, badgeClass: "", dateAdded: "2023-06-18" ,class:"product-card"},
            { id: 8, name: "Aurora Fitness Tracker", price: 89.99, oldPrice: 119.99, rating: 4, reviews: 78, category: "wearables", brand: "Aurora", image: "imgs/product8.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-05-30",class:"product-card" },
            { id: 9, name: "TechMaster Gaming Mouse", price: 59.99, oldPrice: null, rating: 5, reviews: 156, category: "accessories", brand: "TechMaster", image: "imgs/product9.jpg", badge: "New", badgeClass: "bg-success", dateAdded: "2023-12-05",class:"product-card" },
            { id: 10, name: "Quantum 4K Monitor", price: 399.99, oldPrice: 449.99, rating: 4.5, reviews: 112, category: "accessories", brand: "Quantum", image: "imgs/product10.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-09-28" ,class:"product-card"},
            { id: 11, name: "Nexus Pro Keyboard", price: 129.99, oldPrice: null, rating: 4, reviews: 84, category: "accessories", brand: "Nexus", image: "imgs/product11.jpg", badge: null, badgeClass: "", dateAdded: "2023-08-15",class:"product-card" },
            { id: 12, name: "Aurora Webcam HD", price: 79.99, oldPrice: 99.99, rating: 4, reviews: 67, category: "accessories", brand: "Aurora", image: "imgs/product12.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-07-10" ,class:"product-card"},
            { id: 13, name: "TechMaster Smart TV 55\"", price: 799.99, oldPrice: null, rating: 4.5, reviews: 189, category: "smart-home", brand: "TechMaster", image: "imgs/product13.jpg", badge: "New", badgeClass: "bg-success", dateAdded: "2023-11-15",class:"product-card" },
            { id: 14, name: "Quantum Portable SSD 1TB", price: 149.99, oldPrice: 179.99, rating: 5, reviews: 203, category: "accessories", brand: "Quantum", image: "imgs/product14.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-06-25",class:"product-card" },
            { id: 15, name: "Nexus Wireless Charging Pad", price: 39.99, oldPrice: null, rating: 4, reviews: 95, category: "accessories", brand: "Nexus", image: "imgs/product15.jpg", badge: null, badgeClass: "", dateAdded: "2023-05-12",class:"product-card" },
            { id: 16, name: "Aurora Smart Plug", price: 24.99, oldPrice: 29.99, rating: 4, reviews: 132, category: "smart-home", brand: "Aurora", image: "imgs/product16.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-10-08" ,class:"product-card"},
            { id: 17, name: "TechMaster Bluetooth Speaker", price: 89.99, oldPrice: null, rating: 4.5, reviews: 147, category: "audio", brand: "TechMaster", image: "imgs/product17.jpg", badge: "New", badgeClass: "bg-success", dateAdded: "2023-12-01" ,class:"product-card"},
            { id: 18, name: "Quantum Gaming Headset", price: 129.99, oldPrice: 149.99, rating: 4, reviews: 88, category: "audio", brand: "Quantum", image: "imgs/product18.png", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-09-14",class:"product-card" },
            { id: 19, name: "Nexus Power Bank 10000mAh", price: 49.99, oldPrice: null, rating: 4, reviews: 76, category: "accessories", brand: "Nexus", image: "imgs/product19.jpg", badge: null, badgeClass: "", dateAdded: "2023-08-22" ,class:"product-card"},
            { id: 20, name: "Aurora Smart Light Bulb", price: 29.99, oldPrice: 34.99, rating: 4.5, reviews: 164, category: "smart-home", brand: "Aurora", image: "imgs/product20.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-07-30",class:"product-card" },
            { id: 21, name: "TechMaster Pro Phone X", price: 1099.99, oldPrice: 1199.99, rating: 4.5, reviews: 142, category: "smartphones", brand: "TechMaster", image: "imgs/product21.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-11-10" ,class:"product-card"},
            { id: 22, name: "Quantum Slim Laptop", price: 999.99, oldPrice: null, rating: 4, reviews: 91, category: "laptops", brand: "Quantum", image: "imgs/product22.jpg", badge: "New", badgeClass: "bg-success", dateAdded: "2023-12-10",class:"product-card" },
            { id: 23, name: "Nexus Fitness Band", price: 79.99, oldPrice: 89.99, rating: 4, reviews: 103, category: "wearables", brand: "Nexus", image: "imgs/product23.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-10-25",class:"product-card" },
            { id: 24, name: "Aurora True Wireless Earbuds", price: 129.99, oldPrice: null, rating: 4.5, reviews: 117, category: "audio", brand: "Aurora", image: "imgs/product24.jpg", badge: null, badgeClass: "", dateAdded: "2023-09-18" ,class:"product-card"},
            { id: 25, name: "Slim Z Laptop Pro", price: 979.99, oldPrice: 999.99, rating: 4.5, reviews: 176, category: "laptops", brand: "Aurora", image: "imgs/product25.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-08-12",class:"product-card" },
            { id: 26, name: "DX Wireless Earbuds", price: 165, oldPrice: 189.99, rating: 4.4, reviews: 173, category: "audio", brand: "Aurora", image: "imgs/product2.0.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-09-12",class:"product-card" },
            { id: 27, name: "BX Phone", price: 999.99, oldPrice: 111.99, rating: 4.5, reviews: 178, category: "smartphones", brand: "TechMaster", image: "imgs/product26.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-11-15" ,class:"product-card"},
            { id: 28, name: "Leo Pro Max", price: 958.99, oldPrice: 999.99, rating: 4.5, reviews: 198, category: "smartphones", brand: "TechMaster", image: "imgs/product27.jpg", badge: "Limited", badgeClass: "bg-danger", dateAdded: "2023-10-25",class:"product-card" },
            { id: 29, name: "Fast Wireless Charger", price: 39.99, oldPrice: null, rating: 4.3, reviews: 142, category: "accessories", brand: "Aurora", image: "imgs/related1.jpg", badge: null, badgeClass: null, dateAdded: "2023-12-10",class:"product-card" },
            { id: 30, name: "Portable Bluetooth Speaker", price: 79.99, oldPrice: 89.99, rating: 4.6, reviews: 156, category: "audio", brand: "Quantum", image: "imgs/related2.jpg", badge: "New", badgeClass: "bg-danger", dateAdded: "2023-11-22",class:"product-card" },
            { id: 31, name: "20,000mAh Power Bank", price: 49.99, oldPrice: 59.99, rating: 4.4, reviews: 132, category: "accessories", brand: "Aurora", image: "imgs/related3.jpg", badge: "New", badgeClass: "bg-danger", dateAdded: "2023-12-05",class:"product-card" },
            { id: 32, name: "Color Smart Light Bulb", price: 29.99, oldPrice: null, rating: 4.2, reviews: 98, category: "smart-home", brand: "TechMaster", image: "imgs/related4.jpg", badge: "New", badgeClass: "bg-success", dateAdded: "2024-01-15",class:"product-card" },
            { id: 33, name: "Premium Smartphone", price: 799.99, oldPrice: 899.99, rating: 4.7, reviews: 215, category: "smartphones", brand: "TechMaster", image: "imgs/smartphone.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-11-20",class:"product-card" },
            { id: 34, name: "Ultrabook Laptop", price: 1200, oldPrice: 1500, rating: 4.5, reviews: 187, category: "laptops", brand: "Quantum", image: "imgs/laptop.jpg", badge: "Limited", badgeClass: "bg-danger", dateAdded: "2023-10-15",class:"product-card" },
            { id: 35, name: "Wireless Headphones", price: 179.99, oldPrice: 229.99, rating: 4.6, reviews: 324, category: "audio", brand: "Nexus", image: "imgs/headphones.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-12-01" ,class:"product-card"},
            { id: 36, name: "Smart Watch", price: 199.99, oldPrice: 249.99, rating: 4.3, reviews: 156, category: "wearables", brand: "Aurora", image: "imgs/smartwatch.jpg", badge: "New", badgeClass: "bg-danger", dateAdded: "2023-11-05",class:"product-card" },
            { id: 37, name: "Premium Tablet", price: 499.99, oldPrice: 599.99, rating: 4.4, reviews: 142, category: "tablets", brand: "TechMaster", image: "imgs/tablet.jpg", badge: "Sale", badgeClass: "bg-danger", dateAdded: "2023-10-25",class:"product-card" },
            { id: 38, name: "Smart Speaker", price: 129.99, oldPrice: 159.99, rating: 4.2, reviews: 98, category: "smart-home", brand: "Quantum", image: "imgs/speaker.jpg", badge: "New", badgeClass: "bg-danger", dateAdded: "2023-12-10",class:"product-card" }
        ];


        // Pagination variables
        let currentPage = 1;
        const productsPerPage = 12;
        let filteredProducts = [...products];
        let currentCategory = "all";
        let currentSort = "featured";

        // Initialize the page
        function initPage() {
            renderProducts();
            renderPagination();
            updateShowingCount();
            
            // Set up category links
            $('.category-link').click(function(e) {
                e.preventDefault();
                $('.category-link').removeClass('active-category');
                $(this).addClass('active-category');
                
                currentCategory = $(this).data('category');
                currentPage = 1;
                filterProducts();
            });
            
            // Set up sort options
            $('#sort-options').change(function() {
                currentSort = $(this).val();
                filterProducts();
            });
            
           // Set up brand filters
            $('.custom-filter[data-brand]').click(function() {
                $(this).toggleClass('selected');
                filterProducts();
            });

            // Set up rating filters
            $('.custom-filter[data-rating]').click(function() {
                $(this).toggleClass('selected');
                filterProducts();
            });
                        
            // Set up price range filter
            $('#priceRange').change(function() {
                filterProducts();
            });
            
            // Set "All Products" as active by default
            $('.category-link[data-category="all"]').addClass('active-category');
        }
        
        // Filter products based on selected criteria
        function filterProducts() {
            filteredProducts = [...products];
            
            // Filter by category
            if (currentCategory !== "all") {
                filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
            }
            
            // Filter by brand
            const selectedBrands = [];
            $('.custom-filter[data-brand].selected').each(function() {
                selectedBrands.push($(this).data('brand'));
            });
            
            if (selectedBrands.length > 0) {
                filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
            }
            
            // Filter by rating
            const selectedRatings = [];
            $('.custom-filter[data-rating].selected').each(function() {
                selectedRatings.push(parseInt($(this).data('rating')));
            });
            
            if (selectedRatings.length > 0) {
                filteredProducts = filteredProducts.filter(product => {
                    return selectedRatings.some(rating => Math.floor(product.rating) >= rating);
                });
            }
            
            // Filter by price range
            const priceRange = parseInt($('#priceRange').val());
            filteredProducts = filteredProducts.filter(product => product.price <= priceRange);
            
            // Sort products
            sortProducts();
            
            // Update display
            renderProducts();
            renderPagination();
            updateShowingCount();
        }
                
        // Sort products based on selected option
        function sortProducts() {
            switch(currentSort) {
                case "price-low":
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case "price-high":
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case "rating":
                    filteredProducts.sort((a, b) => b.rating - a.rating);
                    break;
                case "newest":
                    filteredProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                    break;
                default: 
                    break;
            }
        }
        
        // Render products for current page
        function renderProducts() {
            const startIndex = (currentPage - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;
            const productsToShow = filteredProducts.slice(startIndex, endIndex);
            
            const productContainer = $('#product-container');
            productContainer.empty();
            
            if (productsToShow.length === 0) {
                productContainer.html('<div class="col-12 text-center py-5"><h4>No products found matching your criteria</h4></div>');
                return;
            }
            
            productsToShow.forEach(product => {
                const ratingStars = [];
                for (let i = 1; i <= 5; i++) {
                    if (i <= Math.floor(product.rating)) {
                        ratingStars.push('<i class="bx bxs-star"></i>');
                    } else if (i === Math.ceil(product.rating) && product.rating % 1 >= 0.5) {
                        ratingStars.push('<i class="bx bxs-star-half"></i>');
                    } else {
                        ratingStars.push('<i class="bx bx-star"></i>');
                    }
                }
                
                const oldPriceHtml = product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : '';
                const badgeHtml = product.badge ? `<div class="badge ${product.badgeClass}">${product.badge}</div>` : '';
                
                productContainer.append(`
                    <div class="col-md-4 mb-4">
                        <div class="product-card">
                            ${badgeHtml}
                            <img src="${product.image}" alt="${product.name}" class="img-fluid">
                            <h3>${product.name}</h3>
                            <div class="rating mb-2">
                                ${ratingStars.join('')}
                                <span class="small">(${product.reviews})</span>
                            </div>
                            <p class="price">$${product.price.toFixed(2)} ${oldPriceHtml}</p>
                            <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                `);
            });
        }
        
        // Render pagination controls
        function renderPagination() {
            const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
            const pagination = $('#pagination');
            pagination.empty();
            
            if (pageCount <= 1) return;
            
            // Previous button
            pagination.append(`
                <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                    <a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a>
                </li>
            `);
            
            // Page numbers
            const maxVisiblePages = 5;
            let startPage, endPage;
            
            if (pageCount <= maxVisiblePages) {
                startPage = 1;
                endPage = pageCount;
            } else {
                const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
                const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;
                
                if (currentPage <= maxPagesBeforeCurrent) {
                    startPage = 1;
                    endPage = maxVisiblePages;
                } else if (currentPage + maxPagesAfterCurrent >= pageCount) {
                    startPage = pageCount - maxVisiblePages + 1;
                    endPage = pageCount;
                } else {
                    startPage = currentPage - maxPagesBeforeCurrent;
                    endPage = currentPage + maxPagesAfterCurrent;
                }
            }
            
            // First page and ellipsis if needed
            if (startPage > 1) {
                pagination.append(`
                    <li class="page-item ${currentPage === 1 ? 'active' : ''}">
                        <a class="page-link" href="#" data-page="1">1</a>
                    </li>
                `);
                if (startPage > 2) {
                    pagination.append('<li class="page-item disabled"><span class="page-link">...</span></li>');
                }
            }
            
            // Middle pages
            for (let i = startPage; i <= endPage; i++) {
                pagination.append(`
                    <li class="page-item ${currentPage === i ? 'active' : ''}">
                        <a class="page-link" href="#" data-page="${i}">${i}</a>
                    </li>
                `);
            }
            
            // Last page and ellipsis if needed
            if (endPage < pageCount) {
                if (endPage < pageCount - 1) {
                    pagination.append('<li class="page-item disabled"><span class="page-link">...</span></li>');
                }
                pagination.append(`
                    <li class="page-item ${currentPage === pageCount ? 'active' : ''}">
                        <a class="page-link" href="#" data-page="${pageCount}">${pageCount}</a>
                    </li>
                `);
            }
            
            // Next button
            pagination.append(`
                <li class="page-item ${currentPage === pageCount ? 'disabled' : ''}">
                    <a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>
                </li>
            `);
            
            // Set up page click handlers
            $('.page-link[data-page]').click(function(e) {
                e.preventDefault();
                currentPage = parseInt($(this).data('page'));
                renderProducts();
                renderPagination();
                updateShowingCount();
                $('html, body').animate({ scrollTop: $('#products').offset().top - 20 }, 'slow');
            });
        }
        
        // Update showing count text
        function updateShowingCount() {
            const startCount = (currentPage - 1) * productsPerPage + 1;
            const endCount = Math.min(currentPage * productsPerPage, filteredProducts.length);
            $('#showing-count').text(`Showing ${startCount}-${endCount} of ${filteredProducts.length} products`);
        }
        
        // Initialize the page
        initPage();
    }
     
    // Image slider functionality
    function initImageSlider() {
        const slides = document.querySelectorAll('.main-slider .slide');
        const thumbnails = document.querySelectorAll('.thumbnail-container .thumbnail');
        let currentSlide = 0;
        let slideInterval;

        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => {
                thumb.classList.remove('active');
            });
            
            // Show the selected slide
            slides[index].classList.add('active');
            
            // Activate the corresponding thumbnail
            if (thumbnails[index]) {
                thumbnails[index].classList.add('active');
            }
            
            currentSlide = index;
        }

        // Function to go to next slide
        function nextSlide() {
            let newIndex = (currentSlide + 1) % slides.length;
            showSlide(newIndex);
        }

        // Function to start auto sliding
        function startSlideShow() {
            slideInterval = setInterval(nextSlide, 3000); 
        }

        // Function to stop auto sliding
        function stopSlideShow() {
            clearInterval(slideInterval);
        }

        // Add click event to thumbnails
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                stopSlideShow();
                showSlide(index);
                startSlideShow();
            });
        });

        // Initialize the slider
        showSlide(0);
        startSlideShow();

        // Pause on hover (optional)
        const sliderContainer = document.querySelector('.main-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopSlideShow);
            sliderContainer.addEventListener('mouseleave', startSlideShow);
        }
    }

    // Initialize all functionality
    initCarousels();
    initCarouselNavigation();
    initForms();
    initProductListing();
    initImageSlider();
});

// Cart functionality
function initCartFunctionality() {
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count in header
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        $('#cart-count').text(count);
    }
    
    // Update cart page
    function updateCartPage() {
        const cartItemsContainer = $('#cart-items');
        const cartItemCount = $('#cart-item-count');
        const cartSubtotal = $('#cart-subtotal');
        const cartShipping = $('#cart-shipping');
        const cartTax = $('#cart-tax');
        const cartTotal = $('#cart-total');
        const checkoutBtn = $('#checkout-btn');
        
        if (cart.length === 0) {
            cartItemsContainer.html(`
                <div class="empty-cart text-center py-5">
                    <i class='bx bx-cart' style="font-size: 5rem; color: #ddd;"></i>
                    <h4 class="mt-3">Your cart is empty</h4>
                    <p class="text-muted">Looks like you haven't added anything to your cart yet</p>
                    <a href="product-listing.html" class="btn btn-primary mt-3">Continue Shopping</a>
                </div>
            `);
            cartItemCount.text('0');
            cartSubtotal.text('$0.00');
            cartShipping.text('$0.00');
            cartTax.text('$0.00');
            cartTotal.text('$0.00');
            checkoutBtn.prop('disabled', true);
            return;
        }
        
        // Calculate totals
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 5.99;
        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + shipping + tax;
        
        // Update totals
        cartItemCount.text(cart.reduce((total, item) => total + item.quantity, 0));
        cartSubtotal.text(`$${subtotal.toFixed(2)}`);
        cartShipping.text(shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`);
        cartTax.text(`$${tax.toFixed(2)}`);
        cartTotal.text(`$${total.toFixed(2)}`);
        checkoutBtn.prop('disabled', false);
        
        // Render cart items
        cartItemsContainer.empty();
        cart.forEach((item, index) => {
            cartItemsContainer.append(`
                <div class="cart-item mb-4 pb-4 border-bottom" data-id="${item.id}">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid">
                        </div>
                        <div class="col-md-6">
                            <h5>${item.name}</h5>
                            <p class="text-muted mb-1">${item.color || ''} ${item.storage || ''}</p>
                            <p class="price">$${item.price.toFixed(2)}</p>
                            <div class="quantity-controls d-flex align-items-center">
                                <button class="btn btn-sm btn-outline-secondary decrease-quantity">-</button>
                                <input type="text" class="form-control form-control-sm quantity-input mx-2 text-center" value="${item.quantity}" style="width: 50px;">
                                <button class="btn btn-sm btn-outline-secondary increase-quantity">+</button>
                                <button class="btn btn-sm btn-link text-danger remove-item ml-3">Remove</button>
                            </div>
                        </div>
                        <div class="col-md-3 text-right">
                            <p class="font-weight-bold">$${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            `);
        });
        
        // Add event listeners for quantity controls
        $('.decrease-quantity').click(function() {
            const itemId = $(this).closest('.cart-item').data('id');
            const item = cart.find(item => item.id === itemId);
            if (item.quantity > 1) {
                item.quantity--;
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartPage();
                updateCartCount();
            }
        });
        
        $('.increase-quantity').click(function() {
            const itemId = $(this).closest('.cart-item').data('id');
            const item = cart.find(item => item.id === itemId);
            item.quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartPage();
            updateCartCount();
        });
        
        $('.quantity-input').change(function() {
            const itemId = $(this).closest('.cart-item').data('id');
            const item = cart.find(item => item.id === itemId);
            const newQuantity = parseInt($(this).val()) || 1;
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartPage();
            updateCartCount();
        });
        
        $('.remove-item').click(function() {
            const itemId = $(this).closest('.cart-item').data('id');
            cart = cart.filter(item => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartPage();
            updateCartCount();
        });
    }
    
    // Add to cart functionality - UPDATED VERSION
    $('body').on('click', '.btn-primary:contains("Add to Cart")', function() {
        const productCard = $(this).closest('.product-card');
        
        // Get product details from data attributes
        const productId = productCard.find('img').attr('src').split('/').pop().split('.')[0]; 
        const productName = productCard.find('h3').text();
        const productPrice = parseFloat(productCard.find('.price').text().replace('$', '').split(' ')[0]);
        const productImage = productCard.find('img').attr('src');
        
        // Get selected options (color, storage)
        const color = productCard.find('.color-options .btn.active').text().trim() || 'Default';
        const storage = productCard.find('.storage-options .btn.active').text().trim() || 'Default';
        
        // Check if product is already in cart
        const existingItem = cart.find(item => 
            item.id === productId && 
            item.color === color && 
            item.storage === storage
        );
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                color: color,
                storage: storage,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Show added to cart notification
        const notification = $(`
            <div class="alert alert-success alert-dismissible fade show" role="alert" style="position: fixed; bottom: 20px; right: 20px; z-index: 1050;">
                <strong>Added to cart!</strong> ${productName} has been added to your cart.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `);
        
        $('body').append(notification);
        setTimeout(() => {
            notification.alert('close');
        }, 3000);
    });
    
    // Checkout functionality
    $('#checkout-btn').click(function() {
        $('#checkoutModal').modal('show');
    });
    
    // Place order functionality
    $('#place-order-btn').click(function() {
        // Simple validation
        const form = $('#checkout-form');
        let isValid = true;
        
        form.find('[required]').each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (!isValid) {
            return;
        }
        
        // Generate random order ID
        const orderId = '#' + Math.floor(100000 + Math.random() * 900000);
        
        // Show confirmation
        $('#order-id').text(orderId);
        $('#confirmation-email').text($('#email').val());
        $('#checkoutModal').modal('hide');
        $('#orderConfirmationModal').modal('show');
        
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartPage();
    });
    
    // Promo code functionality
    $('#apply-promo').click(function() {
        const promoCode = $('#promo-code').val().toUpperCase();
        const promoMessage = $('#promo-message');
        
        if (promoCode === 'TECH10') {
            // Apply 10% discount
            const subtotal = parseFloat($('#cart-subtotal').text().replace('$', ''));
            const newSubtotal = subtotal * 0.9;
            const shipping = parseFloat($('#cart-shipping').text().replace('$', '').replace('FREE', '0'));
            const tax = newSubtotal * 0.08;
            const total = newSubtotal + shipping + tax;
            
            $('#cart-subtotal').html(`$${newSubtotal.toFixed(2)} <span class="text-success"><del>$${subtotal.toFixed(2)}</del></span>`);
            $('#cart-tax').text(`$${tax.toFixed(2)}`);
            $('#cart-total').text(`$${total.toFixed(2)}`);
            
            promoMessage.html('<span class="text-success">Promo code applied: 10% discount</span>');
        } else if (promoCode === 'FREESHIP') {
            // Apply free shipping
            const subtotal = parseFloat($('#cart-subtotal').text().replace('$', ''));
            const shipping = 0;
            const tax = subtotal * 0.08;
            const total = subtotal + shipping + tax;
            
            $('#cart-shipping').text('FREE');
            $('#cart-tax').text(`$${tax.toFixed(2)}`);
            $('#cart-total').text(`$${total.toFixed(2)}`);
            
            promoMessage.html('<span class="text-success">Promo code applied: Free shipping</span>');
        } else if (promoCode) {
            promoMessage.html('<span class="text-danger">Invalid promo code</span>');
        } else {
            promoMessage.html('<span class="text-danger">Please enter a promo code</span>');
        }
    });
    
    // Initialize cart page if we're on the cart page
    if ($('section.cart').length) {
        updateCartPage();
    }
    
    // Initialize cart count
    updateCartCount();
}

// Initialize cart functionality when DOM is ready
$(document).ready(function() {
    initCartFunctionality();
});