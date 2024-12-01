"use client"
import { mainnet, sepolia } from "@starknet-react/chains";
import {
  type Connector,
  StarknetConfig,
  publicProvider,
  useAccount,
  
  useConnect,
  useNetwork,
} from "@starknet-react/core";
import {
  type StarknetkitConnector,
  useStarknetkitConnectModal,
  
} from "starknetkit";
import { Button } from "./ui/button";
import { availableConnectors } from "@/lib/argentX";



export default function StarknetKit() {
        return (
          <StarknetProvider>
            <StarknetKitInner />
          </StarknetProvider>
        );
        }
        
        /** This Demo is for experimental purpose only, will be removed later */
function StarknetKitInner() {
        const { connectAsync, connectors } = useConnect();
        const { starknetkitConnectModal } = useStarknetkitConnectModal({
          connectors: availableConnectors as StarknetkitConnector[],
        });
const { address, chainId, account } = useAccount();

// function to connect to a wallet via starknetkit modal
async function connectWalletWithModal() {
  const { connector } = await starknetkitConnectModal();
  if (!connector) {
    return;
  }
  await connectAsync({ connector: connector as Connector });
}

// function to connect to a wallet via starknetkit connector
async function connectWalletWithConnector(connector: Connector) {
  await connectAsync({ connector });
}

return (
  <div>
    <div className="">
      

      <Button className="w-auto overflow-hidden" onClick={connectWalletWithModal}>{address?address:"Connect Wallet"}</Button>

    </div>
  </div>
);
}

function StarknetProvider({ children }: { children: React.ReactNode }) {
const chains = [sepolia, mainnet];
const provider = publicProvider();

return (
  <StarknetConfig
    chains={chains}
    provider={provider}
    connectors={availableConnectors}
  >
    <div className="">
      <div className="">{children}</div>
    </div>
  </StarknetConfig>
);
}
