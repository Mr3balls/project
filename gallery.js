document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".gallery-thumbnail");
    const fullImage = document.getElementById("fullImage");
    const filterSelect = document.getElementById("filterSelect");
    // Полное изображение
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            fullImage.src = thumbnail.dataset.full;
            fullImage.style.display = "block";
        });
    });
    // Фильтр
    filterSelect.addEventListener("change", function() {
        const selectedCategory = this.value;

        thumbnails.forEach(thumbnail => {
            if (selectedCategory === "all" || thumbnail.dataset.category === selectedCategory) {
                thumbnail.style.display = "block";
            } else {
                thumbnail.style.display = "none";
            }
        });

        // Сохранение выбранного фильтра в localStorage
        localStorage.setItem('selectedFilter', selectedCategory);
    });

    // Восстановление выбранного фильтра при загрузке страницы
    const savedFilter = localStorage.getItem('selectedFilter');
    if (savedFilter) {
        filterSelect.value = savedFilter;
        filterSelect.dispatchEvent(new Event('change'));
    }});