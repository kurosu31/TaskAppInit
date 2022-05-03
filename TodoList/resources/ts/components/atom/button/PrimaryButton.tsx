import { Button } from "@chakra-ui/react";
import React, { memo, ReactNode, VFC } from "react";

type Props = {
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    children: ReactNode;
}
export const PrimaryButton: VFC<Props> = memo((props) => {
    const { children, onClick, disabled = false, loading = false } = props;
    return (
        <Button onClick={onClick} isLoading={loading} disabled={disabled} m={2} _hover={{ color: "gray.50", bg: "blue.400" }}>{children}</Button>
    );
});
