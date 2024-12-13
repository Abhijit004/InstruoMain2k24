import React from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { createStyles } from "antd-style";

const useStylePrimary = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
        &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
            border-width: 0;

            > span {
                position: relative;
            }

            &::before {
                content: "";
                background: linear-gradient(135deg, var(--darkblue), var(--purple));
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


const useStyleSecondary = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
        &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
            border-width: 0;
            color: var(--purple);

            > span {
                position: relative;
            }

            &::before {
                content: "";
                background: #fff;
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


const CustomButton = ({text, variant='primary', ...props}) => {
    const { styles } = variant==='secondary'?useStyleSecondary():useStylePrimary();
	// console.log(styles)
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
