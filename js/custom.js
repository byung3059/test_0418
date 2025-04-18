const introTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#pc_intro_sec",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 0,
        markers: true,
    }
});

introTimeline
    .to("#pc_intro_sec .cic_left", { x: 300 }, 0)
    .to("#pc_intro_sec .cic_right", { x: -300 }, 0)
    .to("#pc_intro_sec .cic_center_box .cic_top", { y: -60, x: 140, }, 0)
    .to("#pc_intro_sec .cic_center_box .cic_bottom", { y: 80, x: -140 }, 0);




if (window.innerWidth < 1025) {
    const m_introTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#m_intro_sec",
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 0,
            markers: true,
        }
    });

    m_introTimeline
        .to("#m_intro_sec .cic_left", { x: 100 }, 0)
        .to("#m_intro_sec .cic_right", { x: -100 }, 0)
        .to("#m_intro_sec .cic_center_box", { opacity: 1 }, 0)
}


const panels = gsap.utils.toArray("#sec_box .itm");

gsap.to(panels, {
    yPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#sec_box",
        pin: true,
        start: "top top",
        end: "+=6000",
        scrub: 1,
        snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: true,
            duration: { min: 1, max: 1 }
        }
    }
});



const T = document.querySelector('#to_top');
T.addEventListener('click', () => {
    gsap.to(window, { scrollTo: 0, duration: 1 })
});

