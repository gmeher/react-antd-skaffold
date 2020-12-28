import React from 'react';
import { Alert } from "antd";

interface RenderMessageProps {
    type: "error" | "info" | "success" | "warning";
    message: string;
    onClose: ()=>void;
}
const RenderMessage: React.FC<RenderMessageProps> = ({type, message,onClose}) => {
    return (
        <Alert
            style={{
            marginBottom: 24,
            }}
            message={message}
            type= {type}
            showIcon
            closable
            onClose={onClose}
        />
    )
}


export default RenderMessage;