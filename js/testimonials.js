const testimonials = [
    {
        name: "-Marco De Luca",
        occupation: "IDP Program coordinator and professor for Fanshawe",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste soluta magnam nobis possimus incidunt architecto molestias.."
    },
    {
        name: "-Aimee Hagerty",
        occupation: "co-founder and board member for Foundation Sixty6",
        text: "These amazing students bring fresh perspectives and innovative ideas to the table. Their dedication to the project is truly inspiring."
    },
    {
        name: "-Bill Hagerty",
        occupation: "co-founder and board member for Foundation Sixty6",
        text: "It's been incredible to work alongside these talented students. Their passion and dedication reaffirm our commitment to supporting."
    },
    {
        name: "-Bill Hagerty",
        occupation: "co-founder and board member for Foundation Sixty6",
        text: "It's been incredible to work alongside these talented students. Their passion and dedication reaffirm our commitment to supporting."
    },
    {
        name: "-Bill Hagerty",
        occupation: "co-founder and board member for Foundation Sixty6",
        text: "It's been incredible to work alongside these talented students. Their passion and dedication reaffirm our commitment to supporting."
    },
    {
        name: "-Bill Hagerty",
        occupation: "co-founder and board member for Foundation Sixty6",
        text: "It's been incredible to work alongside these talented students. Their passion and dedication reaffirm our commitment to supporting."
    }
];

const testimonialSection = document.querySelector('.section-testimonials');
const testimonialContainer = document.getElementById('testimonialCard');

function createTestimonials() {
    testimonials.forEach(({name, occupation, text})=> {
        //create cards
        const card = document.createElement('div');
        card.classList.add('testimonial-card');

        

        //create image 
        const img = document.createElement('img');
        img.src = 'images/testimonial-img.png';
        img.classList.add('testimonial-img');

        //create content
        const testimonialText = document.createElement('p');
        testimonialText.classList.add('testimonial-text');
        testimonialText.textContent = text;

        const testimonialName = document.createElement('p');
        testimonialName.classList.add('testimonial-name');
        testimonialName.textContent = name;

        const testimonialOccupation = document.createElement('p');
        testimonialOccupation.classList.add('testimonial-occupation');
        testimonialOccupation.textContent = occupation;

        
        card.appendChild(img);
        card.appendChild(testimonialText);
        card.appendChild(testimonialName);
        card.appendChild(testimonialOccupation);

        testimonialContainer.appendChild(card);

    });
}

createTestimonials();