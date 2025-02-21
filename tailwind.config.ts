import { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {}
		},
		extend: {
			screens: {
				xs: '480px'
			},
			maxWidth: {
				'8xl': '90rem'
			},
			fontFamily: {
				josefinSans: [
					'Josefin Sans',
					'sans-serif'
				],
				dancingScript: [
					'Dancing Script',
					'sans-serif'
				],
				italiana: [
					'Italiana',
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
					'900': '#171717'
				},
				pink: {
					'50': '#fdf2f6',
					'100': '#f8dae4',
					'200': '#f2b9cf',
					'300': '#eb98b9',
					'400': '#e479a3',
					'500': '#A35C7A',
					'600': '#8d4f68',
					'700': '#763f55',
					'800': '#5e3244',
					'900': '#472532'
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
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
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
					'0%, 100%': {
						borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
						transform: 'translate3d(0, 0, 0) rotateZ(0.01deg)'
					},
					'34%': {
						borderRadius: '70% 30% 46% 54% / 30% 29% 71% 70%',
						transform: 'translate3d(0, 5px, 0) rotateZ(0.01deg)'
					},
					'50%': {
						transform: 'translate3d(0, 0, 0) rotateZ(0.01deg)'
					},
					'67%': {
						borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%',
						transform: 'translate3d(0, -3px, 0) rotateZ(0.01deg)'
					}
				},
				'scroll-linear-right': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0%)'
					}
				},
				'scroll-linear-left': {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slider-shape': 'slider-shape 5s linear infinite',
				'scroll-linear-right': 'scroll-linear-right 80s linear infinite',
				'scroll-linear-left': 'scroll-linear-left 80s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

export default config;