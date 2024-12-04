//import abiJSON from '../../../contracts/minitoken/solidity/build/contracts/MiniDelegateB1.json' assert {type: 'json'};
const contractAddress = '0xff77D90D6aA12db33d3Ba50A34fB25401f6e4c4F';
const web3 = new Web3('http://127.0.0.1:8645');
const farfe = await fetch('../../../contracts/minitoken/solidity/build/contracts/MiniDelegateB1.json')
const abiJSON = await farfe.json();
//////

const pokemonSelect = document.getElementById('pokemon-select');
const pokemonImage = document.getElementById('pokemon-image');
const evolveBtn = document.getElementById('evolve-btn');
var selectedPokemon = '';
/////////////////////////

pokemonSelect.addEventListener('change', (event) => {
    selectedPokemon = event.target.value;
    if (selectedPokemon == '') {
        pokemonImage.src = './images/Cacnea_NB.gif';
    } else {
        pokemonImage.src = `./images/${selectedPokemon}_NB.gif`;
        console.log('Contract noooo:', abiJSON.contractName);
    }



evolveBtn.addEventListener('click', async () => {
    try {
       // const MiniMessage = artifacts.require("MiniMessage");
        const accounts = await web3.eth.getAccounts();
        const userAccount  = accounts[0];
        const abicontent = abiJSON.abi;
        const contract = new web3.eth.Contract(abicontent, contractAddress);

        await contract.methods.sendTransfer(selectedPokemon, userAccount,
                     "transfer", "channel-0", 0).send({
                         from: userAccount, gas: '1000000', gasPrice:1000000000 });
        // Assuming MiniDelegateCallB1 contract is deployed and contractInstance is defined
        const delay = ms => new Promise(res => setTimeout(res, ms));
            console.log("Waiting...");
            pokemonImage.src = `./images/trade.gif`;
            await delay(25000);
            console.log("Trade finished");
//CACNEA 
        var evolution = await contract.methods.balanceOf(userAccount).call()

        console.log('El pokemon es ', evolution);

        pokemonImage.src = `./images/${evolution}_NB.gif`;

    
    } catch (error) {
        console.error('Evolution failed:', error);
        // Handle error, show error message, etc.
    }
});
});