import { Button } from "@chakra-ui/react";
import React, { memo, ReactNode, VFC } from "react";

type Props = {
    name: string;
    loading?: boolean;
    disabled?: boolean;
    onClick: () => void;
    children: ReactNode;
}
export const CompletedButton: VFC<Props> = memo((props) => {
    const { name, children, onClick, disabled = false, loading = false } = props;
    return (
        <Button name={name} onClick={onClick} isLoading={loading} disabled={disabled || loading} m={2}  _hover={{ color: "gray.50", bg: "blue.400" }}>{children}</Button>
    );
});
