import { Decorator } from '@storybook/react';
import { ComponentProps } from 'react';
import { FC } from 'react';
export declare const createStorybookVariant: <T extends FC>(defaultArgs: ComponentProps<T>) => (additionalArgs?: Partial<ComponentProps<T>>, decorators?: Decorator[]) => {
    args: ComponentProps<T> & Partial<ComponentProps<T>>;
    decorators: Decorator[];
};
