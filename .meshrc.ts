import {Config} from "@graphql-mesh/types/typings/config";

const config: Config = {
  "sources": [
    {
      "name": "Api",
      "handler": {
        "graphql": {
          "endpoint": "https://graphql-pokemon2.vercel.app",
        }
      },
    },
  ],
};

export default config;
