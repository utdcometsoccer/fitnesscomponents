import { OneRepMaxCalculator } from "@idahoedokpayi/onerepmax";
import { OneRepMaxActionEnum } from "./OneRepMaxActionEnum";

export interface OneRepMaxAction{    
    repetitions?: number;      
    selectedCalculator?: OneRepMaxCalculator;
    type: OneRepMaxActionEnum;
    weight?: number;    
}