import { OneRepMaxCalculator } from "@idahoedokpayi/onerepmax";

export interface OneRepMaxState{
    weight: number;
    repetitions: number;
    oneRepMax: number;
    calculators: OneRepMaxCalculator[];
    selectedCalculator: OneRepMaxCalculator;
}