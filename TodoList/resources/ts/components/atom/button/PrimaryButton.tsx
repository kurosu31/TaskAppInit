import { Button } from "@chakra-ui/react";
import React, { memo, ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
}
export const PrimaryButton: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <Button m={2} _hover={{ color: "gray.50", bg: "blue.400" }}>{children}</Button>
    );
});
