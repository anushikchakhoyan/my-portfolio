/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			josefinSans: [
  				'Josefin Sans',
  				'sans-serif'
  			],
  			dancingScript: [
  				'Dancing Script',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			gray: {
  				'50': '#fbfbfb',
  				'100': '#f3f4f6',
  				'200': '#f8f8f8',
  				'300': '#d1d5db',
  				'400': '#c5c5c5',
  				'500': '#737373',
  				'600': '#222423',
  				'700': '#0a0a0a'
  			},
  			pink: {
  				'50': '#dfc8cf',
  				'100': '#ddc0c8',
  				'200': '#E6C4B0',
  				'300': '#d5a5a8',
  				'400': '#9e707c',
  				'900': '#5C4151'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
				'slider-shape': {
					"0%, 100%": {
						borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
						transform: "translate3d(0, 0, 0) rotateZ(0.01deg)",
					},
					"34%": {
						borderRadius: "70% 30% 46% 54% / 30% 29% 71% 70%",
						transform: "translate3d(0, 5px, 0) rotateZ(0.01deg)",
					},
					"50%": {
						transform: "translate3d(0, 0, 0) rotateZ(0.01deg)",
					},
					"67%": {
						borderRadius: "100% 60% 60% 100% / 100% 100% 60% 60%",
						transform: "translate3d(0, -3px, 0) rotateZ(0.01deg)",
					},
				},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
				'slider-shape': "slider-shape 5s linear infinite"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
