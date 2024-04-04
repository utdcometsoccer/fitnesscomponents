import { OneRepMaxAction } from "./OneRepMaxAction";
import { OneRepMaxState } from "./OneRepMaxState";

export function OneRepMaxReducer(state: OneRepMaxState, action: OneRepMaxAction): OneRepMaxState{
    const newState: OneRepMaxState = {...state};
    newState.repetitions = action.repetitions ?? state.repetitions;
    newState.weight = action.weight ?? state.weight;
    newState.selectedCalculator = action.selectedCalculator ?? state.selectedCalculator;
    newState.oneRepMax = newState.selectedCalculator.calculate({weight: newState.weight, repetitions: newState.repetitions});
    return newState;    
}