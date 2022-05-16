import React from 'react';
import { Panel } from './Panel';
import { ErrorBoundary } from './SmallErrorBoundary';
import { withErrorBoundary, withErrorBoundary2 } from './withErrorBoundary';

export type SomeFlakeyComponentProps = {

    shouldErrorOnClick: boolean;
};

type Foo = {
    value: string;
}

const fallback = (<div> this is a container error</div >);

export const SomeFlakeyComponent3 = withErrorBoundary2((props: SomeFlakeyComponentProps) => {


    const { shouldErrorOnClick } = props;

    const [foo, setFoo] = React.useState({
        value: "hello"
    });





    return (
        <Panel>

            <h3>Some flakey component 3</h3>

            <p>
                Fully fledged HOC solution
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

        </Panel>
    );
}, Panel, fallback);
