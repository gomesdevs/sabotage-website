
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header")

  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  }

  window.addEventListener("scroll", handleScroll)

  const navToggle = document.querySelector(".nav-toggle")
  const mainNav = document.querySelector(".main-nav")

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"
      this.setAttribute("aria-expanded", !isExpanded)
      mainNav.classList.toggle("active")

      document.body.classList.toggle("nav-open")
    })
  }

  document.addEventListener("click", (event) => {
    if (
      mainNav &&
      mainNav.classList.contains("active") &&
      !mainNav.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      mainNav.classList.remove("active")
      navToggle.setAttribute("aria-expanded", "false")
      document.body.classList.remove("nav-open")
    }
  })

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(
      ".bio-paragraph, .bio-image img, .timeline-item, .legacy-card, .album-cover, .album-info, .track-item, .collab-card, .outfit-card, .form-group",
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })
  } else {
    const elements = document.querySelectorAll(
      ".bio-paragraph, .bio-image img, .timeline-item, .legacy-card, .album-cover, .album-info, .track-item, .collab-card, .outfit-card, .form-group",
    )
    elements.forEach((element) => {
      element.classList.add("in-view")
    })
  }
})
