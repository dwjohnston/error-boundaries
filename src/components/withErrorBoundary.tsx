import { ReadPosition } from "fs"
import React, { PropsWithChildren } from "react"
import { ErrorBoundary } from "./SmallErrorBoundary"

export const withErrorBoundary = <T,>(Component: React.ComponentType<T>) => (props: T) => {
    return <ErrorBoundary>
        <Component {...props} />
    </ErrorBoundary>
}


export const withErrorBoundary2 = <T,>(Component: React.ComponentType<T>, Container: React.ComponentType<PropsWithChildren<{}>>, fallback: React.ReactNode) => (props: T) => {
    return <ErrorBoundary containerComponent={Container} fallbackComponent={fallback}>
        <Component {...props} />
    </ErrorBoundary>
}