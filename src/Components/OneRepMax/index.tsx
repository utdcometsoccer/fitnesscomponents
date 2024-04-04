import { 
    AdamsOneRepMaxCalculator,
    BaechleOneRepMaxCalculator,
    BergerOneRepMaxCalculator,
    BrownOneRepMaxCalculator,
    BrzyckiOneRepMaxCalculator,
    EpleyOneRepMaxCalculator,
    KemmlerOneRepMaxCalculator,
    LandersOneRepMaxCalculator,
    LombardiOneRepMaxCalculator,
    MayhewOneRepMaxCalculator,
    NaclerioOneRepMaxCalculator,
    OConnerOneRepMaxCalculator,
    OneRepMaxCalculator,
    WalthenOneRepMaxCalculator } from '@idahoedokpayi/onerepmax';
import { FC, useReducer } from 'react';
import { OneRepMaxState } from './OneRepMaxState';
import { OneRepMaxReducer } from './OneRepMaxReducer';
import { OneRepMaxActionEnum } from './OneRepMaxActionEnum';
import { OneRepMaxComponentProps } from './props';

export const OneRepMaxComponent: FC<OneRepMaxComponentProps> = ({className, ref}) => {
    const calculators: OneRepMaxCalculator[] = [
        new AdamsOneRepMaxCalculator(),
        new BaechleOneRepMaxCalculator(),
        new BergerOneRepMaxCalculator(),
        new BrownOneRepMaxCalculator(),
        new BrzyckiOneRepMaxCalculator(),
        new EpleyOneRepMaxCalculator(),
        new KemmlerOneRepMaxCalculator(),
        new LandersOneRepMaxCalculator(),
        new LombardiOneRepMaxCalculator(),
        new MayhewOneRepMaxCalculator(),
        new NaclerioOneRepMaxCalculator(),
        new OConnerOneRepMaxCalculator(),
        new WalthenOneRepMaxCalculator()
    ];
    const oneRepMaxInitialState: OneRepMaxState = {
        weight: 0,
        repetitions: 0,
        oneRepMax: 0,
        calculators: calculators,
        selectedCalculator: calculators[0]
    };
    const [state, dispatch] = useReducer(OneRepMaxReducer, oneRepMaxInitialState);
    const { oneRepMax, selectedCalculator } = state;
    return <div className={className} ref={ref}>
        <h1>One Rep Max</h1>
        <form>
            <label htmlFor='weight'> Weight </label>
            <input type='number' id='weight' name='weight' onChange={(e) => dispatch({ type: OneRepMaxActionEnum.weightChange, weight: +e.target.value })} />
            <label htmlFor='repetitions'>Repetitions</label>
            <input type='number' id='repetitions' name='repetitions' onChange={(e) => dispatch({ type: OneRepMaxActionEnum.repetitionsChange, repetitions: +e.target.value })} />
            <select name='calculators' id='calculators' onChange={(e) => dispatch({ type: OneRepMaxActionEnum.calculatorSelection, selectedCalculator: calculators.filter((c) => c.name === e.target.value)[0] })}>
                {
                    calculators.map((c: OneRepMaxCalculator, i: number) => <option value={c.name} key={`calculator${i}`}> {c.name} </option>)
                }
            </select>
        </form>
        <span> {`Your one repetition maximum: ${oneRepMax} calculated using the ${selectedCalculator.name} formula`}</span>
    </div>;
};

