/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3730a3',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        gradient: {
          start: '#667eea',
          end: '#764ba2',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'slide-in-down': 'slideInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'flip-in': 'flipIn 0.8s ease-out',
        'rotate-in': 'rotateIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'particle-float': 'particleFloat 6s ease-in-out infinite',
        'geometric-rotate': 'geometricRotate 8s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'card-hover': 'cardHover 0.3s ease-out',
        'button-pulse': 'buttonPulse 2s ease-in-out infinite',
        'loading-spin': 'loadingSpin 1s linear infinite',
        'loading-pulse': 'loadingPulse 2s ease-in-out infinite',
        'typing': 'typing 3s steps(40, end)',
        'blink': 'blink 1s infinite',
        'wave': 'wave 1.5s ease-in-out infinite',
        'tilt': 'tilt 3s ease-in-out infinite',
        'morph': 'morph 4s ease-in-out infinite',
        'ripple': 'ripple 1s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-bounce': 'scaleBounce 0.6s ease-out',
        'rotate-scale': 'rotateScale 0.8s ease-out',
        'flip-scale': 'flipScale 0.8s ease-out',
        'slide-scale': 'slideScale 0.8s ease-out',
        'bounce-scale': 'bounceScale 0.8s ease-out',
        'fade-scale': 'fadeScale 0.8s ease-out',
        'slide-rotate': 'slideRotate 0.8s ease-out',
        'flip-slide': 'flipSlide 0.8s ease-out',
        'rotate-slide': 'rotateSlide 0.8s ease-out',
        'scale-slide': 'scaleSlide 0.8s ease-out',
        'bounce-slide': 'bounceSlide 0.8s ease-out',
        'fade-slide': 'fadeSlide 0.8s ease-out',
        'flip-rotate': 'flipRotate 0.8s ease-out',
        'rotate-flip': 'rotateFlip 0.8s ease-out',
        'scale-flip': 'scaleFlip 0.8s ease-out',
        'bounce-flip': 'bounceFlip 0.8s ease-out',
        'fade-flip': 'fadeFlip 0.8s ease-out',
        'slide-flip': 'slideFlip 0.8s ease-out',
        'rotate-bounce': 'rotateBounce 0.8s ease-out',
        'scale-bounce-rotate': 'scaleBounceRotate 0.8s ease-out',
        'flip-bounce': 'flipBounce 0.8s ease-out',
        'slide-bounce': 'slideBounce 0.8s ease-out',
        'fade-bounce': 'fadeBounce 0.8s ease-out',
        'rotate-fade': 'rotateFade 0.8s ease-out',
        'scale-fade': 'scaleFade 0.8s ease-out',
        'flip-fade': 'flipFade 0.8s ease-out',
        'slide-fade': 'slideFade 0.8s ease-out',
        'bounce-fade': 'bounceFade 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flipIn: {
          '0%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
          '40%': { transform: 'perspective(400px) rotateY(-20deg)' },
          '60%': { transform: 'perspective(400px) rotateY(10deg)' },
          '80%': { transform: 'perspective(400px) rotateY(-5deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-200deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)', opacity: '1' },
        },
        geometricRotate: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)', opacity: '0.3' },
          '50%': { transform: 'rotate(180deg) scale(1.2)', opacity: '0.6' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(102, 126, 234, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(102, 126, 234, 0.8)' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(102, 126, 234, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.6)' },
        },
        cardHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-10px) scale(1.02)' },
        },
        buttonPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        loadingSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        loadingPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(102, 126, 234, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(102, 126, 234, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleBounce: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateScale: {
          '0%': { transform: 'rotate(-200deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        flipScale: {
          '0%': { transform: 'perspective(400px) rotateY(90deg) scale(0)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateY(0deg) scale(1)', opacity: '1' },
        },
        slideScale: {
          '0%': { transform: 'translateX(-100%) scale(0)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        bounceScale: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRotate: {
          '0%': { transform: 'translateX(-100%) rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        flipSlide: {
          '0%': { transform: 'perspective(400px) rotateY(90deg) translateX(-100%)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateY(0deg) translateX(0)', opacity: '1' },
        },
        rotateSlide: {
          '0%': { transform: 'rotate(-180deg) translateX(-100%)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) translateX(0)', opacity: '1' },
        },
        scaleSlide: {
          '0%': { transform: 'scale(0) translateX(-100%)', opacity: '0' },
          '100%': { transform: 'scale(1) translateX(0)', opacity: '1' },
        },
        bounceSlide: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        flipRotate: {
          '0%': { transform: 'perspective(400px) rotateY(90deg) rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateY(0deg) rotate(0deg)', opacity: '1' },
        },
        rotateFlip: {
          '0%': { transform: 'rotate(-180deg) perspective(400px) rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        scaleFlip: {
          '0%': { transform: 'scale(0) perspective(400px) rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'scale(1) perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        bounceFlip: {
          '0%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
          '50%': { transform: 'perspective(400px) rotateY(-10deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        fadeFlip: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateY(90deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateY(0deg)' },
        },
        slideFlip: {
          '0%': { transform: 'translateX(-100%) perspective(400px) rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        rotateBounce: {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '50%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
        scaleBounceRotate: {
          '0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0' },
          '50%': { transform: 'scale(1.1) rotate(-10deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        flipBounce: {
          '0%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
          '50%': { transform: 'perspective(400px) rotateY(-10deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0deg)', opacity: '1' },
        },
        slideBounce: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeBounce: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        rotateFade: {
          '0%': { opacity: '0', transform: 'rotate(-180deg)' },
          '100%': { opacity: '1', transform: 'rotate(0deg)' },
        },
        scaleFade: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        flipFade: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateY(90deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateY(0deg)' },
        },
        slideFade: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceFade: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 