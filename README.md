# Token Registry

## Submit token

- Fork a repository
- Create a new folder in `tokens/${env}/${tokenType}/`
  - `ibc`: named the folder with **denom without `ibc/` prefix**
  - `cw20`: named the folder with **contract address**
- This folder requires 2 files:

  - `info.json`

    ```json
      {
        // Common token info
        "name": "Serenity Coin",
        "decimals": 6,
        "description": "Aura Token for the Serenity Chain", 

        // For cw20 token
        "symbol": "AURA",
        "totalSupply": "10000000000",
        "website": "https://aura.network/",
        "whitePaper": "",
        "socialUrl": {  
          "twitter": "https://twitter.com/AuraNetworkHQ",
          "telegram": "https://t.me/AuraNetworkOfficial",
          "linkedIn": "https://www.linkedin.com/company/auranetwork/",
          "github": "https://github.com/aura-nw"
        }

        // For ibc token
        "coinDenom": "aura",
        "minCoinDenom": "uaura",
        "cosmosDenom": "ibc/40CA5EF447F368B7F2276A689383BE3C427B15395D4BF6639B605D36C0846A20",
        "channel": "channel-2"
      }
    ```

  - `token.png`: Must be `png`, `transparent-background` and `256 x 256px`

- Submit [a new Pull Request](https://github.com/aura-nw/token-registry/pulls)

## How to use

### 1. Get tokens config

- [Mainnet - Xstaxy](https://aura-nw.github.io/token-registry/xstaxy-1.json)

  `https://aura-nw.github.io/token-registry/xstaxy-1.json`

- [Testnet - Euphoria](https://aura-nw.github.io/token-registry/euphoria-2.json)

  `https://aura-nw.github.io/token-registry/euphoria-2.json`

- [Testnet - Serenity](https://aura-nw.github.io/token-registry/serenity-testnet-001.json)

  `https://aura-nw.github.io/token-registry/serenity-testnet-001.json`

- [Testnet - Devnet](https://aura-nw.github.io/token-registry/aura-testnet-2.json)

  `https://aura-nw.github.io/token-registry/aura-testnet-2.json`

### 2. Get the token icon

  `https://aura-nw.github.io/token-registry/images/${token.icon}`
