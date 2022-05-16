import React, { PropsWithChildren } from "react";

type ErrorBoundaryProps = React.PropsWithChildren<{
    // optional property just so we can see what it looks like in storybook
    alwaysShowError?: boolean;
    fallbackComponent?: React.ReactNode;
    containerComponent?: React.ComponentType<PropsWithChildren<{}>>

}>;


const DEFAULT_FALLBACK = <div style={{
    border: "solid 1px red",
    color: "red"
}}>
    SORRY SOMETHING WENT WRONG
</div>;


const DEFAULT_CONTAINER = (props: React.PropsWithChildren<{}>) => {

    const { children } = props;
    return <div>
        {children}
    </div>
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    { hasError: boolean }
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = { hasError: props.alwaysShowError || false };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error(error, errorInfo);
        // Any error reporting here
    }

    render() {

        const Container = this.props.containerComponent || DEFAULT_CONTAINER;

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Container>
                    {this.props.fallbackComponent || DEFAULT_FALLBACK}
                </Container>
            );
        }


        return <Container>{this.props.children}</Container>
    }
}

