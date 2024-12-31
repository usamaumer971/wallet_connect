import { http, createConfig, injected, reconnect } from '@wagmi/core'
import {  mainnet, polygon, sepolia } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected()
  ],
  transports: {
    [mainnet.id]: http('https://mainnet.infura.io/v3/23c1ad48e1b5431c808db7e7fffada88'),
    [sepolia.id]: http(),
  },
})
reconnect(config)