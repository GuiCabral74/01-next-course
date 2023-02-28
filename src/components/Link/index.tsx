// Making an SPA navigate component for project.

import NextLink from 'next/link'
export default function Link({href, children, ...props}){
    return (
        // Remember to use legacyBehavior: To be able to use the "a" tag in the Next's Link in the newest versions.
        <NextLink href={href} legacyBehavior>
            <a {...props}>{children}</a>
        </NextLink>
    );
}