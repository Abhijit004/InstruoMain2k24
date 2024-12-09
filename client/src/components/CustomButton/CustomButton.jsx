import React from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { createStyles } from "antd-style";
const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
        &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
            border-width: 0;

            > span {
                position: relative;
            }

            &::before {
                content: "";
                background: linear-gradient(135deg, #2D76FF, #50379B);
                position: absolute;
                inset: 0;
                opacity: 1;
                transition: all 0.3s;
                border-radius: inherit;
            }

            &:hover::before {
                opacity: 0.5
            }
        }
    `,
}));
const CustomButton = ({text, ...props}) => {
    const { styles } = useStyle();
	console.log(styles)
    return (
        <ConfigProvider
            button={{
                className: styles.linearGradientButton,
            }}
        >
                <Button type="primary" size="large" {...props}>
                    {text}
                </Button>
        </ConfigProvider>
    );
};
export default CustomButton;
