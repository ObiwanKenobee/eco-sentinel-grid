
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
        // EcoSentinel custom colors
        ecosentinel: {
          green: {
            50: '#E6F4EA',
            100: '#CEEAD6',
            200: '#A8DAB5',
            300: '#81C995',
            400: '#5BB974',
            500: '#34A853',  // primary green
            600: '#2D9248',
            700: '#27803F',
            800: '#206D35',
            900: '#1A5C2C',
          },
          blue: {
            50: '#E8F4FD',
            100: '#D2E9FC',
            200: '#A6D4F9',
            300: '#79BEF6',
            400: '#4DA9F3',
            500: '#2094F0',  // primary blue
            600: '#1C83D6',
            700: '#1871BC',
            800: '#1460A2',
            900: '#104F88',
          },
          earth: {
            100: '#F7F3ED',
            200: '#EFE7DC',
            300: '#DECFB8',
            400: '#CDB694',
            500: '#BC9E70',  // earth tone
          },
          alert: {
            red: '#EA4335',    // danger/critical alert
            yellow: '#FBBC04', // warning alert
            orange: '#F97316'  // medium priority alert
          }
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
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pattern-dots': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
