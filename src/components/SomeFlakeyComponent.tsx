import React from 'react';
import { Panel } from './Panel';
import { ErrorBoundary } from './SmallErrorBoundary';

export type SomeFlakeyComponentProps = {

    shouldErrorOnClick: boolean;
};

type Foo = {
    value: string;
}

export const SomeFlakeyComponent = (props: SomeFlakeyComponentProps) => {


    const { shouldErrorOnClick } = props;

    const [foo, setFoo] = React.useState({
        value: "hello"
    });




    return (
        <Panel>
            <ErrorBoundary>
                <h3>Some flakey component 1</h3>
                <p>
                    I don't like this approach as an error blows up the whole application. 
                    The error boundary in this component isn't used as the error does not occur inside of it.
                </p>
                shouldErrorOnClick?: {`${shouldErrorOnClick}`}
            <br />
                <button onClick={() => {
                    if (shouldErrorOnClick) {

                        //@ts-ignore - this is intentional
                        setFoo(null);
                    }
                    else {
                        setFoo({
                            value: `${Math.random()}`
                        })
                    }
                }}>Click me</button>
                {foo.value}

            </ErrorBoundary>
        </Panel>
    );
};
