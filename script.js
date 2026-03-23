// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.2)';
    header.style.backdropFilter = 'blur(15px)';
  } else {
    header.style.background = 'rgba(0, 0, 0, 0.1)';
    header.style.backdropFilter = 'blur(10px)';
  }
});

// Add click effects to buttons
document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', function (e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add hover effects to ex cards
document.querySelectorAll('.ex-card').forEach((card) => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add typing effect to main title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
  const titleElement = document.querySelector('.title-line');
  if (titleElement) {
    const originalText = titleElement.textContent;
    setTimeout(() => {
      typeWriter(titleElement, originalText, 150);
    }, 1000);
  }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const rate = scrolled * -0.5;

  if (hero) {
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Add counter animation to stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach((counter) => {
    const target = counter.textContent;
    const increment = target.includes('%')
      ? 1
      : target.includes('🔥') || target.includes('💅')
      ? 1
      : 100000000;
    const duration = 2000;
    const step = increment / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= increment) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        if (target.includes('%')) {
          counter.textContent = Math.floor(current) + '%';
        } else if (target.includes('🔥') || target.includes('💅')) {
          counter.textContent = target;
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }
      }
    }, 16);
  });
}

// Trigger counter animation when stats section is in view
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
  observer.observe(statsSection);
}

// Add floating animation to tokenomics cards
document.querySelectorAll('.tokenomics-card').forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});

// Add sparkle trail effect
document.addEventListener('mousemove', (e) => {
  if (Math.random() < 0.1) {
    createSparkle(e.clientX, e.clientY);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.innerHTML = '✨';
  sparkle.style.position = 'fixed';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.fontSize = '1rem';
  sparkle.style.zIndex = '9999';
  sparkle.style.animation = 'sparkleFade 1s ease-out forwards';

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// Add CSS for sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFade {
        0% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add toxic queen quotes that change on hover
const toxicQuotes = [
  "💅 I'm not toxic, I'm just fabulous",
  '🔥 Hotter than your portfolio',
  '✨ Queen energy only',
  '💅 Diva status: Achieved',
  '🔥 Toxic but worth it',
  '✨ Making crypto fabulous since forever',
  '💅 Sorry not sorry, I am the upgrade',
  '🔥 Your ex is my biggest fan',
  "💅 I don't need luck, I have attitude",
  '🔥 Jealousy is my favorite color',
  "✨ I'm not high maintenance, I'm high value",
  '💅 Your opinion is not my problem',
  "🔥 I'm not a snack, I'm the whole meal",
  '✨ Confidence is silent, insecurities are loud',
  "💅 I'm not difficult, I'm just not easy",
  "🔥 I don't chase, I attract",
  "✨ I'm not bossy, I'm the boss",
  '💅 My standards are high because my worth is higher',
  "🔥 I'm not mean, I'm honest",
  "✨ I don't need your approval to be amazing",
];

let currentQuoteIndex = 0;

function changeQuote() {
  const quoteElement = document.querySelector('.rotating-quote');
  if (quoteElement) {
    quoteElement.style.opacity = '0';
    setTimeout(() => {
      quoteElement.textContent = toxicQuotes[currentQuoteIndex];
      quoteElement.style.opacity = '1';
      quoteElement.style.fontWeight = 'bold';
      quoteElement.style.color = '#000';
      currentQuoteIndex = (currentQuoteIndex + 1) % toxicQuotes.length;
      console.log('Quote changed to:', toxicQuotes[currentQuoteIndex - 1]);
    }, 500);
  } else {
    console.log('Rotating quote element not found!');
  }
}

// Change quote every 2.5 seconds (faster for more quotes)
setInterval(changeQuote, 4000);

// Start the quote rotation immediately
setTimeout(changeQuote, 1000);

// Add confetti effect on button clicks
function createConfetti() {
  const colors = ['#fdcb6e', '#ffeaa7', '#000', '#fff'];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = -10 + 'px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.animation = 'confettiFall 3s linear forwards';

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// Add CSS for confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Add confetti to primary button clicks
document
  .querySelector('.btn-primary')
  .addEventListener('click', createConfetti);

// Add toxic queen entrance animation
window.addEventListener('load', () => {
  const elements = document.querySelectorAll(
    '.hero-text, .hero-image, .nav-links li'
  );
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    setTimeout(() => {
      element.style.transition = 'all 0.8s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 200);
  });
});

console.log('💅 $BONKARINA - The Toxic Queen of Crypto is ready to slay! 🔥✨');
