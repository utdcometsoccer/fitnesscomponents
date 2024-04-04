import { Ref } from "react";

export interface BaseProps<T>{
    className?: string;
    ref?: Ref<T>;
}