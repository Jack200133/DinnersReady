module.exports ={
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$': '<rootDir>/__mocks__/styleMock.js'
    },
    "preset": "react-native",
    testEnvironment: 'jsdom', 
    "transformIgnorePatterns": [
        "node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|@ui-kitten)"
    ],
    "collectCoverageFrom": ["./tests/AppTest/**" , "./components/NavSearch/**", "./components/PubItem/**", "./views/App.js"
                                , "./views/LogIn.js", "./views/recipe.js", "./views/HomeAlacena.js"],
}