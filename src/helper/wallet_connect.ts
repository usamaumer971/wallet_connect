import { createAppKit } from '@reown/appkit'
import { mainnet, arbitrum, sepolia, polygon } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 1. Get a project ID at https://cloud.reown.com
const projectId = '1e88af4110124eaa0e8e6805ba494a5f'

export const networks = [mainnet, sepolia, polygon, arbitrum]

// 2. Set up Wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

// 3. Configure the metadata
const metadata = {
  name: 'Elmonx',
  description: 'Elmonx',
  url: 'https://wallet-connect-sand.vercel.app/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, sepolia, polygon, arbitrum],
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default modal