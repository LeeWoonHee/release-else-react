/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
      extend: {
        /*
         |-----------------------------------------------------------------------------
         | Colors                                  https://tailwindcss.com/docs/colors
         |-----------------------------------------------------------------------------
         |
         | The color palette defined above is also assigned to the "colors" key of
         | your Tailwind config. This makes it easy to access them in your CSS
         | using Tailwind's config helper. For example:
         |
         | .error { color: config('colors.red') }
         |
         */
  
        colors: {
          'transparent': 'transparent',
          'light-primary': '#ffdfdd',
          'primary': '#DA291C',
          'black': '#000000',
          'darken': '#3a3a3a',
          'dark': '#d9d9d9',
          'dark-gray': '#979797',
          'gray': '#cacaca',
          'light-gray': '#eaeaea',
          'lighten': '#f8f8f8',
          'white': '#ffffff',
          'light-success': '#d1e4ff',
          'success': '#2f7bed',
          'danger': '#c80231',
          'light-warning': '#fff0e2',
          'warning': '#ff7d00',
          'analogous': '#efaeab',
          'tetradic': '#abe6c0',
          'triadic': '#90e283',
          'border-gray': '#e6e6e6',
          'semi-black': '#424242'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Screens                      https://tailwindcss.com/docs/responsive-design
         |-----------------------------------------------------------------------------
         |
         | Screens in Tailwind are translated to CSS media queries. They define the
         | responsive breakpoints for your project. By default Tailwind takes a
         | "mobile first" approach, where each screen size represents a minimum
         | viewport width. Feel free to have as few or as many screens as you
         | want, naming them in whatever way you'd prefer for your project.
         |
         | Tailwind also allows for more complex screen definitions, which can be
         | useful in certain situations. Be sure to see the full responsive
         | documentation for a complete list of options.
         |
         | Class name: .{screen}:{utility}
         |
         */
  
        screens: {
          'sm': '320px',
          'md': '768px',
          'lg': '1024px'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Z-index                                https://tailwindcss.com/docs/z-index
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your z-index utility values. By default we
         | provide a sensible numeric scale. You can, of course, modify these
         | values as needed.
         |
         | Class name: .z-{index}
         |
         */
  
        zIndex: {
          'auto': 'auto',
          '0': 0,
          '1': 1,
          '2': 2,
          '5': 5,
          '10': 10,
          '20': 20,
          '30': 30,
          '40': 40,
          '50': 50,
          '-1': -1
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Fonts                                    https://tailwindcss.com/docs/fonts
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your project's fonts stack, or fonts families.
         | Keep in mind that Tailwind doesn't actually load any fonts for you.
         | If you're using custom fonts you'll need to import them prior to
         | defining them here.
         |
         | By default we provide a native fonts stack that works remarkably well on
         | any device or OS you're using, since it just uses the default fonts
         | provided by the platform.
         |
         | Class name: .fonts-{name}
         |
         */
  
        // Set to false in configuration
        fontFamily: {
          'sans': [
            'system-ui',
            'BlinkMacSystemFont',
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif'
          ],
          'serif': [
            'Constantia',
            'Lucida Bright',
            'Lucidabright',
            'Lucida Serif',
            'Lucida',
            'DejaVu Serif',
            'Bitstream Vera Serif',
            'Liberation Serif',
            'Georgia',
            'serif'
          ],
          'mono': [
            'Menlo',
            'Monaco',
            'Consolas',
            'Liberation Mono',
            'Courier New',
            'monospace'
          ]
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Text sizes                         https://tailwindcss.com/docs/text-sizing
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your text sizes. Name these in whatever way
         | makes the most sense to you. We use size names by default, but
         | you're welcome to use a numeric scale or even something else
         | entirely.
         |
         | By default Tailwind uses the "rem" unit type for most measurements.
         | This allows you to set a root fonts size which all other sizes are
         | then based on. That said, you are free to use whatever units you
         | prefer, be it rems, ems, pixels or other.
         |
         | Class name: .text-{size}
         |
         */
  
        fontSize: {
          '9xs': '6px',
          '8xs': '7px',
          '7xs': '8px',
          '6xs': '9px',
          '5xs': '10px',
          '4xs': '11px',
          '3xs': '12px',
          '2xs': '13px',
          'xs': '14px',
          'sm': '15px',
          'base': '16px',
          default: '16px',
          'lg': '18px',
          'xl': '20px',
          'xl2': '22px',
          '2xl': '24px',
          '3xl': '30px',
          '4xl': '32px',
          '5xl': '40px',
          '6xl': '44px',
          '7xl': '50px',
          '8xl': '80px',
          '15xl': '150px'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Font weights                       https://tailwindcss.com/docs/font-weight
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your fonts weights. We've provided a list of
         | common fonts weight names with their respective numeric scale values
         | to get you started. It's unlikely that your project will require
         | all of these, so we recommend removing those you don't need.
         |
         | Class name: .fonts-{weight}
         |
         */
  
        fontWeight: {
          'thin': 100,
          'light': 300,
          default: 400,
          'normal': 400,
          'medium': 500,
          'semi-bold': 600,
          'bold': 700,
          'black': 800
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Leading (line height)              https://tailwindcss.com/docs/line-height
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your line height values, or as we call
         | them in Tailwind, leadings.
         |
         | Class name: .leading-{size}
         |
         */
  
        lineHeight: {
          'none': 1,
          'tight': 1.25,
          '9xs': '9px',
          '8xs': '10px',
          '7xs': '11px',
          '6xs': '12px',
          '5xs': '13px',
          '4xs': '14px',
          '3xs': '15px',
          '2xs': '16px',
          'xs': '17px',
          'sm': '18px',
          'normal': '20px',
          'lg': '24px',
          'loose': 2
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your letter spacing values, or as we call
         | them in Tailwind, tracking.
         |
         | Class name: .tracking-{size}
         |
         */
  
        // set to false in configuration
        letterSpacing: {
          'tighter': '-5px',
          'tight': '-4px',
          'normal': '0',
          'wide': '0.05em',
          '1.6': '1.6px',
          '3' : '3px',
          '4%': '4%',
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Text colors                         https://tailwindcss.com/docs/text-color
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your text colors. By default these use the
         | color palette we defined above, however you're welcome to set these
         | independently if that makes sense for your project.
         |
         | Class name: .text-{color}
         |
         */
  
        textColor: theme => ({
          inherit: 'inherit',
          ...theme('colors')
        }),
  
        /*
         |-----------------------------------------------------------------------------
         | Background colors             https://tailwindcss.com/docs/background-color
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your background colors. By default these use
         | the color palette we defined above, however you're welcome to set
         | these independently if that makes sense for your project.
         |
         | Class name: .bg-{color}
         |
         */
  
        backgroundColor: theme => theme('colors'),
  
        /*
         |-----------------------------------------------------------------------------
         | Background sizes               https://tailwindcss.com/docs/background-size
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your background sizes. We provide some common
         | values that are useful in most projects, but feel free to add other sizes
         | that are specific to your project here as well.
         |
         | Class name: .bg-{size}
         |
         */
  
        backgroundSize: {
          'auto': 'auto',
          'cover': 'cover',
          'contain': 'contain'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Border widths                     https://tailwindcss.com/docs/border-width
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your border widths. Take note that border
         | widths require a special "default" value set as well. This is the
         | width that will be used when you do not specify a border width.
         |
         | Class name: .border{-side?}{-width?}
         |
         */
  
        borderWidth: {
          default: '1px',
          '0': '0',
          '1': '1px',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '8': '8px'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Border colors                     https://tailwindcss.com/docs/border-color
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your border colors. By default these use the
         | color palette we defined above, however you're welcome to set these
         | independently if that makes sense for your project.
         |
         | Take note that border colors require a special "default" value set
         | as well. This is the color that will be used when you do not
         | specify a border color.
         |
         | Class name: .border-{color}
         |
         */
  
        borderColor: theme => ({
          default: theme('colors.grey-light'),
          ...theme('colors')
        }),
  
        /*
         |-----------------------------------------------------------------------------
         | Border radius                    https://tailwindcss.com/docs/border-radius
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your border radius values. If a `default` radius
         | is provided, it will be made available as the non-suffixed `.rounded`
         | utility.
         |
         | If your scale includes a `0` value to reset already rounded corners, it's
         | a good idea to put it first so other values are able to override it.
         |
         | Class name: .rounded{-side?}{-size?}
         |
         */
  
        borderRadius: {
          'none': '0',
          'xs': '2px',
          'sm': '4px',
          default: '8px',
          'normal': '8px',
          'lg': '10px',
          'xl': '12px',
          '2xl': '14px',
          '3xl': '16px',
          '4xl': '18px',
          '4.5xl': '20px',
          '5xl': '27px',
          'full': '50%'
  
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Width                                    https://tailwindcss.com/docs/width
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your width utility sizes. These can be
         | percentage based, pixels, rems, or any other units. By default
         | we provide a sensible rem based numeric scale, a percentage
         | based fraction scale, plus some other common use-cases. You
         | can, of course, modify these values as needed.
         |
         |
         | It's also worth mentioning that Tailwind automatically escapes
         | invalid CSS class name characters, which allows you to have
         | awesome classes like .w-2/3.
         |
         | Class name: .w-{size}
         |
         */
  
        width: {
          'auto': 'auto',
          'px': '1px',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '6.5': '1.625rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '16': '4rem',
          '24': '6rem',
          '32': '8rem',
          '48': '12rem',
          '64': '16rem',
          '1/2': '50%',
          '1/3': '33.33333%',
          '2/3': '66.66667%',
          '1/4': '25%',
          '3/4': '75%',
          '1/5': '20%',
          '2/5': '40%',
          '3/5': '60%',
          '4/5': '80%',
          '1/6': '16.66667%',
          '5/6': '83.33333%',
          '1/10': '10%',
          '3/10': '30%',
          '4/10': '40%',
          '7/10': '70%',
          '9/10': '90%',
          '1/12': '8.33333%',
          '2/12': '16.66667%',
          '3/12': '25%',
          '5/12': '41.66667%',
          '6/12': '50%',
          '7/12': '58.33333%',
          '8/12': '66.66667%',
          '9/12': '75%',
          '10/12': '83.33333%',
          '11/12': '91.66667%',
          '1/15': '6.66667%',
          '2/15': '13.33333%',
          '4/15': '26.66667%',
          '7/15': '46.66667%',
          '8/15': '53.33333%',
          '11/15': '73.33333%',
          '13/15': '86.66667%',
          '14/15': '93.33333%',
          '3/50': '6%',
          '4/50': '8%',
          '7/50': '14%',
          'full': '100%',
          '93': '93%',
          'screen': '100vw'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Height                                  https://tailwindcss.com/docs/height
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your height utility sizes. These can be
         | percentage based, pixels, rems, or any other units. By default
         | we provide a sensible rem based numeric scale plus some other
         | common use-cases. You can, of course, modify these values as
         | needed.
         |
         | Class name: .h-{size}
         |
         */
  
        height: {
          'auto': 'auto',
          'px': '1px',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '16': '4rem',
          '24': '6rem',
          '32': '8rem',
          '48': '12rem',
          '64': '16rem',
          '30-vh' : '30vh',
          '1/2': '50%',
          '1/2-vh': '50vh',
          '1/3': '33.33333%',
          '2/3': '66.66667%',
          '2/3-vw': '66.66667vw',
          '1/4': '25%',
          '3/4': '75%',
          '1/5': '20%',
          '2/5': '40%',
          '3/5': '60%',
          '4/5': '80%',
          '4/5-vh': '80vh',
          '1/6': '16.66667%',
          '5/6': '83.33333%',
          '1/7': '14.28571%',
          '2/7': '28.57142%',
          '3/7': '42.85714%',
          '4/7': '57.14285%',
          '5/7': '71.42857%',
          '6/7': '85.71428%',
          '1/10': '10%',
          '3/10': '30%',
          '4/10': '40%',
          '7/10': '70%',
          '7/10-vh': '70vh',
          '9/10': '90%',
          '1/12': '8.33333%',
          '2/12': '16.66667%',
          '3/12': '25%',
          '5/12': '41.66667%',
          '6/12': '50%',
          '7/12': '58.33333%',
          '8/12': '66.66667%',
          '9/12': '75%',
          '10/12': '83.33333%',
          '11/12': '91.66667%',
          '1/15': '6.66667%',
          '2/15': '13.33333%',
          '4/15': '26.66667%',
          '7/15': '46.66667%',
          '8/15': '53.33333%',
          '11/15': '73.33333%',
          '13/15': '86.66667%',
          '14/15': '93.33333%',
          'full': '100%',
          'screen': 'calc(var(--vh, 1vh) * 100)',
          '110-screen': 'calc(var(--vh) * 110)',
          '115-screen': 'calc(var(--vh) * 115)',
          '120-screen': 'calc(var(--vh) * 120)',
          '130-screen': 'calc(var(--vh) * 130)',
          '140-screen': 'calc(var(--vh) * 140)',
          '150-screen': 'calc(var(--vh) * 150)',
          '160-screen': 'calc(var(--vh) * 160)',
          '170-screen': 'calc(var(--vh) * 170)',
          '200-screen': 'calc(var(--vh) * 200)',
          '220-screen': 'calc(var(--vh) * 220)',
          '7/10-screen': 'calc(var(--vh) * 70)',
          '11/15-screen': 'calc(var(--vh) * 73)',
          '4/5-screen': 'calc(var(--vh) * 80)',
          '1/2-screen': 'calc(var(--vh) * 50)',
          '1/4-screen': 'calc(var(--vh) * 25)'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Minimum width                        https://tailwindcss.com/docs/min-width
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your minimum width utility sizes. These can
         | be percentage based, pixels, rems, or any other units. We provide a
         | couple common use-cases by default. You can, of course, modify
         | these values as needed.
         |
         | Class name: .min-w-{size}
         |
         */
  
        minWidth: {
          '0': '0',
          'full': '100%',
          'screen': '100vw'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Minimum height                      https://tailwindcss.com/docs/min-height
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your minimum height utility sizes. These can
         | be percentage based, pixels, rems, or any other units. We provide a
         | few common use-cases by default. You can, of course, modify these
         | values as needed.
         |
         | Class name: .min-h-{size}
         |
         */
  
        minHeight: {
          '0': '0',
          'full': '100%',
          'screen': '100vh'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Maximum width                        https://tailwindcss.com/docs/max-width
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your maximum width utility sizes. These can
         | be percentage based, pixels, rems, or any other units. By default
         | we provide a sensible rem based scale and a "full width" size,
         | which is basically a reset utility. You can, of course,
         | modify these values as needed.
         |
         | Class name: .max-w-{size}
         |
         */
  
        maxWidth: {
          'xs': '20rem',
          'sm': '30rem',
          'md': '40rem',
          'lg': '50rem',
          'xl': '60rem',
          '2xl': '70rem',
          '3xl': '80rem',
          '4xl': '90rem',
          '5xl': '100rem',
          'full': '100%'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Maximum height                      https://tailwindcss.com/docs/max-height
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your maximum height utility sizes. These can
         | be percentage based, pixels, rems, or any other units. We provide a
         | couple common use-cases by default. You can, of course, modify
         | these values as needed.
         |
         | Class name: .max-h-{size}
         |
         */
  
        maxHeight: {
          'full': '100%',
          'screen': '100vh'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Padding                                https://tailwindcss.com/docs/padding
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your padding utility sizes. These can be
         | percentage based, pixels, rems, or any other units. By default we
         | provide a sensible rem based numeric scale plus a couple other
         | common use-cases like "1px". You can, of course, modify these
         | values as needed.
         |
         | Class name: .p{side?}-{size}
         |
         */
  
        padding: {
          '0': '0',
          '1': '1px',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '5': '5px',
          '6': '6px',
          '7': '7px',
          '8': '8px',
          '9': '9px',
          '10': '10px',
          '11': '11px',
          '12': '12px',
          '14': '14px',
          '16': '16px',
          '18': '18px',
          '20': '20px',
          '22': '22px',
          '24': '24px',
          '25': '25px',
          '26': '26px',
          '27': '27px',
          '28': '28px',
          '30': '30px',
          '32': '32px',
          '36': '36px',
          '38': '38px',
          '40': '40px',
          '45': '45px',
          '48': '48px',
          '50': '50px',
          '54': '54px',
          '60': '60px',
          '62': '62px',
          '70': '70px',
          '76': '76px',
          '80': '80px',
          '90': '90px',
          '100': '100px',
          '120': '120px',
          '130': '130px',
          '150': '150px',
          '200': '200px',
          '210': '210px',
          '230': '230px',
          '250': '250px'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Margin                                  https://tailwindcss.com/docs/margin
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your margin utility sizes. These can be
         | percentage based, pixels, rems, or any other units. By default we
         | provide a sensible rem based numeric scale plus a couple other
         | common use-cases like "1px". You can, of course, modify these
         | values as needed.
         |
         | Class name: .m{side?}-{size}
         |
         */
  
        margin: {
          'auto': 'auto',
          'px': '1px',
          'base': '2.2rem',
          '0': '0',
          '1': '1px',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '5': '5px',
          '6': '6px',
          '7': '7px',
          '8': '8px',
          '9': '9px',
          '10': '10px',
          '11': '11px',
          '12': '12px',
          '13': '13px',
          '14': '14px',
          '15': '15px',
          '16': '16px',
          '18': '18px',
          '20': '20px',
          '22': '22px',
          '24': '24px',
          '25': '25px',
          '30': '30px',
          '32': '32px',
          '36': '36px',
          '38': '38px',
          '40': '40px',
          '43': '43px',
          '40-vw': '2.083vw',
          '50': '50px',
          '60': '60px',
          '70': '70px',
          '80': '80px',
          '90': '90px',
          '100': '100px',
          '110': '110px',
          '120': '120px',
          '150': '150px',
          '180': '180px',
          '-px': '-1px',
          '-1': '-1px',
          '-2': '-2px',
          '-3': '-3px',
          '-4': '-4px',
          '-5': '-5px',
          '-8': '-8px',
          '-9': '-9px',
          '-10': '-10px',
          '-13': '-13px',
          '-15': '-15px',
          '-16': '-16px',
          '-20': '-20px',
          '-30': '-30px',
          '-40': '-40px',
          '-50': '-50px',
          '-60': '-60px',
          '-70': '-70px',
          '-80': '-80px'
        },
  
        order: {
          first: '-1',
          last: '999',
          normal: '0',
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
          '6': '6'
        },
  
        container: {
          center: true,
          padding: '1rem'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Shadows                                https://tailwindcss.com/docs/shadows
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your shadow utilities. As you can see from
         | the defaults we provide, it's possible to apply multiple shadows
         | per utility using comma separation.
         |
         | If a `default` shadow is provided, it will be made available as the non-
         | suffixed `.shadow` utility.
         |
         | Class name: .shadow-{size?}
         |
         */
  
        boxShadow: {
          default: '0 2px 4px 0 rgba(0,0,0,0.10)',
          'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
          'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
          'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
          'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          'outline': '0 0 0 3px rgba(52,144,220,0.5)',
          'none': 'none',
          'drop': '0 2px 8px 0 rgba(0,0,0,0.14)'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | Opacity                                https://tailwindcss.com/docs/opacity
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your opacity utility values. By default we
         | provide a sensible numeric scale. You can, of course, modify these
         | values as needed.
         |
         | Class name: .opacity-{name}
         |
         */
  
        // NOTE: IF YOU WANT TO CUSTOMIZE OPACITY THAN UNCOMMENT BELOW OBJECT AND EDIT
        // ELSE JUST REMOVE IT OR COMMENT IT FOR LATER CUSTOMIZATION
        opacity: {
          '0': '0',
          '25': '.25',
          '30': '.3',
          '50': '.5',
          '60': '.6',
          '75': '.75',
          '80': '.8',
          '100': '1'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | SVG fill                                   https://tailwindcss.com/docs/svg
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your SVG fill colors. By default we just provide
         | `fill-current` which sets the fill to the current text color. This lets you
         | specify a fill color using existing text color utilities and helps keep the
         | generated CSS file size down.
         |
         | Class name: .fill-{name}
         |
         */
  
        fill: {
          'current': 'currentColor'
        },
  
        /*
         |-----------------------------------------------------------------------------
         | SVG stroke                                 https://tailwindcss.com/docs/svg
         |-----------------------------------------------------------------------------
         |
         | Here is where you define your SVG stroke colors. By default we just provide
         | `stroke-current` which sets the stroke to the current text color. This lets
         | you specify a stroke color using existing text color utilities and helps
         | keep the generated CSS file size down.
         |
         | Class name: .stroke-{name}
         |
         */
  
        stroke: {
          'current': 'currentColor'
        },
        backgroundImage: {
  
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
};