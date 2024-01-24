import React from 'react'

export const Exercise9 = () => {
    // Crear jest.config.ts

    // import nextJest from "next/jest.js";
    // const createJestConfig = nextJest({
    //   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    //   dir: "./",
    // });
    // // Add any custom config to be passed to Jest
    // /** @type {import('jest').Config} */
    // const config = {
    //   // Add more setup options before each test is run
    //   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    //   testEnvironment: "jest-environment-jsdom",
    //   preset: "ts-jest",
    // };
    // // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
    // export default createJestConfig(config);

    // Crear jest.setup.js
    //import '@testing-library/jest-dom'


    // Modificar tsconfig.json
    //  "paths": {
    //      "@/*": ["./src/*"]
    //    },
    //    "types": ["node", "jest", "@testing-library/jest-dom"]

    return (
        <div>AYUDA:
            <ul>
                <li>npm i -D jest jest-environment-jsdom @testing-library/jest-dom @testing-library/react</li>
                <li>npm i -D ts-jest</li>
                <li>npm i -D ts-node</li>
                <li>npm i --save-dev @types/jest</li>
            </ul>
        </div>
    )
}
