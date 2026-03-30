// ── Nav scroll effect ─────────────────────────────────────────────────────────
const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20)
})

// ── Active nav link ───────────────────────────────────────────────────────────
const page = location.pathname.split('/').pop() || 'index.html'
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href')
  if (href === page || (page === '' && href === 'index.html')) {
    a.classList.add('active')
  }
})

// ── Scroll reveal ─────────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible')
      observer.unobserve(e.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// ── Smooth anchor links ───────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
