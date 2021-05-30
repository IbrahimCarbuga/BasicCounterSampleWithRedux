import * as actiyonTypes from "./actionTypes";

export const increaseCounter = () => ({
    type:actiyonTypes.INCREASE_COUNTER,
    payload:1
});

export const decreaseCounter = () => ({
    type:actiyonTypes.DECREASE_COUNTER,
    payload:1
});

export const increaseByTwoCounter = () => ({
    type:actiyonTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
});
