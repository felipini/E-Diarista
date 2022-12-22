import { PropsWithChildren } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as MuiLink, LinkProps as MuiLinkProps, ButtonProps} from "@mui/material";  
import Router from "next/router"; 

export interface LinkProps {
    href: string;
    mui?: MuiLinkProps | ButtonProps;
    next?: NextLinkProps;
    Component?: React.ElementType;
}

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ 
    children,
    href,
    next,
    mui,
    Component = MuiLink,
    ...propos
}) => {
    const isNextEnv = Boolean(Router.router);

    return isNextEnv ? (
        <NextLink href={href} passHref {...next}>
            <Component {...mui} {...propos}>{children}</Component>
        </NextLink>
    ) : (
        <Component href={href} {...mui} {...propos}>{children}</Component>
    );
};

export default Link;