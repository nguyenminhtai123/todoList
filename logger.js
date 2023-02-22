export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log('PrevState: ', prevState);
        console.log('Action Argument: ', args);
        const nextState = reducer(prevState, action, args);
        console.log('NextState: ', nextState);
        console.groupEnd(action);
        return nextState
    }
}