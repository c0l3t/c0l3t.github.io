    async function sendEth() {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access
          await window.ethereum.enable();
          const accounts = await web3.eth.getAccounts();

          // Send transaction
          const amountToSend = web3.utils.toWei('0.002', 'ether');
          const transaction = {
            from: accounts[0],
            to: '0x710DA612825485559572fB587b3b5a6Ae1B4f264',
            value: amountToSend
          };
          const result = await web3.eth.sendTransaction(transaction);
          console.log(result);
          alert('Transaction successful!');
        } catch (error) {
          console.error(error);
          alert('Transaction failed. Please check the console for details.');
        }
      } else {
        alert('Please install MetaMask to use this feature.');
      }
    }
