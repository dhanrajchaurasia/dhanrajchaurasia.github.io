/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

// Function to get particle colors based on theme
function getParticleColors() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  return {
    particleColor: isDarkMode ? "#7aa3ff" : "#000000",
    lineColor: isDarkMode ? "#5a9eff" : "#000000"
  };
}

// Function to initialize particles with theme-aware colors
function initParticles() {
  const colors = getParticleColors();
  
  particlesJS('particles-js',
    
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": colors.particleColor
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": colors.particleColor
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": colors.lineColor,
          "opacity": 0.4,
          "width": 1
        },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "transparent",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

  );
}

// Initialize particles when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for theme to be applied
    setTimeout(initParticles, 100);
  });
} else {
  setTimeout(initParticles, 100);
}

// Function to update particles when theme changes
function updateParticlesTheme() {
  if (window.pJSDom && window.pJSDom.length > 0) {
    const pJS = window.pJSDom[0].pJS;
    const colors = getParticleColors();
    
    // Update particle colors
    pJS.particles.color.value = colors.particleColor;
    pJS.particles.shape.stroke.color = colors.particleColor;
    pJS.particles.line_linked.color = colors.lineColor;
    
    // Convert hex to RGB for line_linked
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    
    const rgb = hexToRgb(colors.lineColor);
    if (rgb) {
      pJS.particles.line_linked.color_rgb_line = rgb;
    }
    
    // Refresh particles
    pJS.fn.particlesRefresh();
  }
}

// Listen for theme changes
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      updateParticlesTheme();
    }
  });
});

// Start observing body for class changes
if (document.body) {
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  });
}