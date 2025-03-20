document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // Typewriter Effect
    const text = "Hello, I'm Tejaswini Nahire";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 500);
});

// PDF Resume Download Function
function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/resume/Tejaswini_Resume.pdf';  // Update with actual file path
    link.download = 'Tejaswini_Nahire_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector(".skills-section");

    function revealSkills() {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            skillsSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealSkills);
    revealSkills();
});


document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about-section");

    function revealAbout() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealAbout);
    revealAbout();
});

document.addEventListener("DOMContentLoaded", function() {
    const educationSection = document.querySelector(".education-section");

    function revealSection() {
        const sectionTop = educationSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            educationSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealSection);
    revealSection();
});
document.addEventListener("DOMContentLoaded", function() {
    const resumeSection = document.getElementById("resume-section");

    function revealResume() {
        const sectionTop = resumeSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            resumeSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealResume);
    revealResume();
});
