module.exports ={
    moduleNameMapper: {
        '\\.css$': '<rootDir>/__mocks__/styleMock.js'
    },
    "preset": "react-native",
    testEnvironment: 'jsdom', 
    "transformIgnorePatterns": [
        "node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|@ui-kitten)"
    ]
}