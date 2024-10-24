export default {
    background: {
        color: {
            value: "#060809",
        },
    },
    particles: {
      number: {
        value: 300, // Adjust the number of particles as needed
      },
      color: {
        value: "#cad6f2", // Customize the particle color
      },
      shape: {
        type: "circle", // Choose the particle shape (e.g., "circle", "star", "polygon")
      },
      opacity: {
        value: 0.5, // Adjust the particle opacity
        anim: {
          enable: true,
          speed: 1, // Control the opacity animation speed
          minimumValue: 0.1,
        },
      },
      size: {
        value: 1.5, // Set the particle size
        random: true, // Randomize particle sizes
      },
      move: {
        enable: true,
        speed: .3, // Control the particle movement speed
        direction: "none", // Set the movement direction (e.g., "none", "top", "bottom", "left", "right")
      },
    },
    interactivity: {
      detectOn: "canvas",
      mode: "grab", // Choose the interaction mode (e.g., "grab", "bubble", "repulse")
    },
  }