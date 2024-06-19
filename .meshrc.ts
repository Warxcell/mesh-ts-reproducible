import {Config} from "@graphql-mesh/types/typings/config";

const config: Config = {
  "sources": [
    {
      "name": "Api",
      "handler": {
        "graphql": {
          "endpoint": "https://anilist.co/graphiql",
        }
      },
    },
  ],
};

export default config;
