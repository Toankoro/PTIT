
document.addEventListener("click",function(e){
    if(e.target.classList.contains("card-img-top")){
        const src =e.target.getAttribute("src");
        document.querySelector(".modal-img").src=src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Xóa lớp "active" khỏi tất cả các mục
            navLinks.forEach(item => item.classList.remove("active"));

            // Thêm lớp "active" cho mục được nhấn vào
            this.classList.add("active");
        });
    });
});
function changeContent(content, imgSrc) {
    document.getElementById("content-text").innerHTML = content;
    document.getElementById("content-image").src = imgSrc;
}

window.onload = function() {
    changeContent('Tòa A1: Là khu vực làm việc của lãnh đạo học viện, Phòng GV, phòng CT & CTSV,  TT KT&ĐBCLGD và các Viện/Phòng/Trung tâm chức năng. Là nơi tập trung nhiều có nhiều trang thiết bị hiện đại và đa dạng nhất học viện. Có nhiều phòng ban nghiên cứu như Trung tâm đào tạo quốc tế CIE, CDIT.', './img/p2.jpg');
};

window.onscroll = function() {
    var button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}