module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height: {
                '100': '25rem',
                '104': '26rem',
                '108': '27rem',
                '112': '28rem',
                '116': '29rem',
                '120': '30rem',
                '124': '31rem',
                '128': '32rem',
                '136': '34rem',
                '140': '35rem',
                '144': '36rem',
                '152': '38rem',
                '160': '40rem',
                '176': '44rem',
                '184': '46rem',
                '192': '48rem'
            },
            brightness: {
                60: '.60',
                65: '.65',
                70: '.70'
            }
        },
    },
    plugins: [],
}