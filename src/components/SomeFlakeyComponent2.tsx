import React from 'react';
import { Panel } from './Panel';
import { ErrorBoundary } from './SmallErrorBoundary';
import { withErrorBoundary } from './withErrorBoundary';

export type SomeFlakeyComponentProps = {

    shouldErrorOnClick: boolean;
};

type Foo = {
    value: string;
}

export const SomeFlakeyComponent2 = withErrorBoundary((props: SomeFlakeyComponentProps) => {


    const { shouldErrorOnClick } = props;

    const [foo, setFoo] = React.useState({
        value: "hello"
    });


    return (
        <Panel>

<h3>Some flakey component 2</h3>


shouldErrorOnClick?: {`${shouldErrorOnClick}`}
            <br />

            <p>
            This approach is fine, except that we now lose the original panel. 
                </p>

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

        </Panel>
    );
});
