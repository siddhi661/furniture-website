const testimonials = [

    {
        text: `"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."`,
        image: "image/person-1.jpg",
        name: "Maria Jones",
        role: "CEO, Co-Founder, XYZ Inc."
    },

    {
        text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae odio quis nisl dapibus malesuada. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."`,
        image: "image/person-2.jpg",
        name: "John Smith",
        role: "CEO, Co-Founder, XYZ Inc."
    },

    {
        text: `"Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Donec vitae odio quis nisl dapibus malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."`,
        image: "image/person-3.jpg",
        name: "Sarah Williams",
        role: "Designer, XYZ Inc."
    }

];

let currentIndex = 0;


function showTestimonial(index) {

    currentIndex = index;

    document.getElementById("testimonial-text").textContent =
        testimonials[index].text;

    document.getElementById("testimonial-img").src =
        testimonials[index].image;

    document.getElementById("testimonial-name").textContent =
        testimonials[index].name;

    document.getElementById("testimonial-role").textContent =
        testimonials[index].role;


    // Dots update

    const dots = document.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[index].classList.add("active");
}


// Next button

function nextTestimonial() {

    currentIndex++;

    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }

    showTestimonial(currentIndex);
}


// Previous button

function prevTestimonial() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }

    showTestimonial(currentIndex);
}