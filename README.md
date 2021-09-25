# dApps

A lerna monorepo with sample dApps for JUNO contracts that use CosmJS frontend SDK and the local logic and design packages.

[This repo is a fork of cosmwasm dApps](https://github.com/CosmWasm/dApps)

## Packages

### Logic

[[code]](https://github.com/CosmWasm/dApps/tree/master/packages/logic)

Library with logic utilities that is used as a dependency in the rest of the packages.

### Design

[[code]](https://github.com/CosmWasm/dApps/tree/master/packages/design)

Library with theming utilities and reusable React components that is used as a dependency in the dApps.

### Create React App template

[[code]](https://github.com/CosmWasm/dApps/tree/master/packages/cra-template)

Custom template for creating a React app preloaded with the logic and design packages.

### Name service

[[code]](https://github.com/CosmWasm/dApps/tree/master/packages/name-service)
[[deployment]](https://dapps.cosmwasm.com/names)

dApp that allows for the purchase and transferral of names in contracts of a configured code ID.

### Native wallet

[[code]](https://github.com/CosmWasm/dApps/tree/master/packages/wallet)
[[deployment]](https://dapps.cosmwasm.com/wallet)

dApp that allows the user to send native tokens to an address.

### CW20 wallet

[[code]](https://github.com/CosmWasm/dApps/tree/master/packages/cw20-wallet)
[[deployment]](https://dapps.cosmwasm.com/cw20-wallet)

dApp that allows the user to send CW20 tokens to an address.
