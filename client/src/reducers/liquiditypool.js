import { constantProduct } from '../calculatedProps';

let getDefaultState = () => ({
    assets: [
        {
            ticker: "ETH",
            price: 780,
            count: 1000
        },
        {
            ticker: "DAI",
            price: 1,
            count: 100 * 1000
        }
    ],
    history: [{
        name: "Init Pool",
        currentEthPrice: 100
    }]
});

export default (state = getDefaultState(), action) => {
    const prod = constantProduct(state);
    let newState = { ...state };

    switch (action.type) {
        case 'buy':
            newState.assets[0].count = newState.assets[0].count - action.payload.count;
            newState.assets[1].count = prod / newState.assets[0].count;
            newState.history.push({
                name: "Buy",
                currentEthPrice: newState.assets[1].count / newState.assets[0].count
            });
            return newState;
        case 'sell':
            newState.assets[0].count = newState.assets[0].count + action.payload.count;
            newState.assets[1].count = prod / newState.assets[0].count;
            newState.history.push({
                name: "Sell",
                currentEthPrice: newState.assets[1].count / newState.assets[0].count
            });

            return newState;
        case 'clear': 
            return getDefaultState();
        default:
            return state;
    }
}