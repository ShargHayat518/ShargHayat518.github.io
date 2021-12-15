document.addEventListener("DOMContentLoaded", () => {

    let header_name = document.getElementById("header_name");
    let numbers = document.getElementsByClassName("micro_square");

    let tech_stack = document.getElementById("tech_stack");
    let projects = document.getElementById("projects");
    let about = document.getElementById("about");


    // Event listener for Header mouseenter
    // This fxn allows the numbers in the header
    // to continously change while the mouse is inside it
    header_name.addEventListener('mouseenter', (e) => {

        // Handles number changes based on setInterval
        // and random numbers
        var handle = window.setInterval(function () {

            for (i = 0; i < numbers.length; i++) {
                rand = Math.floor(Math.random() * 2);
                numbers[i].innerHTML = rand;
            }

        }, 75)

        // Exit condition
        header_name.addEventListener('mouseleave', (e) => {
            window.clearInterval(handle);
        })
    })


    let centerElement = "projects";

    let tech_bound_default_x = tech_stack.getBoundingClientRect().left;
    let proj_bound_default_x = projects.getBoundingClientRect().left;
    let about_bound_default_x = about.getBoundingClientRect().left;

    let left_pos = proj_bound_default_x - tech_bound_default_x - 75;
    let mid_pos = proj_bound_default_x - tech_bound_default_x - 75;
    let right_pos = about_bound_default_x - proj_bound_default_x - 75;

    tech_stack.addEventListener("mouseenter", () => {

        centerElement = "tech_stack";

        anime({
            targets: '#block1',
            translateX: mid_pos
        });

        anime({
            targets: '#block2',
            translateX: right_pos
        });


        console.log("ran tech_stack EL");
    });

    projects.addEventListener("mouseenter", () => {

        centerElement = "projects";

        anime({
            targets: '#block1',
            translateX: -1,
        });

        anime({
            targets: '#block2',
            translateX: -1,
        });

        console.log("ran project EL");


    });

    about.addEventListener("mouseenter", () => {

        if (centerElement == "tech_stack") {
            anime({
                targets: '#block1',
                translateX: -1,
            })

            anime({
                targets: '#block2',
                translateX: -left_pos,
            })

            anime({
                targets: '#block3',
                translateX: -mid_pos,
            })
        } else if (centerElement == "projects") {
            anime({
                targets: '#block2',
                translateX: -mid_pos,
            })

            anime({
                targets: '#block3',
                translateX: -mid_pos,
            })
        }

    })




})